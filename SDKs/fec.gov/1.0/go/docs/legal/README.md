# Legal

## Overview

Explore relevant statutes, regulations and Commission actions.

### Available Operations

* [GetLegalSearch](#getlegalsearch) - 
Search legal documents by document type, or across all document types using keywords, parameter values and ranges.


## GetLegalSearch


Search legal documents by document type, or across all document types using keywords, parameter values and ranges.


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeaderAuth: "YOUR_API_KEY_HERE",
            APIKeyQueryAuth: "YOUR_API_KEY_HERE",
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Legal.GetLegalSearch(ctx, operations.GetLegalSearchRequest{
        AfCommitteeID: sdk.String("officia"),
        AfFdFineAmount: sdk.Int(491892),
        AfMaxFdDate: types.MustDateFromString("2020-04-21"),
        AfMaxRtbDate: types.MustDateFromString("2022-10-25"),
        AfMinFdDate: types.MustDateFromString("2021-12-08"),
        AfMinRtbDate: types.MustDateFromString("2022-05-07"),
        AfName: []string{
            "enim",
            "neque",
            "in",
            "minus",
        },
        AfReportYear: sdk.String("eum"),
        AfRtbFineAmount: sdk.Int(266408),
        AoCategory: []GetLegalSearchAoCategoryEnum{
            operations.GetLegalSearchAoCategoryEnumD,
            operations.GetLegalSearchAoCategoryEnumS,
        },
        AoCitationRequireAll: sdk.Bool(false),
        AoEntityName: []string{
            "tempore",
            "aperiam",
            "libero",
            "ratione",
        },
        AoIsPending: sdk.Bool(false),
        AoMaxIssueDate: types.MustDateFromString("2022-06-24"),
        AoMaxRequestDate: types.MustDateFromString("2022-04-01"),
        AoMinIssueDate: types.MustDateFromString("2022-04-10"),
        AoMinRequestDate: types.MustDateFromString("2020-12-12"),
        AoName: []string{
            "est",
            "impedit",
        },
        AoNo: []string{
            "tempore",
            "vero",
            "odit",
            "repellat",
        },
        AoRegulatoryCitation: []string{
            "nemo",
            "reprehenderit",
            "aperiam",
            "odio",
        },
        AoRequestor: sdk.String("minima"),
        AoRequestorType: []GetLegalSearchAoRequestorTypeEnum{
            operations.GetLegalSearchAoRequestorTypeEnumEight,
            operations.GetLegalSearchAoRequestorTypeEnumTen,
        },
        AoStatus: sdk.String("dolores"),
        AoStatutoryCitation: []string{
            "veritatis",
            "ducimus",
            "voluptate",
        },
        APIKey: "pariatur",
        CaseCitationRequireAll: sdk.Bool(false),
        CaseDispositions: []string{
            "similique",
            "optio",
            "ex",
            "quaerat",
        },
        CaseDocCategoryID: []GetLegalSearchCaseDocCategoryIDEnum{
            operations.GetLegalSearchCaseDocCategoryIDEnumOneThousandAndSix,
            operations.GetLegalSearchCaseDocCategoryIDEnumOneThousandAndFive,
        },
        CaseElectionCycles: sdk.Int(697274),
        CaseMaxCloseDate: types.MustDateFromString("2022-07-15"),
        CaseMaxOpenDate: types.MustDateFromString("2022-09-26"),
        CaseMinCloseDate: types.MustDateFromString("2022-06-04"),
        CaseMinOpenDate: types.MustDateFromString("2022-06-01"),
        CaseNo: []string{
            "cum",
            "dicta",
            "earum",
            "veniam",
        },
        CaseRegulatoryCitation: []string{
            "dolores",
            "nam",
            "dicta",
        },
        CaseRespondents: sdk.String("consequuntur"),
        CaseStatutoryCitation: []string{
            "nobis",
            "ipsa",
            "ducimus",
            "maiores",
        },
        FromHit: sdk.Int(87382),
        HitsReturned: sdk.Int(96450),
        MurType: operations.GetLegalSearchMurTypeEnumArchived.ToPointer(),
        Q: sdk.String("pariatur"),
        Sort: sdk.String("libero"),
        Type: operations.GetLegalSearchTypeEnumMurs.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
