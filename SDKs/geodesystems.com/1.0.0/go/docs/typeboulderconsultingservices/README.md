# TypeBoulderConsultingServices

## Overview

Search API for 'Boulder Consulting Services Database' entry type

### Available Operations

* [SearchBoulderConsultingServices](#searchboulderconsultingservices) - Search API for 'Boulder Consulting Services Database' entry type

## SearchBoulderConsultingServices

API to search for entries of type Boulder Consulting Services Database

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
    res, err := s.TypeBoulderConsultingServices.SearchBoulderConsultingServices(ctx, operations.SearchBoulderConsultingServicesRequest{
        ChangedateFrom: types.MustTimeFromString("2022-08-16T16:15:17.905Z"),
        ChangedateTo: types.MustTimeFromString("2022-07-05T18:37:23.267Z"),
        CreatedateFrom: types.MustTimeFromString("2022-01-07T16:50:11.026Z"),
        CreatedateTo: types.MustTimeFromString("2022-07-06T09:42:25.585Z"),
        Description: sdk.String("voluptatibus"),
        Filesuffix: sdk.String("voluptas"),
        Fromdate: types.MustTimeFromString("2022-11-12T00:03:51.639Z"),
        Group: sdk.String("ea"),
        Max: sdk.Int64(310067),
        Maxlatitude: sdk.Float32(1629.54),
        Maxlongitude: sdk.Float32(8315.2),
        Minlatitude: sdk.Float32(6387.62),
        Minlongitude: sdk.Float32(8070.23),
        Name: sdk.String("Blanche Yundt II"),
        SearchDbBoulderConsultingServicesAccountDescription: sdk.String("porro"),
        SearchDbBoulderConsultingServicesAmount: sdk.Float64(8018.36),
        SearchDbBoulderConsultingServicesComment: sdk.String("labore"),
        SearchDbBoulderConsultingServicesDate: sdk.String("ab"),
        SearchDbBoulderConsultingServicesDepartment: sdk.String("adipisci"),
        SearchDbBoulderConsultingServicesFund: sdk.String("fuga"),
        SearchDbBoulderConsultingServicesObject: sdk.String("id"),
        SearchDbBoulderConsultingServicesOrganization: sdk.String("suscipit"),
        SearchDbBoulderConsultingServicesProject: sdk.String("velit"),
        SearchDbBoulderConsultingServicesPurchaseOrder: sdk.String("culpa"),
        SearchDbBoulderConsultingServicesVendorName: sdk.String("est"),
        Skip: sdk.Int64(926880),
        Text: sdk.String("totam"),
        Todate: types.MustTimeFromString("2021-09-23T14:56:28.537Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
