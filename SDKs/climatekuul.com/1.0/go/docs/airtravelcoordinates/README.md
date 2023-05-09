# AirtravelCoordinates

### Available Operations

* [AirtravelCoordinates](#airtravelcoordinates) - airtravelCoordinates
* [ConfirmCarbonOffset4](#confirmcarbonoffset4) - confirmCarbonOffset
* [ConfirmPayment4](#confirmpayment4) - confirmPayment
* [ConfirmPaymentOfTransaction4](#confirmpaymentoftransaction4) - confirmTransaction
* [ConfirmsPlanting4](#confirmsplanting4) - confirmPlanting

## AirtravelCoordinates

airtravelCoordinates

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
    res, err := s.AirtravelCoordinates.AirtravelCoordinates(ctx, operations.AirtravelCoordinatesRequest{
        ContentType: "application/x-www-form-urlencoded",
        RequestBody: &operations.AirtravelCoordinatesRequestBody{
            APIKeyL1: "d95fead6-e8a6-4547-9fb9-7835101a3960",
            APIKeyL2: "c60f8db5-7204-4427-960d-27400c38b166",
            DestinationAirportLatitude: 24.9056,
            DestinationAirportLongitude: 67.1569,
            NumberOfPassengers: 2,
            OriginAirportLatitude: 31.5208,
            OriginAirportLongitude: 74.4028,
            TravelClass: "Economy",
            TravelMode: "round trip",
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

## ConfirmCarbonOffset4

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
    res, err := s.AirtravelCoordinates.ConfirmCarbonOffset4(ctx, operations.ConfirmCarbonOffset4RequestBody{
        CarbonOffset: "y",
        ContactEmail: sdk.String("example@example.com"),
        ContactFirstName: sdk.String("abc"),
        ContactLastName: sdk.String("xyz"),
        TransactionID: "60a78ed201d88997746c91b5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ConfirmPayment4

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
    res, err := s.AirtravelCoordinates.ConfirmPayment4(ctx, operations.ConfirmPayment4RequestBody{
        APIKeyL1: "d95fead6-e8a6-4247-9fb9-7835101a4560",
        APIKeyL2: "c60f8db5-7904-4227-960d-27400c38b166",
        ConfirmPayment: "y",
        PaymentID: 34567878,
        TransactionID: "60a78ed201d88997746c91b5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ConfirmPaymentOfTransaction4

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
    res, err := s.AirtravelCoordinates.ConfirmPaymentOfTransaction4(ctx, operations.ConfirmPaymentOfTransaction4RequestBody{
        ConfirmTransaction: "y",
        TransactionID: "60a78ed201d88997746c91b5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ConfirmsPlanting4

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
    res, err := s.AirtravelCoordinates.ConfirmsPlanting4(ctx, operations.ConfirmsPlanting4RequestBody{
        APIKeyL1: "d95fead6-e8a6-4247-9fb9-7835101a4560",
        APIKeyL2: "c60f8db5-7904-4227-960d-27400c38b166",
        ConfirmPlanting: "y",
        TransactionID: "60a78ed201d88997746c91b5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
