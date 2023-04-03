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
        AccountHolderID: "corrupti",
        BalanceAccountID: "provident",
        BalancePlatform: "distinctio",
        CreatedSince: "2021-03-11T23:22:42.658Z",
        CreatedUntil: "2021-05-14T08:28:11.899Z",
        Cursor: "illum",
        Limit: 423655,
        PaymentInstrumentID: "error",
    }

    ctx := context.Background()
    res, err := s.Transactions.GetTransactions(ctx, req, operations.GetTransactionsSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransactionSearchResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->