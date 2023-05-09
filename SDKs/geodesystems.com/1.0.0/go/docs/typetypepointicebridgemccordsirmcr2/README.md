# TypeTypePointIcebridgeMccordsIrmcr2

## Overview

Search API for 'McCords Irmcr2 Data' entry type

### Available Operations

* [SearchTypePointIcebridgeMccordsIrmcr2](#searchtypepointicebridgemccordsirmcr2) - Search API for 'McCords Irmcr2 Data' entry type

## SearchTypePointIcebridgeMccordsIrmcr2

API to search for entries of type McCords Irmcr2 Data

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
    res, err := s.TypeTypePointIcebridgeMccordsIrmcr2.SearchTypePointIcebridgeMccordsIrmcr2(ctx, operations.SearchTypePointIcebridgeMccordsIrmcr2Request{
        ChangedateFrom: types.MustTimeFromString("2022-09-01T20:19:05.294Z"),
        ChangedateTo: types.MustTimeFromString("2022-11-16T15:03:29.219Z"),
        CreatedateFrom: types.MustTimeFromString("2022-08-07T16:38:24.285Z"),
        CreatedateTo: types.MustTimeFromString("2020-08-18T13:51:19.758Z"),
        Description: sdk.String("molestiae"),
        Filesuffix: sdk.String("mollitia"),
        Fromdate: types.MustTimeFromString("2021-01-28T14:46:04.955Z"),
        Group: sdk.String("eum"),
        Max: sdk.Int64(106201),
        Maxlatitude: sdk.Float32(3811.97),
        Maxlongitude: sdk.Float32(9115.47),
        Minlatitude: sdk.Float32(6520.29),
        Minlongitude: sdk.Float32(3688.49),
        Name: sdk.String("Fernando Bode"),
        Skip: sdk.Int64(116452),
        Text: sdk.String("provident"),
        Todate: types.MustTimeFromString("2022-09-15T17:32:45.445Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
