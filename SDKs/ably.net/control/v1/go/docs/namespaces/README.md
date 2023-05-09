# Namespaces

### Available Operations

* [DeleteAppsAppIDNamespacesNamespaceID](#deleteappsappidnamespacesnamespaceid) - Deletes a namespace
* [GetAppsAppIDNamespaces](#getappsappidnamespaces) - Lists namespaces
* [PatchAppsAppIDNamespacesNamespaceID](#patchappsappidnamespacesnamespaceid) - Updates a namespace
* [PostAppsAppIDNamespaces](#postappsappidnamespaces) - Creates a namespace

## DeleteAppsAppIDNamespacesNamespaceID

Deletes a namespace

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Namespaces.DeleteAppsAppIDNamespacesNamespaceID(ctx, operations.DeleteAppsAppIDNamespacesNamespaceIDRequest{
        AppID: "incidunt",
        NamespaceID: "enim",
    }, operations.DeleteAppsAppIDNamespacesNamespaceIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAppsAppIDNamespaces

Lists namespaces

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Namespaces.GetAppsAppIDNamespaces(ctx, operations.GetAppsAppIDNamespacesRequest{
        AppID: "consequatur",
    }, operations.GetAppsAppIDNamespacesSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NamespaceResponses != nil {
        // handle response
    }
}
```

## PatchAppsAppIDNamespacesNamespaceID

Updates a namespace

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Namespaces.PatchAppsAppIDNamespacesNamespaceID(ctx, operations.PatchAppsAppIDNamespacesNamespaceIDRequest{
        AppID: "est",
        NamespaceID: "quibusdam",
        NamespacePatch: &shared.NamespacePatch{
            Authenticated: sdk.Bool(false),
            ExposeTimeserial: sdk.Bool(false),
            PersistLast: sdk.Bool(false),
            Persisted: sdk.Bool(false),
            PushEnabled: sdk.Bool(false),
            TLSOnly: sdk.Bool(false),
        },
    }, operations.PatchAppsAppIDNamespacesNamespaceIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NamespaceResponse != nil {
        // handle response
    }
}
```

## PostAppsAppIDNamespaces

Creates a namespace

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Namespaces.PostAppsAppIDNamespaces(ctx, operations.PostAppsAppIDNamespacesRequest{
        AppID: "explicabo",
        NamespacePost: &shared.NamespacePost{
            Authenticated: sdk.Bool(false),
            ExposeTimeserial: sdk.Bool(false),
            ID: "abd44269-802d-4502-a94b-b4f63c969e9a",
            PersistLast: sdk.Bool(false),
            Persisted: sdk.Bool(false),
            PushEnabled: sdk.Bool(false),
            TLSOnly: sdk.Bool(false),
        },
    }, operations.PostAppsAppIDNamespacesSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NamespaceResponse != nil {
        // handle response
    }
}
```
