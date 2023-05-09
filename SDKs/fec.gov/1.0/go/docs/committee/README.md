# Committee

## Overview

Committees are entities that spend and raise money in an election. Their characteristics and relationships with candidates can change over time. 

 You might want to use filters or search endpoints to find the committee you're looking for. Then you can use other committee endpoints to explore information about the committee that interests you. 

 Financial information is organized by `committee_id`, so finding the committee you're interested in will lead you to more granular financial information. 

 The committee endpoints include all FEC filers, even if they aren't registered as a committee. 

 Officially, committees include the committees and organizations that file with the FEC. Several different types of organizations file financial reports with the FEC: 

 *Campaign committees authorized by particular candidates to raise and spend funds in their campaigns. Non-party committees (e.g., PACs), some of which may be sponsored by corporations, unions, trade or membership groups, etc. Political party committees at the national, state, and local levels. Groups and individuals making only independent expenditures Corporations, unions, and other organizations making internal communications* 

 The committee endpoints primarily use data from FEC registration Form 1 and Form 2.

### Available Operations

* [GetCandidateCandidateIDCommittees](#getcandidatecandidateidcommittees) - 
This endpoint is useful for finding detailed information about a particular committee or
filer. Use the `committee_id` to find the most recent information about the committee.

* [GetCandidateCandidateIDCommitteesHistory](#getcandidatecandidateidcommitteeshistory) - 
Explore a filer's characteristics over time. This can be particularly useful if the committees change treasurers, designation, or `committee_type`.

* [GetCandidateCandidateIDCommitteesHistoryCycle](#getcandidatecandidateidcommitteeshistorycycle) - 
Explore a filer's characteristics over time. This can be particularly useful if the committees change treasurers, designation, or `committee_type`.

* [GetCommitteeCommitteeID](#getcommitteecommitteeid) - 
This endpoint is useful for finding detailed information about a particular committee or
filer. Use the `committee_id` to find the most recent information about the committee.

* [GetCommitteeCommitteeIDHistory](#getcommitteecommitteeidhistory) - 
Explore a filer's characteristics over time. This can be particularly useful if the committees change treasurers, designation, or `committee_type`.

* [GetCommitteeCommitteeIDHistoryCycle](#getcommitteecommitteeidhistorycycle) - 
Explore a filer's characteristics over time. This can be particularly useful if the committees change treasurers, designation, or `committee_type`.

* [GetCommittees](#getcommittees) - 
Fetch basic information about committees and filers. Use parameters to filter for
particular characteristics.



## GetCandidateCandidateIDCommittees


This endpoint is useful for finding detailed information about a particular committee or
filer. Use the `committee_id` to find the most recent information about the committee.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
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
    res, err := s.Committee.GetCandidateCandidateIDCommittees(ctx, operations.GetCandidateCandidateIDCommitteesRequest{
        APIKey: "veritatis",
        CandidateID: "ipsa",
        CommitteeType: []GetCandidateCandidateIDCommitteesCommitteeTypeEnum{
            operations.GetCandidateCandidateIDCommitteesCommitteeTypeEnumO,
        },
        Cycle: []int{
            311796,
            881005,
        },
        Designation: []GetCandidateCandidateIDCommitteesDesignationEnum{
            operations.GetCandidateCandidateIDCommitteesDesignationEnumD,
            operations.GetCandidateCandidateIDCommitteesDesignationEnumJ,
            operations.GetCandidateCandidateIDCommitteesDesignationEnumU,
        },
        FilingFrequency: []GetCandidateCandidateIDCommitteesFilingFrequencyEnum{
            operations.GetCandidateCandidateIDCommitteesFilingFrequencyEnumQ,
        },
        OrganizationType: []GetCandidateCandidateIDCommitteesOrganizationTypeEnum{
            operations.GetCandidateCandidateIDCommitteesOrganizationTypeEnumV,
        },
        Page: sdk.Int(67249),
        PerPage: sdk.Int(743835),
        Sort: sdk.String("dolorum"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        Year: []int{
            453697,
            677082,
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

## GetCandidateCandidateIDCommitteesHistory


Explore a filer's characteristics over time. This can be particularly useful if the committees change treasurers, designation, or `committee_type`.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
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
    res, err := s.Committee.GetCandidateCandidateIDCommitteesHistory(ctx, operations.GetCandidateCandidateIDCommitteesHistoryRequest{
        APIKey: "deleniti",
        CandidateID: "omnis",
        Designation: []GetCandidateCandidateIDCommitteesHistoryDesignationEnum{
            operations.GetCandidateCandidateIDCommitteesHistoryDesignationEnumB,
            operations.GetCandidateCandidateIDCommitteesHistoryDesignationEnumD,
            operations.GetCandidateCandidateIDCommitteesHistoryDesignationEnumP,
            operations.GetCandidateCandidateIDCommitteesHistoryDesignationEnumA,
        },
        ElectionFull: sdk.Bool(false),
        Page: sdk.Int(456015),
        PerPage: sdk.Int(663078),
        Sort: sdk.String("saepe"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCandidateCandidateIDCommitteesHistoryCycle


Explore a filer's characteristics over time. This can be particularly useful if the committees change treasurers, designation, or `committee_type`.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
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
    res, err := s.Committee.GetCandidateCandidateIDCommitteesHistoryCycle(ctx, operations.GetCandidateCandidateIDCommitteesHistoryCycleRequest{
        APIKey: "eius",
        CandidateID: "aspernatur",
        Cycle: 20651,
        Designation: []GetCandidateCandidateIDCommitteesHistoryCycleDesignationEnum{
            operations.GetCandidateCandidateIDCommitteesHistoryCycleDesignationEnumB,
        },
        ElectionFull: sdk.Bool(false),
        Page: sdk.Int(881586),
        PerPage: sdk.Int(320017),
        Sort: sdk.String("saepe"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCommitteeCommitteeID


This endpoint is useful for finding detailed information about a particular committee or
filer. Use the `committee_id` to find the most recent information about the committee.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
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
    res, err := s.Committee.GetCommitteeCommitteeID(ctx, operations.GetCommitteeCommitteeIDRequest{
        APIKey: "suscipit",
        CommitteeID: "deserunt",
        CommitteeType: []GetCommitteeCommitteeIDCommitteeTypeEnum{
            operations.GetCommitteeCommitteeIDCommitteeTypeEnumI,
            operations.GetCommitteeCommitteeIDCommitteeTypeEnumX,
            operations.GetCommitteeCommitteeIDCommitteeTypeEnumP,
        },
        Cycle: []int{
            55,
            872651,
            311860,
        },
        Designation: []GetCommitteeCommitteeIDDesignationEnum{
            operations.GetCommitteeCommitteeIDDesignationEnumJ,
            operations.GetCommitteeCommitteeIDDesignationEnumB,
        },
        FilingFrequency: []GetCommitteeCommitteeIDFilingFrequencyEnum{
            operations.GetCommitteeCommitteeIDFilingFrequencyEnumA,
            operations.GetCommitteeCommitteeIDFilingFrequencyEnumW,
            operations.GetCommitteeCommitteeIDFilingFrequencyEnumMinusT,
            operations.GetCommitteeCommitteeIDFilingFrequencyEnumQ,
        },
        OrganizationType: []GetCommitteeCommitteeIDOrganizationTypeEnum{
            operations.GetCommitteeCommitteeIDOrganizationTypeEnumM,
            operations.GetCommitteeCommitteeIDOrganizationTypeEnumC,
            operations.GetCommitteeCommitteeIDOrganizationTypeEnumV,
        },
        Page: sdk.Int(947371),
        PerPage: sdk.Int(229442),
        Sort: sdk.String("tempore"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        Year: []int{
            253941,
            313692,
            213312,
            957451,
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

## GetCommitteeCommitteeIDHistory


Explore a filer's characteristics over time. This can be particularly useful if the committees change treasurers, designation, or `committee_type`.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
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
    res, err := s.Committee.GetCommitteeCommitteeIDHistory(ctx, operations.GetCommitteeCommitteeIDHistoryRequest{
        APIKey: "totam",
        CommitteeID: "nihil",
        Designation: []GetCommitteeCommitteeIDHistoryDesignationEnum{
            operations.GetCommitteeCommitteeIDHistoryDesignationEnumU,
        },
        ElectionFull: sdk.Bool(false),
        Page: sdk.Int(207470),
        PerPage: sdk.Int(153694),
        Sort: sdk.String("vel"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCommitteeCommitteeIDHistoryCycle


Explore a filer's characteristics over time. This can be particularly useful if the committees change treasurers, designation, or `committee_type`.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
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
    res, err := s.Committee.GetCommitteeCommitteeIDHistoryCycle(ctx, operations.GetCommitteeCommitteeIDHistoryCycleRequest{
        APIKey: "libero",
        CommitteeID: "voluptas",
        Cycle: 646265,
        Designation: []GetCommitteeCommitteeIDHistoryCycleDesignationEnum{
            operations.GetCommitteeCommitteeIDHistoryCycleDesignationEnumA,
            operations.GetCommitteeCommitteeIDHistoryCycleDesignationEnumA,
        },
        ElectionFull: sdk.Bool(false),
        Page: sdk.Int(186458),
        PerPage: sdk.Int(586784),
        Sort: sdk.String("maxime"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCommittees


Fetch basic information about committees and filers. Use parameters to filter for
particular characteristics.



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
    res, err := s.Committee.GetCommittees(ctx, operations.GetCommitteesRequest{
        APIKey: "pariatur",
        CandidateID: []string{
            "dicta",
            "laborum",
            "totam",
        },
        CommitteeID: []string{
            "aspernatur",
            "dolores",
        },
        CommitteeType: []GetCommitteesCommitteeTypeEnum{
            operations.GetCommitteesCommitteeTypeEnumU,
            operations.GetCommitteesCommitteeTypeEnumN,
            operations.GetCommitteesCommitteeTypeEnumO,
        },
        Cycle: []int{
            840429,
            183280,
            204865,
        },
        Designation: []GetCommitteesDesignationEnum{
            operations.GetCommitteesDesignationEnumA,
        },
        FilingFrequency: []GetCommitteesFilingFrequencyEnum{
            operations.GetCommitteesFilingFrequencyEnumA,
            operations.GetCommitteesFilingFrequencyEnumN,
        },
        MaxFirstF1Date: types.MustDateFromString("2021-02-13"),
        MaxFirstFileDate: types.MustDateFromString("2022-03-27"),
        MaxLastF1Date: types.MustDateFromString("2021-07-03"),
        MinFirstF1Date: types.MustDateFromString("2022-02-05"),
        MinFirstFileDate: types.MustDateFromString("2022-12-01"),
        MinLastF1Date: types.MustDateFromString("2021-11-23"),
        OrganizationType: []GetCommitteesOrganizationTypeEnum{
            operations.GetCommitteesOrganizationTypeEnumT,
            operations.GetCommitteesOrganizationTypeEnumUnknown,
            operations.GetCommitteesOrganizationTypeEnumW,
        },
        Page: sdk.Int(209157),
        Party: []string{
            "labore",
            "adipisci",
        },
        PerPage: sdk.Int(677263),
        Q: []string{
            "quae",
        },
        Sort: sdk.String("aut"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        SponsorCandidateID: []string{
            "itaque",
            "consequatur",
            "est",
        },
        State: []string{
            "porro",
            "doloribus",
            "ut",
            "facilis",
        },
        TreasurerName: []string{
            "qui",
            "quae",
            "laudantium",
        },
        Year: []int{
            580447,
            977496,
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
