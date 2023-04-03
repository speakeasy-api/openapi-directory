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

    req := shared.BalanceTransferRequest{
        Amount: shared.Amount{
            Currency: "corrupti",
            Value: 592845,
        },
        Description: "distinctio",
        FromMerchant: "quibusdam",
        Reference: "unde",
        ToMerchant: "nulla",
        Type: "credit",
    }

    ctx := context.Background()
    res, err := s.General.PostBalanceTransfer(ctx, req, operations.PostBalanceTransferSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BalanceTransferResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->