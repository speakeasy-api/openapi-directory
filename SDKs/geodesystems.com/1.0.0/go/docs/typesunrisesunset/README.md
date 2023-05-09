# TypeSunrisesunset

## Overview

Search API for 'Sunrise/Sunset Display' entry type

### Available Operations

* [SearchSunrisesunset](#searchsunrisesunset) - Search API for 'Sunrise/Sunset Display' entry type

## SearchSunrisesunset

API to search for entries of type Sunrise/Sunset Display

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
    res, err := s.TypeSunrisesunset.SearchSunrisesunset(ctx, operations.SearchSunrisesunsetRequest{
        ChangedateFrom: types.MustTimeFromString("2021-02-10T14:02:23.370Z"),
        ChangedateTo: types.MustTimeFromString("2022-11-03T12:07:22.406Z"),
        CreatedateFrom: types.MustTimeFromString("2022-04-09T16:36:14.999Z"),
        CreatedateTo: types.MustTimeFromString("2022-05-23T16:20:14.362Z"),
        Description: sdk.String("dicta"),
        Filesuffix: sdk.String("qui"),
        Fromdate: types.MustTimeFromString("2022-12-29T17:39:27.998Z"),
        Group: sdk.String("amet"),
        Max: sdk.Int64(9284),
        Maxlatitude: sdk.Float32(8526.34),
        Maxlongitude: sdk.Float32(5320.92),
        Minlatitude: sdk.Float32(2451.16),
        Minlongitude: sdk.Float32(9427.8),
        Name: sdk.String("Rosie Waters"),
        Skip: sdk.Int64(493865),
        Text: sdk.String("provident"),
        Todate: types.MustTimeFromString("2021-05-06T00:34:29.656Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
