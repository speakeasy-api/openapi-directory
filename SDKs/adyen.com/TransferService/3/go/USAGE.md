<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Transactions.GetTransactions(ctx, operations.GetTransactionsRequest{
        AccountHolderID: sdk.String("corrupti"),
        BalanceAccountID: sdk.String("provident"),
        BalancePlatform: sdk.String("distinctio"),
        CreatedSince: types.MustTimeFromString("2021-03-11T23:22:42.658Z"),
        CreatedUntil: types.MustTimeFromString("2021-05-14T08:28:11.899Z"),
        Cursor: sdk.String("illum"),
        Limit: sdk.Int(423655),
        PaymentInstrumentID: sdk.String("error"),
    }, operations.GetTransactionsSecurity{
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