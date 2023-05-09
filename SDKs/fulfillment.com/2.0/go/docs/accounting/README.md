# Accounting

### Available Operations

* [GetAccounting](#getaccounting) - List Order Accounting

## GetAccounting

Retrieves accounting activity during the queried timespan.

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
    res, err := s.Accounting.GetAccounting(ctx, operations.GetAccountingRequest{
        FromDate: "debitis",
        Hydrate: []GetAccountingHydrateEnum{
            operations.GetAccountingHydrateEnumItems,
        },
        Limit: sdk.Int64(963663),
        OrderIds: []int64{
            383441,
            477665,
        },
        Page: sdk.Int64(791725),
        ToDate: "placeat",
        WarehouseIds: []int64{
            479977,
            568045,
            392785,
        },
    }, operations.GetAccountingSecurity{
        FdcAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountingArrayV2 != nil {
        // handle response
    }
}
```
