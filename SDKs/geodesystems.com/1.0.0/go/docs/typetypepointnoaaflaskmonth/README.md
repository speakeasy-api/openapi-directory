# TypeTypePointNoaaFlaskMonth

## Overview

Search API for 'NOAA Flask Month Measurements' entry type

### Available Operations

* [SearchTypePointNoaaFlaskMonth](#searchtypepointnoaaflaskmonth) - Search API for 'NOAA Flask Month Measurements' entry type

## SearchTypePointNoaaFlaskMonth

API to search for entries of type NOAA Flask Month Measurements

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
    res, err := s.TypeTypePointNoaaFlaskMonth.SearchTypePointNoaaFlaskMonth(ctx, operations.SearchTypePointNoaaFlaskMonthRequest{
        ChangedateFrom: types.MustTimeFromString("2022-10-27T23:58:25.067Z"),
        ChangedateTo: types.MustTimeFromString("2022-07-28T19:48:31.120Z"),
        CreatedateFrom: types.MustTimeFromString("2020-10-23T21:06:52.870Z"),
        CreatedateTo: types.MustTimeFromString("2022-10-29T19:08:41.456Z"),
        Description: sdk.String("dignissimos"),
        Filesuffix: sdk.String("veritatis"),
        Fromdate: types.MustTimeFromString("2021-06-22T00:29:52.181Z"),
        Group: sdk.String("ab"),
        Max: sdk.Int64(406575),
        Maxlatitude: sdk.Float32(2198.04),
        Maxlongitude: sdk.Float32(8847.04),
        Minlatitude: sdk.Float32(1493.76),
        Minlongitude: sdk.Float32(4641.11),
        Name: sdk.String("Horace Donnelly IV"),
        SearchTypePointNoaaFlaskMonthLabIDNumber: sdk.String("aliquam"),
        SearchTypePointNoaaFlaskMonthMeasurementGroup: sdk.String("vero"),
        SearchTypePointNoaaFlaskMonthParameter: sdk.String("dolorum"),
        SearchTypePointNoaaFlaskMonthProject: sdk.String("omnis"),
        SearchTypePointNoaaFlaskMonthSiteID: sdk.String("occaecati"),
        Skip: sdk.Int64(164044),
        Text: sdk.String("veniam"),
        Todate: types.MustTimeFromString("2022-03-02T18:43:29.848Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
