# MarketplacesOrdersExports

### Available Operations

* [ExportOrders](#exportorders) - Request a new Order report exportation to be generated
* [GetOrderExportations](#getorderexportations) - Get a paginated list of Order report exportations

## ExportOrders

A new file will be generated containing a summary of all the Orders matching the requested filter settings.

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
    res, err := s.MarketplacesOrdersExports.ExportOrders(ctx, shared.ExportOrderListRequest{
        Format: shared.ExportOrderListFormatEnumCsv.ToPointer(),
        OrderListRequestWithoutPagination: shared.OrderListRequestWithoutPagination{
            AccountIds: []int{
                1234,
                1234,
                1234,
                1234,
            },
            BeezUPOrderStatuses: []string{
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
            },
            MarketplaceOrderIds: []string{
                "AMAZON12345",
                "AMAZON12345",
                "AMAZON12345",
            },
            MarketplaceTechnicalCodes: []string{
                "Amazon",
                "Amazon",
                "Amazon",
                "Amazon",
            },
            OrderMerchantInfoSynchronizationStatus: sdk.String("All"),
            OrderBuyerName: sdk.String("Monroe"),
            OrderMerchantOrderIds: []string{
                "MyOrderMerchantId",
                "MyOrderMerchantId",
            },
            StoreIds: []string{
                "64f43358-63a1-47f7-97ec-0301fc39956b",
            },
        },
        StoreID: "64f43358-63a1-47f7-97ec-0301fc39956b",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOrderExportations

Get a paginated list of Order report exportations

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
    res, err := s.MarketplacesOrdersExports.GetOrderExportations(ctx, operations.GetOrderExportationsRequest{
        IfNoneMatch: sdk.String("quaerat"),
        PageNumber: 783235,
        PageSize: 801836,
        StoreID: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderExportations != nil {
        // handle response
    }
}
```
