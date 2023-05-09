# TypeGadgetsCountdown

## Overview

Search API for 'Countdown' entry type

### Available Operations

* [SearchGadgetsCountdown](#searchgadgetscountdown) - Search API for 'Countdown' entry type

## SearchGadgetsCountdown

API to search for entries of type Countdown

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.TypeGadgetsCountdown.SearchGadgetsCountdown(ctx, operations.SearchGadgetsCountdownRequest{
        ChangedateFrom: types.MustTimeFromString("2022-10-19T15:08:58.907Z"),
        ChangedateTo: types.MustTimeFromString("2021-02-01T13:09:02.595Z"),
        CreatedateFrom: types.MustTimeFromString("2022-03-29T07:53:10.726Z"),
        CreatedateTo: types.MustTimeFromString("2021-12-03T18:34:18.310Z"),
        Description: sdk.String("qui"),
        Filesuffix: sdk.String("expedita"),
        Fromdate: types.MustTimeFromString("2021-10-29T05:11:03.916Z"),
        Group: sdk.String("minima"),
        Max: sdk.Int64(809594),
        Maxlatitude: sdk.Float32(3165.42),
        Maxlongitude: sdk.Float32(2040.72),
        Minlatitude: sdk.Float32(4468.77),
        Minlongitude: sdk.Float32(7963.97),
        Name: sdk.String("Emma Herzog"),
        Skip: sdk.Int64(978173),
        Text: sdk.String("tempore"),
        Todate: types.MustTimeFromString("2022-04-10T10:41:17.662Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
