# TypeTypePointSnotel

## Overview

Search API for 'SNOTEL Snow Data' entry type

### Available Operations

* [SearchTypePointSnotel](#searchtypepointsnotel) - Search API for 'SNOTEL Snow Data' entry type

## SearchTypePointSnotel

API to search for entries of type SNOTEL Snow Data

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
    res, err := s.TypeTypePointSnotel.SearchTypePointSnotel(ctx, operations.SearchTypePointSnotelRequest{
        ChangedateFrom: types.MustTimeFromString("2022-12-18T13:15:24.930Z"),
        ChangedateTo: types.MustTimeFromString("2022-10-19T00:51:02.961Z"),
        CreatedateFrom: types.MustTimeFromString("2022-06-08T21:32:08.730Z"),
        CreatedateTo: types.MustTimeFromString("2022-09-27T08:30:43.076Z"),
        Description: sdk.String("totam"),
        Filesuffix: sdk.String("ipsam"),
        Fromdate: types.MustTimeFromString("2022-10-21T21:44:30.899Z"),
        Group: sdk.String("optio"),
        Max: sdk.Int64(728416),
        Maxlatitude: sdk.Float32(672.29),
        Maxlongitude: sdk.Float32(32.41),
        Minlatitude: sdk.Float32(355.38),
        Minlongitude: sdk.Float32(401.5),
        Name: sdk.String("Kelli Treutel"),
        SearchTypePointSnotelHucID: sdk.String("provident"),
        SearchTypePointSnotelHucName: sdk.String("dolores"),
        SearchTypePointSnotelNetwork: sdk.String("illo"),
        SearchTypePointSnotelSiteID: sdk.String("recusandae"),
        SearchTypePointSnotelSiteNumber: sdk.String("quod"),
        SearchTypePointSnotelState: sdk.String("magni"),
        Skip: sdk.Int64(26838),
        Text: sdk.String("voluptas"),
        Todate: types.MustTimeFromString("2022-04-09T21:49:26.699Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
