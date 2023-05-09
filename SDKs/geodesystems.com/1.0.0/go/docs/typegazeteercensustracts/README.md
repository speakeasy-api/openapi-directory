# TypeGazeteerCensusTracts

## Overview

Search API for 'Census Tracts' entry type

### Available Operations

* [SearchGazeteerCensusTracts](#searchgazeteercensustracts) - Search API for 'Census Tracts' entry type

## SearchGazeteerCensusTracts

API to search for entries of type Census Tracts

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
    res, err := s.TypeGazeteerCensusTracts.SearchGazeteerCensusTracts(ctx, operations.SearchGazeteerCensusTractsRequest{
        ChangedateFrom: types.MustTimeFromString("2022-08-25T23:28:51.951Z"),
        ChangedateTo: types.MustTimeFromString("2022-10-08T09:27:30.689Z"),
        CreatedateFrom: types.MustTimeFromString("2022-02-06T13:10:02.431Z"),
        CreatedateTo: types.MustTimeFromString("2022-11-20T11:30:36.362Z"),
        Description: sdk.String("ducimus"),
        Filesuffix: sdk.String("maiores"),
        Fromdate: types.MustTimeFromString("2022-11-26T19:05:24.735Z"),
        Group: sdk.String("laboriosam"),
        Max: sdk.Int64(863471),
        Maxlatitude: sdk.Float32(7294.48),
        Maxlongitude: sdk.Float32(5665.06),
        Minlatitude: sdk.Float32(5782.1),
        Minlongitude: sdk.Float32(3679.17),
        Name: sdk.String("Bernice Yundt"),
        SearchDbGazeteerCensusTractsCensusTractID: sdk.String("enim"),
        SearchDbGazeteerCensusTractsCountyFips: sdk.String("hic"),
        SearchDbGazeteerCensusTractsCountyName: sdk.String("animi"),
        SearchDbGazeteerCensusTractsFullCensusTractID: sdk.String("quas"),
        SearchDbGazeteerCensusTractsLandArea: sdk.Float64(5173.26),
        SearchDbGazeteerCensusTractsLocation: sdk.String("molestias"),
        SearchDbGazeteerCensusTractsState: sdk.String("odio"),
        SearchDbGazeteerCensusTractsStateFips: sdk.String("eaque"),
        SearchDbGazeteerCensusTractsWaterArea: sdk.Float64(9011.63),
        Skip: sdk.Int64(104078),
        Text: sdk.String("quos"),
        Todate: types.MustTimeFromString("2021-05-07T09:23:04.849Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
