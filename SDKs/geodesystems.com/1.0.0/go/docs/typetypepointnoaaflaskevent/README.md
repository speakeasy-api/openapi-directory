# TypeTypePointNoaaFlaskEvent

## Overview

Search API for 'NOAA Flask Event Measurements' entry type

### Available Operations

* [SearchTypePointNoaaFlaskEvent](#searchtypepointnoaaflaskevent) - Search API for 'NOAA Flask Event Measurements' entry type

## SearchTypePointNoaaFlaskEvent

API to search for entries of type NOAA Flask Event Measurements

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
    res, err := s.TypeTypePointNoaaFlaskEvent.SearchTypePointNoaaFlaskEvent(ctx, operations.SearchTypePointNoaaFlaskEventRequest{
        ChangedateFrom: types.MustTimeFromString("2022-10-25T19:35:03.327Z"),
        ChangedateTo: types.MustTimeFromString("2022-03-13T00:34:09.899Z"),
        CreatedateFrom: types.MustTimeFromString("2022-08-09T04:19:22.805Z"),
        CreatedateTo: types.MustTimeFromString("2022-09-09T08:21:03.844Z"),
        Description: sdk.String("enim"),
        Filesuffix: sdk.String("cumque"),
        Fromdate: types.MustTimeFromString("2022-02-26T18:20:37.660Z"),
        Group: sdk.String("blanditiis"),
        Max: sdk.Int64(93299),
        Maxlatitude: sdk.Float32(9636),
        Maxlongitude: sdk.Float32(1287.44),
        Minlatitude: sdk.Float32(6117.83),
        Minlongitude: sdk.Float32(182.85),
        Name: sdk.String("Judy Will"),
        SearchTypePointNoaaFlaskEventLabIDNumber: sdk.String("iste"),
        SearchTypePointNoaaFlaskEventMeasurementGroup: sdk.String("quidem"),
        SearchTypePointNoaaFlaskEventParameter: sdk.String("iusto"),
        SearchTypePointNoaaFlaskEventProject: sdk.String("culpa"),
        SearchTypePointNoaaFlaskEventSiteID: sdk.String("reiciendis"),
        Skip: sdk.Int64(952911),
        Text: sdk.String("consequatur"),
        Todate: types.MustTimeFromString("2020-12-19T20:04:09.350Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
