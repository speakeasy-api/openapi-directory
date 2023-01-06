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
            ContentLanguage: "molestiae",
            XEBAYCMARKETPLACEID: "praesentium",
        },
        Request: &shared.ItemDraft{
            CategoryID: "quis",
            Charity: &shared.Charity{
                CharityID: "omnis",
                DonationPercentage: "praesentium",
            },
            Condition: "illo",
            Format: "omnis",
            PricingSummary: &shared.PricingSummary{
                AuctionReservePrice: &shared.Amount{
                    Currency: "iure",
                    Value: "est",
                },
                AuctionStartPrice: &shared.Amount{
                    Currency: "eaque",
                    Value: "quas",
                },
                Price: &shared.Amount{
                    Currency: "suscipit",
                    Value: "et",
                },
            },
            Product: &shared.Product{
                Aspects: []shared.Aspect{
                    shared.Aspect{
                        Name: "officiis",
                        Values: []string{
                            "ut",
                            "sapiente",
                            "nulla",
                        },
                    },
                },
                Brand: "id",
                Description: "et",
                Epid: "voluptatem",
                ImageUrls: []string{
                    "optio",
                    "nihil",
                    "corrupti",
                },
                Title: "voluptatem",
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