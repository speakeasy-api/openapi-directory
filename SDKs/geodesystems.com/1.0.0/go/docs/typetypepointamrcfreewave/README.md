# TypeTypePointAmrcFreewave

## Overview

Search API for 'AMRC Freewave  Data' entry type

### Available Operations

* [SearchTypePointAmrcFreewave](#searchtypepointamrcfreewave) - Search API for 'AMRC Freewave  Data' entry type

## SearchTypePointAmrcFreewave

API to search for entries of type AMRC Freewave  Data

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
    res, err := s.TypeTypePointAmrcFreewave.SearchTypePointAmrcFreewave(ctx, operations.SearchTypePointAmrcFreewaveRequest{
        ChangedateFrom: types.MustTimeFromString("2021-05-12T21:53:27.420Z"),
        ChangedateTo: types.MustTimeFromString("2022-12-30T19:57:19.656Z"),
        CreatedateFrom: types.MustTimeFromString("2022-02-28T06:13:48.877Z"),
        CreatedateTo: types.MustTimeFromString("2022-08-05T06:34:33.185Z"),
        Description: sdk.String("alias"),
        Filesuffix: sdk.String("laudantium"),
        Fromdate: types.MustTimeFromString("2022-04-11T05:46:20.273Z"),
        Group: sdk.String("maiores"),
        Max: sdk.Int64(723374),
        Maxlatitude: sdk.Float32(8672.86),
        Maxlongitude: sdk.Float32(7972.62),
        Minlatitude: sdk.Float32(2665.04),
        Minlongitude: sdk.Float32(1143.41),
        Name: sdk.String("Toby Hilll"),
        SearchTypePointAmrcFreewaveDataloggerModel: sdk.String("officiis"),
        SearchTypePointAmrcFreewaveDataloggerSerial: sdk.String("sed"),
        SearchTypePointAmrcFreewaveFormat: sdk.String("mollitia"),
        SearchTypePointAmrcFreewaveStationName: sdk.String("saepe"),
        Skip: sdk.Int64(289373),
        Text: sdk.String("doloribus"),
        Todate: types.MustTimeFromString("2022-05-06T23:45:07.291Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
