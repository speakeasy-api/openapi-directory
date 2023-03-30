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
            FromDate: "unde",
            Hydrate: []GetAccountingHydrateEnum{
                "items",
                "items",
                "items",
            },
            Limit: 857946,
            OrderIds: []int64{
                847252,
                423655,
                623564,
            },
            Page: 645894,
            ToDate: "eum",
            WarehouseIds: []int64{
                297534,
                891773,
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