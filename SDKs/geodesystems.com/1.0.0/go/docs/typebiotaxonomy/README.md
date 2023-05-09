# TypeBioTaxonomy

## Overview

Search API for 'Taxonomic Entry' entry type

### Available Operations

* [SearchBioTaxonomy](#searchbiotaxonomy) - Search API for 'Taxonomic Entry' entry type

## SearchBioTaxonomy

API to search for entries of type Taxonomic Entry

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
    res, err := s.TypeBioTaxonomy.SearchBioTaxonomy(ctx, operations.SearchBioTaxonomyRequest{
        ChangedateFrom: types.MustTimeFromString("2021-12-16T18:42:11.269Z"),
        ChangedateTo: types.MustTimeFromString("2022-07-22T18:51:28.663Z"),
        CreatedateFrom: types.MustTimeFromString("2020-01-21T21:31:25.345Z"),
        CreatedateTo: types.MustTimeFromString("2021-07-26T04:25:41.517Z"),
        Description: sdk.String("eligendi"),
        Filesuffix: sdk.String("ducimus"),
        Fromdate: types.MustTimeFromString("2022-05-12T14:13:14.359Z"),
        Group: sdk.String("tempora"),
        Max: sdk.Int64(368584),
        Maxlatitude: sdk.Float32(4104.92),
        Maxlongitude: sdk.Float32(1369),
        Minlatitude: sdk.Float32(4282.24),
        Minlongitude: sdk.Float32(8221.18),
        Name: sdk.String("Paula Jacobs I"),
        SearchBioTaxonomyAliases: sdk.String("maiores"),
        SearchBioTaxonomyDivision: sdk.String("quasi"),
        SearchBioTaxonomyEmblCode: sdk.String("ex"),
        SearchBioTaxonomyInheritedDiv: sdk.Bool(false),
        SearchBioTaxonomyRank: sdk.String("nulla"),
        Skip: sdk.Int64(569211),
        Text: sdk.String("voluptatibus"),
        Todate: types.MustTimeFromString("2022-01-15T07:05:18.296Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
