# TypeTripReport

## Overview

Search API for 'Trip Report' entry type

### Available Operations

* [SearchTripReport](#searchtripreport) - Search API for 'Trip Report' entry type

## SearchTripReport

API to search for entries of type Trip Report

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
    res, err := s.TypeTripReport.SearchTripReport(ctx, operations.SearchTripReportRequest{
        ChangedateFrom: types.MustTimeFromString("2022-12-14T00:15:39.097Z"),
        ChangedateTo: types.MustTimeFromString("2022-01-25T06:55:35.087Z"),
        CreatedateFrom: types.MustTimeFromString("2022-03-30T03:00:00.239Z"),
        CreatedateTo: types.MustTimeFromString("2020-09-23T04:22:56.614Z"),
        Description: sdk.String("sapiente"),
        Filesuffix: sdk.String("alias"),
        Fromdate: types.MustTimeFromString("2022-03-28T14:34:12.839Z"),
        Group: sdk.String("aspernatur"),
        Max: sdk.Int64(749101),
        Maxlatitude: sdk.Float32(4679.47),
        Maxlongitude: sdk.Float32(5323.36),
        Minlatitude: sdk.Float32(9682.86),
        Minlongitude: sdk.Float32(1149.52),
        Name: sdk.String("Sue Cronin"),
        Skip: sdk.Int64(568162),
        Text: sdk.String("corrupti"),
        Todate: types.MustTimeFromString("2022-12-16T03:47:02.612Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
