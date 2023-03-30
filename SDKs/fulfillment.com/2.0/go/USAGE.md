<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetAccountingRequest{
        Security: operations.GetAccountingSecurity{
            FdcAuth: shared.SchemeFdcAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.GetAccountingQueryParams{
            FromDate: "corrupti",
            Hydrate: []GetAccountingHydrateEnum{
                "items",
                "items",
                "items",
            },
            Limit: 715190,
            OrderIds: []int64{
                602763,
                857946,
                544883,
                847252,
            },
            Page: 423655,
            ToDate: "error",
            WarehouseIds: []int64{
                384382,
                437587,
                297534,
            },
        },
    }

    ctx := context.Background()
    res, err := s.Accounting.GetAccounting(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountingArrayV2 != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->