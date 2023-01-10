<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.CreateItemDraftRequest{
        Security: operations.CreateItemDraftSecurity{
            APIAuth: shared.SchemeAPIAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        Headers: operations.CreateItemDraftHeaders{
            ContentLanguage: "sit",
            XEBAYCMARKETPLACEID: "voluptas",
        },
        Request: &shared.ItemDraft{
            CategoryID: "sint",
            Charity: &shared.Charity{
                CharityID: "voluptate",
                DonationPercentage: "aperiam",
            },
            Condition: "aut",
            Format: "unde",
            PricingSummary: &shared.PricingSummary{
                AuctionReservePrice: &shared.Amount{
                    Currency: "dolorem",
                    Value: "aspernatur",
                },
                AuctionStartPrice: &shared.Amount{
                    Currency: "quia",
                    Value: "autem",
                },
                Price: &shared.Amount{
                    Currency: "facere",
                    Value: "at",
                },
            },
            Product: &shared.Product{
                Aspects: []shared.Aspect{
                    shared.Aspect{
                        Name: "qui",
                        Values: []string{
                            "modi",
                        },
                    },
                    shared.Aspect{
                        Name: "debitis",
                        Values: []string{
                            "fugiat",
                            "perferendis",
                        },
                    },
                },
                Brand: "soluta",
                Description: "aut",
                Epid: "nihil",
                ImageUrls: []string{
                    "voluptates",
                },
                Title: "quasi",
            },
        },
    }
    
    res, err := s.ItemDraft.CreateItemDraft(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemDraftResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->