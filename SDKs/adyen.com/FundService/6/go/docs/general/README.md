# General

### Available Operations

* [PostAccountHolderBalance](#postaccountholderbalance) - Get the balances of an account holder
* [PostAccountHolderTransactionList](#postaccountholdertransactionlist) - Get a list of transactions
* [PostDebitAccountHolder](#postdebitaccountholder) - Send a direct debit request
* [PostPayoutAccountHolder](#postpayoutaccountholder) - Pay out from an account to the account holder
* [PostRefundFundsTransfer](#postrefundfundstransfer) - Refund a funds transfer
* [PostRefundNotPaidOutTransfers](#postrefundnotpaidouttransfers) - Refund all transactions of an account since the most recent payout
* [PostSetupBeneficiary](#postsetupbeneficiary) - Designate a beneficiary account and transfer the benefactor's current balance
* [PostTransferFunds](#posttransferfunds) - Transfer funds between platform accounts

## PostAccountHolderBalance

Returns the account balances of an account holder. An account's balances are organized according by currencies. This mean that an account may have multiple balances: one for each currency.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.General.PostAccountHolderBalance(ctx, shared.AccountHolderBalanceRequest{
        AccountHolderCode: "provident",
    }, operations.PostAccountHolderBalanceSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountHolderBalanceResponse != nil {
        // handle response
    }
}
```

## PostAccountHolderTransactionList

Returns a list of transactions for an account holder's accounts. You can specify the accounts and transaction statuses to be included on the list. The call returns a maximum of 50 transactions for each account. To retrieve all transactions, you must make another call with the 'page' value incremented. Transactions are listed in chronological order, with the most recent transaction first.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.General.PostAccountHolderTransactionList(ctx, shared.AccountHolderTransactionListRequest{
        AccountHolderCode: "distinctio",
        TransactionListsPerAccount: []shared.TransactionListForAccount{
            shared.TransactionListForAccount{
                AccountCode: "unde",
                Page: 857946,
            },
            shared.TransactionListForAccount{
                AccountCode: "corrupti",
                Page: 847252,
            },
            shared.TransactionListForAccount{
                AccountCode: "vel",
                Page: 623564,
            },
            shared.TransactionListForAccount{
                AccountCode: "deserunt",
                Page: 384382,
            },
        },
        TransactionStatuses: []shared.AccountHolderTransactionListRequestTransactionStatusesEnum{
            shared.AccountHolderTransactionListRequestTransactionStatusesEnumCreditFailed,
            shared.AccountHolderTransactionListRequestTransactionStatusesEnumReCreditedReceived,
        },
    }, operations.PostAccountHolderTransactionListSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountHolderTransactionListResponse != nil {
        // handle response
    }
}
```

## PostDebitAccountHolder

Sends a direct debit request to an account holder's bank account. If the direct debit is successful, the funds are settled in the accounts specified in the split instructions. Adyen sends the result of the direct debit in a [`DIRECT_DEBIT_INITIATED`](https://docs.adyen.com/api-explorer/#/NotificationService/latest/post/DIRECT_DEBIT_INITIATED) notification webhook.

 To learn more about direct debits, see [Top up accounts](https://docs.adyen.com/marketplaces-and-platforms/classic/top-up-accounts).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.General.PostDebitAccountHolder(ctx, shared.DebitAccountHolderRequest{
        AccountHolderCode: "ipsa",
        Amount: shared.Amount{
            Currency: "delectus",
            Value: 272656,
        },
        BankAccountUUID: "suscipit",
        Description: sdk.String("molestiae"),
        MerchantAccount: "minus",
        Splits: []shared.Split{
            shared.Split{
                Account: sdk.String("voluptatum"),
                Amount: shared.SplitAmount{
                    Currency: sdk.String("iusto"),
                    Value: 568045,
                },
                Description: sdk.String("nisi"),
                Reference: sdk.String("recusandae"),
                Type: shared.SplitTypeEnumVat,
            },
            shared.Split{
                Account: sdk.String("ab"),
                Amount: shared.SplitAmount{
                    Currency: sdk.String("quis"),
                    Value: 87129,
                },
                Description: sdk.String("deserunt"),
                Reference: sdk.String("perferendis"),
                Type: shared.SplitTypeEnumMarketPlace,
            },
            shared.Split{
                Account: sdk.String("repellendus"),
                Amount: shared.SplitAmount{
                    Currency: sdk.String("sapiente"),
                    Value: 778157,
                },
                Description: sdk.String("odit"),
                Reference: sdk.String("at"),
                Type: shared.SplitTypeEnumVat,
            },
            shared.Split{
                Account: sdk.String("maiores"),
                Amount: shared.SplitAmount{
                    Currency: sdk.String("molestiae"),
                    Value: 799159,
                },
                Description: sdk.String("quod"),
                Reference: sdk.String("esse"),
                Type: shared.SplitTypeEnumRemainder,
            },
        },
    }, operations.PostDebitAccountHolderSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DebitAccountHolderResponse != nil {
        // handle response
    }
}
```

## PostPayoutAccountHolder

Pays out a specified amount from an account to the bank account of account holder.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.General.PostPayoutAccountHolder(ctx, shared.PayoutAccountHolderRequest{
        AccountCode: "porro",
        AccountHolderCode: "dolorum",
        Amount: &shared.Amount{
            Currency: "dicta",
            Value: 720633,
        },
        BankAccountUUID: sdk.String("officia"),
        Description: sdk.String("occaecati"),
        MerchantReference: sdk.String("fugit"),
        PayoutMethodCode: sdk.String("deleniti"),
        PayoutSpeed: shared.PayoutAccountHolderRequestPayoutSpeedEnumStandard.ToPointer(),
    }, operations.PostPayoutAccountHolderSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayoutAccountHolderResponse != nil {
        // handle response
    }
}
```

## PostRefundFundsTransfer

Refunds funds transferred from one account to another. Both accounts must be in the same platform, but can have different account holders. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.General.PostRefundFundsTransfer(ctx, shared.RefundFundsTransferRequest{
        Amount: shared.Amount{
            Currency: "optio",
            Value: 521848,
        },
        MerchantReference: sdk.String("beatae"),
        OriginalReference: "commodi",
    }, operations.PostRefundFundsTransferSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RefundFundsTransferResponse != nil {
        // handle response
    }
}
```

## PostRefundNotPaidOutTransfers

Refunds all the transactions of an account that have taken place since the most recent payout. This request is on a account basis (as opposed to a payment basis), so only the portion of the payment that was made to the specified account is refunded. The commissions, fees, and payments to other accounts remain in the accounts to which they were sent as designated by the original payment's split details.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.General.PostRefundNotPaidOutTransfers(ctx, shared.RefundNotPaidOutTransfersRequest{
        AccountCode: "molestiae",
        AccountHolderCode: "modi",
    }, operations.PostRefundNotPaidOutTransfersSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RefundNotPaidOutTransfersResponse != nil {
        // handle response
    }
}
```

## PostSetupBeneficiary

Defines a benefactor and a beneficiary relationship between two accounts. At the time of benefactor/beneficiary setup, the funds in the benefactor account are transferred to the beneficiary account, and any further payments to the benefactor account are automatically sent to the beneficiary account. A series of benefactor/beneficiaries may not exceed four beneficiaries and may not have a cycle in it.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.General.PostSetupBeneficiary(ctx, shared.SetupBeneficiaryRequest{
        DestinationAccountCode: "qui",
        MerchantReference: sdk.String("impedit"),
        SourceAccountCode: "cum",
    }, operations.PostSetupBeneficiarySecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetupBeneficiaryResponse != nil {
        // handle response
    }
}
```

## PostTransferFunds

Transfers funds from one account to another account. Both accounts must be in the same platform, but can have different account holders. The transfer must include a transfer code, which should be determined by the platform, in compliance with local regulations.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.General.PostTransferFunds(ctx, shared.TransferFundsRequest{
        Amount: shared.Amount{
            Currency: "esse",
            Value: 216550,
        },
        DestinationAccountCode: "excepturi",
        MerchantReference: sdk.String("aspernatur"),
        SourceAccountCode: "perferendis",
        TransferCode: "ad",
    }, operations.PostTransferFundsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferFundsResponse != nil {
        // handle response
    }
}
```
