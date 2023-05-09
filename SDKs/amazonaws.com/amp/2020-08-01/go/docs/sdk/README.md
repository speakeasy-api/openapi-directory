# SDK

## Overview

Amazon Managed Service for Prometheus

Amazon Web Services documentation
<https://docs.aws.amazon.com/aps/>
### Available Operations

* [CreateAlertManagerDefinition](#createalertmanagerdefinition) - Create an alert manager definition.
* [CreateLoggingConfiguration](#createloggingconfiguration) - Create logging configuration.
* [CreateRuleGroupsNamespace](#createrulegroupsnamespace) - Create a rule group namespace.
* [CreateWorkspace](#createworkspace) - Creates a new AMP workspace.
* [DeleteAlertManagerDefinition](#deletealertmanagerdefinition) - Deletes an alert manager definition.
* [DeleteLoggingConfiguration](#deleteloggingconfiguration) - Delete logging configuration.
* [DeleteRuleGroupsNamespace](#deleterulegroupsnamespace) - Delete a rule groups namespace.
* [DeleteWorkspace](#deleteworkspace) - Deletes an AMP workspace.
* [DescribeAlertManagerDefinition](#describealertmanagerdefinition) - Describes an alert manager definition.
* [DescribeLoggingConfiguration](#describeloggingconfiguration) - Describes logging configuration.
* [DescribeRuleGroupsNamespace](#describerulegroupsnamespace) - Describe a rule groups namespace.
* [DescribeWorkspace](#describeworkspace) - Describes an existing AMP workspace.
* [ListRuleGroupsNamespaces](#listrulegroupsnamespaces) - Lists rule groups namespaces.
* [ListTagsForResource](#listtagsforresource) - Lists the tags you have assigned to the resource.
* [ListWorkspaces](#listworkspaces) - Lists all AMP workspaces, including workspaces being created or deleted.
* [PutAlertManagerDefinition](#putalertmanagerdefinition) - Update an alert manager definition.
* [PutRuleGroupsNamespace](#putrulegroupsnamespace) - Update a rule groups namespace.
* [TagResource](#tagresource) - Creates tags for the specified resource.
* [UntagResource](#untagresource) - Deletes tags from the specified resource.
* [UpdateLoggingConfiguration](#updateloggingconfiguration) - Update logging configuration.
* [UpdateWorkspaceAlias](#updateworkspacealias) - Updates an AMP workspace alias.

## CreateAlertManagerDefinition

Create an alert manager definition.

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
    res, err := s.SDK.CreateAlertManagerDefinition(ctx, operations.CreateAlertManagerDefinitionRequest{
        RequestBody: operations.CreateAlertManagerDefinitionRequestBody{
            ClientToken: sdk.String("deserunt"),
            Data: "suscipit",
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        WorkspaceID: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAlertManagerDefinitionResponse != nil {
        // handle response
    }
}
```

## CreateLoggingConfiguration

Create logging configuration.

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
    res, err := s.SDK.CreateLoggingConfiguration(ctx, operations.CreateLoggingConfigurationRequest{
        RequestBody: operations.CreateLoggingConfigurationRequestBody{
            ClientToken: sdk.String("minus"),
            LogGroupArn: "placeat",
        },
        XAmzAlgorithm: sdk.String("voluptatum"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("nisi"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("ab"),
        WorkspaceID: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLoggingConfigurationResponse != nil {
        // handle response
    }
}
```

## CreateRuleGroupsNamespace

Create a rule group namespace.

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
    res, err := s.SDK.CreateRuleGroupsNamespace(ctx, operations.CreateRuleGroupsNamespaceRequest{
        RequestBody: operations.CreateRuleGroupsNamespaceRequestBody{
            ClientToken: sdk.String("veritatis"),
            Data: "deserunt",
            Name: "Roberta Sipes",
            Tags: map[string]string{
                "at": "at",
            },
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("porro"),
        WorkspaceID: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRuleGroupsNamespaceResponse != nil {
        // handle response
    }
}
```

## CreateWorkspace

Creates a new AMP workspace.

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
    res, err := s.SDK.CreateWorkspace(ctx, operations.CreateWorkspaceRequest{
        RequestBody: operations.CreateWorkspaceRequestBody{
            Alias: sdk.String("dicta"),
            ClientToken: sdk.String("nam"),
            Tags: map[string]string{
                "occaecati": "fugit",
                "deleniti": "hic",
                "optio": "totam",
            },
        },
        XAmzAlgorithm: sdk.String("beatae"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("cum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWorkspaceResponse != nil {
        // handle response
    }
}
```

## DeleteAlertManagerDefinition

Deletes an alert manager definition.

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
    res, err := s.SDK.DeleteAlertManagerDefinition(ctx, operations.DeleteAlertManagerDefinitionRequest{
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("ad"),
        XAmzSignedHeaders: sdk.String("natus"),
        ClientToken: sdk.String("sed"),
        WorkspaceID: "iste",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteLoggingConfiguration

Delete logging configuration.

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
    res, err := s.SDK.DeleteLoggingConfiguration(ctx, operations.DeleteLoggingConfigurationRequest{
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("laboriosam"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("in"),
        ClientToken: sdk.String("corporis"),
        WorkspaceID: "iste",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteRuleGroupsNamespace

Delete a rule groups namespace.

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
    res, err := s.SDK.DeleteRuleGroupsNamespace(ctx, operations.DeleteRuleGroupsNamespaceRequest{
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("est"),
        ClientToken: sdk.String("mollitia"),
        Name: "Ernest Ebert",
        WorkspaceID: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteWorkspace

Deletes an AMP workspace.

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
    res, err := s.SDK.DeleteWorkspace(ctx, operations.DeleteWorkspaceRequest{
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("iure"),
        ClientToken: sdk.String("culpa"),
        WorkspaceID: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DescribeAlertManagerDefinition

Describes an alert manager definition.

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
    res, err := s.SDK.DescribeAlertManagerDefinition(ctx, operations.DescribeAlertManagerDefinitionRequest{
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("repellat"),
        WorkspaceID: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAlertManagerDefinitionResponse != nil {
        // handle response
    }
}
```

## DescribeLoggingConfiguration

Describes logging configuration.

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
    res, err := s.SDK.DescribeLoggingConfiguration(ctx, operations.DescribeLoggingConfigurationRequest{
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("error"),
        WorkspaceID: "quia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeLoggingConfigurationResponse != nil {
        // handle response
    }
}
```

## DescribeRuleGroupsNamespace

Describe a rule groups namespace.

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
    res, err := s.SDK.DescribeRuleGroupsNamespace(ctx, operations.DescribeRuleGroupsNamespaceRequest{
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("vitae"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("animi"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("quo"),
        Name: "Mandy Hills",
        WorkspaceID: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRuleGroupsNamespaceResponse != nil {
        // handle response
    }
}
```

## DescribeWorkspace

Describes an existing AMP workspace.

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
    res, err := s.SDK.DescribeWorkspace(ctx, operations.DescribeWorkspaceRequest{
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        WorkspaceID: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeWorkspaceResponse != nil {
        // handle response
    }
}
```

## ListRuleGroupsNamespaces

Lists rule groups namespaces.

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
    res, err := s.SDK.ListRuleGroupsNamespaces(ctx, operations.ListRuleGroupsNamespacesRequest{
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("cum"),
        MaxResults: sdk.Int64(19987),
        Name: sdk.String("Bessie Grady II"),
        NextToken: sdk.String("dolore"),
        WorkspaceID: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRuleGroupsNamespacesResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists the tags you have assigned to the resource.

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
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("harum"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("quae"),
        ResourceArn: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListWorkspaces

Lists all AMP workspaces, including workspaces being created or deleted.

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
    res, err := s.SDK.ListWorkspaces(ctx, operations.ListWorkspacesRequest{
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("molestias"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("rem"),
        Alias: sdk.String("voluptates"),
        MaxResults: sdk.Int64(93940),
        NextToken: sdk.String("repudiandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkspacesResponse != nil {
        // handle response
    }
}
```

## PutAlertManagerDefinition

Update an alert manager definition.

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
    res, err := s.SDK.PutAlertManagerDefinition(ctx, operations.PutAlertManagerDefinitionRequest{
        RequestBody: operations.PutAlertManagerDefinitionRequestBody{
            ClientToken: sdk.String("sint"),
            Data: "veritatis",
        },
        XAmzAlgorithm: sdk.String("itaque"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        WorkspaceID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutAlertManagerDefinitionResponse != nil {
        // handle response
    }
}
```

## PutRuleGroupsNamespace

Update a rule groups namespace.

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
    res, err := s.SDK.PutRuleGroupsNamespace(ctx, operations.PutRuleGroupsNamespaceRequest{
        RequestBody: operations.PutRuleGroupsNamespaceRequestBody{
            ClientToken: sdk.String("distinctio"),
            Data: "quibusdam",
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        Name: "Mr. Nadine Hills",
        WorkspaceID: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutRuleGroupsNamespaceResponse != nil {
        // handle response
    }
}
```

## TagResource

Creates tags for the specified resource.

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
                "facilis": "tempore",
                "labore": "delectus",
            },
        },
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
        ResourceArn: "sint",
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

Deletes tags from the specified resource.

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
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("in"),
        ResourceArn: "illum",
        TagKeys: []string{
            "rerum",
            "dicta",
            "magnam",
            "cumque",
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

## UpdateLoggingConfiguration

Update logging configuration.

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
    res, err := s.SDK.UpdateLoggingConfiguration(ctx, operations.UpdateLoggingConfigurationRequest{
        RequestBody: operations.UpdateLoggingConfigurationRequestBody{
            ClientToken: sdk.String("facere"),
            LogGroupArn: "ea",
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        WorkspaceID: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateLoggingConfigurationResponse != nil {
        // handle response
    }
}
```

## UpdateWorkspaceAlias

Updates an AMP workspace alias.

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
    res, err := s.SDK.UpdateWorkspaceAlias(ctx, operations.UpdateWorkspaceAliasRequest{
        RequestBody: operations.UpdateWorkspaceAliasRequestBody{
            Alias: sdk.String("quidem"),
            ClientToken: sdk.String("provident"),
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        WorkspaceID: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
