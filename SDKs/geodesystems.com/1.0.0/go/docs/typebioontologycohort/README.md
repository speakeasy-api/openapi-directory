# TypeBioOntologyCohort

## Overview

Search API for 'Cohort' entry type

### Available Operations

* [SearchBioOntologyCohort](#searchbioontologycohort) - Search API for 'Cohort' entry type

## SearchBioOntologyCohort

API to search for entries of type Cohort

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
    res, err := s.TypeBioOntologyCohort.SearchBioOntologyCohort(ctx, operations.SearchBioOntologyCohortRequest{
        ChangedateFrom: types.MustTimeFromString("2022-07-19T10:57:57.489Z"),
        ChangedateTo: types.MustTimeFromString("2022-04-12T10:47:34.158Z"),
        CreatedateFrom: types.MustTimeFromString("2022-02-18T18:29:26.833Z"),
        CreatedateTo: types.MustTimeFromString("2022-01-09T22:25:53.570Z"),
        Description: sdk.String("perferendis"),
        Filesuffix: sdk.String("fugiat"),
        Fromdate: types.MustTimeFromString("2022-12-27T17:23:03.738Z"),
        Group: sdk.String("cumque"),
        Max: sdk.Int64(359978),
        Maxlatitude: sdk.Float32(9441.24),
        Maxlongitude: sdk.Float32(7299.91),
        Minlatitude: sdk.Float32(7499.99),
        Minlongitude: sdk.Float32(1716.29),
        Name: sdk.String("Mrs. Deanna Kuhn"),
        Skip: sdk.Int64(179490),
        Text: sdk.String("perferendis"),
        Todate: types.MustTimeFromString("2022-03-17T07:12:29.048Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
