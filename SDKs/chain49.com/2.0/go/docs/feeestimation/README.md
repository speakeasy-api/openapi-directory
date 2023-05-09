# FeeEstimation

## Overview

 

### Available Operations

* [GetEstimateFeeV2](#getestimatefeev2) - Estimate transaction fee V2

## GetEstimateFeeV2

Returns an estimated transaction fee for a specific confirmation target.
If you want your transaction to be included in the next block, then you give 1 as parameter. If it is not urgent, then you can wait a bit longer and get an estimation for the fifth next block.

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
    res, err := s.FeeEstimation.GetEstimateFeeV2(ctx, operations.GetEstimateFeeV2Request{
        Blockchain: "bitcoin",
        ConfirmationTarget: 1,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEstimateFeeV2200ApplicationJSONObject != nil {
        // handle response
    }
}
```
