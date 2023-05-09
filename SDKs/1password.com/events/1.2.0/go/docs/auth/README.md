# Auth

### Available Operations

* [~~GetAuthIntrospect~~](#getauthintrospect) - Performs introspection of the provided Bearer JWT token :warning: **Deprecated**
* [GetAuthIntrospectV2](#getauthintrospectv2) - Performs introspection of the provided Bearer JWT token

## ~~GetAuthIntrospect~~

Performs introspection of the provided Bearer JWT token

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Auth.GetAuthIntrospect(ctx, operations.GetAuthIntrospectSecurity{
        Jwtsa: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Introspection != nil {
        // handle response
    }
}
```

## GetAuthIntrospectV2

Performs introspection of the provided Bearer JWT token

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
    res, err := s.Auth.GetAuthIntrospectV2(ctx, operations.GetAuthIntrospectV2Security{
        Jwtsa: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IntrospectionV2 != nil {
        // handle response
    }
}
```
