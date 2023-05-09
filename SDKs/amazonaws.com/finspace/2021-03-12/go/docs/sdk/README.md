# SDK

## Overview

The FinSpace management service provides the APIs for managing FinSpace environments.

Amazon Web Services documentation
<https://docs.aws.amazon.com/finspace/>
### Available Operations

* [CreateEnvironment](#createenvironment) - Create a new FinSpace environment.
* [DeleteEnvironment](#deleteenvironment) - Delete an FinSpace environment.
* [GetEnvironment](#getenvironment) - Returns the FinSpace environment object.
* [ListEnvironments](#listenvironments) - A list of all of your FinSpace environments.
* [ListTagsForResource](#listtagsforresource) - A list of all tags for a resource.
* [TagResource](#tagresource) - Adds metadata tags to a FinSpace resource.
* [UntagResource](#untagresource) - Removes metadata tags from a FinSpace resource.
* [UpdateEnvironment](#updateenvironment) - Update your FinSpace environment.

## CreateEnvironment

Create a new FinSpace environment.

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
    res, err := s.SDK.CreateEnvironment(ctx, operations.CreateEnvironmentRequest{
        RequestBody: operations.CreateEnvironmentRequestBody{
            DataBundles: []string{
                "quod",
                "quod",
            },
            Description: sdk.String("esse"),
            FederationMode: operations.CreateEnvironmentRequestBodyFederationModeEnumLocal.ToPointer(),
            FederationParameters: &operations.CreateEnvironmentRequestBodyFederationParameters{
                ApplicationCallBackURL: sdk.String("porro"),
                AttributeMap: map[string]string{
                    "dicta": "nam",
                    "officia": "occaecati",
                    "fugit": "deleniti",
                },
                FederationProviderName: sdk.String("hic"),
                FederationURN: sdk.String("optio"),
                SamlMetadataDocument: sdk.String("totam"),
                SamlMetadataURL: sdk.String("beatae"),
            },
            KmsKeyID: sdk.String("commodi"),
            Name: "Pauline Dibbert",
            SuperuserParameters: &operations.CreateEnvironmentRequestBodySuperuserParameters{
                EmailAddress: sdk.String("esse"),
                FirstName: sdk.String("Cullen"),
                LastName: sdk.String("Mante"),
            },
            Tags: map[string]string{
                "perferendis": "ad",
            },
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("laboriosam"),
        XAmzSignedHeaders: sdk.String("hic"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEnvironmentResponse != nil {
        // handle response
    }
}
```

## DeleteEnvironment

Delete an FinSpace environment.

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
    res, err := s.SDK.DeleteEnvironment(ctx, operations.DeleteEnvironmentRequest{
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("saepe"),
        EnvironmentID: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteEnvironmentResponse != nil {
        // handle response
    }
}
```

## GetEnvironment

Returns the FinSpace environment object.

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
    res, err := s.SDK.GetEnvironment(ctx, operations.GetEnvironmentRequest{
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("dolores"),
        EnvironmentID: "dolorem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEnvironmentResponse != nil {
        // handle response
    }
}
```

## ListEnvironments

A list of all of your FinSpace environments.

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
    res, err := s.SDK.ListEnvironments(ctx, operations.ListEnvironmentsRequest{
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("minima"),
        MaxResults: sdk.Int64(570197),
        NextToken: sdk.String("accusantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEnvironmentsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

A list of all tags for a resource.

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
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("culpa"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        ResourceArn: "culpa",
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

Adds metadata tags to a FinSpace resource.

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
                "repellat": "mollitia",
            },
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("error"),
        ResourceArn: "quia",
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

Removes metadata tags from a FinSpace resource.

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
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("vitae"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("animi"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("quo"),
        ResourceArn: "sequi",
        TagKeys: []string{
            "ipsam",
            "id",
            "possimus",
            "aut",
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

## UpdateEnvironment

Update your FinSpace environment.

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
    res, err := s.SDK.UpdateEnvironment(ctx, operations.UpdateEnvironmentRequest{
        RequestBody: operations.UpdateEnvironmentRequestBody{
            Description: sdk.String("quasi"),
            FederationMode: operations.UpdateEnvironmentRequestBodyFederationModeEnumLocal.ToPointer(),
            FederationParameters: &operations.UpdateEnvironmentRequestBodyFederationParameters{
                ApplicationCallBackURL: sdk.String("temporibus"),
                AttributeMap: map[string]string{
                    "quasi": "reiciendis",
                    "voluptatibus": "vero",
                    "nihil": "praesentium",
                },
                FederationProviderName: sdk.String("voluptatibus"),
                FederationURN: sdk.String("ipsa"),
                SamlMetadataDocument: sdk.String("omnis"),
                SamlMetadataURL: sdk.String("voluptate"),
            },
            Name: sdk.String("Thomas Batz"),
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("harum"),
        EnvironmentID: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateEnvironmentResponse != nil {
        // handle response
    }
}
```
