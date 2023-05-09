# Tokens

### Available Operations

* [DeleteToken](#deletetoken) - Use to delete a token
* [GetToken](#gettoken) - Get a single token's data
* [GetTokens](#gettokens) - List tokens
* [PatchToken](#patchtoken) - Update a token
* [PostTokens](#posttokens) - Create a new token

## DeleteToken

Use to delete a token

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Tokens.DeleteToken(ctx, operations.DeleteTokenRequest{
        ID: "9f9dfe0a-b7da-48a5-8ce1-87f86bc173d6",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetToken

Get a single token's data

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Tokens.GetToken(ctx, operations.GetTokenRequest{
        ID: "89eee952-6f8d-4986-a881-ead4f0e10125",
        IncludeDriver: sdk.Bool(false),
        IncludeOrganization: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetTokens

List tokens

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Tokens.GetTokens(ctx, operations.GetTokensRequest{
        CreatedAtDollarGte: types.MustTimeFromString("2022-10-03T00:21:18.046Z"),
        CreatedAtDollarLte: types.MustTimeFromString("2021-04-24T18:03:33.752Z"),
        IncludeDriver: sdk.Bool(false),
        IncludeOrganization: sdk.Bool(false),
        PaginateEnabled: sdk.Bool(false),
        PaginateLimit: sdk.Int64(300029),
        PaginatePage: sdk.String("saepe"),
        SortBy: sdk.String("consequuntur"),
        SortOrder: shared.SortOrder1EnumAsc.ToPointer(),
        UpdatedAtDollarGte: types.MustTimeFromString("2021-03-17T06:13:21.698Z"),
        UpdatedAtDollarLte: types.MustTimeFromString("2022-10-06T02:44:18.773Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTokens200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PatchToken

Update a token

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Tokens.PatchToken(ctx, operations.PatchTokenRequest{
        RequestBody: operations.PatchTokenRequestBody{
            Active: sdk.Bool(false),
            Channel: operations.PatchTokenRequestBodyChannelEnumSms.ToPointer(),
            Driver: sdk.String("occaecati"),
            PhysicalID: sdk.String("consequuntur"),
            Type: sdk.String("fugit"),
        },
        ID: "a57a15be-3e06-4080-be2b-6e3ab8845f05",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatchToken201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostTokens

Create a new token

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Tokens.PostTokens(ctx, operations.PostTokensRequestBody{
        Active: false,
        Channel: operations.PostTokensRequestBodyChannelEnumTelegram,
        Driver: "nihil",
        PhysicalID: "mollitia",
        Type: sdk.String("voluptas"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostTokens201ApplicationJSONObject != nil {
        // handle response
    }
}
```
