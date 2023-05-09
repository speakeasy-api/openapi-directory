# MeteringDecorator

## Overview

Allows to virtualy act as an Meter Point Operator by decorating meter readings with GreenPowerIndex (GrünstromIndex) handles. In principal this service decorates meter [OBIS Code](https://de.wikipedia.org/wiki/OBIS-Kennzahlen) 1.8.0 values to 1.8.1 and 1.8.2 according to the local and actual GSI value. A signature gets applied to the reading and all three OBIS values get hashed into the Energychain for consensus (e.q. creating balancing groups). CO2 footprint of a meter gets provided (as of first reading pushed).This works in conjunction with German Smart Meter Gateways (as of March 2020).


### Available Operations

* [MeteringGet](#meteringget) - Meter Reading
* [MeteringPost](#meteringpost) - Meter Reading

## MeteringGet

Retrieves a metered reading using account (Stromkonto).


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
    res, err := s.MeteringDecorator.MeteringGet(ctx, operations.MeteringGetRequest{
        Account: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MeteringGet200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## MeteringPost

Post meter reading and get it decorated. Best practice is to first create a new Stromkonto with the register method and choose a nice secret to protect updates. Now regularly send updates to get readings (consumption) split into green power (1.8.1) and grey power (1.8.2).


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
    res, err := s.MeteringDecorator.MeteringPost(ctx, operations.MeteringPostRequestBody{
        One80: sdk.Int64(891773),
        Account: sdk.String("ipsa"),
        Energy: sdk.Int64(963663),
        Secret: sdk.String("tempora"),
        Value: sdk.Int64(383441),
        Zip: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MeteringPost200ApplicationJSONObject != nil {
        // handle response
    }
}
```
