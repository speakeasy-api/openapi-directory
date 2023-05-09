# GreenPowerIndexGrunstromIndex

## Overview

Green Power Index (GrünstromIndex), an AI based service to forecast energy sources in the grid (regionale Stromherkunft).
Further Details and sample implementation is available at [gruenstromindex.de](https://www.gruenstromindex.de/).


### Available Operations

* [GsiBesthour](#gsibesthour) - Get best hour (with most regional green energy) in a given timeframe.
* [GsiDispatch](#gsidispatch) - Dispatch (Green Energy Distribution Schedule)
* [GsiMarketdata](#gsimarketdata) - Marketdata
* [GsiPrediction](#gsiprediction) - Prediction

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
    res, err := s.GreenPowerIndexGrunstromIndex.GsiBesthour(ctx, operations.GsiBesthourRequest{
        Hours: sdk.Int64(602763),
        Key: sdk.String("nulla"),
        Timeframe: sdk.Int64(544883),
        Zip: sdk.String("illum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GsiBesthour200ApplicationJSONBoolean != nil {
        // handle response
    }
}
```

## GsiDispatch

Dispatch of green energy has two aspects to consider:
  - Availability of gerneration facility (depends on weather and installed capacity)
  - Demand of energy
Using the green power index (GrünstromIndex) we have received a tool to automate distribution of energy in order to prevent redispatch situations. Doing this alows to opimize resource usage (tactical) and leverage data for investment planning (strategic).


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
    res, err := s.GreenPowerIndexGrunstromIndex.GsiDispatch(ctx, operations.GsiDispatchRequest{
        Key: sdk.String("vel"),
        Zip: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GsiDispatch200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GsiMarketdata

Compatible to awattar (https://api.awattar.de/v1/marketdata) API interface but data comes from GreenPowerIndex instead of EPEXSpot.


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
    res, err := s.GreenPowerIndexGrunstromIndex.GsiMarketdata(ctx, operations.GsiMarketdataRequest{
        Zip: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GsiMarketdata200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GsiPrediction

Retrieval the GreenPowerIndex (GrünstromIndex) for a given city (by zipcode) in Germany.


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
    res, err := s.GreenPowerIndexGrunstromIndex.GsiPrediction(ctx, operations.GsiPredictionRequest{
        Key: sdk.String("suscipit"),
        Zip: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GsiPrediction200ApplicationJSONObject != nil {
        // handle response
    }
}
```
