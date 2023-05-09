# DispatchGreenEnergyDistributionAPI

## Overview

Provides latest dispatch information of green energy at a specific location in Germany (Herkunft/GrünstromMix). It allows to do schedule management (Fahrplanmanagement) of green energy generation facilities, demand and resilience management for grid operators. The public version (OpenAPI) is always post fact. If you are interessted in pre fact (forecast) data, you might get in contact with STROMDAO GmbH.


### Available Operations

* [GsiDispatch](#gsidispatch) - Dispatch (Green Energy Distribution Schedule)

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
    res, err := s.DispatchGreenEnergyDistributionAPI.GsiDispatch(ctx, operations.GsiDispatchRequest{
        Key: sdk.String("distinctio"),
        Zip: sdk.String("quibusdam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GsiDispatch200ApplicationJSONObject != nil {
        // handle response
    }
}
```
