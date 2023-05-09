# TypeGazeteerCounties

## Overview

Search API for 'Census Gazeteer Counties' entry type

### Available Operations

* [SearchGazeteerCounties](#searchgazeteercounties) - Search API for 'Census Gazeteer Counties' entry type

## SearchGazeteerCounties

API to search for entries of type Census Gazeteer Counties

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
    res, err := s.TypeGazeteerCounties.SearchGazeteerCounties(ctx, operations.SearchGazeteerCountiesRequest{
        ChangedateFrom: types.MustTimeFromString("2021-07-20T07:57:05.780Z"),
        ChangedateTo: types.MustTimeFromString("2022-12-17T22:14:17.851Z"),
        CreatedateFrom: types.MustTimeFromString("2020-09-06T10:40:03.787Z"),
        CreatedateTo: types.MustTimeFromString("2022-07-26T16:25:58.578Z"),
        Description: sdk.String("adipisci"),
        Filesuffix: sdk.String("saepe"),
        Fromdate: types.MustTimeFromString("2022-11-30T15:58:04.315Z"),
        Group: sdk.String("quis"),
        Max: sdk.Int64(333072),
        Maxlatitude: sdk.Float32(7274.81),
        Maxlongitude: sdk.Float32(997.33),
        Minlatitude: sdk.Float32(5845.93),
        Minlongitude: sdk.Float32(4755.89),
        Name: sdk.String("Rufus Friesen"),
        SearchDbGazeteerCountiesAreaLand: sdk.Float64(1509.35),
        SearchDbGazeteerCountiesAreaWater: sdk.Float64(9930.02),
        SearchDbGazeteerCountiesCountyFips: sdk.String("veniam"),
        SearchDbGazeteerCountiesCountyName: sdk.String("consequuntur"),
        SearchDbGazeteerCountiesFullCountyFips: sdk.String("facere"),
        SearchDbGazeteerCountiesLocation: sdk.String("laudantium"),
        SearchDbGazeteerCountiesStateAbbreviation: sdk.String("odit"),
        SearchDbGazeteerCountiesStateFips: sdk.String("pariatur"),
        Skip: sdk.Int64(227362),
        Text: sdk.String("exercitationem"),
        Todate: types.MustTimeFromString("2022-10-04T10:29:48.523Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
