# TypeTypeFredCategory

## Overview

Search API for 'FRED Category' entry type

### Available Operations

* [SearchTypeFredCategory](#searchtypefredcategory) - Search API for 'FRED Category' entry type

## SearchTypeFredCategory

API to search for entries of type FRED Category

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
    res, err := s.TypeTypeFredCategory.SearchTypeFredCategory(ctx, operations.SearchTypeFredCategoryRequest{
        ChangedateFrom: types.MustTimeFromString("2022-06-25T09:45:59.184Z"),
        ChangedateTo: types.MustTimeFromString("2022-11-26T08:22:25.392Z"),
        CreatedateFrom: types.MustTimeFromString("2021-07-19T02:34:49.174Z"),
        CreatedateTo: types.MustTimeFromString("2022-11-09T05:06:53.566Z"),
        Description: sdk.String("inventore"),
        Filesuffix: sdk.String("optio"),
        Fromdate: types.MustTimeFromString("2021-02-25T01:43:39.041Z"),
        Group: sdk.String("commodi"),
        Max: sdk.Int64(820322),
        Maxlatitude: sdk.Float32(5890.98),
        Maxlongitude: sdk.Float32(3304.59),
        Minlatitude: sdk.Float32(263.89),
        Minlongitude: sdk.Float32(1460.04),
        Name: sdk.String("Michael Thiel"),
        Skip: sdk.Int64(187612),
        Text: sdk.String("perferendis"),
        Todate: types.MustTimeFromString("2022-03-31T01:51:07.320Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
