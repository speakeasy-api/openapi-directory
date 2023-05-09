# TypeTypePointNoaaTower

## Overview

Search API for 'NOAA Tower Network' entry type

### Available Operations

* [SearchTypePointNoaaTower](#searchtypepointnoaatower) - Search API for 'NOAA Tower Network' entry type

## SearchTypePointNoaaTower

API to search for entries of type NOAA Tower Network

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
    res, err := s.TypeTypePointNoaaTower.SearchTypePointNoaaTower(ctx, operations.SearchTypePointNoaaTowerRequest{
        ChangedateFrom: types.MustTimeFromString("2021-10-27T17:27:51.202Z"),
        ChangedateTo: types.MustTimeFromString("2021-05-24T05:26:08.769Z"),
        CreatedateFrom: types.MustTimeFromString("2022-10-07T17:16:18.553Z"),
        CreatedateTo: types.MustTimeFromString("2022-08-10T22:20:26.115Z"),
        Description: sdk.String("aspernatur"),
        Filesuffix: sdk.String("eveniet"),
        Fromdate: types.MustTimeFromString("2021-01-08T15:03:54.731Z"),
        Group: sdk.String("temporibus"),
        Max: sdk.Int64(966682),
        Maxlatitude: sdk.Float32(3165.84),
        Maxlongitude: sdk.Float32(3686.58),
        Minlatitude: sdk.Float32(7835.08),
        Minlongitude: sdk.Float32(1748.97),
        Name: sdk.String("Ms. Mario Sawayn DDS"),
        SearchTypePointNoaaTowerSiteID: sdk.String("accusantium"),
        Skip: sdk.Int64(408509),
        Text: sdk.String("laborum"),
        Todate: types.MustTimeFromString("2022-11-09T03:03:37.221Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
