# PaymentInstrumentGroups

### Available Operations

* [GetPaymentInstrumentGroupsID](#getpaymentinstrumentgroupsid) - Get a payment instrument group
* [GetPaymentInstrumentGroupsIDTransactionRules](#getpaymentinstrumentgroupsidtransactionrules) - Get all transaction rules for a payment instrument group
* [PostPaymentInstrumentGroups](#postpaymentinstrumentgroups) - Create a payment instrument group

## GetPaymentInstrumentGroupsID

Returns the details of a payment instrument group.

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
    res, err := s.PaymentInstrumentGroups.GetPaymentInstrumentGroupsID(ctx, operations.GetPaymentInstrumentGroupsIDRequest{
        ID: "5e80ca55-efd2-40e4-97e1-858b6a89fbe3",
    }, operations.GetPaymentInstrumentGroupsIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentInstrumentGroup != nil {
        // handle response
    }
}
```

## GetPaymentInstrumentGroupsIDTransactionRules

Returns a list of all the transaction rules associated with a payment instrument group.

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
    res, err := s.PaymentInstrumentGroups.GetPaymentInstrumentGroupsIDTransactionRules(ctx, operations.GetPaymentInstrumentGroupsIDTransactionRulesRequest{
        ID: "a5aa8e48-24d0-4ab4-8750-88e51862065e",
    }, operations.GetPaymentInstrumentGroupsIDTransactionRulesSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransactionRulesResponse != nil {
        // handle response
    }
}
```

## PostPaymentInstrumentGroups

Creates a payment instrument group to associate and group payment instrument resources together. You can apply a transaction rule to a payment instrument group.

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
    res, err := s.PaymentInstrumentGroups.PostPaymentInstrumentGroups(ctx, shared.PaymentInstrumentGroupInfo{
        BalancePlatform: "error",
        Description: sdk.String("consequatur"),
        Properties: map[string]string{
            "reiciendis": "dolorem",
            "harum": "dicta",
        },
        Reference: sdk.String("architecto"),
        TxVariant: "occaecati",
    }, operations.PostPaymentInstrumentGroupsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentInstrumentGroup != nil {
        // handle response
    }
}
```
