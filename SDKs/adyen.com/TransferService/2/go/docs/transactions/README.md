# Transactions

### Available Operations

* [GetTransactions](#gettransactions) - Get all transactions
* [GetTransactionsID](#gettransactionsid) - Get a transaction

## GetTransactions

Returns all transactions related to a balance account with a payment instrument of type **bankAccount**.

This endpoint supports cursor-based pagination. The response returns the first page of results, and returns links to the next page when applicable. You can use the links to page through the results. The response also returns links to the previous page when applicable.

### Example Usage

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
        AccountHolderID: sdk.String("deserunt"),
        BalanceAccountID: sdk.String("suscipit"),
        BalancePlatform: sdk.String("iure"),
        CreatedSince: types.MustTimeFromString("2022-02-09T12:04:06.508Z"),
        CreatedUntil: types.MustTimeFromString("2022-01-14T06:18:51.036Z"),
        Cursor: sdk.String("tempora"),
        Limit: sdk.Int(383441),
        PaymentInstrumentID: sdk.String("molestiae"),
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

## GetTransactionsID

Returns a transaction.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Transactions.GetTransactionsID(ctx, operations.GetTransactionsIDRequest{
        ID: "cc8796ed-151a-405d-bc2d-df7cc78ca1ba",
    }, operations.GetTransactionsIDSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Transaction != nil {
        // handle response
    }
}
```
