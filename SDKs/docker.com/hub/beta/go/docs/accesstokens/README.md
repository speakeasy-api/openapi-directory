# AccessTokens

## Overview

The Personal Access Token endpoints lets you manage personal access tokens. For more 
information, see [Access Tokens](https://docs.docker.com/docker-hub/access-tokens/).

You can use a personal access token instead of a password in the [Docker CLI](https://docs.docker.com/engine/reference/commandline/cli/) 
or in the [Create an authentication token](#operation/PostUsersLogin) route to obtain a bearer 
token.

### Scopes

For each scope grouping (in this case "repo"), you only need to define 1 scope as any lower 
scopes are assumed. For example: If you define `repo:write`, the API assumes the scope of both 
`repo:read` *and* `repo:public_read` as well. If you were to define both `repo:write` *and* 
`repo:read`, then `repo:read` is assumed by `repo:write` and ignored.

***Treat your personal access token like your password and keep it secret. You cannot retrieve 
your token after it is generated.***


### Available Operations

* [DeleteV2AccessTokensUUID](#deletev2accesstokensuuid) - Delete a personal access token
* [GetV2AccessTokens](#getv2accesstokens) - Get a list of personal access tokens
* [GetV2AccessTokensUUID](#getv2accesstokensuuid) - Get a personal access token
* [PatchV2AccessTokensUUID](#patchv2accesstokensuuid) - Update a personal access token
* [PostV2AccessTokens](#postv2accesstokens) - Create a personal access token

## DeleteV2AccessTokensUUID

Deletes a personal access token permanently. This cannot be undone.


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
    res, err := s.AccessTokens.DeleteV2AccessTokensUUID(ctx, operations.DeleteV2AccessTokensUUIDRequest{
        UUID: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetV2AccessTokens

Returns a paginated list of personal access tokens.

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
    res, err := s.AccessTokens.GetV2AccessTokens(ctx, operations.GetV2AccessTokensRequest{
        Page: sdk.Float64(7742.34),
        PageSize: sdk.Float64(7369.18),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAccessTokensResponse != nil {
        // handle response
    }
}
```

## GetV2AccessTokensUUID

Returns a personal access token by UUID.

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
    res, err := s.AccessTokens.GetV2AccessTokensUUID(ctx, operations.GetV2AccessTokensUUIDRequest{
        UUID: "73920592-9396-4fea-b596-eb10faaa2352",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetV2AccessTokensUUID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PatchV2AccessTokensUUID

Updates a personal access token partially. You can either update the
token's label or enable/disable it.


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
    res, err := s.AccessTokens.PatchV2AccessTokensUUID(ctx, operations.PatchV2AccessTokensUUIDRequest{
        PatchAccessTokenRequest: shared.PatchAccessTokenRequest{
            IsActive: sdk.Bool(false),
            TokenLabel: sdk.String("My read only token"),
        },
        UUID: "c5955907-aff1-4a3a-afa9-467739251aa5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatchAccessTokenResponse != nil {
        // handle response
    }
}
```

## PostV2AccessTokens

Creates and returns a personal access token.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AccessTokens.PostV2AccessTokens(ctx, shared.CreateAccessTokenRequest{
        Scopes: []string{
            "quo",
        },
        TokenLabel: "My read only token",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAccessTokensResponse != nil {
        // handle response
    }
}
```
