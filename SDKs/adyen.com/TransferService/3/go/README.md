# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/adyen.com/TransferService/3/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Transactions

* `GetTransactions` - Get all transactions
* `GetTransactionsID` - Get a transaction

### Transfers

* `PostTransfers` - Transfer funds
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
