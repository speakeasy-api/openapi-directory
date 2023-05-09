# TypeTypeSoundingGsd

## Overview

Search API for 'GSD Sounding' entry type

### Available Operations

* [SearchTypeSoundingGsd](#searchtypesoundinggsd) - Search API for 'GSD Sounding' entry type

## SearchTypeSoundingGsd

API to search for entries of type GSD Sounding

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
    res, err := s.TypeTypeSoundingGsd.SearchTypeSoundingGsd(ctx, operations.SearchTypeSoundingGsdRequest{
        ChangedateFrom: types.MustTimeFromString("2022-05-11T20:18:30.071Z"),
        ChangedateTo: types.MustTimeFromString("2022-02-26T05:10:52.371Z"),
        CreatedateFrom: types.MustTimeFromString("2022-01-31T13:42:39.333Z"),
        CreatedateTo: types.MustTimeFromString("2021-10-29T09:01:04.013Z"),
        Description: sdk.String("modi"),
        Filesuffix: sdk.String("ratione"),
        Fromdate: types.MustTimeFromString("2022-08-04T05:35:00.281Z"),
        Group: sdk.String("aliquam"),
        Max: sdk.Int64(357684),
        Maxlatitude: sdk.Float32(8726.02),
        Maxlongitude: sdk.Float32(572.91),
        Minlatitude: sdk.Float32(2260.97),
        Minlongitude: sdk.Float32(140.82),
        Name: sdk.String("Alex Zulauf"),
        Skip: sdk.Int64(650937),
        Text: sdk.String("quis"),
        Todate: types.MustTimeFromString("2020-09-14T19:44:18.051Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
