# TypeTypeEiaCategory

## Overview

Search API for 'EIA Category' entry type

### Available Operations

* [SearchTypeEiaCategory](#searchtypeeiacategory) - Search API for 'EIA Category' entry type

## SearchTypeEiaCategory

API to search for entries of type EIA Category

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
    res, err := s.TypeTypeEiaCategory.SearchTypeEiaCategory(ctx, operations.SearchTypeEiaCategoryRequest{
        ChangedateFrom: types.MustTimeFromString("2021-10-26T17:25:08.094Z"),
        ChangedateTo: types.MustTimeFromString("2022-04-27T18:27:57.430Z"),
        CreatedateFrom: types.MustTimeFromString("2022-09-24T03:14:43.673Z"),
        CreatedateTo: types.MustTimeFromString("2022-06-27T00:48:16.622Z"),
        Description: sdk.String("odio"),
        Filesuffix: sdk.String("nostrum"),
        Fromdate: types.MustTimeFromString("2022-10-01T00:33:36.040Z"),
        Group: sdk.String("autem"),
        Max: sdk.Int64(939516),
        Maxlatitude: sdk.Float32(3266.35),
        Maxlongitude: sdk.Float32(4051.61),
        Minlatitude: sdk.Float32(8216.72),
        Minlongitude: sdk.Float32(2005.01),
        Name: sdk.String("Gordon Parker"),
        Skip: sdk.Int64(255839),
        Text: sdk.String("laborum"),
        Todate: types.MustTimeFromString("2021-09-25T11:07:50.686Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
