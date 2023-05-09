# TransactionRules

### Available Operations

* [DeleteTransactionRulesTransactionRuleID](#deletetransactionrulestransactionruleid) - Delete a transaction rule
* [GetTransactionRulesTransactionRuleID](#gettransactionrulestransactionruleid) - Get a transaction rule
* [PatchTransactionRulesTransactionRuleID](#patchtransactionrulestransactionruleid) - Update a transaction rule
* [PostTransactionRules](#posttransactionrules) - Create a transaction rule

## DeleteTransactionRulesTransactionRuleID

Deletes a transaction rule.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.TransactionRules.DeleteTransactionRulesTransactionRuleID(ctx, operations.DeleteTransactionRulesTransactionRuleIDRequest{
        TransactionRuleID: "iste",
    }, operations.DeleteTransactionRulesTransactionRuleIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransactionRule != nil {
        // handle response
    }
}
```

## GetTransactionRulesTransactionRuleID

Returns the details of a transaction rule.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.TransactionRules.GetTransactionRulesTransactionRuleID(ctx, operations.GetTransactionRulesTransactionRuleIDRequest{
        TransactionRuleID: "magni",
    }, operations.GetTransactionRulesTransactionRuleIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransactionRuleResponse != nil {
        // handle response
    }
}
```

## PatchTransactionRulesTransactionRuleID

Updates a transaction rule. 

* To update only the status of a transaction rule, send only the `status` parameter. All other parameters not provided in the request are left unchanged.

* When updating any other parameter, you need to send all existing resource parameters. If you omit a parameter in the request, that parameter is removed from the resource.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.TransactionRules.PatchTransactionRulesTransactionRuleID(ctx, operations.PatchTransactionRulesTransactionRuleIDRequest{
        TransactionRuleInfo: &shared.TransactionRuleInfo{
            Amount: &shared.Amount{
                Currency: "inventore",
                Value: 686362,
            },
            BalancePlatformID: sdk.String("accusamus"),
            Countries: []string{
                "distinctio",
                "omnis",
                "delectus",
                "minima",
            },
            Description: "praesentium",
            EndDate: sdk.String("maxime"),
            EntryModes: []shared.TransactionRuleInfoEntryModesEnum{
                shared.TransactionRuleInfoEntryModesEnumServer,
                shared.TransactionRuleInfoEntryModesEnumMagstripe,
            },
            Interval: shared.TransactionRuleInterval{
                Type: shared.TransactionRuleIntervalTypeEnumMonthly,
            },
            MaxTransactions: sdk.Int(930819),
            Mccs: []string{
                "totam",
                "earum",
            },
            PaymentInstrumentGroupID: sdk.String("modi"),
            PaymentInstrumentID: sdk.String("nam"),
            ProcessingTypes: []shared.TransactionRuleInfoProcessingTypesEnum{
                shared.TransactionRuleInfoProcessingTypesEnumAtmWithdraw,
                shared.TransactionRuleInfoProcessingTypesEnumEcommerce,
                shared.TransactionRuleInfoProcessingTypesEnumMoto,
                shared.TransactionRuleInfoProcessingTypesEnumAtmWithdraw,
            },
            Reference: "quasi",
            StartDate: sdk.String("non"),
            Status: shared.TransactionRuleInfoStatusEnumInactive.ToPointer(),
            Type: shared.TransactionRuleInfoTypeEnumBlockList,
        },
        TransactionRuleID: "sint",
    }, operations.PatchTransactionRulesTransactionRuleIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransactionRule != nil {
        // handle response
    }
}
```

## PostTransactionRules

Creates a [transaction rule](https://docs.adyen.com/issuing/transaction-rules). When your user makes a transaction with their Adyen-issued card, the transaction is allowed or declined based on the conditions and outcome defined in the transaction rule. You can apply the transaction rule to several cards, such as all the cards in your platform, or to a specific card. For use cases, see [examples](https://docs.adyen.com/issuing/transaction-rules/examples).

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
    res, err := s.TransactionRules.PostTransactionRules(ctx, shared.TransactionRuleInfo{
        Amount: &shared.Amount{
            Currency: "nulla",
            Value: 643678,
        },
        BalancePlatformID: sdk.String("esse"),
        Countries: []string{
            "reprehenderit",
            "est",
        },
        Description: "quis",
        EndDate: sdk.String("sint"),
        EntryModes: []shared.TransactionRuleInfoEntryModesEnum{
            shared.TransactionRuleInfoEntryModesEnumOcr,
            shared.TransactionRuleInfoEntryModesEnumUnknown,
            shared.TransactionRuleInfoEntryModesEnumUnknown,
            shared.TransactionRuleInfoEntryModesEnumUnknown,
        },
        Interval: shared.TransactionRuleInterval{
            Type: shared.TransactionRuleIntervalTypeEnumMonthly,
        },
        MaxTransactions: sdk.Int(376741),
        Mccs: []string{
            "delectus",
            "quae",
            "minus",
            "fuga",
        },
        PaymentInstrumentGroupID: sdk.String("laborum"),
        PaymentInstrumentID: sdk.String("consectetur"),
        ProcessingTypes: []shared.TransactionRuleInfoProcessingTypesEnum{
            shared.TransactionRuleInfoProcessingTypesEnumPos,
        },
        Reference: "ipsum",
        StartDate: sdk.String("impedit"),
        Status: shared.TransactionRuleInfoStatusEnumActive.ToPointer(),
        Type: shared.TransactionRuleInfoTypeEnumMaxUsage,
    }, operations.PostTransactionRulesSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransactionRule != nil {
        // handle response
    }
}
```
