# APICredentialsMerchantLevel

### Available Operations

* [GetMerchantsMerchantIDAPICredentials](#getmerchantsmerchantidapicredentials) - Get a list of API credentials
* [GetMerchantsMerchantIDAPICredentialsAPICredentialID](#getmerchantsmerchantidapicredentialsapicredentialid) - Get an API credential
* [PatchMerchantsMerchantIDAPICredentialsAPICredentialID](#patchmerchantsmerchantidapicredentialsapicredentialid) - Update an API credential
* [PostMerchantsMerchantIDAPICredentials](#postmerchantsmerchantidapicredentials) - Create an API credential

## GetMerchantsMerchantIDAPICredentials

Returns the list of [API credentials](https://docs.adyen.com/development-resources/api-credentials) for the merchant account. The list is grouped into pages as defined by the query parameters.

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
    res, err := s.APICredentialsMerchantLevel.GetMerchantsMerchantIDAPICredentials(ctx, operations.GetMerchantsMerchantIDAPICredentialsRequest{
        MerchantID: "ipsam",
        PageNumber: sdk.Int(832620),
        PageSize: sdk.Int(957156),
    }, operations.GetMerchantsMerchantIDAPICredentialsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMerchantAPICredentialsResponse != nil {
        // handle response
    }
}
```

## GetMerchantsMerchantIDAPICredentialsAPICredentialID

Returns the [API credential](https://docs.adyen.com/development-resources/api-credentials) identified in the path.

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
    res, err := s.APICredentialsMerchantLevel.GetMerchantsMerchantIDAPICredentialsAPICredentialID(ctx, operations.GetMerchantsMerchantIDAPICredentialsAPICredentialIDRequest{
        APICredentialID: "quo",
        MerchantID: "odit",
    }, operations.GetMerchantsMerchantIDAPICredentialsAPICredentialIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICredential != nil {
        // handle response
    }
}
```

## PatchMerchantsMerchantIDAPICredentialsAPICredentialID

Changes the API credential's roles, or allowed origins. The request has the new values for the fields you want to change. The response contains the full updated API credential, including the new values from the request. 

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
    res, err := s.APICredentialsMerchantLevel.PatchMerchantsMerchantIDAPICredentialsAPICredentialID(ctx, operations.PatchMerchantsMerchantIDAPICredentialsAPICredentialIDRequest{
        UpdateMerchantAPICredentialRequest: &shared.UpdateMerchantAPICredentialRequest{
            Active: sdk.Bool(false),
            AllowedOrigins: []string{
                "at",
                "maiores",
                "molestiae",
                "quod",
            },
            Description: sdk.String("quod"),
            Roles: []string{
                "totam",
                "porro",
            },
        },
        APICredentialID: "dolorum",
        MerchantID: "dicta",
    }, operations.PatchMerchantsMerchantIDAPICredentialsAPICredentialIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICredential != nil {
        // handle response
    }
}
```

## PostMerchantsMerchantIDAPICredentials

Creates an [API credential](https://docs.adyen.com/development-resources/api-credentials) for the company account identified in the path. In the request, you can specify the roles and allowed origins for the new API credential.

The response includes the:
* [API key](https://docs.adyen.com/development-resources/api-authentication#api-key-authentication): used for API request authentication.
* [Client key](https://docs.adyen.com/development-resources/client-side-authentication#how-it-works): public key used for client-side authentication.
* [Username and password](https://docs.adyen.com/development-resources/api-authentication#using-basic-authentication): used for basic authentication.

> Make sure you store the API key securely in your system. You won't be able to retrieve it later.

If your API key is lost or compromised, you need to [generate a new API key](https://docs.adyen.com/api-explorer/#/ManagementService/v1/post/merchants/{merchantId}/apiCredentials/{apiCredentialId}/generateApiKey).

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
    res, err := s.APICredentialsMerchantLevel.PostMerchantsMerchantIDAPICredentials(ctx, operations.PostMerchantsMerchantIDAPICredentialsRequest{
        CreateMerchantAPICredentialRequest: &shared.CreateMerchantAPICredentialRequest{
            AllowedOrigins: []string{
                "officia",
                "occaecati",
                "fugit",
            },
            Description: sdk.String("deleniti"),
            Roles: []string{
                "optio",
                "totam",
                "beatae",
                "commodi",
            },
        },
        MerchantID: "molestiae",
    }, operations.PostMerchantsMerchantIDAPICredentialsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAPICredentialResponse != nil {
        // handle response
    }
}
```
