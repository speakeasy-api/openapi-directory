# TariffPriceAPI

## Overview

Tariff information for the German market region. Provides base price and energy price information for private households (Standardlastprofil H0, SLP H0 Tarifinformation).

### Available Operations

* [TariffSlph0](#tariffslph0) - Energy Tariff information
* [Tariffcomponents](#tariffcomponents) - Energy Tariff price components

## TariffSlph0

Provides pricing data for private households with standard load profiles (Standardlastprofil H0).


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
    res, err := s.TariffPriceAPI.TariffSlph0(ctx, operations.TariffSlph0Request{
        Zipcode: sdk.String("36162"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tariffh0s != nil {
        // handle response
    }
}
```

## Tariffcomponents

Provides insides into the different cost components of energy for a private household.
Sample Request: https://api.corrently.io/v2.0/tariff/components?email=demo%40corrently.io&zip=69168&kwha=3300


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
    res, err := s.TariffPriceAPI.Tariffcomponents(ctx, operations.TariffcomponentsRequest{
        Email: sdk.String("Gertrude_Welch44@yahoo.com"),
        Kwha: sdk.Int64(359508),
        Milliseconds: sdk.Int64(613064),
        Wh: sdk.Int64(437032),
        Zipcode: sdk.String("60096-6612"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Componentsh0 != nil {
        // handle response
    }
}
```
