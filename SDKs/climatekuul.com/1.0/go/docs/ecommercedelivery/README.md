# EcommerceDelivery

### Available Operations

* [ConfirmCarbonOffset1](#confirmcarbonoffset1) - confirmCarbonOffset
* [ConfirmPayment1](#confirmpayment1) - confirmPayment
* [ConfirmPaymentOfTransaction1](#confirmpaymentoftransaction1) - confirmTransaction
* [ConfirmsPlanting2](#confirmsplanting2) - confirmPlanting
* [EcommerceDelivery](#ecommercedelivery) - ecommerceDelivery

## ConfirmCarbonOffset1

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
    res, err := s.EcommerceDelivery.ConfirmCarbonOffset1(ctx, operations.ConfirmCarbonOffset1RequestBody{
        CarbonOffset: "y",
        ContactEmail: sdk.String("example@example.com"),
        ContactFirstName: sdk.String("abc"),
        ContactLastName: sdk.String("xyz"),
        TransactionID: "60a766d401d88997746c91a0",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ConfirmPayment1

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
    res, err := s.EcommerceDelivery.ConfirmPayment1(ctx, operations.ConfirmPayment1RequestBody{
        APIKeyL1: "d95fead6-e8a6-4247-9fb9-7835101a4560",
        APIKeyL2: "c60f8db5-7904-4227-960d-27400c38b166",
        ConfirmPayment: "y",
        PaymentID: 34567878,
        TransactionID: "60a766d401d88997746c91a0",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ConfirmPaymentOfTransaction1

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
    res, err := s.EcommerceDelivery.ConfirmPaymentOfTransaction1(ctx, operations.ConfirmPaymentOfTransaction1RequestBody{
        ConfirmTransaction: "y",
        TransactionID: "60a766d401d88997746c91a0",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ConfirmsPlanting2

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
    res, err := s.EcommerceDelivery.ConfirmsPlanting2(ctx, operations.ConfirmsPlanting2RequestBody{
        APIKeyL1: "d95fead6-e8a6-4247-9fb9-7835101a4560",
        APIKeyL2: "c60f8db5-7904-4227-960d-27400c38b166",
        ConfirmPlanting: "y",
        TransactionID: "60a766d401d88997746c91a0",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EcommerceDelivery

ecommerceDelivery

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
    res, err := s.EcommerceDelivery.EcommerceDelivery(ctx, operations.EcommerceDeliveryRequest{
        ContentType: "application/x-www-form-urlencoded",
        RequestBody: &operations.EcommerceDeliveryRequestBody{
            APIKeyL1: "d95fead6-e8a6-4547-9fb9-7835101a3960",
            APIKeyL2: "c60f8db5-7204-4427-960d-27400c38b166",
            DestinationAirportCode: sdk.String("BRU"),
            DestinationLatitude: 50.870752,
            DestinationLongitude: 4.66949,
            OriginAirportCode: sdk.String("KHI"),
            OriginLatitude: 23.372628,
            OriginLongitude: 113.159339,
            VolumetricWeight: 2.7,
            WaybillType: "road only",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
