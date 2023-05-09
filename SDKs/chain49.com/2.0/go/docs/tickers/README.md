# Tickers

## Overview

 

### Available Operations

* [GetTickersListV2](#gettickerslistv2) - Get Tickers list V2
* [GetTickersV2](#gettickersv2) - Get Tickers V2

## GetTickersListV2

Returns a list of available currency rate tickers (secondary currencies) for the specified date, along with an actual data timestamp.

Trailing slash '/' is mandatory

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Option1: &shared.SecurityOption1{
                XAPIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Tickers.GetTickersListV2(ctx, operations.GetTickersListV2Request{
        Blockchain: "bitcoin",
        Timestamp: sdk.String("1519053802"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTickersListV2200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetTickersV2

Returns currency rate for the specified currency and date. If the currency is not available for that specific timestamp, the next closest rate will be returned. All responses contain an actual rate timestamp.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Option1: &shared.SecurityOption1{
                XAPIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Tickers.GetTickersV2(ctx, operations.GetTickersV2Request{
        Blockchain: "bitcoin",
        Currency: sdk.String("usd"),
        Timestamp: sdk.String("1519053802"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTickersV2200ApplicationJSONObject != nil {
        // handle response
    }
}
```
