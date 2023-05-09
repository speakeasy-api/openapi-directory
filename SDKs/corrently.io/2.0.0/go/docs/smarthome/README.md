# SmartHome

## Overview

Helper services and endpoints for smarthome and home automation systems.

### Available Operations

* [GsiBesthour](#gsibesthour) - Get best hour (with most regional green energy) in a given timeframe.

## GsiBesthour

Simple Wrapper around the GreenPowerIndex for easy integration into almost any SmartHome system that allows access to a JSON/REST Service This endpoint is designed to indicate if a device should be turned on or off. (Switch state).


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
    res, err := s.SmartHome.GsiBesthour(ctx, operations.GsiBesthourRequest{
        Hours: sdk.Int64(791725),
        Key: sdk.String("placeat"),
        Timeframe: sdk.Int64(528895),
        Zip: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GsiBesthour200ApplicationJSONBoolean != nil {
        // handle response
    }
}
```
