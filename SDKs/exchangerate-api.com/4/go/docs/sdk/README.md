# SDK

## Overview

Fetch the latest currency exchange rates via API. ExchangeRate-API is free and unlimited.

API Documentation
<https://www.exchangerate-api.com/docs/documentation>
### Available Operations

* [GetLatestBaseCurrency](#getlatestbasecurrency) - Returns latest exchange rates in parameter-supplied base currency.

## GetLatestBaseCurrency

Returns latest exchange rates in parameter-supplied base currency.

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
    res, err := s.SDK.GetLatestBaseCurrency(ctx, operations.GetLatestBaseCurrencyRequest{
        BaseCurrency: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLatestBaseCurrency200ApplicationJSONObject != nil {
        // handle response
    }
}
```
