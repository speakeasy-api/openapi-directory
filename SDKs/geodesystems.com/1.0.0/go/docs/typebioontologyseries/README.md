# TypeBioOntologySeries

## Overview

Search API for 'Series' entry type

### Available Operations

* [SearchBioOntologySeries](#searchbioontologyseries) - Search API for 'Series' entry type

## SearchBioOntologySeries

API to search for entries of type Series

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
    res, err := s.TypeBioOntologySeries.SearchBioOntologySeries(ctx, operations.SearchBioOntologySeriesRequest{
        ChangedateFrom: types.MustTimeFromString("2022-05-20T13:18:59.478Z"),
        ChangedateTo: types.MustTimeFromString("2022-06-16T23:42:38.113Z"),
        CreatedateFrom: types.MustTimeFromString("2022-02-23T01:35:05.899Z"),
        CreatedateTo: types.MustTimeFromString("2022-04-04T12:00:33.616Z"),
        Description: sdk.String("dolorum"),
        Filesuffix: sdk.String("iusto"),
        Fromdate: types.MustTimeFromString("2022-04-28T20:45:55.086Z"),
        Group: sdk.String("deleniti"),
        Max: sdk.Int64(607045),
        Maxlatitude: sdk.Float32(8966.72),
        Maxlongitude: sdk.Float32(7146.97),
        Minlatitude: sdk.Float32(9903.39),
        Minlongitude: sdk.Float32(4694.97),
        Name: sdk.String("Tamara Ondricka"),
        Skip: sdk.Int64(137220),
        Text: sdk.String("perferendis"),
        Todate: types.MustTimeFromString("2022-03-30T04:36:10.591Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
