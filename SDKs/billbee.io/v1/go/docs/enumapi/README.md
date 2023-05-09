# EnumAPI

### Available Operations

* [EnumAPIGetOrderStates](#enumapigetorderstates) - Returns a list with all defined orderstates
* [EnumAPIGetPaymentTypes](#enumapigetpaymenttypes) - Returns a list with all defined paymenttypes
* [EnumAPIGetShipmentTypes](#enumapigetshipmenttypes) - Returns a list with all defined shipmenttypes
* [EnumAPIGetShippingCarriers](#enumapigetshippingcarriers) - Returns a list with all defined shippingcarriers

## EnumAPIGetOrderStates

Returns a list with all defined orderstates

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
    res, err := s.EnumAPI.EnumAPIGetOrderStates(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.EnumAPIGetOrderStates200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EnumAPIGetPaymentTypes

Returns a list with all defined paymenttypes

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
    res, err := s.EnumAPI.EnumAPIGetPaymentTypes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.EnumAPIGetPaymentTypes200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EnumAPIGetShipmentTypes

Returns a list with all defined shipmenttypes

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
    res, err := s.EnumAPI.EnumAPIGetShipmentTypes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.EnumAPIGetShipmentTypes200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EnumAPIGetShippingCarriers

Returns a list with all defined shippingcarriers

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
    res, err := s.EnumAPI.EnumAPIGetShippingCarriers(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.EnumAPIGetShippingCarriers200ApplicationJSONObject != nil {
        // handle response
    }
}
```
