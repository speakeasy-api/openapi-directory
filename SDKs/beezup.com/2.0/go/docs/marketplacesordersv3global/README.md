# MarketplacesOrdersV3Global

### Available Operations

* [GetMarketplaceAccountsSynchronizationV3](#getmarketplaceaccountssynchronizationv3) - Get current synchronization status between your marketplaces and BeezUP accounts
* [GetOrderManagementReadyMarketplaceBusinessCode](#getordermanagementreadymarketplacebusinesscode) - Get the list of MarketplaceBusinessCode ready for Order Management
* [HarvestAllV3](#harvestallv3) - Send harvest request to all your marketplaces

## GetMarketplaceAccountsSynchronizationV3

Get current synchronization status between your marketplaces and BeezUP accounts

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
    res, err := s.MarketplacesOrdersV3Global.GetMarketplaceAccountsSynchronizationV3(ctx, operations.GetMarketplaceAccountsSynchronizationV3Request{
        IfNoneMatch: sdk.String("quae"),
        StoreIds: []string{
            "eveniet",
            "qui",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountSynchronizationList != nil {
        // handle response
    }
}
```

## GetOrderManagementReadyMarketplaceBusinessCode

Get the list of MarketplaceBusinessCode ready for Order Management

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
    res, err := s.MarketplacesOrdersV3Global.GetOrderManagementReadyMarketplaceBusinessCode(ctx, operations.GetOrderManagementReadyMarketplaceBusinessCodeRequest{
        AcceptLanguage: []string{
            "iure",
            "necessitatibus",
            "ratione",
        },
        StoreIds: []string{
            "distinctio",
            "voluptatum",
            "rem",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OMReadyMarketplaceBusinessCodeResponse != nil {
        // handle response
    }
}
```

## HarvestAllV3

Send harvest request to all your marketplaces

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
    res, err := s.MarketplacesOrdersV3Global.HarvestAllV3(ctx, operations.HarvestAllV3Request{
        StoreID: sdk.String("aliquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
