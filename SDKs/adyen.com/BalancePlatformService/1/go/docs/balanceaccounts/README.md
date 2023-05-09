# BalanceAccounts

### Available Operations

* [GetBalanceAccountsID](#getbalanceaccountsid) - Get a balance account
* [GetBalanceAccountsIDPaymentInstruments](#getbalanceaccountsidpaymentinstruments) - Get all payment instruments for a balance account
* [PatchBalanceAccountsID](#patchbalanceaccountsid) - Update a balance account
* [PostBalanceAccounts](#postbalanceaccounts) - Create a balance account

## GetBalanceAccountsID

Returns a balance account and its balances for the default currency and other currencies with a non-zero balance.

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
    res, err := s.BalanceAccounts.GetBalanceAccountsID(ctx, operations.GetBalanceAccountsIDRequest{
        ID: "76b0d5f0-d30c-45fb-b258-7053202c73d5",
    }, operations.GetBalanceAccountsIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BalanceAccount != nil {
        // handle response
    }
}
```

## GetBalanceAccountsIDPaymentInstruments

Returns a paginated list of the payment instruments associated with a balance account. 

To fetch multiple pages, use the query parameters.For example, to limit the page to 3 payment instruments and to skip the first 6, use `/balanceAccounts/{id}/paymentInstruments?limit=3&offset=6`.

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
    res, err := s.BalanceAccounts.GetBalanceAccountsIDPaymentInstruments(ctx, operations.GetBalanceAccountsIDPaymentInstrumentsRequest{
        ID: "fe9b90c2-8909-4b3f-a49a-8d9cbf486333",
        Limit: sdk.Int(186193),
        Offset: sdk.Int(218749),
    }, operations.GetBalanceAccountsIDPaymentInstrumentsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedPaymentInstrumentsResponse != nil {
        // handle response
    }
}
```

## PatchBalanceAccountsID

Updates a balance account.

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
    res, err := s.BalanceAccounts.PatchBalanceAccountsID(ctx, operations.PatchBalanceAccountsIDRequest{
        BalanceAccountUpdateRequestInput: &shared.BalanceAccountUpdateRequestInput{
            AccountHolderID: sdk.String("hic"),
            DefaultCurrencyCode: sdk.String("excepturi"),
            Description: sdk.String("cum"),
            Reference: sdk.String("voluptate"),
            Status: shared.BalanceAccountUpdateRequestStatusEnumClosed.ToPointer(),
            SweepConfigurations: map[string]shared.SweepConfigurationInput{
                "amet": shared.SweepConfigurationInput{
                    BalanceAccountID: sdk.String("dolorum"),
                    MerchantAccount: sdk.String("numquam"),
                    Schedule: shared.SweepConfigurationSchedule{},
                    Status: shared.SweepConfigurationStatusEnumActive.ToPointer(),
                    SweepAmount: &shared.Amount{
                        Currency: "ipsa",
                        Value: 56418,
                    },
                    TargetAmount: &shared.Amount{
                        Currency: "iure",
                        Value: 487838,
                    },
                    TransferInstrumentID: sdk.String("quaerat"),
                    TriggerAmount: &shared.Amount{
                        Currency: "accusamus",
                        Value: 696344,
                    },
                    Type: shared.SweepConfigurationTypeEnumPush.ToPointer(),
                },
                "voluptas": shared.SweepConfigurationInput{
                    BalanceAccountID: sdk.String("natus"),
                    MerchantAccount: sdk.String("eos"),
                    Schedule: shared.SweepConfigurationSchedule{},
                    Status: shared.SweepConfigurationStatusEnumInactive.ToPointer(),
                    SweepAmount: &shared.Amount{
                        Currency: "sit",
                        Value: 854614,
                    },
                    TargetAmount: &shared.Amount{
                        Currency: "ab",
                        Value: 743835,
                    },
                    TransferInstrumentID: sdk.String("dolorum"),
                    TriggerAmount: &shared.Amount{
                        Currency: "iusto",
                        Value: 453697,
                    },
                    Type: shared.SweepConfigurationTypeEnumPush.ToPointer(),
                },
                "deleniti": shared.SweepConfigurationInput{
                    BalanceAccountID: sdk.String("omnis"),
                    MerchantAccount: sdk.String("necessitatibus"),
                    Schedule: shared.SweepConfigurationSchedule{},
                    Status: shared.SweepConfigurationStatusEnumInactive.ToPointer(),
                    SweepAmount: &shared.Amount{
                        Currency: "asperiores",
                        Value: 469497,
                    },
                    TargetAmount: &shared.Amount{
                        Currency: "ipsum",
                        Value: 456015,
                    },
                    TransferInstrumentID: sdk.String("id"),
                    TriggerAmount: &shared.Amount{
                        Currency: "saepe",
                        Value: 263322,
                    },
                    Type: shared.SweepConfigurationTypeEnumPull.ToPointer(),
                },
                "perferendis": shared.SweepConfigurationInput{
                    BalanceAccountID: sdk.String("amet"),
                    MerchantAccount: sdk.String("optio"),
                    Schedule: shared.SweepConfigurationSchedule{},
                    Status: shared.SweepConfigurationStatusEnumInactive.ToPointer(),
                    SweepAmount: &shared.Amount{
                        Currency: "ad",
                        Value: 904425,
                    },
                    TargetAmount: &shared.Amount{
                        Currency: "suscipit",
                        Value: 645785,
                    },
                    TransferInstrumentID: sdk.String("provident"),
                    TriggerAmount: &shared.Amount{
                        Currency: "minima",
                        Value: 831049,
                    },
                    Type: shared.SweepConfigurationTypeEnumPush.ToPointer(),
                },
            },
            TimeZone: sdk.String("similique"),
        },
        ID: "0d446ce2-af7a-473c-b3be-453f870b326b",
    }, operations.PatchBalanceAccountsIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BalanceAccount != nil {
        // handle response
    }
}
```

## PostBalanceAccounts

Creates a balance account that holds the funds of the associated account holder.

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
    res, err := s.BalanceAccounts.PostBalanceAccounts(ctx, shared.BalanceAccountInfoInput{
        AccountHolderID: "voluptas",
        DefaultCurrencyCode: sdk.String("deserunt"),
        Description: sdk.String("quam"),
        Reference: sdk.String("ipsum"),
        SweepConfigurations: map[string]shared.SweepConfigurationInput{
            "qui": shared.SweepConfigurationInput{
                BalanceAccountID: sdk.String("cupiditate"),
                MerchantAccount: sdk.String("maxime"),
                Schedule: shared.SweepConfigurationSchedule{},
                Status: shared.SweepConfigurationStatusEnumInactive.ToPointer(),
                SweepAmount: &shared.Amount{
                    Currency: "soluta",
                    Value: 117531,
                },
                TargetAmount: &shared.Amount{
                    Currency: "laborum",
                    Value: 517379,
                },
                TransferInstrumentID: sdk.String("incidunt"),
                TriggerAmount: &shared.Amount{
                    Currency: "aspernatur",
                    Value: 174909,
                },
                Type: shared.SweepConfigurationTypeEnumPush.ToPointer(),
            },
            "facilis": shared.SweepConfigurationInput{
                BalanceAccountID: sdk.String("aliquid"),
                MerchantAccount: sdk.String("quam"),
                Schedule: shared.SweepConfigurationSchedule{},
                Status: shared.SweepConfigurationStatusEnumInactive.ToPointer(),
                SweepAmount: &shared.Amount{
                    Currency: "temporibus",
                    Value: 183280,
                },
                TargetAmount: &shared.Amount{
                    Currency: "neque",
                    Value: 144847,
                },
                TransferInstrumentID: sdk.String("magni"),
                TriggerAmount: &shared.Amount{
                    Currency: "odio",
                    Value: 124833,
                },
                Type: shared.SweepConfigurationTypeEnumPull.ToPointer(),
            },
        },
        TimeZone: sdk.String("nam"),
    }, operations.PostBalanceAccountsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BalanceAccount != nil {
        // handle response
    }
}
```
