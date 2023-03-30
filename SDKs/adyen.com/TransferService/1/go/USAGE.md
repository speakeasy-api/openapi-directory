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
            CreatedSince: "2022-05-25T23:01:07.203Z",
            CreatedUntil: "2022-08-22T02:34:45.820Z",
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