# TypeMediaYoutubevideo

## Overview

Search API for 'YouTube Video' entry type

### Available Operations

* [SearchMediaYoutubevideo](#searchmediayoutubevideo) - Search API for 'YouTube Video' entry type

## SearchMediaYoutubevideo

API to search for entries of type YouTube Video

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
    res, err := s.TypeMediaYoutubevideo.SearchMediaYoutubevideo(ctx, operations.SearchMediaYoutubevideoRequest{
        ChangedateFrom: types.MustTimeFromString("2022-12-18T10:44:39.786Z"),
        ChangedateTo: types.MustTimeFromString("2022-12-26T19:09:23.398Z"),
        CreatedateFrom: types.MustTimeFromString("2021-12-22T09:30:36.023Z"),
        CreatedateTo: types.MustTimeFromString("2020-07-13T07:09:47.394Z"),
        Description: sdk.String("neque"),
        Filesuffix: sdk.String("pariatur"),
        Fromdate: types.MustTimeFromString("2022-01-15T07:16:56.146Z"),
        Group: sdk.String("mollitia"),
        Max: sdk.Int64(65121),
        Maxlatitude: sdk.Float32(5526.46),
        Maxlongitude: sdk.Float32(445.71),
        Minlatitude: sdk.Float32(2512),
        Minlongitude: sdk.Float32(9132.84),
        Name: sdk.String("Suzanne Schaefer"),
        Skip: sdk.Int64(982445),
        Text: sdk.String("inventore"),
        Todate: types.MustTimeFromString("2022-06-27T16:30:06.244Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
