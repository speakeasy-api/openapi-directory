# TypeTypeCensusAcs

## Overview

Search API for 'US Census ACS Data' entry type

### Available Operations

* [SearchTypeCensusAcs](#searchtypecensusacs) - Search API for 'US Census ACS Data' entry type

## SearchTypeCensusAcs

API to search for entries of type US Census ACS Data

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
    res, err := s.TypeTypeCensusAcs.SearchTypeCensusAcs(ctx, operations.SearchTypeCensusAcsRequest{
        ChangedateFrom: types.MustTimeFromString("2022-04-11T17:07:28.537Z"),
        ChangedateTo: types.MustTimeFromString("2022-10-18T18:15:07.964Z"),
        CreatedateFrom: types.MustTimeFromString("2022-06-22T03:59:26.894Z"),
        CreatedateTo: types.MustTimeFromString("2022-09-06T06:29:15.334Z"),
        Description: sdk.String("a"),
        Filesuffix: sdk.String("facere"),
        Fromdate: types.MustTimeFromString("2021-12-03T03:19:06.487Z"),
        Group: sdk.String("quaerat"),
        Max: sdk.Int64(45850),
        Maxlatitude: sdk.Float32(4898.21),
        Maxlongitude: sdk.Float32(4638.95),
        Minlatitude: sdk.Float32(2640.73),
        Minlongitude: sdk.Float32(6839.8),
        Name: sdk.String("Leah Nienow"),
        SearchTypeCensusAcsFields: sdk.String("dolor"),
        SearchTypeCensusAcsForType: sdk.String("ad"),
        SearchTypeCensusAcsInType1: sdk.String("illum"),
        SearchTypeCensusAcsInType2: sdk.String("sit"),
        Skip: sdk.Int64(561399),
        Text: sdk.String("voluptas"),
        Todate: types.MustTimeFromString("2022-04-01T23:22:38.639Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
