# TypeConstructionPermits

## Overview

Search API for 'Construction Permits' entry type

### Available Operations

* [SearchConstructionPermits](#searchconstructionpermits) - Search API for 'Construction Permits' entry type

## SearchConstructionPermits

API to search for entries of type Construction Permits

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
    res, err := s.TypeConstructionPermits.SearchConstructionPermits(ctx, operations.SearchConstructionPermitsRequest{
        ChangedateFrom: types.MustTimeFromString("2022-11-10T20:51:38.142Z"),
        ChangedateTo: types.MustTimeFromString("2021-05-10T15:26:02.215Z"),
        CreatedateFrom: types.MustTimeFromString("2021-01-15T12:05:30.894Z"),
        CreatedateTo: types.MustTimeFromString("2021-07-19T18:28:47.948Z"),
        Description: sdk.String("ad"),
        Filesuffix: sdk.String("deleniti"),
        Fromdate: types.MustTimeFromString("2022-11-21T16:13:12.951Z"),
        Group: sdk.String("repellendus"),
        Max: sdk.Int64(405036),
        Maxlatitude: sdk.Float32(7758.03),
        Maxlongitude: sdk.Float32(4053.73),
        Minlatitude: sdk.Float32(2811.53),
        Minlongitude: sdk.Float32(3210.43),
        Name: sdk.String("Donald MacGyver"),
        SearchDbConstructionPermitsAddress: sdk.String("beatae"),
        SearchDbConstructionPermitsAffordableHsgUnit: sdk.Int64(530860),
        SearchDbConstructionPermitsApplied: sdk.String("omnis"),
        SearchDbConstructionPermitsApproved: sdk.String("veritatis"),
        SearchDbConstructionPermitsBuildingUsesAndWorkScopes: sdk.String("rerum"),
        SearchDbConstructionPermitsCaseStatus: sdk.String("est"),
        SearchDbConstructionPermitsCategory: sdk.String("culpa"),
        SearchDbConstructionPermitsCoDate: sdk.String("voluptatem"),
        SearchDbConstructionPermitsCompletionDate: sdk.String("sapiente"),
        SearchDbConstructionPermitsContractorCompany: sdk.String("officiis"),
        SearchDbConstructionPermitsContractorFirstName: sdk.String("architecto"),
        SearchDbConstructionPermitsContractorLastName: sdk.String("fuga"),
        SearchDbConstructionPermitsExistingResUnit: sdk.Int64(867168),
        SearchDbConstructionPermitsIssued: sdk.String("debitis"),
        SearchDbConstructionPermitsNarrativeDescription: sdk.String("voluptatem"),
        SearchDbConstructionPermitsNewResUnit: sdk.Int64(1207),
        SearchDbConstructionPermitsNewSf: sdk.Int64(534917),
        SearchDbConstructionPermitsOwner1Company: sdk.String("earum"),
        SearchDbConstructionPermitsOwner1FirstName: sdk.String("ex"),
        SearchDbConstructionPermitsOwner1LastName: sdk.String("sapiente"),
        SearchDbConstructionPermitsOwner2Company: sdk.String("rem"),
        SearchDbConstructionPermitsOwner2FirstName: sdk.String("minus"),
        SearchDbConstructionPermitsOwner2LastName: sdk.String("nemo"),
        SearchDbConstructionPermitsPermitTypes: sdk.String("asperiores"),
        SearchDbConstructionPermitsPrimaryCompany: sdk.String("ratione"),
        SearchDbConstructionPermitsPrimaryFirstName: sdk.String("ullam"),
        SearchDbConstructionPermitsPrimaryLastName: sdk.String("perferendis"),
        SearchDbConstructionPermitsRemodelSf: sdk.Int64(848341),
        SearchDbConstructionPermitsTotalProjectValue: sdk.Float64(5181.5),
        SearchDbConstructionPermitsTotalSubpermitValue: sdk.Float64(7706.75),
        Skip: sdk.Int64(842777),
        Text: sdk.String("nam"),
        Todate: types.MustTimeFromString("2022-05-14T19:17:09.662Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
