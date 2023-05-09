# TypeOwlOntology

## Overview

Search API for 'OWL Ontology' entry type

### Available Operations

* [SearchOwlOntology](#searchowlontology) - Search API for 'OWL Ontology' entry type

## SearchOwlOntology

API to search for entries of type OWL Ontology

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
    res, err := s.TypeOwlOntology.SearchOwlOntology(ctx, operations.SearchOwlOntologyRequest{
        ChangedateFrom: types.MustTimeFromString("2022-11-23T01:27:41.480Z"),
        ChangedateTo: types.MustTimeFromString("2022-03-08T14:16:56.716Z"),
        CreatedateFrom: types.MustTimeFromString("2022-05-29T19:50:28.684Z"),
        CreatedateTo: types.MustTimeFromString("2021-07-09T17:15:53.752Z"),
        Description: sdk.String("esse"),
        Filesuffix: sdk.String("animi"),
        Fromdate: types.MustTimeFromString("2022-01-29T10:24:00.407Z"),
        Group: sdk.String("eveniet"),
        Max: sdk.Int64(935161),
        Maxlatitude: sdk.Float32(2464.02),
        Maxlongitude: sdk.Float32(8847.65),
        Minlatitude: sdk.Float32(2633.46),
        Minlongitude: sdk.Float32(7019.78),
        Name: sdk.String("Lance Hintz"),
        Skip: sdk.Int64(397014),
        Text: sdk.String("quis"),
        Todate: types.MustTimeFromString("2022-07-25T18:23:48.906Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
