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

    req := operations.GetTransactionsRequest{
        Security: operations.GetTransactionsSecurity{
            APIKeyAuth: shared.SchemeAPIKeyAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.GetTransactionsQueryParams{
            AccountHolderID: "unde",
            BalanceAccountID: "deserunt",
            BalancePlatform: "porro",
            CreatedSince: "2022-05-25T08:44:09.163Z",
            CreatedUntil: "2022-08-21T12:17:47.779Z",
            Cursor: "vero",
            Limit: 544883,
            PaymentInstrumentID: "nulla",
        },
    }

    ctx := context.Background()
    res, err := s.Transactions.GetTransactions(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.TransactionSearchResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->