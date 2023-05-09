# TypeBioOntologySample

## Overview

Search API for 'Sample' entry type

### Available Operations

* [SearchBioOntologySample](#searchbioontologysample) - Search API for 'Sample' entry type

## SearchBioOntologySample

API to search for entries of type Sample

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
    res, err := s.TypeBioOntologySample.SearchBioOntologySample(ctx, operations.SearchBioOntologySampleRequest{
        ChangedateFrom: types.MustTimeFromString("2022-01-24T10:05:07.174Z"),
        ChangedateTo: types.MustTimeFromString("2022-03-16T07:10:00.236Z"),
        CreatedateFrom: types.MustTimeFromString("2022-10-16T09:46:06.582Z"),
        CreatedateTo: types.MustTimeFromString("2022-10-25T00:56:56.568Z"),
        Description: sdk.String("ipsum"),
        Filesuffix: sdk.String("hic"),
        Fromdate: types.MustTimeFromString("2021-07-10T03:04:11.898Z"),
        Group: sdk.String("voluptate"),
        Max: sdk.Int64(490459),
        Maxlatitude: sdk.Float32(9702.37),
        Maxlongitude: sdk.Float32(2274.14),
        Minlatitude: sdk.Float32(6805.45),
        Minlongitude: sdk.Float32(2543.56),
        Name: sdk.String("Melissa Bednar"),
        Skip: sdk.Int64(311796),
        Text: sdk.String("accusamus"),
        Todate: types.MustTimeFromString("2021-01-18T05:23:42.271Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
