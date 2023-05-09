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