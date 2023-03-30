<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeaderAuth: shared.SchemeAPIKeyHeaderAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
            APIKeyQueryAuth: shared.SchemeAPIKeyQueryAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.GetAuditCaseRequest{
        QueryParams: operations.GetAuditCaseQueryParams{
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
            CommitteeDesignation: "debitis",
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
            MaxElectionCycle: 392785,
            MinElectionCycle: 925597,
            Page: 836079,
            PerPage: 71036,
            PrimaryCategoryID: "quis",
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
            SortHideNull: false,
            SortNullOnly: false,
            SortNullsLast: false,
            SubCategoryID: "at",
        },
    }

    ctx := context.Background()
    res, err := s.Audit.GetAuditCase(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->