# Discovery

### Available Operations

* [GetNamespace](#getnamespace) - Get namespace
* [GetNamespaces](#getnamespaces) - Get namespaces and repos

## GetNamespace

Gets metadata associated with specified namespace, including extra repos associated with the namespace

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
            HubAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Discovery.GetNamespace(ctx, operations.GetNamespaceRequest{
        Namespace: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NamespaceMetadata != nil {
        // handle response
    }
}
```

## GetNamespaces

Gets a list of your namespaces and repos which have data available

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            HubAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Discovery.GetNamespaces(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.NamespaceData != nil {
        // handle response
    }
}
```
