<!-- Start SDK Example Usage -->
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
        APIKey: "corrupti",
        AuditCaseID: []string{
            "distinctio",
            "quibusdam",
            "unde",
        },
        AuditID: []int{
            544883,
            847252,
            423655,
            623564,
        },
        CandidateID: []string{
            "suscipit",
            "iure",
            "magnam",
        },
        CommitteeDesignation: sdk.String("debitis"),
        CommitteeID: []string{
            "delectus",
        },
        CommitteeType: []string{
            "suscipit",
            "molestiae",
        },
        Cycle: []int{
            812169,
            528895,
            479977,
            568045,
        },
        MaxElectionCycle: sdk.Int(392785),
        MinElectionCycle: sdk.Int(925597),
        Page: sdk.Int(836079),
        PerPage: sdk.Int(71036),
        PrimaryCategoryID: sdk.String("quis"),
        Q: []string{
            "deserunt",
        },
        Qq: []string{
            "ipsam",
        },
        Sort: []string{
            "sapiente",
            "quo",
            "odit",
            "at",
        },
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        SubCategoryID: sdk.String("at"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->