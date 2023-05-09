# TypeTypeGtfsAgency

## Overview

Search API for 'Transit Agency' entry type

### Available Operations

* [SearchTypeGtfsAgency](#searchtypegtfsagency) - Search API for 'Transit Agency' entry type

## SearchTypeGtfsAgency

API to search for entries of type Transit Agency

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
    res, err := s.TypeTypeGtfsAgency.SearchTypeGtfsAgency(ctx, operations.SearchTypeGtfsAgencyRequest{
        ChangedateFrom: types.MustTimeFromString("2021-12-23T19:43:14.990Z"),
        ChangedateTo: types.MustTimeFromString("2020-08-14T16:05:15.385Z"),
        CreatedateFrom: types.MustTimeFromString("2022-07-30T09:42:12.301Z"),
        CreatedateTo: types.MustTimeFromString("2022-06-12T23:46:26.725Z"),
        Description: sdk.String("consectetur"),
        Filesuffix: sdk.String("soluta"),
        Fromdate: types.MustTimeFromString("2020-04-23T15:00:23.547Z"),
        Group: sdk.String("perspiciatis"),
        Max: sdk.Int64(380034),
        Maxlatitude: sdk.Float32(3553.42),
        Maxlongitude: sdk.Float32(6016.34),
        Minlatitude: sdk.Float32(8927.12),
        Minlongitude: sdk.Float32(6946.11),
        Name: sdk.String("Laura Thompson III"),
        Skip: sdk.Int64(938230),
        Text: sdk.String("est"),
        Todate: types.MustTimeFromString("2021-08-02T12:40:05.211Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
