# MarketplacesOrdersOrder

### Available Operations

* [~~ChangeOrder~~](#changeorder) - [DEPRECATED] Change your marketplace Order Information (accept, ship, etc.) :warning: **Deprecated**
* [~~ClearMerchantOrderInfo~~](#clearmerchantorderinfo) - [DEPRECATED] Clear an Order's merchant information :warning: **Deprecated**
* [~~GetOrder~~](#getorder) - [DEPRECATED] DEPRECATED - Get full Order and Order Item(s) properties :warning: **Deprecated**
* [~~GetOrderHistory~~](#getorderhistory) - [DEPRECATED] Get an Order's harvest and change history :warning: **Deprecated**
* [~~HarvestOrder~~](#harvestorder) - [DEPRECATED] Send harvest request for a single Order :warning: **Deprecated**
* [~~HeadOrder~~](#headorder) - [DEPRECATED] DEPRECATED - Get the meta information about the order (ETag, Last-Modified) :warning: **Deprecated**
* [~~SetMerchantOrderInfo~~](#setmerchantorderinfo) - [DEPRECATED] Set an Order's merchant information :warning: **Deprecated**

## ~~ChangeOrder~~

[DEPRECATED] Change your marketplace Order Information (accept, ship, etc.)

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
    res, err := s.MarketplacesOrdersOrder.ChangeOrder(ctx, operations.ChangeOrderRequest{
        IfMatch: "assumenda",
        RequestBody: map[string]string{
            "recusandae": "aliquid",
            "aperiam": "cum",
        },
        AccountID: 232627,
        BeezUPOrderID: "75ed4f6f-bee4-41f3-b317-fe35b60eb1ea",
        ChangeOrderType: "tempora",
        MarketplaceTechnicalCode: "aspernatur",
        TestMode: sdk.Bool(false),
        UserName: "Genevieve.Hirthe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~ClearMerchantOrderInfo~~

[DEPRECATED] Clear an Order's merchant information

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
    res, err := s.MarketplacesOrdersOrder.ClearMerchantOrderInfo(ctx, operations.ClearMerchantOrderInfoRequest{
        AccountID: 748789,
        BeezUPOrderID: "a3c28744-ed53-4b88-b3a8-d8f5c0b2f2fb",
        MarketplaceTechnicalCode: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~GetOrder~~

DEPRECATED - Use /orders/v3 instead

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
    res, err := s.MarketplacesOrdersOrder.GetOrder(ctx, operations.GetOrderRequest{
        IfNoneMatch: sdk.String("expedita"),
        AccountID: 70869,
        BeezUPOrderID: "94a276b2-6916-4fe1-b08f-4294e3698f44",
        MarketplaceTechnicalCode: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Order != nil {
        // handle response
    }
}
```

## ~~GetOrderHistory~~

[DEPRECATED] Get an Order's harvest and change history

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
    res, err := s.MarketplacesOrdersOrder.GetOrderHistory(ctx, operations.GetOrderHistoryRequest{
        IfNoneMatch: sdk.String("reiciendis"),
        AccountID: 401713,
        BeezUPOrderID: "03e8b445-e80c-4a55-afd2-0e457e1858b6",
        MarketplaceTechnicalCode: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderHistory != nil {
        // handle response
    }
}
```

## ~~HarvestOrder~~

[DEPRECATED] Send harvest request for a single Order

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
    res, err := s.MarketplacesOrdersOrder.HarvestOrder(ctx, operations.HarvestOrderRequest{
        AccountID: 530089,
        BeezUPOrderID: "9fbe3a5a-a8e4-4824-90ab-4075088e5186",
        MarketplaceTechnicalCode: "sed",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~HeadOrder~~

DEPRECATED - Use /orders/v3 instead
The purpose of this operation is to reduce the bandwith usage by getting just the meta information about the order (ETag, Last-Modified) with the body.
This could be useful


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
    res, err := s.MarketplacesOrdersOrder.HeadOrder(ctx, operations.HeadOrderRequest{
        IfNoneMatch: sdk.String("sit"),
        AccountID: 425508,
        BeezUPOrderID: "5e904f3b-1194-4b8a-bf60-3a79f9dfe0ab",
        MarketplaceTechnicalCode: "reprehenderit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~SetMerchantOrderInfo~~

[DEPRECATED] Set an Order's merchant information

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.MarketplacesOrdersOrder.SetMerchantOrderInfo(ctx, operations.SetMerchantOrderInfoRequest{
        AccountID: 813679,
        BeezUPOrderID: "a8a50ce1-87f8-46bc-973d-689eee9526f8",
        MarketplaceTechnicalCode: "at",
        SetMerchantOrderInfoRequest: shared.SetMerchantOrderInfoRequest{
            OrderMerchantECommerceSoftwareName: "Prestashop",
            OrderMerchantECommerceSoftwareVersion: "123.0.1",
            OrderMerchantOrderID: "MyOrderMerchantId",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
