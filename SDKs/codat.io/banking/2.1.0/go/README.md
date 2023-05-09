# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/codat.io/banking/2.1.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AuthHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AccountBalances.ListAccountBalances(ctx, operations.ListAccountBalancesRequest{
        CompanyID: "8a210b68-6988-11ed-a1eb-0242ac120002",
        ConnectionID: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
        OrderBy: sdk.String("-modifiedDate"),
        Page: 1,
        PageSize: sdk.Int(100),
        Query: sdk.String("corrupti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountBalances != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [AccountBalances](docs/accountbalances/README.md)

* [ListAccountBalances](docs/accountbalances/README.md#listaccountbalances) - List account balances

### [Accounts](docs/accounts/README.md)

* [~~GetAccount~~](docs/accounts/README.md#getaccount) - Get account :warning: **Deprecated**
* [ListAccounts](docs/accounts/README.md#listaccounts) - List accounts

### [TransactionCategories](docs/transactioncategories/README.md)

* [~~GetTransactionCategory~~](docs/transactioncategories/README.md#gettransactioncategory) - Get transaction category :warning: **Deprecated**
* [ListTransactionCategories](docs/transactioncategories/README.md#listtransactioncategories) - List all transaction categories

### [Transactions](docs/transactions/README.md)

* [~~GetTransaction~~](docs/transactions/README.md#gettransaction) - Get bank transaction :warning: **Deprecated**
* [ListBankTransactions](docs/transactions/README.md#listbanktransactions) - List banking transactions
* [ListTransactions](docs/transactions/README.md#listtransactions) - List transactions
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
