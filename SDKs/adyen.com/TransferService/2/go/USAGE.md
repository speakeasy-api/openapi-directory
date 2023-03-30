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
            CreatedSince: "2022-05-25T20:03:55.532Z",
            CreatedUntil: "2022-08-21T23:37:34.148Z",
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