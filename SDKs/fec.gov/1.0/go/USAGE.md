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
            APIKey: "consequatur",
            AuditCaseID: []string{
                "officia",
                "nihil",
            },
            AuditID: []int32{
                7756699698972645173,
                5607289564857015942,
            },
            CandidateID: []string{
                "necessitatibus",
                "iste",
            },
            CommitteeDesignation: "ea",
            CommitteeID: []string{
                "sed",
            },
            CommitteeType: []string{
                "aliquam",
                "nisi",
            },
            Cycle: []int32{
                8156228904820113242,
                5947285951484731198,
            },
            MaxElectionCycle: 869561943583408486,
            MinElectionCycle: 3655237301516905859,
            Page: 2909554718741390322,
            PerPage: 6600351355182752240,
            PrimaryCategoryID: "non",
            Q: []string{
                "delectus",
            },
            Qq: []string{
                "minus",
            },
            Sort: []string{
                "eos",
                "quaerat",
                "quasi",
            },
            SortHideNull: false,
            SortNullOnly: true,
            SortNullsLast: false,
            SubCategoryID: "officia",
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