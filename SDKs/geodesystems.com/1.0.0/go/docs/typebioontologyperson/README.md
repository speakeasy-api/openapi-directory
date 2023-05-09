# TypeBioOntologyPerson

## Overview

Search API for 'Person' entry type

### Available Operations

* [SearchBioOntologyPerson](#searchbioontologyperson) - Search API for 'Person' entry type

## SearchBioOntologyPerson

API to search for entries of type Person

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
    res, err := s.TypeBioOntologyPerson.SearchBioOntologyPerson(ctx, operations.SearchBioOntologyPersonRequest{
        ChangedateFrom: types.MustTimeFromString("2022-10-11T06:25:10.430Z"),
        ChangedateTo: types.MustTimeFromString("2021-12-18T20:09:27.741Z"),
        CreatedateFrom: types.MustTimeFromString("2020-03-20T18:01:24.992Z"),
        CreatedateTo: types.MustTimeFromString("2021-08-04T18:39:34.709Z"),
        Description: sdk.String("perspiciatis"),
        Filesuffix: sdk.String("voluptatem"),
        Fromdate: types.MustTimeFromString("2022-07-04T15:50:14.407Z"),
        Group: sdk.String("blanditiis"),
        Max: sdk.Int64(621479),
        Maxlatitude: sdk.Float32(503.7),
        Maxlongitude: sdk.Float32(5772.29),
        Minlatitude: sdk.Float32(6990.98),
        Minlongitude: sdk.Float32(2378.93),
        Name: sdk.String("Merle Gleichner"),
        SearchBioOntologyPersonGender: sdk.String("deleniti"),
        Skip: sdk.Int64(864282),
        Text: sdk.String("provident"),
        Todate: types.MustTimeFromString("2020-10-23T12:23:35.067Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
