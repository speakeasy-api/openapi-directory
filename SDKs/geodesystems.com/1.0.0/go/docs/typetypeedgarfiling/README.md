# TypeTypeEdgarFiling

## Overview

Search API for 'SEC EDGAR Filing' entry type

### Available Operations

* [SearchTypeEdgarFiling](#searchtypeedgarfiling) - Search API for 'SEC EDGAR Filing' entry type

## SearchTypeEdgarFiling

API to search for entries of type SEC EDGAR Filing

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
    res, err := s.TypeTypeEdgarFiling.SearchTypeEdgarFiling(ctx, operations.SearchTypeEdgarFilingRequest{
        ChangedateFrom: types.MustTimeFromString("2022-09-20T22:00:48.719Z"),
        ChangedateTo: types.MustTimeFromString("2021-04-04T01:27:13.665Z"),
        CreatedateFrom: types.MustTimeFromString("2021-08-21T12:05:45.550Z"),
        CreatedateTo: types.MustTimeFromString("2022-02-08T10:54:10.339Z"),
        Description: sdk.String("omnis"),
        Filesuffix: sdk.String("possimus"),
        Fromdate: types.MustTimeFromString("2020-03-25T08:28:41.959Z"),
        Group: sdk.String("expedita"),
        Max: sdk.Int64(481307),
        Maxlatitude: sdk.Float32(4564.73),
        Maxlongitude: sdk.Float32(6873.52),
        Minlatitude: sdk.Float32(3216.54),
        Minlongitude: sdk.Float32(8010.59),
        Name: sdk.String("Christy Swift"),
        SearchTypeEdgarFilingCikNumber: sdk.String("officia"),
        SearchTypeEdgarFilingCompanyName: sdk.String("maiores"),
        SearchTypeEdgarFilingFormType: sdk.String("cupiditate"),
        SearchTypeEdgarFilingIrsNumber: sdk.String("illo"),
        SearchTypeEdgarFilingStandardIndustrialClassification: sdk.String("saepe"),
        SearchTypeEdgarFilingState: sdk.String("enim"),
        Skip: sdk.Int64(52407),
        Text: sdk.String("ex"),
        Todate: types.MustTimeFromString("2020-02-12T00:23:13.319Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
