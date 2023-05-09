# General

### Available Operations

* [PostChangeStatus](#postchangestatus) - Changes the status of the payment method.
* [PostCheckBalance](#postcheckbalance) - Checks the balance.
* [PostIssue](#postissue) - Issues a new card.
* [PostLoad](#postload) - Loads the payment method.
* [PostMergeBalance](#postmergebalance) - Merge the balance of two cards.
* [PostVoidTransaction](#postvoidtransaction) - Voids a transaction.

## PostChangeStatus

Changes the status of the provided payment method to the specified status.

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
    res, err := s.General.PostChangeStatus(ctx, shared.StoredValueStatusChangeRequest{
        Amount: &shared.Amount{
            Currency: "suscipit",
            Value: 477665,
        },
        MerchantAccount: "minus",
        PaymentMethod: map[string]string{
            "voluptatum": "iusto",
            "excepturi": "nisi",
            "recusandae": "temporibus",
            "ab": "quis",
        },
        RecurringDetailReference: sdk.String("veritatis"),
        Reference: "deserunt",
        ShopperInteraction: shared.StoredValueStatusChangeRequestShopperInteractionEnumEcommerce.ToPointer(),
        ShopperReference: sdk.String("ipsam"),
        Status: shared.StoredValueStatusChangeRequestStatusEnumInactive,
        Store: sdk.String("sapiente"),
    }, operations.PostChangeStatusSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoredValueStatusChangeResponse != nil {
        // handle response
    }
}
```

## PostCheckBalance

Checks the balance of the provided payment method.

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
    res, err := s.General.PostCheckBalance(ctx, shared.StoredValueBalanceCheckRequest{
        Amount: &shared.Amount{
            Currency: "quo",
            Value: 140350,
        },
        MerchantAccount: "at",
        PaymentMethod: map[string]string{
            "maiores": "molestiae",
            "quod": "quod",
            "esse": "totam",
            "porro": "dolorum",
        },
        RecurringDetailReference: sdk.String("dicta"),
        Reference: "nam",
        ShopperInteraction: shared.StoredValueBalanceCheckRequestShopperInteractionEnumMoto.ToPointer(),
        ShopperReference: sdk.String("occaecati"),
        Store: sdk.String("fugit"),
    }, operations.PostCheckBalanceSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoredValueBalanceCheckResponse != nil {
        // handle response
    }
}
```

## PostIssue

Issues a new card of the given payment method.

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
    res, err := s.General.PostIssue(ctx, shared.StoredValueIssueRequest{
        Amount: &shared.Amount{
            Currency: "deleniti",
            Value: 944669,
        },
        MerchantAccount: "optio",
        PaymentMethod: map[string]string{
            "beatae": "commodi",
            "molestiae": "modi",
            "qui": "impedit",
        },
        RecurringDetailReference: sdk.String("cum"),
        Reference: "esse",
        ShopperInteraction: shared.StoredValueIssueRequestShopperInteractionEnumEcommerce.ToPointer(),
        ShopperReference: sdk.String("excepturi"),
        Store: sdk.String("aspernatur"),
    }, operations.PostIssueSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoredValueIssueResponse != nil {
        // handle response
    }
}
```

## PostLoad

Loads the payment method with the specified funds.

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
    res, err := s.General.PostLoad(ctx, shared.StoredValueLoadRequest{
        Amount: shared.Amount{
            Currency: "perferendis",
            Value: 324141,
        },
        LoadType: shared.StoredValueLoadRequestLoadTypeEnumLoad.ToPointer(),
        MerchantAccount: "sed",
        PaymentMethod: map[string]string{
            "dolor": "natus",
            "laboriosam": "hic",
            "saepe": "fuga",
        },
        RecurringDetailReference: sdk.String("in"),
        Reference: "corporis",
        ShopperInteraction: shared.StoredValueLoadRequestShopperInteractionEnumMoto.ToPointer(),
        ShopperReference: sdk.String("iure"),
        Store: sdk.String("saepe"),
    }, operations.PostLoadSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoredValueLoadResponse != nil {
        // handle response
    }
}
```

## PostMergeBalance

Increases the balance of the paymentmethod by the full amount left on the source paymentmethod

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
    res, err := s.General.PostMergeBalance(ctx, shared.StoredValueBalanceMergeRequest{
        Amount: &shared.Amount{
            Currency: "quidem",
            Value: 99280,
        },
        MerchantAccount: "ipsa",
        PaymentMethod: map[string]string{
            "est": "mollitia",
            "laborum": "dolores",
            "dolorem": "corporis",
            "explicabo": "nobis",
        },
        RecurringDetailReference: sdk.String("enim"),
        Reference: "omnis",
        ShopperInteraction: shared.StoredValueBalanceMergeRequestShopperInteractionEnumContAuth.ToPointer(),
        ShopperReference: sdk.String("minima"),
        SourcePaymentMethod: map[string]string{
            "accusantium": "iure",
            "culpa": "doloribus",
            "sapiente": "architecto",
        },
        Store: sdk.String("mollitia"),
    }, operations.PostMergeBalanceSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoredValueBalanceMergeResponse != nil {
        // handle response
    }
}
```

## PostVoidTransaction

Voids the referenced stored value transaction.

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
    res, err := s.General.PostVoidTransaction(ctx, shared.StoredValueVoidRequest{
        MerchantAccount: "dolorem",
        OriginalReference: "culpa",
        Reference: sdk.String("consequuntur"),
        Store: sdk.String("repellat"),
        TenderReference: sdk.String("mollitia"),
        UniqueTerminalID: sdk.String("occaecati"),
    }, operations.PostVoidTransactionSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoredValueVoidResponse != nil {
        // handle response
    }
}
```
