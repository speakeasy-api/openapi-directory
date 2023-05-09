# CustomerContracts

### Available Operations

* [CreateContract](#createcontract) - Create a new contract
* [DeleteNextContract](#deletenextcontract) - Delete your next contract
* [GetBillingPeriods](#getbillingperiods) - Get billing periods conditions
* [GetContracts](#getcontracts) - Get contract list
* [GetOffer](#getoffer) - Get offer pricing
* [GetStandardOffers](#getstandardoffers) - Get all standard offers
* [ReactivateCurrentContract](#reactivatecurrentcontract) - Reactivate your terminated contract.
* [TerminateCurrentContract](#terminatecurrentcontract) - Schedule termination of your current contract at the end of the commitment.

## CreateContract

Now you are ready to create your contract. Before that, please ensure that you check the offer with the same request parameterts. /offers


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CustomerContracts.CreateContract(ctx, shared.OfferRequest{
        BillingPeriodInMonth: 12,
        CouponDiscountCode: sdk.String("I-LOVE-BEEZUP"),
        CouponOfferCode: sdk.String("04efc310-bc25-4710-a83a-faf200284fe5"),
        OfferID: 1,
        StoreCount: 1,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateContractResponse != nil {
        // handle response
    }
}
```

## DeleteNextContract

Delete your next contract

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CustomerContracts.DeleteNextContract(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetBillingPeriods

Get billing periods conditions

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CustomerContracts.GetBillingPeriods(ctx, operations.GetBillingPeriodsRequest{
        IfNoneMatch: sdk.String("possimus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BillingPeriodList != nil {
        // handle response
    }
}
```

## GetContracts

Get contract list

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CustomerContracts.GetContracts(ctx, operations.GetContractsRequest{
        IfNoneMatch: sdk.String("quia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Contracts != nil {
        // handle response
    }
}
```

## GetOffer

Get the offer pricing then you can create your contract with the same request parameters. /v2/user/customer/contracts


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CustomerContracts.GetOffer(ctx, shared.OfferRequest{
        BillingPeriodInMonth: 12,
        CouponDiscountCode: sdk.String("I-LOVE-BEEZUP"),
        CouponOfferCode: sdk.String("04efc310-bc25-4710-a83a-faf200284fe5"),
        OfferID: 1,
        StoreCount: 1,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Offer != nil {
        // handle response
    }
}
```

## GetStandardOffers

Get all standard offers

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CustomerContracts.GetStandardOffers(ctx, operations.GetStandardOffersRequest{
        IfNoneMatch: sdk.String("eveniet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StandardOffers != nil {
        // handle response
    }
}
```

## ReactivateCurrentContract

By calling this operation you can re-enable the auto renewal.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CustomerContracts.ReactivateCurrentContract(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TerminateCurrentContract

By default your contract are automatically renew. By calling this operation you can disable the auto renewal.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CustomerContracts.TerminateCurrentContract(ctx, shared.TerminateContract{
        ContractTerminationReason: sdk.String("I'm crazy, I want to leave your splendid service..."),
        ContractTerminationReasonType: 1,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
