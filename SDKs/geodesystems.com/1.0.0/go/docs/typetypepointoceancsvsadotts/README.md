# TypeTypePointOceanCsvSadoTTS

## Overview

Search API for 'SADO TTS Data' entry type

### Available Operations

* [SearchTypePointOceanCsvSadoTTS](#searchtypepointoceancsvsadotts) - Search API for 'SADO TTS Data' entry type

## SearchTypePointOceanCsvSadoTTS

API to search for entries of type SADO TTS Data

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
    res, err := s.TypeTypePointOceanCsvSadoTTS.SearchTypePointOceanCsvSadoTTS(ctx, operations.SearchTypePointOceanCsvSadoTTSRequest{
        ChangedateFrom: types.MustTimeFromString("2022-12-03T23:04:12.170Z"),
        ChangedateTo: types.MustTimeFromString("2022-12-11T19:04:42.317Z"),
        CreatedateFrom: types.MustTimeFromString("2021-08-21T23:19:50.215Z"),
        CreatedateTo: types.MustTimeFromString("2021-02-25T23:03:51.261Z"),
        Description: sdk.String("deleniti"),
        Filesuffix: sdk.String("dignissimos"),
        Fromdate: types.MustTimeFromString("2022-02-26T21:44:20.533Z"),
        Group: sdk.String("adipisci"),
        Max: sdk.Int64(793752),
        Maxlatitude: sdk.Float32(3309.08),
        Maxlongitude: sdk.Float32(6646.79),
        Minlatitude: sdk.Float32(1021.82),
        Minlongitude: sdk.Float32(9782.29),
        Name: sdk.String("Wilbert Cummings"),
        Skip: sdk.Int64(789015),
        Text: sdk.String("odio"),
        Todate: types.MustTimeFromString("2022-02-16T00:22:11.378Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
