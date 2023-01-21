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
            APIKey: "sit",
            AuditCaseID: []string{
                "culpa",
            },
            AuditID: []int32{
                3390393562759376202,
                2669985732393126063,
            },
            CandidateID: []string{
                "voluptas",
                "fugit",
            },
            CommitteeDesignation: "et",
            CommitteeID: []string{
                "rerum",
            },
            CommitteeType: []string{
                "debitis",
                "voluptatum",
                "et",
            },
            Cycle: []int32{
                161231572858529631,
                7259475919510918339,
                7373105480197164748,
            },
            MaxElectionCycle: 3287288577352441706,
            MinElectionCycle: 3930927879439176946,
            Page: 4706154865122290029,
            PerPage: 2217592893536642650,
            PrimaryCategoryID: "illum",
            Q: []string{
                "vel",
            },
            Qq: []string{
                "dolore",
            },
            Sort: []string{
                "aspernatur",
                "accusantium",
            },
            SortHideNull: false,
            SortNullOnly: false,
            SortNullsLast: true,
            SubCategoryID: "est",
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