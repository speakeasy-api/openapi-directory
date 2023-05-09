# AllowedOriginsMerchantLevel

### Available Operations

* [DeleteMerchantsMerchantIDAPICredentialsAPICredentialIDAllowedOriginsOriginID](#deletemerchantsmerchantidapicredentialsapicredentialidallowedoriginsoriginid) - Delete an allowed origin
* [GetMerchantsMerchantIDAPICredentialsAPICredentialIDAllowedOrigins](#getmerchantsmerchantidapicredentialsapicredentialidallowedorigins) - Get a list of allowed origins
* [GetMerchantsMerchantIDAPICredentialsAPICredentialIDAllowedOriginsOriginID](#getmerchantsmerchantidapicredentialsapicredentialidallowedoriginsoriginid) - Get an allowed origin
* [PostMerchantsMerchantIDAPICredentialsAPICredentialIDAllowedOrigins](#postmerchantsmerchantidapicredentialsapicredentialidallowedorigins) - Create an allowed origin

## DeleteMerchantsMerchantIDAPICredentialsAPICredentialIDAllowedOriginsOriginID

Removes the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) identified in the path. As soon as an allowed origin is removed, we no longer accept client-side requests from that domain.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

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
    res, err := s.AllowedOriginsMerchantLevel.DeleteMerchantsMerchantIDAPICredentialsAPICredentialIDAllowedOriginsOriginID(ctx, operations.DeleteMerchantsMerchantIDAPICredentialsAPICredentialIDAllowedOriginsOriginIDRequest{
        APICredentialID: "occaecati",
        MerchantID: "enim",
        OriginID: "accusamus",
    }, operations.DeleteMerchantsMerchantIDAPICredentialsAPICredentialIDAllowedOriginsOriginIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetMerchantsMerchantIDAPICredentialsAPICredentialIDAllowedOrigins

Returns the list of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) for the API credential identified in the path.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

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
    res, err := s.AllowedOriginsMerchantLevel.GetMerchantsMerchantIDAPICredentialsAPICredentialIDAllowedOrigins(ctx, operations.GetMerchantsMerchantIDAPICredentialsAPICredentialIDAllowedOriginsRequest{
        APICredentialID: "delectus",
        MerchantID: "quidem",
    }, operations.GetMerchantsMerchantIDAPICredentialsAPICredentialIDAllowedOriginsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AllowedOriginsResponse != nil {
        // handle response
    }
}
```

## GetMerchantsMerchantIDAPICredentialsAPICredentialIDAllowedOriginsOriginID

Returns the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) identified in the path.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

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
    res, err := s.AllowedOriginsMerchantLevel.GetMerchantsMerchantIDAPICredentialsAPICredentialIDAllowedOriginsOriginID(ctx, operations.GetMerchantsMerchantIDAPICredentialsAPICredentialIDAllowedOriginsOriginIDRequest{
        APICredentialID: "provident",
        MerchantID: "nam",
        OriginID: "id",
    }, operations.GetMerchantsMerchantIDAPICredentialsAPICredentialIDAllowedOriginsOriginIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AllowedOrigin != nil {
        // handle response
    }
}
```

## PostMerchantsMerchantIDAPICredentialsAPICredentialIDAllowedOrigins

Adds a new [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) to the API credential's list of allowed origins.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

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
    res, err := s.AllowedOriginsMerchantLevel.PostMerchantsMerchantIDAPICredentialsAPICredentialIDAllowedOrigins(ctx, operations.PostMerchantsMerchantIDAPICredentialsAPICredentialIDAllowedOriginsRequest{
        AllowedOrigin: &shared.AllowedOrigin{
            Links: &shared.Links{
                Self: shared.LinksElement{
                    Href: sdk.String("blanditiis"),
                },
            },
            Domain: "deleniti",
            ID: sdk.String("f3a66997-074b-4a44-a9b6-e2141959890a"),
        },
        APICredentialID: "reiciendis",
        MerchantID: "mollitia",
    }, operations.PostMerchantsMerchantIDAPICredentialsAPICredentialIDAllowedOriginsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AllowedOriginsResponse != nil {
        // handle response
    }
}
```
