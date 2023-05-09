# MarketplacesOrdersGlobal

### Available Operations

* [~~GetMarketplaceAccountsSynchronization~~](#getmarketplaceaccountssynchronization) - [DEPRECATED] Get current synchronization status between your marketplaces and BeezUP accounts :warning: **Deprecated**
* [~~GetOrderIndex~~](#getorderindex) - [DEPRECATED] Get all actions you can do on the order API :warning: **Deprecated**
* [~~HarvestAll~~](#harvestall) - [DEPRECATED] Send harvest request to all your marketplaces :warning: **Deprecated**

## ~~GetMarketplaceAccountsSynchronization~~

Use /orders/v3

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
    res, err := s.MarketplacesOrdersGlobal.GetMarketplaceAccountsSynchronization(ctx, operations.GetMarketplaceAccountsSynchronizationRequest{
        IfNoneMatch: sdk.String("ab"),
        StoreID: sdk.String("adipisci"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountSynchronizationList != nil {
        // handle response
    }
}
```

## ~~GetOrderIndex~~

[DEPRECATED] Get all actions you can do on the order API

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
    res, err := s.MarketplacesOrdersGlobal.GetOrderIndex(ctx, operations.GetOrderIndexRequest{
        IfNoneMatch: sdk.String("fuga"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderIndex != nil {
        // handle response
    }
}
```

## ~~HarvestAll~~

[DEPRECATED] Send harvest request to all your marketplaces

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
    res, err := s.MarketplacesOrdersGlobal.HarvestAll(ctx, operations.HarvestAllRequest{
        StoreID: sdk.String("id"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
