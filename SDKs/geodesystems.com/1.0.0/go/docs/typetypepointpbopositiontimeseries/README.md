# TypeTypePointPboPositionTimeSeries

## Overview

Search API for 'PBO Position Time Series' entry type

### Available Operations

* [SearchTypePointPboPositionTimeSeries](#searchtypepointpbopositiontimeseries) - Search API for 'PBO Position Time Series' entry type

## SearchTypePointPboPositionTimeSeries

API to search for entries of type PBO Position Time Series

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
    res, err := s.TypeTypePointPboPositionTimeSeries.SearchTypePointPboPositionTimeSeries(ctx, operations.SearchTypePointPboPositionTimeSeriesRequest{
        ChangedateFrom: types.MustTimeFromString("2021-07-13T23:07:49.934Z"),
        ChangedateTo: types.MustTimeFromString("2020-11-06T21:53:41.627Z"),
        CreatedateFrom: types.MustTimeFromString("2022-06-01T15:55:43.983Z"),
        CreatedateTo: types.MustTimeFromString("2022-11-28T15:54:56.449Z"),
        Description: sdk.String("accusamus"),
        Filesuffix: sdk.String("excepturi"),
        Fromdate: types.MustTimeFromString("2022-11-04T03:46:01.468Z"),
        Group: sdk.String("perspiciatis"),
        Max: sdk.Int64(18173),
        Maxlatitude: sdk.Float32(3581.57),
        Maxlongitude: sdk.Float32(3525.96),
        Minlatitude: sdk.Float32(4754.03),
        Minlongitude: sdk.Float32(2405.45),
        Name: sdk.String("Enrique Ruecker"),
        SearchTypePointPboPositionTimeSeriesFormatVersion: sdk.String("nam"),
        SearchTypePointPboPositionTimeSeriesFourCharID: sdk.String("id"),
        SearchTypePointPboPositionTimeSeriesProcessingCenter: sdk.String("cumque"),
        SearchTypePointPboPositionTimeSeriesReferenceFrame: sdk.String("in"),
        SearchTypePointPboPositionTimeSeriesStationName: sdk.String("a"),
        Skip: sdk.Int64(844799),
        Text: sdk.String("culpa"),
        Todate: types.MustTimeFromString("2022-06-04T03:04:36.464Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
