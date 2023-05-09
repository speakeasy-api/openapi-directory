# TypeProjectTerm

## Overview

Search API for 'Vocabulary Term' entry type

### Available Operations

* [SearchProjectTerm](#searchprojectterm) - Search API for 'Vocabulary Term' entry type

## SearchProjectTerm

API to search for entries of type Vocabulary Term

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
    res, err := s.TypeProjectTerm.SearchProjectTerm(ctx, operations.SearchProjectTermRequest{
        ChangedateFrom: types.MustTimeFromString("2022-05-24T17:08:44.205Z"),
        ChangedateTo: types.MustTimeFromString("2021-01-08T23:10:36.760Z"),
        CreatedateFrom: types.MustTimeFromString("2022-03-08T09:26:05.109Z"),
        CreatedateTo: types.MustTimeFromString("2022-08-29T16:18:11.316Z"),
        Description: sdk.String("in"),
        Filesuffix: sdk.String("sed"),
        Fromdate: types.MustTimeFromString("2022-03-20T19:38:47.401Z"),
        Group: sdk.String("fugiat"),
        Max: sdk.Int64(743938),
        Maxlatitude: sdk.Float32(584.63),
        Maxlongitude: sdk.Float32(9670.47),
        Minlatitude: sdk.Float32(2891.53),
        Minlongitude: sdk.Float32(8748.43),
        Name: sdk.String("Ms. Billie Boyle"),
        SearchProjectTermValue: sdk.String("fugiat"),
        Skip: sdk.Int64(313695),
        Text: sdk.String("iure"),
        Todate: types.MustTimeFromString("2022-06-21T07:53:38.590Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
