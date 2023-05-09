# SDK

## Overview

The AWS IoT 1-Click Projects API Reference

Amazon Web Services documentation
<https://docs.aws.amazon.com/iot1click/>
### Available Operations

* [AssociateDeviceWithPlacement](#associatedevicewithplacement) - Associates a physical device with a placement.
* [CreatePlacement](#createplacement) - Creates an empty placement.
* [CreateProject](#createproject) - Creates an empty project with a placement template. A project contains zero or more placements that adhere to the placement template defined in the project.
* [DeletePlacement](#deleteplacement) - <p>Deletes a placement. To delete a placement, it must not have any devices associated with it.</p> <note> <p>When you delete a placement, all associated data becomes irretrievable.</p> </note>
* [DeleteProject](#deleteproject) - <p>Deletes a project. To delete a project, it must not have any placements associated with it.</p> <note> <p>When you delete a project, all associated data becomes irretrievable.</p> </note>
* [DescribePlacement](#describeplacement) - Describes a placement in a project.
* [DescribeProject](#describeproject) - Returns an object describing a project.
* [DisassociateDeviceFromPlacement](#disassociatedevicefromplacement) - Removes a physical device from a placement.
* [GetDevicesInPlacement](#getdevicesinplacement) - Returns an object enumerating the devices in a placement.
* [ListPlacements](#listplacements) - Lists the placement(s) of a project.
* [ListProjects](#listprojects) - Lists the AWS IoT 1-Click project(s) associated with your AWS account and region.
* [ListTagsForResource](#listtagsforresource) - Lists the tags (metadata key/value pairs) which you have assigned to the resource.
* [TagResource](#tagresource) - Creates or modifies tags for a resource. Tags are key/value pairs (metadata) that can be used to manage a resource. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS Tagging Strategies</a>.
* [UntagResource](#untagresource) - Removes one or more tags (metadata key/value pairs) from a resource.
* [UpdatePlacement](#updateplacement) - Updates a placement with the given attributes. To clear an attribute, pass an empty value (i.e., "").
* [UpdateProject](#updateproject) - Updates a project associated with your AWS account and region. With the exception of device template names, you can pass just the values that need to be updated because the update request will change only the values that are provided. To clear a value, pass the empty string (i.e., <code>""</code>).

## AssociateDeviceWithPlacement

Associates a physical device with a placement.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssociateDeviceWithPlacement(ctx, operations.AssociateDeviceWithPlacementRequest{
        RequestBody: operations.AssociateDeviceWithPlacementRequestBody{
            DeviceID: "suscipit",
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        DeviceTemplateName: "molestiae",
        PlacementName: "minus",
        ProjectName: "placeat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateDeviceWithPlacementResponse != nil {
        // handle response
    }
}
```

## CreatePlacement

Creates an empty placement.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreatePlacement(ctx, operations.CreatePlacementRequest{
        RequestBody: operations.CreatePlacementRequestBody{
            Attributes: map[string]string{
                "iusto": "excepturi",
                "nisi": "recusandae",
                "temporibus": "ab",
            },
            PlacementName: "quis",
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("repellendus"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("quo"),
        ProjectName: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePlacementResponse != nil {
        // handle response
    }
}
```

## CreateProject

Creates an empty project with a placement template. A project contains zero or more placements that adhere to the placement template defined in the project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateProject(ctx, operations.CreateProjectRequest{
        RequestBody: operations.CreateProjectRequestBody{
            Description: sdk.String("at"),
            PlacementTemplate: &operations.CreateProjectRequestBodyPlacementTemplate{
                DefaultAttributes: map[string]string{
                    "maiores": "molestiae",
                    "quod": "quod",
                    "esse": "totam",
                    "porro": "dolorum",
                },
                DeviceTemplates: map[string]shared.DeviceTemplate{
                    "nam": shared.DeviceTemplate{
                        CallbackOverrides: map[string]string{
                            "occaecati": "fugit",
                            "deleniti": "hic",
                            "optio": "totam",
                        },
                        DeviceType: sdk.String("beatae"),
                    },
                },
            },
            ProjectName: "commodi",
            Tags: map[string]string{
                "modi": "qui",
                "impedit": "cum",
            },
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("ad"),
        XAmzSignedHeaders: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateProjectResponse != nil {
        // handle response
    }
}
```

## DeletePlacement

<p>Deletes a placement. To delete a placement, it must not have any devices associated with it.</p> <note> <p>When you delete a placement, all associated data becomes irretrievable.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeletePlacement(ctx, operations.DeletePlacementRequest{
        XAmzAlgorithm: sdk.String("sed"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("laboriosam"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("saepe"),
        PlacementName: "fuga",
        ProjectName: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletePlacementResponse != nil {
        // handle response
    }
}
```

## DeleteProject

<p>Deletes a project. To delete a project, it must not have any placements associated with it.</p> <note> <p>When you delete a project, all associated data becomes irretrievable.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteProject(ctx, operations.DeleteProjectRequest{
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        ProjectName: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProjectResponse != nil {
        // handle response
    }
}
```

## DescribePlacement

Describes a placement in a project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribePlacement(ctx, operations.DescribePlacementRequest{
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        PlacementName: "nobis",
        ProjectName: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribePlacementResponse != nil {
        // handle response
    }
}
```

## DescribeProject

Returns an object describing a project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeProject(ctx, operations.DescribeProjectRequest{
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("culpa"),
        ProjectName: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeProjectResponse != nil {
        // handle response
    }
}
```

## DisassociateDeviceFromPlacement

Removes a physical device from a placement.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisassociateDeviceFromPlacement(ctx, operations.DisassociateDeviceFromPlacementRequest{
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("repellat"),
        DeviceTemplateName: "mollitia",
        PlacementName: "occaecati",
        ProjectName: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateDeviceFromPlacementResponse != nil {
        // handle response
    }
}
```

## GetDevicesInPlacement

Returns an object enumerating the devices in a placement.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetDevicesInPlacement(ctx, operations.GetDevicesInPlacementRequest{
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("velit"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("quia"),
        XAmzSignedHeaders: sdk.String("quis"),
        PlacementName: "vitae",
        ProjectName: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDevicesInPlacementResponse != nil {
        // handle response
    }
}
```

## ListPlacements

Lists the placement(s) of a project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListPlacements(ctx, operations.ListPlacementsRequest{
        XAmzAlgorithm: sdk.String("animi"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        MaxResults: sdk.Int64(662527),
        NextToken: sdk.String("possimus"),
        ProjectName: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPlacementsResponse != nil {
        // handle response
    }
}
```

## ListProjects

Lists the AWS IoT 1-Click project(s) associated with your AWS account and region.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListProjects(ctx, operations.ListProjectsRequest{
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        MaxResults: sdk.Int64(878194),
        NextToken: sdk.String("nihil"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProjectsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists the tags (metadata key/value pairs) which you have assigned to the resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        ResourceArn: "doloremque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## TagResource

Creates or modifies tags for a resource. Tags are key/value pairs (metadata) that can be used to manage a resource. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS Tagging Strategies</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "ut": "maiores",
                "dicta": "corporis",
            },
        },
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("harum"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("commodi"),
        ResourceArn: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Removes one or more tags (metadata key/value pairs) from a resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("molestias"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("modi"),
        ResourceArn: "praesentium",
        TagKeys: []string{
            "voluptates",
            "quasi",
            "repudiandae",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdatePlacement

Updates a placement with the given attributes. To clear an attribute, pass an empty value (i.e., "").

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdatePlacement(ctx, operations.UpdatePlacementRequest{
        RequestBody: operations.UpdatePlacementRequestBody{
            Attributes: map[string]string{
                "veritatis": "itaque",
                "incidunt": "enim",
                "consequatur": "est",
            },
        },
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("modi"),
        PlacementName: "qui",
        ProjectName: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePlacementResponse != nil {
        // handle response
    }
}
```

## UpdateProject

Updates a project associated with your AWS account and region. With the exception of device template names, you can pass just the values that need to be updated because the update request will change only the values that are provided. To clear a value, pass the empty string (i.e., <code>""</code>).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateProject(ctx, operations.UpdateProjectRequest{
        RequestBody: operations.UpdateProjectRequestBody{
            Description: sdk.String("cupiditate"),
            PlacementTemplate: &operations.UpdateProjectRequestBodyPlacementTemplate{
                DefaultAttributes: map[string]string{
                    "perferendis": "magni",
                    "assumenda": "ipsam",
                    "alias": "fugit",
                },
                DeviceTemplates: map[string]shared.DeviceTemplate{
                    "excepturi": shared.DeviceTemplate{
                        CallbackOverrides: map[string]string{
                            "facilis": "tempore",
                            "labore": "delectus",
                        },
                        DeviceType: sdk.String("eum"),
                    },
                    "non": shared.DeviceTemplate{
                        CallbackOverrides: map[string]string{
                            "sint": "aliquid",
                            "provident": "necessitatibus",
                            "sint": "officia",
                            "dolor": "debitis",
                        },
                        DeviceType: sdk.String("a"),
                    },
                    "dolorum": shared.DeviceTemplate{
                        CallbackOverrides: map[string]string{
                            "in": "illum",
                            "maiores": "rerum",
                        },
                        DeviceType: sdk.String("dicta"),
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        ProjectName: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateProjectResponse != nil {
        // handle response
    }
}
```
