# TypeMediaAudiofile

## Overview

Search API for 'Audio File' entry type

### Available Operations

* [SearchMediaAudiofile](#searchmediaaudiofile) - Search API for 'Audio File' entry type

## SearchMediaAudiofile

API to search for entries of type Audio File

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
    res, err := s.TypeMediaAudiofile.SearchMediaAudiofile(ctx, operations.SearchMediaAudiofileRequest{
        ChangedateFrom: types.MustTimeFromString("2020-10-02T01:50:45.376Z"),
        ChangedateTo: types.MustTimeFromString("2022-12-07T00:00:40.742Z"),
        CreatedateFrom: types.MustTimeFromString("2022-03-16T15:01:20.520Z"),
        CreatedateTo: types.MustTimeFromString("2022-02-03T07:29:42.207Z"),
        Description: sdk.String("porro"),
        Filesuffix: sdk.String("tempore"),
        Fromdate: types.MustTimeFromString("2022-06-20T20:53:51.556Z"),
        Group: sdk.String("voluptates"),
        Max: sdk.Int64(145435),
        Maxlatitude: sdk.Float32(2593.77),
        Maxlongitude: sdk.Float32(1940.58),
        Minlatitude: sdk.Float32(7581.94),
        Minlongitude: sdk.Float32(9928.87),
        Name: sdk.String("Vickie Marvin"),
        Skip: sdk.Int64(658604),
        Text: sdk.String("maiores"),
        Todate: types.MustTimeFromString("2020-06-01T13:23:22.069Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
