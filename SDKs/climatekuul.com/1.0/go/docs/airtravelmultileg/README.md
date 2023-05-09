# AirtravelMultileg

### Available Operations

* [AirtravelMultileg](#airtravelmultileg) - airtravelMultileg
* [ConfirmCarbonOffset3](#confirmcarbonoffset3) - confirmCarbonOffset
* [ConfirmPayment3](#confirmpayment3) - confirmPayment
* [ConfirmPaymentOfTransaction3](#confirmpaymentoftransaction3) - confirmTransaction
* [ConfirmsPlanting3](#confirmsplanting3) - confirmPlanting

## AirtravelMultileg

airtravelMultileg

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
    res, err := s.AirtravelMultileg.AirtravelMultileg(ctx, shared.AirtravelMultilegRequest{
        APIKeyL1: "corrupti",
        APIKeyL2: "provident",
        ContactEmail: "distinctio",
        ContactFirstName: "quibusdam",
        ContactLastName: "unde",
        Leg1: shared.Leg1{
            DestinationAirportCode: "nulla",
            OriginAirportCode: "corrupti",
            TravelClass: "illum",
        },
        Leg2: shared.Leg1{
            DestinationAirportCode: "vel",
            OriginAirportCode: "error",
            TravelClass: "deserunt",
        },
        Leg3: shared.Leg1{
            DestinationAirportCode: "suscipit",
            OriginAirportCode: "iure",
            TravelClass: "magnam",
        },
        LegsCount: "debitis",
        NumberOfPassengers: "ipsa",
        TravelMode: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ConfirmCarbonOffset3

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
    res, err := s.AirtravelMultileg.ConfirmCarbonOffset3(ctx, operations.ConfirmCarbonOffset3RequestBody{
        CarbonOffset: "y",
        ContactEmail: sdk.String("example@example.com"),
        ContactFirstName: sdk.String("abc"),
        ContactLastName: sdk.String("xyz"),
        TransactionID: "60a75c0e94c8cb95a6d0e02e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ConfirmPayment3

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
    res, err := s.AirtravelMultileg.ConfirmPayment3(ctx, operations.ConfirmPayment3RequestBody{
        APIKeyL1: "d95fead6-e8a6-4247-9fb9-7835101a4560",
        APIKeyL2: "c60f8db5-7904-4227-960d-27400c38b166",
        ConfirmPayment: "y",
        PaymentID: 34567878,
        TransactionID: "60a75c0e94c8cb95a6d0e02e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ConfirmPaymentOfTransaction3

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
    res, err := s.AirtravelMultileg.ConfirmPaymentOfTransaction3(ctx, operations.ConfirmPaymentOfTransaction3RequestBody{
        ConfirmTransaction: "y",
        TransactionID: "60a75c0e94c8cb95a6d0e02e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ConfirmsPlanting3

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
    res, err := s.AirtravelMultileg.ConfirmsPlanting3(ctx, operations.ConfirmsPlanting3RequestBody{
        APIKeyL1: "d95fead6-e8a6-4247-9fb9-7835101a4560",
        APIKeyL2: "c60f8db5-7904-4227-960d-27400c38b166",
        ConfirmPlanting: "y",
        TransactionID: "60a75c0e94c8cb95a6d0e02e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
