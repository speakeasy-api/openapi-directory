# Audit

## Overview

The agency’s monitoring process may detect potential violations through a review of a committee’s reports or through a Commission audit. By law, all enforcement cases must remain confidential until they’re closed. 

 The Commission is required by law to audit Presidential campaigns that accept public funds. In addition, the Commission audits a committee when it appears not to have met the threshold requirements for substantial compliance with the Federal Election Campaign Act. The audit determines whether the committee complied with limitations, prohibitions and disclosure requirements. 

 These endpoints contain Final Audit Reports approved by the Commission since inception.

### Available Operations

* [GetAuditCase](#getauditcase) - 
This endpoint contains Final Audit Reports approved by the Commission since inception.
The search can be based on information about the audited committee (Name, FEC ID Number, Type, 
Election Cycle) or the issues covered in the report.

* [GetAuditCategory](#getauditcategory) - 
This lists the options for the categories and subcategories available in the /audit-search/ endpoint.

* [GetAuditPrimaryCategory](#getauditprimarycategory) - 
This lists the options for the primary categories available in the /audit-search/ endpoint.

* [GetNamesAuditCandidates](#getnamesauditcandidates) - 
Search for candidates or committees by name. If you're looking for information on a
particular person or group, using a name to find the `candidate_id` or `committee_id` on
this endpoint can be a helpful first step.

* [GetNamesAuditCommittees](#getnamesauditcommittees) - 
Search for candidates or committees by name. If you're looking for information on a
particular person or group, using a name to find the `candidate_id` or `committee_id` on
this endpoint can be a helpful first step.


## GetAuditCase


This endpoint contains Final Audit Reports approved by the Commission since inception.
The search can be based on information about the audited committee (Name, FEC ID Number, Type, 
Election Cycle) or the issues covered in the report.


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
    res, err := s.Audit.GetAuditCase(ctx, operations.GetAuditCaseRequest{
        APIKey: "maiores",
        AuditCaseID: []string{
            "quod",
            "quod",
        },
        AuditID: []int{
            520478,
            780529,
        },
        CandidateID: []string{
            "dicta",
            "nam",
            "officia",
        },
        CommitteeDesignation: sdk.String("occaecati"),
        CommitteeID: []string{
            "deleniti",
        },
        CommitteeType: []string{
            "optio",
            "totam",
            "beatae",
            "commodi",
        },
        Cycle: []int{
            264555,
            186332,
        },
        MaxElectionCycle: sdk.Int(774234),
        MinElectionCycle: sdk.Int(736918),
        Page: sdk.Int(456150),
        PerPage: sdk.Int(216550),
        PrimaryCategoryID: sdk.String("excepturi"),
        Q: []string{
            "perferendis",
        },
        Qq: []string{
            "natus",
            "sed",
        },
        Sort: []string{
            "dolor",
            "natus",
            "laboriosam",
        },
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        SubCategoryID: sdk.String("hic"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAuditCategory


This lists the options for the categories and subcategories available in the /audit-search/ endpoint.


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
    res, err := s.Audit.GetAuditCategory(ctx, operations.GetAuditCategoryRequest{
        APIKey: "saepe",
        Page: sdk.Int(681820),
        PerPage: sdk.Int(449950),
        PrimaryCategoryID: []string{
            "iste",
            "iure",
        },
        PrimaryCategoryName: []string{
            "quidem",
            "architecto",
            "ipsa",
            "reiciendis",
        },
        Sort: sdk.String("est"),
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

## GetAuditPrimaryCategory


This lists the options for the primary categories available in the /audit-search/ endpoint.


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
    res, err := s.Audit.GetAuditPrimaryCategory(ctx, operations.GetAuditPrimaryCategoryRequest{
        APIKey: "mollitia",
        Page: sdk.Int(670638),
        PerPage: sdk.Int(170909),
        PrimaryCategoryID: []string{
            "corporis",
        },
        PrimaryCategoryName: []string{
            "nobis",
        },
        Sort: sdk.String("enim"),
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

## GetNamesAuditCandidates


Search for candidates or committees by name. If you're looking for information on a
particular person or group, using a name to find the `candidate_id` or `committee_id` on
this endpoint can be a helpful first step.


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
    res, err := s.Audit.GetNamesAuditCandidates(ctx, operations.GetNamesAuditCandidatesRequest{
        APIKey: "omnis",
        Q: []string{
            "minima",
            "excepturi",
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

## GetNamesAuditCommittees


Search for candidates or committees by name. If you're looking for information on a
particular person or group, using a name to find the `candidate_id` or `committee_id` on
this endpoint can be a helpful first step.


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
    res, err := s.Audit.GetNamesAuditCommittees(ctx, operations.GetNamesAuditCommitteesRequest{
        APIKey: "accusantium",
        Q: []string{
            "culpa",
            "doloribus",
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
