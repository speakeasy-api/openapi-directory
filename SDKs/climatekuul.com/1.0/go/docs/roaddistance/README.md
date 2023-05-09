# RoadDistance

### Available Operations

* [ConfirmCarbonOffset5](#confirmcarbonoffset5) - confirmCarbonOffset
* [ConfirmPayment5](#confirmpayment5) - confirmPayment
* [ConfirmPaymentOfTransaction5](#confirmpaymentoftransaction5) - confirmTransaction
* [ConfirmsPlanting5](#confirmsplanting5) - confirmPlanting
* [RoadDistance](#roaddistance) - RoadDistance

## ConfirmCarbonOffset5

confirmCarbonOffset

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
    res, err := s.RoadDistance.ConfirmCarbonOffset5(ctx, operations.ConfirmCarbonOffset5RequestBody{
        CarbonOffset: "y",
        ContactEmail: sdk.String("example@example.com"),
        ContactFirstName: sdk.String("abc"),
        ContactLastName: sdk.String("xyz"),
        TransactionID: "60a7823401d88997746c91a7",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ConfirmPayment5

confirmPayment

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
    res, err := s.RoadDistance.ConfirmPayment5(ctx, operations.ConfirmPayment5RequestBody{
        APIKeyL1: "d95fead6-e8a6-4247-9fb9-7835101a4560",
        APIKeyL2: "c60f8db5-7904-4227-960d-27400c38b166",
        ConfirmPayment: "y",
        PaymentID: 34567878,
        TransactionID: "60a7823401d88997746c91a7",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ConfirmPaymentOfTransaction5

confirmTransaction

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
    res, err := s.RoadDistance.ConfirmPaymentOfTransaction5(ctx, operations.ConfirmPaymentOfTransaction5RequestBody{
        ConfirmTransaction: "y",
        TransactionID: "60a7823401d88997746c91a7",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ConfirmsPlanting5

confirmPlanting

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
    res, err := s.RoadDistance.ConfirmsPlanting5(ctx, operations.ConfirmsPlanting5RequestBody{
        APIKeyL1: "d95fead6-e8a6-4247-9fb9-7835101a4560",
        APIKeyL2: "c60f8db5-7904-4227-960d-27400c38b166",
        ConfirmPlanting: "y",
        TransactionID: "60a7823401d88997746c91a7",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RoadDistance

RoadDistance

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
    res, err := s.RoadDistance.RoadDistance(ctx, operations.RoadDistanceRequestBody{
        APIKeyL1: "d95fead6-e8a6-4547-9fb9-7835101a3960",
        APIKeyL2: "c60f8db5-7204-4427-960d-27400c38b166",
        TravelDistance: 2450,
        TripEnd: 18,
        TripStart: 16,
        VehicleMake: sdk.String("Honda"),
        VehicleType: "personal car",
        VehicleYear: sdk.Int(2010),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
