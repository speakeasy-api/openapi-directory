# TypePoliceStopData

## Overview

Search API for 'Police Stop Data' entry type

### Available Operations

* [SearchPoliceStopData](#searchpolicestopdata) - Search API for 'Police Stop Data' entry type

## SearchPoliceStopData

API to search for entries of type Police Stop Data

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
    res, err := s.TypePoliceStopData.SearchPoliceStopData(ctx, operations.SearchPoliceStopDataRequest{
        ChangedateFrom: types.MustTimeFromString("2022-02-11T16:51:51.667Z"),
        ChangedateTo: types.MustTimeFromString("2022-02-07T04:45:04.380Z"),
        CreatedateFrom: types.MustTimeFromString("2022-09-05T15:53:48.964Z"),
        CreatedateTo: types.MustTimeFromString("2022-07-11T22:08:27.190Z"),
        Description: sdk.String("quia"),
        Filesuffix: sdk.String("laudantium"),
        Fromdate: types.MustTimeFromString("2022-11-10T17:44:58.508Z"),
        Group: sdk.String("iusto"),
        Max: sdk.Int64(712893),
        Maxlatitude: sdk.Float32(1769.35),
        Maxlongitude: sdk.Float32(8304.77),
        Minlatitude: sdk.Float32(1998.79),
        Minlongitude: sdk.Float32(579.09),
        Name: sdk.String("Miss Marcus Koch"),
        SearchDbPoliceStopDataAddress: sdk.String("quam"),
        SearchDbPoliceStopDataDate: sdk.String("est"),
        SearchDbPoliceStopDataEthnicity: sdk.String("aliquam"),
        SearchDbPoliceStopDataMinutes: sdk.Int64(964201),
        SearchDbPoliceStopDataRace: sdk.String("culpa"),
        SearchDbPoliceStopDataResident: sdk.String("voluptatum"),
        SearchDbPoliceStopDataSex: sdk.String("iusto"),
        Skip: sdk.Int64(802069),
        Text: sdk.String("voluptatibus"),
        Todate: types.MustTimeFromString("2022-10-02T13:33:28.563Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
