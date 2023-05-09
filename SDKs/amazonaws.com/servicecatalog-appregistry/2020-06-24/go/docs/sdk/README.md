# SDK

## Overview

 Amazon Web Services Service Catalog AppRegistry enables organizations to understand the application context of their Amazon Web Services resources. AppRegistry provides a repository of your applications, their resources, and the application metadata that you use within your enterprise.

Amazon Web Services documentation
<https://docs.aws.amazon.com/servicecatalog-appregistry/>
### Available Operations

* [AssociateAttributeGroup](#associateattributegroup) - Associates an attribute group with an application to augment the application's metadata with the group's attributes. This feature enables applications to be described with user-defined details that are machine-readable, such as third-party integrations.
* [AssociateResource](#associateresource) -  Associates a resource with an application. The resource can be specified by its ARN or name. The application can be specified by ARN, ID, or name. 
* [CreateApplication](#createapplication) - Creates a new application that is the top-level node in a hierarchy of related cloud resource abstractions.
* [CreateAttributeGroup](#createattributegroup) - Creates a new attribute group as a container for user-defined attributes. This feature enables users to have full control over their cloud application's metadata in a rich machine-readable format to facilitate integration with automated workflows and third-party tools.
* [DeleteApplication](#deleteapplication) - Deletes an application that is specified either by its application ID, name, or ARN. All associated attribute groups and resources must be disassociated from it before deleting an application.
* [DeleteAttributeGroup](#deleteattributegroup) - Deletes an attribute group, specified either by its attribute group ID, name, or ARN.
* [DisassociateAttributeGroup](#disassociateattributegroup) - Disassociates an attribute group from an application to remove the extra attributes contained in the attribute group from the application's metadata. This operation reverts <code>AssociateAttributeGroup</code>.
* [DisassociateResource](#disassociateresource) - Disassociates a resource from application. Both the resource and the application can be specified either by ID or name.
* [GetApplication](#getapplication) -  Retrieves metadata information about one of your applications. The application can be specified by its ARN, ID, or name (which is unique within one account in one region at a given point in time). Specify by ARN or ID in automated workflows if you want to make sure that the exact same application is returned or a <code>ResourceNotFoundException</code> is thrown, avoiding the ABA addressing problem. 
* [GetAssociatedResource](#getassociatedresource) - Gets the resource associated with the application.
* [GetAttributeGroup](#getattributegroup) -  Retrieves an attribute group by its ARN, ID, or name. The attribute group can be specified by its ARN, ID, or name. 
* [GetConfiguration](#getconfiguration) -  Retrieves a <code>TagKey</code> configuration from an account. 
* [ListApplications](#listapplications) - Retrieves a list of all of your applications. Results are paginated.
* [ListAssociatedAttributeGroups](#listassociatedattributegroups) - Lists all attribute groups that are associated with specified application. Results are paginated.
* [ListAssociatedResources](#listassociatedresources) - <p> Lists all of the resources that are associated with the specified application. Results are paginated. </p> <note> <p> If you share an application, and a consumer account associates a tag query to the application, all of the users who can access the application can also view the tag values in all accounts that are associated with it using this API. </p> </note>
* [ListAttributeGroups](#listattributegroups) - Lists all attribute groups which you have access to. Results are paginated.
* [ListAttributeGroupsForApplication](#listattributegroupsforapplication) - Lists the details of all attribute groups associated with a specific application. The results display in pages.
* [ListTagsForResource](#listtagsforresource) - Lists all of the tags on the resource.
* [PutConfiguration](#putconfiguration) -  Associates a <code>TagKey</code> configuration to an account. 
* [SyncResource](#syncresource) - <p>Syncs the resource with current AppRegistry records.</p> <p>Specifically, the resource’s AppRegistry system tags sync with its associated application. We remove the resource's AppRegistry system tags if it does not associate with the application. The caller must have permissions to read and update the resource.</p>
* [TagResource](#tagresource) - <p>Assigns one or more tags (key-value pairs) to the specified resource.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the resource, this action updates its value.</p> <p>This operation returns an empty response if the call was successful.</p>
* [UntagResource](#untagresource) - <p>Removes tags from a resource.</p> <p>This operation returns an empty response if the call was successful.</p>
* [UpdateApplication](#updateapplication) - Updates an existing application with new attributes.
* [UpdateAttributeGroup](#updateattributegroup) - Updates an existing attribute group with new details. 

## AssociateAttributeGroup

Associates an attribute group with an application to augment the application's metadata with the group's attributes. This feature enables applications to be described with user-defined details that are machine-readable, such as third-party integrations.

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
    res, err := s.SDK.AssociateAttributeGroup(ctx, operations.AssociateAttributeGroupRequest{
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        Application: "delectus",
        AttributeGroup: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateAttributeGroupResponse != nil {
        // handle response
    }
}
```

## AssociateResource

 Associates a resource with an application. The resource can be specified by its ARN or name. The application can be specified by ARN, ID, or name. 

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
    res, err := s.SDK.AssociateResource(ctx, operations.AssociateResourceRequest{
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("placeat"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        Application: "nisi",
        Resource: "recusandae",
        ResourceType: operations.AssociateResourceResourceTypeEnumResourceTagValue,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateResourceResponse != nil {
        // handle response
    }
}
```

## CreateApplication

Creates a new application that is the top-level node in a hierarchy of related cloud resource abstractions.

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
    res, err := s.SDK.CreateApplication(ctx, operations.CreateApplicationRequest{
        RequestBody: operations.CreateApplicationRequestBody{
            ClientToken: "ab",
            Description: sdk.String("quis"),
            Name: "Iris Aufderhar",
            Tags: map[string]string{
                "quo": "odit",
                "at": "at",
                "maiores": "molestiae",
                "quod": "quod",
            },
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("officia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateApplicationResponse != nil {
        // handle response
    }
}
```

## CreateAttributeGroup

Creates a new attribute group as a container for user-defined attributes. This feature enables users to have full control over their cloud application's metadata in a rich machine-readable format to facilitate integration with automated workflows and third-party tools.

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
    res, err := s.SDK.CreateAttributeGroup(ctx, operations.CreateAttributeGroupRequest{
        RequestBody: operations.CreateAttributeGroupRequestBody{
            Attributes: "occaecati",
            ClientToken: "fugit",
            Description: sdk.String("deleniti"),
            Name: "Ms. Earnest Lebsack",
            Tags: map[string]string{
                "qui": "impedit",
                "cum": "esse",
            },
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("sed"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAttributeGroupResponse != nil {
        // handle response
    }
}
```

## DeleteApplication

Deletes an application that is specified either by its application ID, name, or ARN. All associated attribute groups and resources must be disassociated from it before deleting an application.

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
    res, err := s.SDK.DeleteApplication(ctx, operations.DeleteApplicationRequest{
        XAmzAlgorithm: sdk.String("iste"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("laboriosam"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("fuga"),
        Application: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteApplicationResponse != nil {
        // handle response
    }
}
```

## DeleteAttributeGroup

Deletes an attribute group, specified either by its attribute group ID, name, or ARN.

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
    res, err := s.SDK.DeleteAttributeGroup(ctx, operations.DeleteAttributeGroupRequest{
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        AttributeGroup: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAttributeGroupResponse != nil {
        // handle response
    }
}
```

## DisassociateAttributeGroup

Disassociates an attribute group from an application to remove the extra attributes contained in the attribute group from the application's metadata. This operation reverts <code>AssociateAttributeGroup</code>.

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
    res, err := s.SDK.DisassociateAttributeGroup(ctx, operations.DisassociateAttributeGroupRequest{
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        Application: "nobis",
        AttributeGroup: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateAttributeGroupResponse != nil {
        // handle response
    }
}
```

## DisassociateResource

Disassociates a resource from application. Both the resource and the application can be specified either by ID or name.

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
    res, err := s.SDK.DisassociateResource(ctx, operations.DisassociateResourceRequest{
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("culpa"),
        Application: "doloribus",
        Resource: "sapiente",
        ResourceType: operations.DisassociateResourceResourceTypeEnumCfnStack,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateResourceResponse != nil {
        // handle response
    }
}
```

## GetApplication

 Retrieves metadata information about one of your applications. The application can be specified by its ARN, ID, or name (which is unique within one account in one region at a given point in time). Specify by ARN or ID in automated workflows if you want to make sure that the exact same application is returned or a <code>ResourceNotFoundException</code> is thrown, avoiding the ABA addressing problem. 

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
    res, err := s.SDK.GetApplication(ctx, operations.GetApplicationRequest{
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("repellat"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        Application: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetApplicationResponse != nil {
        // handle response
    }
}
```

## GetAssociatedResource

Gets the resource associated with the application.

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
    res, err := s.SDK.GetAssociatedResource(ctx, operations.GetAssociatedResourceRequest{
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("velit"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("quia"),
        XAmzSignedHeaders: sdk.String("quis"),
        Application: "vitae",
        Resource: "laborum",
        ResourceType: operations.GetAssociatedResourceResourceTypeEnumResourceTagValue,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAssociatedResourceResponse != nil {
        // handle response
    }
}
```

## GetAttributeGroup

 Retrieves an attribute group by its ARN, ID, or name. The attribute group can be specified by its ARN, ID, or name. 

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
    res, err := s.SDK.GetAttributeGroup(ctx, operations.GetAttributeGroupRequest{
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("sequi"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("id"),
        AttributeGroup: "possimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAttributeGroupResponse != nil {
        // handle response
    }
}
```

## GetConfiguration

 Retrieves a <code>TagKey</code> configuration from an account. 

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
    res, err := s.SDK.GetConfiguration(ctx, operations.GetConfigurationRequest{
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConfigurationResponse != nil {
        // handle response
    }
}
```

## ListApplications

Retrieves a list of all of your applications. Results are paginated.

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
    res, err := s.SDK.ListApplications(ctx, operations.ListApplicationsRequest{
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("omnis"),
        MaxResults: sdk.Int64(451159),
        NextToken: sdk.String("cum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListApplicationsResponse != nil {
        // handle response
    }
}
```

## ListAssociatedAttributeGroups

Lists all attribute groups that are associated with specified application. Results are paginated.

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
    res, err := s.SDK.ListAssociatedAttributeGroups(ctx, operations.ListAssociatedAttributeGroupsRequest{
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("doloremque"),
        XAmzCredential: sdk.String("reprehenderit"),
        XAmzDate: sdk.String("ut"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("corporis"),
        Application: "dolore",
        MaxResults: sdk.Int64(480894),
        NextToken: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssociatedAttributeGroupsResponse != nil {
        // handle response
    }
}
```

## ListAssociatedResources

<p> Lists all of the resources that are associated with the specified application. Results are paginated. </p> <note> <p> If you share an application, and a consumer account associates a tag query to the application, all of the users who can access the application can also view the tag values in all accounts that are associated with it using this API. </p> </note>

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
    res, err := s.SDK.ListAssociatedResources(ctx, operations.ListAssociatedResourcesRequest{
        XAmzAlgorithm: sdk.String("harum"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        Application: "quidem",
        MaxResults: sdk.Int64(565189),
        NextToken: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssociatedResourcesResponse != nil {
        // handle response
    }
}
```

## ListAttributeGroups

Lists all attribute groups which you have access to. Results are paginated.

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
    res, err := s.SDK.ListAttributeGroups(ctx, operations.ListAttributeGroupsRequest{
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("voluptates"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
        MaxResults: sdk.Int64(575947),
        NextToken: sdk.String("veritatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAttributeGroupsResponse != nil {
        // handle response
    }
}
```

## ListAttributeGroupsForApplication

Lists the details of all attribute groups associated with a specific application. The results display in pages.

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
    res, err := s.SDK.ListAttributeGroupsForApplication(ctx, operations.ListAttributeGroupsForApplicationRequest{
        XAmzAlgorithm: sdk.String("itaque"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        Application: "deserunt",
        MaxResults: sdk.Int64(716327),
        NextToken: sdk.String("quibusdam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAttributeGroupsForApplicationResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists all of the tags on the resource.

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
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        ResourceArn: "magni",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## PutConfiguration

 Associates a <code>TagKey</code> configuration to an account. 

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
    res, err := s.SDK.PutConfiguration(ctx, operations.PutConfigurationRequest{
        RequestBody: operations.PutConfigurationRequestBody{
            Configuration: operations.PutConfigurationRequestBodyConfiguration{
                TagQueryConfiguration: &shared.TagQueryConfiguration{
                    TagKey: sdk.String("assumenda"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("facilis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SyncResource

<p>Syncs the resource with current AppRegistry records.</p> <p>Specifically, the resource’s AppRegistry system tags sync with its associated application. We remove the resource's AppRegistry system tags if it does not associate with the application. The caller must have permissions to read and update the resource.</p>

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
    res, err := s.SDK.SyncResource(ctx, operations.SyncResourceRequest{
        XAmzAlgorithm: sdk.String("tempore"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("eligendi"),
        XAmzSignedHeaders: sdk.String("sint"),
        Resource: "aliquid",
        ResourceType: operations.SyncResourceResourceTypeEnumResourceTagValue,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncResourceResponse != nil {
        // handle response
    }
}
```

## TagResource

<p>Assigns one or more tags (key-value pairs) to the specified resource.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the resource, this action updates its value.</p> <p>This operation returns an empty response if the call was successful.</p>

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
                "sint": "officia",
                "dolor": "debitis",
                "a": "dolorum",
                "in": "in",
            },
        },
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("facere"),
        ResourceArn: "ea",
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

<p>Removes tags from a resource.</p> <p>This operation returns an empty response if the call was successful.</p>

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
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        ResourceArn: "delectus",
        TagKeys: []string{
            "provident",
            "nam",
            "id",
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

## UpdateApplication

Updates an existing application with new attributes.

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
    res, err := s.SDK.UpdateApplication(ctx, operations.UpdateApplicationRequest{
        RequestBody: operations.UpdateApplicationRequestBody{
            Description: sdk.String("blanditiis"),
            Name: sdk.String("Timmy Feeney"),
        },
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("magnam"),
        Application: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateApplicationResponse != nil {
        // handle response
    }
}
```

## UpdateAttributeGroup

Updates an existing attribute group with new details. 

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
    res, err := s.SDK.UpdateAttributeGroup(ctx, operations.UpdateAttributeGroupRequest{
        RequestBody: operations.UpdateAttributeGroupRequestBody{
            Attributes: sdk.String("id"),
            Description: sdk.String("labore"),
            Name: sdk.String("Laurie Mosciski"),
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("ullam"),
        AttributeGroup: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAttributeGroupResponse != nil {
        // handle response
    }
}
```
