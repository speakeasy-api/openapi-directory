# TypeTypeImageWebcam

## Overview

Search API for 'Webcam' entry type

### Available Operations

* [SearchTypeImageWebcam](#searchtypeimagewebcam) - Search API for 'Webcam' entry type

## SearchTypeImageWebcam

API to search for entries of type Webcam

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
    res, err := s.TypeTypeImageWebcam.SearchTypeImageWebcam(ctx, operations.SearchTypeImageWebcamRequest{
        ChangedateFrom: types.MustTimeFromString("2022-02-13T06:45:24.040Z"),
        ChangedateTo: types.MustTimeFromString("2022-06-08T09:49:01.076Z"),
        CreatedateFrom: types.MustTimeFromString("2021-08-25T17:55:29.855Z"),
        CreatedateTo: types.MustTimeFromString("2020-03-26T17:01:48.086Z"),
        Description: sdk.String("minus"),
        Filesuffix: sdk.String("officia"),
        Fromdate: types.MustTimeFromString("2022-12-05T19:36:19.333Z"),
        Group: sdk.String("cupiditate"),
        Max: sdk.Int64(83578),
        Maxlatitude: sdk.Float32(3042),
        Maxlongitude: sdk.Float32(5682.31),
        Minlatitude: sdk.Float32(5410.46),
        Minlongitude: sdk.Float32(1166.65),
        Name: sdk.String("Laura Ritchie"),
        Skip: sdk.Int64(978113),
        Text: sdk.String("delectus"),
        Todate: types.MustTimeFromString("2021-09-04T18:39:29.554Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
