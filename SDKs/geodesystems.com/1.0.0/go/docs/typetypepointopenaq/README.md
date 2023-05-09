# TypeTypePointOpenaq

## Overview

Search API for 'Open AQ Air Quality' entry type

### Available Operations

* [SearchTypePointOpenaq](#searchtypepointopenaq) - Search API for 'Open AQ Air Quality' entry type

## SearchTypePointOpenaq

API to search for entries of type Open AQ Air Quality

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
    res, err := s.TypeTypePointOpenaq.SearchTypePointOpenaq(ctx, operations.SearchTypePointOpenaqRequest{
        ChangedateFrom: types.MustTimeFromString("2021-10-27T11:00:09.773Z"),
        ChangedateTo: types.MustTimeFromString("2022-06-06T12:40:02.823Z"),
        CreatedateFrom: types.MustTimeFromString("2021-01-03T16:10:13.814Z"),
        CreatedateTo: types.MustTimeFromString("2020-09-24T01:48:30.387Z"),
        Description: sdk.String("quaerat"),
        Filesuffix: sdk.String("veniam"),
        Fromdate: types.MustTimeFromString("2022-03-03T11:28:17.933Z"),
        Group: sdk.String("dolores"),
        Max: sdk.Int64(118158),
        Maxlatitude: sdk.Float32(4765.4),
        Maxlongitude: sdk.Float32(8046.85),
        Minlatitude: sdk.Float32(1730.72),
        Minlongitude: sdk.Float32(5658.09),
        Name: sdk.String("Tanya Hyatt"),
        SearchTypePointOpenaqCity: sdk.String("consectetur"),
        SearchTypePointOpenaqCountry: sdk.String("velit"),
        SearchTypePointOpenaqHoursOffset: sdk.Int64(273839),
        SearchTypePointOpenaqLocation: sdk.String("aspernatur"),
        Skip: sdk.Int64(323569),
        Text: sdk.String("incidunt"),
        Todate: types.MustTimeFromString("2022-10-05T13:16:43.183Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
