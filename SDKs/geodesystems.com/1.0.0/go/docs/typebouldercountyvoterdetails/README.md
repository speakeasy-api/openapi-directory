# TypeBoulderCountyVoterDetails

## Overview

Search API for 'Boulder County Voter Details' entry type

### Available Operations

* [SearchBoulderCountyVoterDetails](#searchbouldercountyvoterdetails) - Search API for 'Boulder County Voter Details' entry type

## SearchBoulderCountyVoterDetails

API to search for entries of type Boulder County Voter Details

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
    res, err := s.TypeBoulderCountyVoterDetails.SearchBoulderCountyVoterDetails(ctx, operations.SearchBoulderCountyVoterDetailsRequest{
        ChangedateFrom: types.MustTimeFromString("2022-06-12T12:56:04.738Z"),
        ChangedateTo: types.MustTimeFromString("2022-09-18T05:25:42.565Z"),
        CreatedateFrom: types.MustTimeFromString("2020-11-18T07:12:59.777Z"),
        CreatedateTo: types.MustTimeFromString("2022-03-04T03:42:26.898Z"),
        Description: sdk.String("in"),
        Filesuffix: sdk.String("corporis"),
        Fromdate: types.MustTimeFromString("2020-07-07T14:53:46.338Z"),
        Group: sdk.String("nemo"),
        Max: sdk.Int64(924967),
        Maxlatitude: sdk.Float32(3975.33),
        Maxlongitude: sdk.Float32(460.07),
        Minlatitude: sdk.Float32(7386.83),
        Minlongitude: sdk.Float32(2326.27),
        Name: sdk.String("Annette Wehner"),
        SearchDbBoulderCountyVoterDetailsBirthYear: sdk.Int64(985492),
        SearchDbBoulderCountyVoterDetailsCityWardDistrict: sdk.String("suscipit"),
        SearchDbBoulderCountyVoterDetailsCongressional: sdk.String("reiciendis"),
        SearchDbBoulderCountyVoterDetailsFirstName: sdk.String("quidem"),
        SearchDbBoulderCountyVoterDetailsGender: sdk.String("saepe"),
        SearchDbBoulderCountyVoterDetailsLastName: sdk.String("necessitatibus"),
        SearchDbBoulderCountyVoterDetailsLastUpdatedDate: sdk.String("dolore"),
        SearchDbBoulderCountyVoterDetailsLocation: sdk.String("sunt"),
        SearchDbBoulderCountyVoterDetailsMailingZipCode: sdk.String("asperiores"),
        SearchDbBoulderCountyVoterDetailsMunicipality: sdk.String("adipisci"),
        SearchDbBoulderCountyVoterDetailsParty: sdk.String("non"),
        SearchDbBoulderCountyVoterDetailsPrecinctCode: sdk.String("amet"),
        SearchDbBoulderCountyVoterDetailsRegistrationDate: sdk.String("beatae"),
        SearchDbBoulderCountyVoterDetailsResidentialAddress: sdk.String("dignissimos"),
        SearchDbBoulderCountyVoterDetailsResidentialCity: sdk.String("a"),
        SearchDbBoulderCountyVoterDetailsSchoolDistrict: sdk.String("debitis"),
        SearchDbBoulderCountyVoterDetailsStateHouse: sdk.String("consectetur"),
        SearchDbBoulderCountyVoterDetailsStateSenate: sdk.String("corporis"),
        SearchDbBoulderCountyVoterDetailsVoterStatus: sdk.String("harum"),
        Skip: sdk.Int64(385237),
        Text: sdk.String("ipsa"),
        Todate: types.MustTimeFromString("2020-10-22T20:57:52.942Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
