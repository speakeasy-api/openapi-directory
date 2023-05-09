# V1System

## Overview

System overview

### Available Operations

* [HealthCheck](#healthcheck) - Returns the health information for the official business registers based on usage.
* [SystemCountries](#systemcountries) - Returns a list of countries
* [SystemPricelist](#systempricelist) - Returns a list of products with prices

## HealthCheck

Returns the health information for the official business registers based on usage.

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
    res, err := s.V1System.HealthCheck(ctx, operations.HealthCheckSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HealthCheck200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## SystemCountries

Retrieve the list of all currently enabled countries

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
    res, err := s.V1System.SystemCountries(ctx, operations.SystemCountriesSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SystemCountries200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## SystemPricelist

Retrieve pricing rules for your subscription plan

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
    res, err := s.V1System.SystemPricelist(ctx, operations.SystemPricelistSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SystemPricelist200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
