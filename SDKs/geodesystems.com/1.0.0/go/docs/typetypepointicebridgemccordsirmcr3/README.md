# TypeTypePointIcebridgeMccordsIrmcr3

## Overview

Search API for 'McCords Irmcr3 Data' entry type

### Available Operations

* [SearchTypePointIcebridgeMccordsIrmcr3](#searchtypepointicebridgemccordsirmcr3) - Search API for 'McCords Irmcr3 Data' entry type

## SearchTypePointIcebridgeMccordsIrmcr3

API to search for entries of type McCords Irmcr3 Data

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
    res, err := s.TypeTypePointIcebridgeMccordsIrmcr3.SearchTypePointIcebridgeMccordsIrmcr3(ctx, operations.SearchTypePointIcebridgeMccordsIrmcr3Request{
        ChangedateFrom: types.MustTimeFromString("2021-11-02T20:34:30.193Z"),
        ChangedateTo: types.MustTimeFromString("2022-01-03T09:52:02.484Z"),
        CreatedateFrom: types.MustTimeFromString("2022-02-11T22:30:11.425Z"),
        CreatedateTo: types.MustTimeFromString("2022-06-04T03:35:50.569Z"),
        Description: sdk.String("nulla"),
        Filesuffix: sdk.String("ab"),
        Fromdate: types.MustTimeFromString("2021-05-10T07:27:43.062Z"),
        Group: sdk.String("magni"),
        Max: sdk.Int64(951633),
        Maxlatitude: sdk.Float32(7687.72),
        Maxlongitude: sdk.Float32(1277.84),
        Minlatitude: sdk.Float32(9668.01),
        Minlongitude: sdk.Float32(6189.9),
        Name: sdk.String("Mr. Louis Waelchi"),
        Skip: sdk.Int64(589014),
        Text: sdk.String("numquam"),
        Todate: types.MustTimeFromString("2022-04-07T08:46:00.661Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
