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
            AccountHolderID: "corrupti",
            BalanceAccountID: "provident",
            BalancePlatform: "distinctio",
            CreatedSince: "2022-05-25T22:35:08.499Z",
            CreatedUntil: "2022-08-22T02:08:47.115Z",
            Cursor: "nulla",
            Limit: 544883,
            PaymentInstrumentID: "illum",
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