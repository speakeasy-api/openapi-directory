# TypeFaq

## Overview

Search API for 'FAQ' entry type

### Available Operations

* [SearchFaq](#searchfaq) - Search API for 'FAQ' entry type

## SearchFaq

API to search for entries of type FAQ

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
    res, err := s.TypeFaq.SearchFaq(ctx, operations.SearchFaqRequest{
        ChangedateFrom: types.MustTimeFromString("2022-02-06T01:23:27.992Z"),
        ChangedateTo: types.MustTimeFromString("2021-05-09T07:07:29.255Z"),
        CreatedateFrom: types.MustTimeFromString("2022-01-26T06:01:40.776Z"),
        CreatedateTo: types.MustTimeFromString("2022-06-24T22:07:46.946Z"),
        Description: sdk.String("earum"),
        Filesuffix: sdk.String("modi"),
        Fromdate: types.MustTimeFromString("2021-03-31T11:58:23.065Z"),
        Group: sdk.String("voluptatem"),
        Max: sdk.Int64(371919),
        Maxlatitude: sdk.Float32(4259.46),
        Maxlongitude: sdk.Float32(13.83),
        Minlatitude: sdk.Float32(938.94),
        Minlongitude: sdk.Float32(2476.85),
        Name: sdk.String("Lloyd Mayer"),
        Skip: sdk.Int64(458503),
        Text: sdk.String("nemo"),
        Todate: types.MustTimeFromString("2022-05-02T06:49:02.857Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
