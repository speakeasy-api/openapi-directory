# TypeProjectStandardName

## Overview

Search API for 'Standard Parameter Name' entry type

### Available Operations

* [SearchProjectStandardName](#searchprojectstandardname) - Search API for 'Standard Parameter Name' entry type

## SearchProjectStandardName

API to search for entries of type Standard Parameter Name

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
    res, err := s.TypeProjectStandardName.SearchProjectStandardName(ctx, operations.SearchProjectStandardNameRequest{
        ChangedateFrom: types.MustTimeFromString("2020-06-25T04:21:40.208Z"),
        ChangedateTo: types.MustTimeFromString("2021-09-05T01:09:34.246Z"),
        CreatedateFrom: types.MustTimeFromString("2022-10-28T08:52:08.006Z"),
        CreatedateTo: types.MustTimeFromString("2020-07-26T23:23:59.902Z"),
        Description: sdk.String("quam"),
        Filesuffix: sdk.String("similique"),
        Fromdate: types.MustTimeFromString("2020-04-15T01:03:52.923Z"),
        Group: sdk.String("facere"),
        Max: sdk.Int64(748723),
        Maxlatitude: sdk.Float32(8690.88),
        Maxlongitude: sdk.Float32(5611.21),
        Minlatitude: sdk.Float32(128.77),
        Minlongitude: sdk.Float32(8365.48),
        Name: sdk.String("Barry Funk"),
        SearchProjectStandardNameAliases: sdk.String("dolore"),
        SearchProjectStandardNameUnit: sdk.String("esse"),
        Skip: sdk.Int64(968205),
        Text: sdk.String("iste"),
        Todate: types.MustTimeFromString("2022-06-02T22:16:37.572Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
