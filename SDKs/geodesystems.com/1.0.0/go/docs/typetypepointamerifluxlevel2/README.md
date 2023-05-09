# TypeTypePointAmerifluxLevel2

## Overview

Search API for 'Ameriflux Level 2 CSV File' entry type

### Available Operations

* [SearchTypePointAmerifluxLevel2](#searchtypepointamerifluxlevel2) - Search API for 'Ameriflux Level 2 CSV File' entry type

## SearchTypePointAmerifluxLevel2

API to search for entries of type Ameriflux Level 2 CSV File

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
    res, err := s.TypeTypePointAmerifluxLevel2.SearchTypePointAmerifluxLevel2(ctx, operations.SearchTypePointAmerifluxLevel2Request{
        ChangedateFrom: types.MustTimeFromString("2022-09-30T10:23:56.897Z"),
        ChangedateTo: types.MustTimeFromString("2022-05-28T03:15:45.968Z"),
        CreatedateFrom: types.MustTimeFromString("2020-04-06T15:00:57.607Z"),
        CreatedateTo: types.MustTimeFromString("2022-11-12T16:26:07.021Z"),
        Description: sdk.String("ut"),
        Filesuffix: sdk.String("non"),
        Fromdate: types.MustTimeFromString("2022-12-18T11:29:20.910Z"),
        Group: sdk.String("tempora"),
        Max: sdk.Int64(302228),
        Maxlatitude: sdk.Float32(2107.1),
        Maxlongitude: sdk.Float32(7122.09),
        Minlatitude: sdk.Float32(7711.46),
        Minlongitude: sdk.Float32(1027.34),
        Name: sdk.String("Danielle Bruen"),
        SearchTypePointAmerifluxLevel2Contact: sdk.String("quisquam"),
        SearchTypePointAmerifluxLevel2EcosystemType: sdk.String("sunt"),
        SearchTypePointAmerifluxLevel2SiteID: sdk.String("asperiores"),
        Skip: sdk.Int64(357519),
        Text: sdk.String("vel"),
        Todate: types.MustTimeFromString("2021-06-08T15:34:01.450Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
