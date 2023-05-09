# TypeTypeUsgsGauge

## Overview

Search API for 'USGS Stream Gauge' entry type

### Available Operations

* [SearchTypeUsgsGauge](#searchtypeusgsgauge) - Search API for 'USGS Stream Gauge' entry type

## SearchTypeUsgsGauge

API to search for entries of type USGS Stream Gauge

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
    res, err := s.TypeTypeUsgsGauge.SearchTypeUsgsGauge(ctx, operations.SearchTypeUsgsGaugeRequest{
        ChangedateFrom: types.MustTimeFromString("2022-12-09T13:36:42.900Z"),
        ChangedateTo: types.MustTimeFromString("2022-09-11T13:45:47.122Z"),
        CreatedateFrom: types.MustTimeFromString("2022-02-20T23:02:38.907Z"),
        CreatedateTo: types.MustTimeFromString("2022-03-13T17:18:01.984Z"),
        Description: sdk.String("ratione"),
        Filesuffix: sdk.String("soluta"),
        Fromdate: types.MustTimeFromString("2022-12-15T02:47:25.293Z"),
        Group: sdk.String("laudantium"),
        Max: sdk.Int64(26990),
        Maxlatitude: sdk.Float32(5940.2),
        Maxlongitude: sdk.Float32(3114.65),
        Minlatitude: sdk.Float32(2010.56),
        Minlongitude: sdk.Float32(4744.53),
        Name: sdk.String("Laverne Bednar II"),
        Skip: sdk.Int64(355451),
        Text: sdk.String("excepturi"),
        Todate: types.MustTimeFromString("2021-03-04T06:33:21.309Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
