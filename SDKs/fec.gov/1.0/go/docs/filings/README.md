# Filings

## Overview

All official records and reports filed by or delivered to the FEC. 

 Note: because the filings data includes many records, counts for large result sets are approximate; you will want to page through the records until no records are returned.

### Available Operations

* [GetCandidateCandidateIDFilings](#getcandidatecandidateidfilings) - 
All official records and reports filed by or delivered to the FEC.

Note: because the filings data includes many records, counts for large
result sets are approximate; you will want to page through the records until no records are returned.

* [GetCommitteeCommitteeIDFilings](#getcommitteecommitteeidfilings) - 
All official records and reports filed by or delivered to the FEC.

Note: because the filings data includes many records, counts for large
result sets are approximate; you will want to page through the records until no records are returned.

* [GetFilings](#getfilings) - 
All official records and reports filed by or delivered to the FEC.

Note: because the filings data includes many records, counts for large
result sets are approximate; you will want to page through the records until no records are returned.

* [GetOperationsLog](#getoperationslog) - 
The Operations log contains details of each report loaded into the database. It is primarily
used as status check to determine when all of the data processes, from initial entry through
review are complete.


## GetCandidateCandidateIDFilings


All official records and reports filed by or delivered to the FEC.

Note: because the filings data includes many records, counts for large
result sets are approximate; you will want to page through the records until no records are returned.


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
    res, err := s.Filings.GetCandidateCandidateIDFilings(ctx, operations.GetCandidateCandidateIDFilingsRequest{
        AmendmentIndicator: []GetCandidateCandidateIDFilingsAmendmentIndicatorEnum{
            operations.GetCandidateCandidateIDFilingsAmendmentIndicatorEnumC,
            operations.GetCandidateCandidateIDFilingsAmendmentIndicatorEnumM,
            operations.GetCandidateCandidateIDFilingsAmendmentIndicatorEnumA,
            operations.GetCandidateCandidateIDFilingsAmendmentIndicatorEnumS,
        },
        APIKey: "doloremque",
        BeginningImageNumber: []string{
            "dicta",
            "accusantium",
            "beatae",
            "dolores",
        },
        CandidateID: "enim",
        CommitteeType: sdk.String("laboriosam"),
        Cycle: []int{
            952143,
        },
        District: []string{
            "magnam",
            "saepe",
            "consequuntur",
        },
        DocumentType: []string{
            "officiis",
            "perspiciatis",
            "in",
        },
        FileNumber: []int{
            907876,
        },
        FilerType: operations.GetCandidateCandidateIDFilingsFilerTypeEnumPaper.ToPointer(),
        FormCategory: []string{
            "fugit",
        },
        FormType: []string{
            "quis",
            "reprehenderit",
            "error",
        },
        IsAmended: sdk.Bool(false),
        MaxReceiptDate: types.MustDateFromString("2022-08-22"),
        MinReceiptDate: types.MustDateFromString("2021-03-06"),
        MostRecent: sdk.Bool(false),
        Office: []GetCandidateCandidateIDFilingsOfficeEnum{
            operations.GetCandidateCandidateIDFilingsOfficeEnumP,
        },
        Page: sdk.Int(39615),
        Party: []string{
            "ipsa",
            "totam",
        },
        PerPage: sdk.Int(61078),
        PrimaryGeneralIndicator: []string{
            "eveniet",
            "qui",
        },
        QFiler: []string{
            "iure",
            "necessitatibus",
            "ratione",
        },
        ReportType: []string{
            "distinctio",
            "voluptatum",
            "rem",
        },
        ReportYear: []int{
            320565,
            997963,
        },
        RequestType: []string{
            "corporis",
        },
        Sort: []string{
            "nihil",
            "mollitia",
            "voluptas",
        },
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        State: []string{
            "maiores",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCommitteeCommitteeIDFilings


All official records and reports filed by or delivered to the FEC.

Note: because the filings data includes many records, counts for large
result sets are approximate; you will want to page through the records until no records are returned.


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
    res, err := s.Filings.GetCommitteeCommitteeIDFilings(ctx, operations.GetCommitteeCommitteeIDFilingsRequest{
        AmendmentIndicator: []GetCommitteeCommitteeIDFilingsAmendmentIndicatorEnum{
            operations.GetCommitteeCommitteeIDFilingsAmendmentIndicatorEnumN,
            operations.GetCommitteeCommitteeIDFilingsAmendmentIndicatorEnumC,
            operations.GetCommitteeCommitteeIDFilingsAmendmentIndicatorEnumA,
            operations.GetCommitteeCommitteeIDFilingsAmendmentIndicatorEnumA,
        },
        APIKey: "dolorum",
        BeginningImageNumber: []string{
            "quae",
        },
        CommitteeID: "recusandae",
        CommitteeType: sdk.String("omnis"),
        Cycle: []int{
            477646,
            403218,
        },
        District: []string{
            "culpa",
            "adipisci",
        },
        DocumentType: []string{
            "laudantium",
            "eum",
            "nemo",
            "recusandae",
        },
        FileNumber: []int{
            592081,
            337477,
        },
        FilerType: operations.GetCommitteeCommitteeIDFilingsFilerTypeEnumEFile.ToPointer(),
        FormCategory: []string{
            "provident",
            "aspernatur",
            "ullam",
            "quasi",
        },
        FormType: []string{
            "nostrum",
            "mollitia",
            "provident",
        },
        IsAmended: sdk.Bool(false),
        MaxReceiptDate: types.MustDateFromString("2021-01-09"),
        MinReceiptDate: types.MustDateFromString("2022-08-09"),
        MostRecent: sdk.Bool(false),
        Office: []GetCommitteeCommitteeIDFilingsOfficeEnum{
            operations.GetCommitteeCommitteeIDFilingsOfficeEnumP,
        },
        Page: sdk.Int(984632),
        Party: []string{
            "in",
            "nam",
        },
        PerPage: sdk.Int(937636),
        PrimaryGeneralIndicator: []string{
            "laborum",
            "placeat",
            "modi",
        },
        QFiler: []string{
            "molestias",
            "officiis",
            "sapiente",
            "cumque",
        },
        ReportType: []string{
            "rerum",
        },
        ReportYear: []int{
            335498,
            82057,
        },
        RequestType: []string{
            "cumque",
        },
        Sort: []string{
            "perferendis",
        },
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        State: []string{
            "aspernatur",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFilings


All official records and reports filed by or delivered to the FEC.

Note: because the filings data includes many records, counts for large
result sets are approximate; you will want to page through the records until no records are returned.


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
    res, err := s.Filings.GetFilings(ctx, operations.GetFilingsRequest{
        AmendmentIndicator: []GetFilingsAmendmentIndicatorEnum{
            operations.GetFilingsAmendmentIndicatorEnumN,
            operations.GetFilingsAmendmentIndicatorEnumT,
        },
        APIKey: "at",
        BeginningImageNumber: []string{
            "eos",
            "sapiente",
            "eum",
            "dicta",
        },
        CandidateID: []string{
            "beatae",
            "cupiditate",
        },
        CommitteeID: []string{
            "earum",
            "soluta",
            "hic",
        },
        CommitteeType: sdk.String("illum"),
        Cycle: []int{
            935833,
        },
        District: []string{
            "maiores",
            "debitis",
            "aliquid",
        },
        DocumentType: []string{
            "suscipit",
            "dolorem",
            "fugit",
            "cumque",
        },
        FileNumber: []int{
            189062,
            656762,
            898760,
        },
        FilerType: operations.GetFilingsFilerTypeEnumPaper.ToPointer(),
        FormCategory: []string{
            "quasi",
        },
        FormType: []string{
            "ducimus",
        },
        IsAmended: sdk.Bool(false),
        MaxReceiptDate: types.MustDateFromString("2021-11-02"),
        MinReceiptDate: types.MustDateFromString("2022-10-04"),
        MostRecent: sdk.Bool(false),
        Office: []GetFilingsOfficeEnum{
            operations.GetFilingsOfficeEnumUnknown,
        },
        Page: sdk.Int(984934),
        Party: []string{
            "necessitatibus",
            "ipsa",
            "tempora",
            "nihil",
        },
        PerPage: sdk.Int(473190),
        PrimaryGeneralIndicator: []string{
            "iusto",
        },
        QFiler: []string{
            "praesentium",
            "maiores",
        },
        ReportType: []string{
            "vel",
            "architecto",
            "fugiat",
            "doloremque",
        },
        ReportYear: []int{
            483706,
        },
        RequestType: []string{
            "esse",
            "ex",
        },
        Sort: []string{
            "aliquid",
        },
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        State: []string{
            "laborum",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOperationsLog


The Operations log contains details of each report loaded into the database. It is primarily
used as status check to determine when all of the data processes, from initial entry through
review are complete.


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
    res, err := s.Filings.GetOperationsLog(ctx, operations.GetOperationsLogRequest{
        AmendmentIndicator: []string{
            "nostrum",
        },
        APIKey: "fugiat",
        BeginningImageNumber: []string{
            "aliquid",
            "officia",
            "suscipit",
        },
        CandidateCommitteeID: []string{
            "perferendis",
            "eum",
        },
        FormType: []string{
            "iste",
            "id",
        },
        MaxCoverageEndDate: types.MustDateFromString("2022-05-17"),
        MaxReceiptDate: types.MustDateFromString("2020-04-05"),
        MaxTransactionDataCompleteDate: types.MustDateFromString("2021-08-28"),
        MinCoverageEndDate: types.MustDateFromString("2022-05-09"),
        MinReceiptDate: types.MustDateFromString("2022-05-15"),
        MinTransactionDataCompleteDate: types.MustDateFromString("2022-03-02"),
        Page: sdk.Int(405036),
        PerPage: sdk.Int(775803),
        ReportType: []string{
            "ut",
            "ad",
        },
        ReportYear: []int{
            29950,
            561577,
            737254,
        },
        Sort: []string{
            "beatae",
            "voluptatum",
        },
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        StatusNum: []GetOperationsLogStatusNumEnum{
            operations.GetOperationsLogStatusNumEnumZero,
            operations.GetOperationsLogStatusNumEnumOne,
            operations.GetOperationsLogStatusNumEnumOne,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
