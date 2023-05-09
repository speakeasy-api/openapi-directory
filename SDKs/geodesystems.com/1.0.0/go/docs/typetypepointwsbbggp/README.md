# TypeTypePointWsbbGgp

## Overview

Search API for 'Global Geodynamics GGP Format' entry type

### Available Operations

* [SearchTypePointWsbbGgp](#searchtypepointwsbbggp) - Search API for 'Global Geodynamics GGP Format' entry type

## SearchTypePointWsbbGgp

API to search for entries of type Global Geodynamics GGP Format

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
    res, err := s.TypeTypePointWsbbGgp.SearchTypePointWsbbGgp(ctx, operations.SearchTypePointWsbbGgpRequest{
        ChangedateFrom: types.MustTimeFromString("2022-05-22T02:36:50.647Z"),
        ChangedateTo: types.MustTimeFromString("2020-04-15T01:27:01.127Z"),
        CreatedateFrom: types.MustTimeFromString("2021-08-30T09:06:30.305Z"),
        CreatedateTo: types.MustTimeFromString("2022-05-20T21:45:29.582Z"),
        Description: sdk.String("molestiae"),
        Filesuffix: sdk.String("facilis"),
        Fromdate: types.MustTimeFromString("2022-05-10T03:35:29.040Z"),
        Group: sdk.String("itaque"),
        Max: sdk.Int64(586366),
        Maxlatitude: sdk.Float32(92.47),
        Maxlongitude: sdk.Float32(6893.66),
        Minlatitude: sdk.Float32(7524.92),
        Minlongitude: sdk.Float32(2563.25),
        Name: sdk.String("Mona Wyman"),
        SearchTypePointWsbbGgpAuthor: sdk.String("blanditiis"),
        SearchTypePointWsbbGgpInstrument: sdk.String("voluptatibus"),
        SearchTypePointWsbbGgpStation: sdk.String("nulla"),
        Skip: sdk.Int64(367747),
        Text: sdk.String("ratione"),
        Todate: types.MustTimeFromString("2022-12-24T23:27:12.449Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
