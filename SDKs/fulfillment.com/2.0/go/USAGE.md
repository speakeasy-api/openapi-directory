<!-- Start SDK Example Usage -->
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
        FromDate: "corrupti",
        Hydrate: []GetAccountingHydrateEnum{
            operations.GetAccountingHydrateEnumItems,
            operations.GetAccountingHydrateEnumItems,
            operations.GetAccountingHydrateEnumItems,
        },
        Limit: sdk.Int64(715190),
        OrderIds: []int64{
            602763,
            857946,
            544883,
            847252,
        },
        Page: sdk.Int64(423655),
        ToDate: "error",
        WarehouseIds: []int64{
            384382,
            437587,
            297534,
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
<!-- End SDK Example Usage -->