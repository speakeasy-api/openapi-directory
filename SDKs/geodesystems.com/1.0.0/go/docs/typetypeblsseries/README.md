# TypeTypeBlsSeries

## Overview

Search API for 'BLS Series' entry type

### Available Operations

* [SearchTypeBlsSeries](#searchtypeblsseries) - Search API for 'BLS Series' entry type

## SearchTypeBlsSeries

API to search for entries of type BLS Series

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
    res, err := s.TypeTypeBlsSeries.SearchTypeBlsSeries(ctx, operations.SearchTypeBlsSeriesRequest{
        ChangedateFrom: types.MustTimeFromString("2021-07-07T02:17:11.579Z"),
        ChangedateTo: types.MustTimeFromString("2022-02-06T14:06:29.385Z"),
        CreatedateFrom: types.MustTimeFromString("2021-10-06T15:52:44.474Z"),
        CreatedateTo: types.MustTimeFromString("2022-11-09T19:30:20.243Z"),
        Description: sdk.String("ullam"),
        Filesuffix: sdk.String("ullam"),
        Fromdate: types.MustTimeFromString("2022-05-02T06:02:30.053Z"),
        Group: sdk.String("qui"),
        Max: sdk.Int64(508773),
        Maxlatitude: sdk.Float32(2371.89),
        Maxlongitude: sdk.Float32(5191.32),
        Minlatitude: sdk.Float32(1835.04),
        Minlongitude: sdk.Float32(6481.66),
        Name: sdk.String("Troy Leuschke"),
        SearchTypeBlsSeriesArea: sdk.String("reiciendis"),
        SearchTypeBlsSeriesIndustry: sdk.String("possimus"),
        SearchTypeBlsSeriesItem: sdk.String("odit"),
        SearchTypeBlsSeriesMeasureDataType: sdk.String("consectetur"),
        SearchTypeBlsSeriesSeasonality: sdk.String("inventore"),
        SearchTypeBlsSeriesSector: sdk.String("minima"),
        SearchTypeBlsSeriesSurveyName: sdk.String("facilis"),
        Skip: sdk.Int64(708360),
        Text: sdk.String("deserunt"),
        Todate: types.MustTimeFromString("2022-08-18T14:16:26.757Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
