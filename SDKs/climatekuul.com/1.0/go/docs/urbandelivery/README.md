# UrbanDelivery

### Available Operations

* [ConfirmCarbonOffset](#confirmcarbonoffset) - confirmCarbonOffset
* [ConfirmPayment](#confirmpayment) - confirmPayment
* [ConfirmPaymentOfTransaction](#confirmpaymentoftransaction) - confirmTransaction
* [ConfirmsPlanting](#confirmsplanting) - confirmPlanting
* [UrbanDelivery](#urbandelivery) - urbanDelivery

## ConfirmCarbonOffset

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
    res, err := s.UrbanDelivery.ConfirmCarbonOffset(ctx, operations.ConfirmCarbonOffsetRequestBody{
        CarbonOffset: "y",
        ContactEmail: sdk.String("example@example.com"),
        ContactFirstName: sdk.String("abc"),
        ContactLastName: sdk.String("xyz"),
        TransactionID: "60a7875a01d88997746c91ae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ConfirmPayment

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
    res, err := s.UrbanDelivery.ConfirmPayment(ctx, operations.ConfirmPaymentRequestBody{
        APIKeyL1: "d95fead6-e8a6-4247-9fb9-7835101a4560",
        APIKeyL2: "c60f8db5-7904-4227-960d-27400c38b166",
        ConfirmPayment: "y",
        PaymentID: 34567878,
        TransactionID: "60a7875a01d88997746c91ae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ConfirmPaymentOfTransaction

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
    res, err := s.UrbanDelivery.ConfirmPaymentOfTransaction(ctx, operations.ConfirmPaymentOfTransactionRequestBody{
        ConfirmTransaction: "y",
        TransactionID: "60a7875a01d88997746c91ae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ConfirmsPlanting

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
    res, err := s.UrbanDelivery.ConfirmsPlanting(ctx, operations.ConfirmsPlantingRequestBody{
        APIKeyL1: "d95fead6-e8a6-4247-9fb9-7835101a4560",
        APIKeyL2: "c60f8db5-7904-4227-960d-27400c38b166",
        ConfirmPlanting: "y",
        TransactionID: "60a7875a01d88997746c91ae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UrbanDelivery

urbanDelivery

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
    res, err := s.UrbanDelivery.UrbanDelivery(ctx, operations.UrbanDeliveryRequestBody{
        APIKeyL1: "d95fead6-e8a6-4547-9fb9-7835101a3960",
        APIKeyL2: "c60f8db5-7204-4427-960d-27400c38b166",
        DestinationLatitude: -89.870752,
        DestinationLongitude: 179.66949,
        ItemCount: 3,
        OriginLatitude: -89.372628,
        OriginLongitude: -179.159339,
        VehicleType: "PRIVATE CAR",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
