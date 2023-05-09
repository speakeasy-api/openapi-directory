# TypeTypePointAmrcFinal

## Overview

Search API for 'AMRC Final QC Data' entry type

### Available Operations

* [SearchTypePointAmrcFinal](#searchtypepointamrcfinal) - Search API for 'AMRC Final QC Data' entry type

## SearchTypePointAmrcFinal

API to search for entries of type AMRC Final QC Data

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
    res, err := s.TypeTypePointAmrcFinal.SearchTypePointAmrcFinal(ctx, operations.SearchTypePointAmrcFinalRequest{
        ChangedateFrom: types.MustTimeFromString("2022-02-16T09:12:26.299Z"),
        ChangedateTo: types.MustTimeFromString("2022-01-23T22:29:23.041Z"),
        CreatedateFrom: types.MustTimeFromString("2022-07-28T21:09:38.119Z"),
        CreatedateTo: types.MustTimeFromString("2022-02-10T08:14:25.024Z"),
        Description: sdk.String("mollitia"),
        Filesuffix: sdk.String("libero"),
        Fromdate: types.MustTimeFromString("2021-11-14T05:57:08.843Z"),
        Group: sdk.String("et"),
        Max: sdk.Int64(487625),
        Maxlatitude: sdk.Float32(7536.8),
        Maxlongitude: sdk.Float32(2018.38),
        Minlatitude: sdk.Float32(6902.11),
        Minlongitude: sdk.Float32(454.45),
        Name: sdk.String("Leon Braun"),
        SearchTypePointAmrcFinalArgosID: sdk.String("ut"),
        SearchTypePointAmrcFinalSiteID: sdk.String("quidem"),
        SearchTypePointAmrcFinalSiteName: sdk.String("doloribus"),
        Skip: sdk.Int64(22018),
        Text: sdk.String("architecto"),
        Todate: types.MustTimeFromString("2021-09-17T02:47:13.595Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
