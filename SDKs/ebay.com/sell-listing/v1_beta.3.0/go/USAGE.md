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
            CategoryID: "culpa",
            Charity: &shared.Charity{
                CharityID: "expedita",
                DonationPercentage: "consequuntur",
            },
            Condition: "dolor",
            Format: "expedita",
            PricingSummary: &shared.PricingSummary{
                AuctionReservePrice: &shared.Amount{
                    Currency: "voluptas",
                    Value: "fugit",
                },
                AuctionStartPrice: &shared.Amount{
                    Currency: "et",
                    Value: "nihil",
                },
                Price: &shared.Amount{
                    Currency: "rerum",
                    Value: "dicta",
                },
            },
            Product: &shared.Product{
                Aspects: []shared.Aspect{
                    shared.Aspect{
                        Name: "voluptatum",
                        Values: []string{
                            "ut",
                        },
                    },
                },
                Brand: "dolorem",
                Description: "et",
                Epid: "voluptate",
                ImageUrls: []string{
                    "vitae",
                    "totam",
                    "dolores",
                },
                Title: "illum",
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