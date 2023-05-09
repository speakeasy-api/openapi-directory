# BankAccountTransactions

## Overview

Bank feed bank accounts

### Available Operations

* [CreateBankTransactions](#createbanktransactions) - Create bank transactions
* [GetCreateBankAccountModel](#getcreatebankaccountmodel) - List push options for bank account bank transactions
* [ListBankAccountTransactions](#listbankaccounttransactions) - List bank transactions for bank account

## CreateBankTransactions

Posts bank transactions to the accounting package for a given company.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankTransactions) for integrations that support POST methods.

### Example Usage

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
            AccountID: sdk.String("numquam"),
            Transactions: []shared.BankTransactionLine{
                shared.BankTransactionLine{
                    Amount: 4663.11,
                    Balance: 4746.97,
                    ClearedOnDate: sdk.String("2022-10-23T00:00:00Z"),
                    Counterparty: sdk.String("velit"),
                    Description: sdk.String("error"),
                    ID: sdk.String("251aa52c-3f5a-4d01-9da1-ffe78f097b00"),
                    ModifiedDate: sdk.String("2022-10-23T00:00:00Z"),
                    Reconciled: false,
                    Reference: sdk.String("reprehenderit"),
                    SourceModifiedDate: sdk.String("2022-10-23T00:00:00Z"),
                    TransactionType: shared.BankTransactionTypeEnumFee,
                },
                shared.BankTransactionLine{
                    Amount: 9795.87,
                    Balance: 1201.96,
                    ClearedOnDate: sdk.String("2022-10-23T00:00:00Z"),
                    Counterparty: sdk.String("corporis"),
                    Description: sdk.String("dolore"),
                    ID: sdk.String("71b5e6e1-3b99-4d48-8e1e-91e450ad2abd"),
                    ModifiedDate: sdk.String("2022-10-23T00:00:00Z"),
                    Reconciled: false,
                    Reference: sdk.String("labore"),
                    SourceModifiedDate: sdk.String("2022-10-23T00:00:00Z"),
                    TransactionType: shared.BankTransactionTypeEnumDiv,
                },
            },
        },
        AccountID: "8a210b68-6988-11ed-a1eb-0242ac120002",
        AllowSyncOnPushComplete: sdk.Bool(false),
        CompanyID: "8a210b68-6988-11ed-a1eb-0242ac120002",
        ConnectionID: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
        TimeoutInMinutes: sdk.Int(183191),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBankTransactionsResponse != nil {
        // handle response
    }
}
```

## GetCreateBankAccountModel

Gets the options of pushing bank account transactions.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AuthHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BankAccountTransactions.GetCreateBankAccountModel(ctx, operations.GetCreateBankAccountModelRequest{
        AccountID: "8a210b68-6988-11ed-a1eb-0242ac120002",
        CompanyID: "8a210b68-6988-11ed-a1eb-0242ac120002",
        ConnectionID: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PushOption != nil {
        // handle response
    }
}
```

## ListBankAccountTransactions

Gets bank transactions for a given bank account ID

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AuthHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BankAccountTransactions.ListBankAccountTransactions(ctx, operations.ListBankAccountTransactionsRequest{
        AccountID: "8a210b68-6988-11ed-a1eb-0242ac120002",
        CompanyID: "8a210b68-6988-11ed-a1eb-0242ac120002",
        ConnectionID: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
        OrderBy: sdk.String("-modifiedDate"),
        Page: 1,
        PageSize: sdk.Int(100),
        Query: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BankTransactionsResponse != nil {
        // handle response
    }
}
```
