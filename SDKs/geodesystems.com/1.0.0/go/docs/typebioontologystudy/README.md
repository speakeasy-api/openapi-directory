# TypeBioOntologyStudy

## Overview

Search API for 'Study' entry type

### Available Operations

* [SearchBioOntologyStudy](#searchbioontologystudy) - Search API for 'Study' entry type

## SearchBioOntologyStudy

API to search for entries of type Study

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
    res, err := s.TypeBioOntologyStudy.SearchBioOntologyStudy(ctx, operations.SearchBioOntologyStudyRequest{
        ChangedateFrom: types.MustTimeFromString("2022-01-15T13:56:57.287Z"),
        ChangedateTo: types.MustTimeFromString("2021-11-07T02:34:07.563Z"),
        CreatedateFrom: types.MustTimeFromString("2021-10-28T12:41:02.358Z"),
        CreatedateTo: types.MustTimeFromString("2022-03-03T16:00:55.670Z"),
        Description: sdk.String("totam"),
        Filesuffix: sdk.String("similique"),
        Fromdate: types.MustTimeFromString("2022-02-16T11:34:48.736Z"),
        Group: sdk.String("quaerat"),
        Max: sdk.Int64(273542),
        Maxlatitude: sdk.Float32(4254.51),
        Maxlongitude: sdk.Float32(7980.47),
        Minlatitude: sdk.Float32(8853.38),
        Minlongitude: sdk.Float32(1856.36),
        Name: sdk.String("Randal Klocko"),
        Skip: sdk.Int64(215507),
        Text: sdk.String("quisquam"),
        Todate: types.MustTimeFromString("2022-04-24T18:16:06.669Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
