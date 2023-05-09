# TypeTypeHazarddata

## Overview

Search API for 'Hazard Data' entry type

### Available Operations

* [SearchTypeHazarddata](#searchtypehazarddata) - Search API for 'Hazard Data' entry type

## SearchTypeHazarddata

API to search for entries of type Hazard Data

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
    res, err := s.TypeTypeHazarddata.SearchTypeHazarddata(ctx, operations.SearchTypeHazarddataRequest{
        ChangedateFrom: types.MustTimeFromString("2022-10-09T08:14:07.846Z"),
        ChangedateTo: types.MustTimeFromString("2022-06-08T15:55:59.943Z"),
        CreatedateFrom: types.MustTimeFromString("2022-05-08T04:50:58.280Z"),
        CreatedateTo: types.MustTimeFromString("2020-11-29T23:58:11.356Z"),
        Description: sdk.String("odit"),
        Filesuffix: sdk.String("molestiae"),
        Fromdate: types.MustTimeFromString("2022-07-10T21:13:18.872Z"),
        Group: sdk.String("inventore"),
        Max: sdk.Int64(988407),
        Maxlatitude: sdk.Float32(5076.35),
        Maxlongitude: sdk.Float32(3977.3),
        Minlatitude: sdk.Float32(1639.1),
        Minlongitude: sdk.Float32(3894.4),
        Name: sdk.String("Delores Roberts"),
        SearchTypeHazarddataSource: sdk.String("delectus"),
        Skip: sdk.Int64(806952),
        Text: sdk.String("vel"),
        Todate: types.MustTimeFromString("2021-10-30T02:25:02.152Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
