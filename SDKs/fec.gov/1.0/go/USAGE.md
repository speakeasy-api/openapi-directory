<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                APIKeyHeaderAuth: shared.SchemeAPIKeyHeaderAuth{
                    APIKey: "YOUR_API_KEY_HERE",
                },
                APIKeyQueryAuth: shared.SchemeAPIKeyQueryAuth{
                    APIKey: "YOUR_API_KEY_HERE",
                },
                APIKey: shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetAuditCaseRequest{
        QueryParams: operations.GetAuditCaseQueryParams{
            APIKey: "at",
            AuditCaseID: []string{
                "numquam",
                "est",
                "dolores",
            },
            AuditID: []int32{
                1859198245871584525,
                5576063394388699331,
            },
            CandidateID: []string{
                "dolorem",
                "eum",
            },
            CommitteeDesignation: "et",
            CommitteeID: []string{
                "expedita",
                "sit",
                "quis",
            },
            CommitteeType: []string{
                "adipisci",
                "praesentium",
            },
            Cycle: []int32{
                8913143418439467679,
            },
            MaxElectionCycle: 7219505888825369219,
            MinElectionCycle: 864282357668987080,
            Page: 7478980865905211729,
            PerPage: 1204717232080532149,
            PrimaryCategoryID: "incidunt",
            Q: []string{
                "placeat",
                "culpa",
            },
            Qq: []string{
                "quae",
            },
            Sort: []string{
                "qui",
                "iusto",
            },
            SortHideNull: false,
            SortNullOnly: false,
            SortNullsLast: true,
            SubCategoryID: "labore",
        },
    }
    
    res, err := s.Audit.GetAuditCase(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->