# MarketplacesOrdersV3Order

### Available Operations

* [ChangeOrderV3](#changeorderv3) - Change your marketplace Order Information (accept, ship, etc.)
* [ClearMerchantOrderInfoV3](#clearmerchantorderinfov3) - Clear an Order's merchant information
* [GetOrderChangeReportingV3](#getorderchangereportingv3) - Get the order change reporting
* [GetOrderHistoryV3](#getorderhistoryv3) - Get an Order's harvest and change history
* [GetOrderV3](#getorderv3) - Get full Order and Order Item(s) properties
* [HarvestAccount](#harvestaccount) - Send harvest request for an Account
* [HarvestOrderV3](#harvestorderv3) - Send harvest request for a single Order
* [HeadOrderV3](#headorderv3) - Get the meta information about the order (ETag, Last-Modified)
* [SetMerchantOrderInfoV3](#setmerchantorderinfov3) - Set an Order's merchant information

## ChangeOrderV3

Change your marketplace Order Information (accept, ship, etc.)

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
    res, err := s.MarketplacesOrdersV3Order.ChangeOrderV3(ctx, operations.ChangeOrderV3Request{
        RequestBody: map[string]string{
            "recusandae": "omnis",
        },
        AccountID: 309251,
        BeezUPOrderID: "764a3e86-5e79-456f-9251-a5a9da660ff5",
        ChangeOrderType: "in",
        MarketplaceTechnicalCode: "nam",
        TestMode: sdk.Bool(false),
        UserName: "Tressie_Nienow26",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ClearMerchantOrderInfoV3

Clear an Order's merchant information

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
    res, err := s.MarketplacesOrdersV3Order.ClearMerchantOrderInfoV3(ctx, operations.ClearMerchantOrderInfoV3Request{
        AccountID: 976226,
        BeezUPOrderID: "9efc1b45-12c1-4032-a48d-c2f615199ebf",
        MarketplaceTechnicalCode: "illum",
        TestMode: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOrderChangeReportingV3

This operation will help you to know the status of your order change operation

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
    res, err := s.MarketplacesOrdersV3Order.GetOrderChangeReportingV3(ctx, operations.GetOrderChangeReportingV3Request{
        AccountID: 52508,
        BeezUPOrderID: "e9fe6c63-2ca3-4aed-8117-996312fde047",
        MarketplaceTechnicalCode: "molestiae",
        OrderChangeExecutionUUID: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChangeOrderReporting != nil {
        // handle response
    }
}
```

## GetOrderHistoryV3

Get an Order's harvest and change history

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
    res, err := s.MarketplacesOrdersV3Order.GetOrderHistoryV3(ctx, operations.GetOrderHistoryV3Request{
        AccountID: 479754,
        BeezUPOrderID: "78ff61d0-1747-4636-8a15-db6a660659a1",
        MarketplaceTechnicalCode: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderHistory != nil {
        // handle response
    }
}
```

## GetOrderV3

Get full Order and Order Item(s) properties

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
    res, err := s.MarketplacesOrdersV3Order.GetOrderV3(ctx, operations.GetOrderV3Request{
        IfNoneMatch: sdk.String("possimus"),
        AccountID: 913992,
        BeezUPOrderID: "aab5851d-6c64-45b0-8b61-891baa0fe1ad",
        MarketplaceTechnicalCode: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderWithLinks != nil {
        // handle response
    }
}
```

## HarvestAccount

Send harvest request for an Account

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
    res, err := s.MarketplacesOrdersV3Order.HarvestAccount(ctx, operations.HarvestAccountRequest{
        AccountID: 29190,
        BeezUPOrderID: sdk.String("alias"),
        MarketplaceOrderID: sdk.String("deleniti"),
        MarketplaceTechnicalCode: "earum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## HarvestOrderV3

Send harvest request for a single Order

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
    res, err := s.MarketplacesOrdersV3Order.HarvestOrderV3(ctx, operations.HarvestOrderV3Request{
        AccountID: 404244,
        BeezUPOrderID: "f8c5f350-d8cd-4b5a-b418-143010421813",
        MarketplaceTechnicalCode: "fugiat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## HeadOrderV3

The purpose of this operation is to reduce the bandwith usage by getting just the meta information about the order (ETag, Last-Modified) with the body.
This could be useful


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
    res, err := s.MarketplacesOrdersV3Order.HeadOrderV3(ctx, operations.HeadOrderV3Request{
        IfNoneMatch: sdk.String("ipsam"),
        AccountID: 162120,
        BeezUPOrderID: "08ece7e2-53b6-4684-91c6-c6e205e16dea",
        MarketplaceTechnicalCode: "harum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SetMerchantOrderInfoV3

Set an Order's merchant information

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
    res, err := s.MarketplacesOrdersV3Order.SetMerchantOrderInfoV3(ctx, operations.SetMerchantOrderInfoV3Request{
        AccountID: 192718,
        BeezUPOrderID: "fec9578a-6458-4427-ba84-18d162309fb0",
        MarketplaceTechnicalCode: "omnis",
        SetMerchantOrderInfoRequest: shared.SetMerchantOrderInfoRequest{
            OrderMerchantECommerceSoftwareName: "Prestashop",
            OrderMerchantECommerceSoftwareVersion: "123.0.1",
            OrderMerchantOrderID: "MyOrderMerchantId",
        },
        TestMode: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
