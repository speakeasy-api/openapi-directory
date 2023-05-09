# MarketplacesOrdersList

### Available Operations

* [~~GetOrderListFull~~](#getorderlistfull) - [DEPRECATED] Get a paginated list of all Orders with all Order and Order Item(s) properties :warning: **Deprecated**
* [~~GetOrderListLight~~](#getorderlistlight) - [DEPRECATED] Get a paginated list of all Orders without details :warning: **Deprecated**

## ~~GetOrderListFull~~

DEPRECATED - Use /orders/v3 instead
The purpose of this operation is to reduce the amount of request to the API.\
\
Previous implmentation of this feature only returned a partial (light) version of the Orders. The purpose of this API is to reduce the number of incoming requests by returning the complete (full) Order and Order Item(s) properties.


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
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.MarketplacesOrdersList.GetOrderListFull(ctx, operations.GetOrderListFullRequest{
        AcceptEncoding: []string{
            "velit",
            "culpa",
        },
        OrderListRequest: shared.OrderListRequest{
            AccountIds: []int{
                1234,
                1234,
                1234,
            },
            BeezUPOrderStatuses: []string{
                "Shipped",
                "Shipped",
                "Shipped",
                "Shipped",
            },
            BeginPeriodUtcDate: types.MustTimeFromString("2017-03-01T13:10:01Z"),
            DateSearchType: shared.DateSearchTypeEnumPurchase.ToPointer(),
            EndPeriodUtcDate: types.MustTimeFromString("2017-04-01T13:10:01Z"),
            InvoiceAvailabilityType: sdk.String("All"),
            MarketplaceBusinessCodes: []string{
                "GOSPORT",
                "GOSPORT",
                "GOSPORT",
                "GOSPORT",
            },
            MarketplaceOrderIds: []string{
                "AMAZON12345",
                "AMAZON12345",
            },
            MarketplaceTechnicalCodes: []string{
                "Amazon",
                "Amazon",
            },
            OrderMerchantInfoSynchronizationStatus: sdk.String("All"),
            OrderBuyerName: sdk.String("Monroe"),
            OrderMerchantOrderIds: []string{
                "MyOrderMerchantId",
                "MyOrderMerchantId",
                "MyOrderMerchantId",
            },
            PageNumber: 1,
            PageSize: 100,
            StoreIds: []string{
                "64f43358-63a1-47f7-97ec-0301fc39956b",
                "64f43358-63a1-47f7-97ec-0301fc39956b",
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderListFull != nil {
        // handle response
    }
}
```

## ~~GetOrderListLight~~

Use /orders/v3 instead

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.MarketplacesOrdersList.GetOrderListLight(ctx, shared.OrderListRequest{
        AccountIds: []int{
            1234,
            1234,
        },
        BeezUPOrderStatuses: []string{
            "Shipped",
            "Shipped",
            "Shipped",
            "Shipped",
        },
        BeginPeriodUtcDate: types.MustTimeFromString("2017-03-01T13:10:01Z"),
        DateSearchType: shared.DateSearchTypeEnumMarketPlaceModification.ToPointer(),
        EndPeriodUtcDate: types.MustTimeFromString("2017-04-01T13:10:01Z"),
        InvoiceAvailabilityType: sdk.String("All"),
        MarketplaceBusinessCodes: []string{
            "GOSPORT",
            "GOSPORT",
            "GOSPORT",
        },
        MarketplaceOrderIds: []string{
            "AMAZON12345",
            "AMAZON12345",
        },
        MarketplaceTechnicalCodes: []string{
            "Amazon",
            "Amazon",
        },
        OrderMerchantInfoSynchronizationStatus: sdk.String("All"),
        OrderBuyerName: sdk.String("Monroe"),
        OrderMerchantOrderIds: []string{
            "MyOrderMerchantId",
            "MyOrderMerchantId",
        },
        PageNumber: 1,
        PageSize: 100,
        StoreIds: []string{
            "64f43358-63a1-47f7-97ec-0301fc39956b",
            "64f43358-63a1-47f7-97ec-0301fc39956b",
            "64f43358-63a1-47f7-97ec-0301fc39956b",
            "64f43358-63a1-47f7-97ec-0301fc39956b",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderListLight != nil {
        // handle response
    }
}
```
