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

    req := operations.PostBalanceTransferRequest{
        Security: operations.PostBalanceTransferSecurity{
            APIKeyAuth: &shared.SchemeAPIKeyAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &shared.BalanceTransferRequest{
            Amount: shared.Amount{
                Currency: "unde",
                Value: 592845,
            },
            Description: "porro",
            FromMerchant: "nulla",
            Reference: "id",
            ToMerchant: "vero",
            Type: "credit",
        },
    }

    ctx := context.Background()
    res, err := s.General.PostBalanceTransfer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BalanceTransferResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->