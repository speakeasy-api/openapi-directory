# Market

### Available Operations

* [Getalltimehigh](#getalltimehigh) - getAllTimeHigh
* [Getalltimelow](#getalltimelow) - getAllTimeLow
* [Getcurrencies](#getcurrencies) - getCurrencies
* [Getpricedatabycurrency](#getpricedatabycurrency) - getPriceDataByCurrency
* [Getratebycurrency](#getratebycurrency) - getRateByCurrency

## Getalltimehigh

getAllTimeHigh

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
    res, err := s.Market.Getalltimehigh(ctx, operations.GetalltimehighRequest{
        Currency1: "btc",
        Currenty2: "eur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getalltimehigh200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getalltimelow

getAllTimeLow

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
    res, err := s.Market.Getalltimelow(ctx, operations.GetalltimelowRequest{
        Currency1: "btc",
        Currency2: "eur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getalltimelow200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getcurrencies

getCurrencies

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
    res, err := s.Market.Getcurrencies(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getcurrencies200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getpricedatabycurrency

getPriceDataByCurrency

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
    res, err := s.Market.Getpricedatabycurrency(ctx, operations.GetpricedatabycurrencyRequest{
        Currency1: "btc",
        Currency2: "usd",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getpricedatabycurrency200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getratebycurrency

getRateByCurrency

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
    res, err := s.Market.Getratebycurrency(ctx, operations.GetratebycurrencyRequest{
        Currency1: "btc",
        Currency2: "eur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getratebycurrency200ApplicationJSONObject != nil {
        // handle response
    }
}
```
