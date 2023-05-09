# TypeWikipage

## Overview

Search API for 'Wiki Page' entry type

### Available Operations

* [SearchWikipage](#searchwikipage) - Search API for 'Wiki Page' entry type

## SearchWikipage

API to search for entries of type Wiki Page

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
    res, err := s.TypeWikipage.SearchWikipage(ctx, operations.SearchWikipageRequest{
        ChangedateFrom: types.MustTimeFromString("2022-08-31T11:42:20.406Z"),
        ChangedateTo: types.MustTimeFromString("2021-08-16T13:25:39.162Z"),
        CreatedateFrom: types.MustTimeFromString("2022-07-30T16:38:01.137Z"),
        CreatedateTo: types.MustTimeFromString("2022-11-23T18:10:33.380Z"),
        Description: sdk.String("dignissimos"),
        Filesuffix: sdk.String("quia"),
        Fromdate: types.MustTimeFromString("2022-11-30T07:33:22.410Z"),
        Group: sdk.String("amet"),
        Max: sdk.Int64(192447),
        Maxlatitude: sdk.Float32(9262.29),
        Maxlongitude: sdk.Float32(8524.45),
        Minlatitude: sdk.Float32(8020.82),
        Minlongitude: sdk.Float32(245.22),
        Name: sdk.String("Natalie Price"),
        SearchWikipageCategory: sdk.String("architecto"),
        SearchWikipageWikitext: sdk.String("vel"),
        Skip: sdk.Int64(227713),
        Text: sdk.String("facilis"),
        Todate: types.MustTimeFromString("2021-05-23T00:22:51.337Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
