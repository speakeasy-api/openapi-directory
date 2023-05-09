# TypeLink

## Overview

Search API for 'Link' entry type

### Available Operations

* [SearchLink](#searchlink) - Search API for 'Link' entry type

## SearchLink

API to search for entries of type Link

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
    res, err := s.TypeLink.SearchLink(ctx, operations.SearchLinkRequest{
        ChangedateFrom: types.MustTimeFromString("2022-06-05T16:43:24.726Z"),
        ChangedateTo: types.MustTimeFromString("2022-12-10T16:31:33.706Z"),
        CreatedateFrom: types.MustTimeFromString("2022-08-08T06:48:42.276Z"),
        CreatedateTo: types.MustTimeFromString("2022-09-10T09:17:41.732Z"),
        Description: sdk.String("eligendi"),
        Filesuffix: sdk.String("hic"),
        Fromdate: types.MustTimeFromString("2022-02-10T18:47:53.557Z"),
        Group: sdk.String("unde"),
        Max: sdk.Int64(860311),
        Maxlatitude: sdk.Float32(6213.93),
        Maxlongitude: sdk.Float32(6530),
        Minlatitude: sdk.Float32(2986.13),
        Minlongitude: sdk.Float32(3442.89),
        Name: sdk.String("Carole Paucek"),
        Skip: sdk.Int64(98610),
        Text: sdk.String("deserunt"),
        Todate: types.MustTimeFromString("2021-11-04T14:46:37.615Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
