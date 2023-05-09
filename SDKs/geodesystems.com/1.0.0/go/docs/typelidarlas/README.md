# TypeLidarLas

## Overview

Search API for 'LAS Lidar Data' entry type

### Available Operations

* [SearchLidarLas](#searchlidarlas) - Search API for 'LAS Lidar Data' entry type

## SearchLidarLas

API to search for entries of type LAS Lidar Data

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
    res, err := s.TypeLidarLas.SearchLidarLas(ctx, operations.SearchLidarLasRequest{
        ChangedateFrom: types.MustTimeFromString("2022-04-05T18:49:15.247Z"),
        ChangedateTo: types.MustTimeFromString("2022-07-04T20:08:46.226Z"),
        CreatedateFrom: types.MustTimeFromString("2022-11-06T09:59:59.144Z"),
        CreatedateTo: types.MustTimeFromString("2022-05-20T19:36:03.657Z"),
        Description: sdk.String("provident"),
        Filesuffix: sdk.String("cum"),
        Fromdate: types.MustTimeFromString("2020-11-21T03:47:05.182Z"),
        Group: sdk.String("quidem"),
        Max: sdk.Int64(932080),
        Maxlatitude: sdk.Float32(3895.48),
        Maxlongitude: sdk.Float32(6017.14),
        Minlatitude: sdk.Float32(2637.67),
        Minlongitude: sdk.Float32(5951.98),
        Name: sdk.String("Jonathon Collins"),
        Skip: sdk.Int64(279172),
        Text: sdk.String("recusandae"),
        Todate: types.MustTimeFromString("2021-01-03T04:35:17.852Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
