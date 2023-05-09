# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/codat.io/bank-feeds/2.1.0/go
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AuthHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BankAccountTransactions.CreateBankTransactions(ctx, operations.CreateBankTransactionsRequest{
        BankTransactions: &shared.BankTransactions{
            AccountID: sdk.String("corrupti"),
            Transactions: []shared.BankTransactionLine{
                shared.BankTransactionLine{
                    Amount: 7151.9,
                    Balance: 8442.66,
                    ClearedOnDate: sdk.String("2022-10-23T00:00:00Z"),
                    Counterparty: sdk.String("unde"),
                    Description: sdk.String("nulla"),
                    ID: sdk.String("8d69a674-e0f4-467c-8879-6ed151a05dfc"),
                    ModifiedDate: sdk.String("2022-10-23T00:00:00Z"),
                    Reconciled: false,
                    Reference: sdk.String("odit"),
                    SourceModifiedDate: sdk.String("2022-10-23T00:00:00Z"),
                    TransactionType: shared.BankTransactionTypeEnumDirectDebit,
                },
                shared.BankTransactionLine{
                    Amount: 8700.88,
                    Balance: 9786.19,
                    ClearedOnDate: sdk.String("2022-10-23T00:00:00Z"),
                    Counterparty: sdk.String("molestiae"),
                    Description: sdk.String("quod"),
                    ID: sdk.String("c78ca1ba-928f-4c81-a742-cb7392059293"),
                    ModifiedDate: sdk.String("2022-10-23T00:00:00Z"),
                    Reconciled: false,
                    Reference: sdk.String("natus"),
                    SourceModifiedDate: sdk.String("2022-10-23T00:00:00Z"),
                    TransactionType: shared.BankTransactionTypeEnumSerChg,
                },
                shared.BankTransactionLine{
                    Amount: 9437.49,
                    Balance: 9025.99,
                    ClearedOnDate: sdk.String("2022-10-23T00:00:00Z"),
                    Counterparty: sdk.String("fuga"),
                    Description: sdk.String("in"),
                    ID: sdk.String("596eb10f-aaa2-4352-8595-5907aff1a3a2"),
                    ModifiedDate: sdk.String("2022-10-23T00:00:00Z"),
                    Reconciled: false,
                    Reference: sdk.String("repellat"),
                    SourceModifiedDate: sdk.String("2022-10-23T00:00:00Z"),
                    TransactionType: shared.BankTransactionTypeEnumCheck,
                },
            },
        },
        AccountID: "8a210b68-6988-11ed-a1eb-0242ac120002",
        AllowSyncOnPushComplete: sdk.Bool(false),
        CompanyID: "8a210b68-6988-11ed-a1eb-0242ac120002",
        ConnectionID: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
        TimeoutInMinutes: sdk.Int(581850),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBankTransactionsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [BankAccountTransactions](docs/bankaccounttransactions/README.md)

* [CreateBankTransactions](docs/bankaccounttransactions/README.md#createbanktransactions) - Create bank transactions
* [GetCreateBankAccountModel](docs/bankaccounttransactions/README.md#getcreatebankaccountmodel) - List push options for bank account bank transactions
* [ListBankAccountTransactions](docs/bankaccounttransactions/README.md#listbankaccounttransactions) - List bank transactions for bank account

### [BankFeedAccounts](docs/bankfeedaccounts/README.md)

* [CreateBankFeed](docs/bankfeedaccounts/README.md#createbankfeed) - Create bank feed bank accounts
* [GetBankFeeds](docs/bankfeedaccounts/README.md#getbankfeeds) - List bank feed bank accounts
* [UpdateBankFeed](docs/bankfeedaccounts/README.md#updatebankfeed) - Update bank feed bank account
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
