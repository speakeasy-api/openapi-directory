# TypeCalendar

## Overview

Search API for 'Calendar' entry type

### Available Operations

* [SearchCalendar](#searchcalendar) - Search API for 'Calendar' entry type

## SearchCalendar

API to search for entries of type Calendar

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
    res, err := s.TypeCalendar.SearchCalendar(ctx, operations.SearchCalendarRequest{
        ChangedateFrom: types.MustTimeFromString("2022-09-02T13:45:48.565Z"),
        ChangedateTo: types.MustTimeFromString("2022-02-10T10:18:57.740Z"),
        CreatedateFrom: types.MustTimeFromString("2022-06-27T22:55:23.952Z"),
        CreatedateTo: types.MustTimeFromString("2022-06-28T14:53:26.431Z"),
        Description: sdk.String("cum"),
        Filesuffix: sdk.String("laboriosam"),
        Fromdate: types.MustTimeFromString("2021-12-10T00:50:30.454Z"),
        Group: sdk.String("error"),
        Max: sdk.Int64(944708),
        Maxlatitude: sdk.Float32(7105.29),
        Maxlongitude: sdk.Float32(8928.63),
        Minlatitude: sdk.Float32(2049.23),
        Minlongitude: sdk.Float32(6771.15),
        Name: sdk.String("Brandi Padberg"),
        Skip: sdk.Int64(272683),
        Text: sdk.String("atque"),
        Todate: types.MustTimeFromString("2022-09-19T19:33:03.218Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
