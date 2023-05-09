# AccountMerchantLevel

### Available Operations

* [GetMerchants](#getmerchants) - Get a list of merchant accounts
* [GetMerchantsMerchantID](#getmerchantsmerchantid) - Get a merchant account
* [PostMerchants](#postmerchants) - Create a merchant account
* [PostMerchantsMerchantIDActivate](#postmerchantsmerchantidactivate) - Request to activate a merchant account

## GetMerchants

Returns the list of merchant accounts that your API credential has access to. The list is grouped into pages as defined by the query parameters. 

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Account read

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
    res, err := s.AccountMerchantLevel.GetMerchants(ctx, operations.GetMerchantsRequest{
        PageNumber: sdk.Int(617636),
        PageSize: sdk.Int(149675),
    }, operations.GetMerchantsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMerchantResponse != nil {
        // handle response
    }
}
```

## GetMerchantsMerchantID

Returns the merchant account specified in the path. Your API credential must have access to the merchant account.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Account read

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
    res, err := s.AccountMerchantLevel.GetMerchantsMerchantID(ctx, operations.GetMerchantsMerchantIDRequest{
        MerchantID: "iste",
    }, operations.GetMerchantsMerchantIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Merchant != nil {
        // handle response
    }
}
```

## PostMerchants

Creates a merchant account for the company account specified in the request.

Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Accounts read and write

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AccountMerchantLevel.PostMerchants(ctx, shared.CreateMerchantRequest{
        BusinessLineID: sdk.String("dolor"),
        CompanyID: "natus",
        Description: sdk.String("laboriosam"),
        LegalEntityID: sdk.String("hic"),
        PricingPlan: sdk.String("saepe"),
        Reference: sdk.String("fuga"),
        SalesChannels: []string{
            "corporis",
            "iste",
        },
    }, operations.PostMerchantsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMerchantResponse != nil {
        // handle response
    }
}
```

## PostMerchantsMerchantIDActivate

Sends a request to activate the merchant account identified in the path.

You get the result of the activation asychronously through a [`merchant.updated`](https://docs.adyen.com/api-explorer/ManagementNotification/latest/post/merchant.updated) webhook. Once the merchant account is activated, you can start using it to accept payments and payouts.

Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Accounts read and write

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
    res, err := s.AccountMerchantLevel.PostMerchantsMerchantIDActivate(ctx, operations.PostMerchantsMerchantIDActivateRequest{
        MerchantID: "iure",
    }, operations.PostMerchantsMerchantIDActivateSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RequestActivationResponse != nil {
        // handle response
    }
}
```
