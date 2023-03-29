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
    s := sdk.New()

    req := operations.CreateItemDraftRequest{
        Security: operations.CreateItemDraftSecurity{
            APIAuth: shared.SchemeAPIAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        Headers: operations.CreateItemDraftHeaders{
            ContentLanguage: "unde",
            XEbayCMarketplaceID: "deserunt",
        },
        Request: &shared.ItemDraft{
            CategoryID: "porro",
            Charity: &shared.Charity{
                CharityID: "nulla",
                DonationPercentage: "id",
            },
            Condition: "vero",
            Format: "perspiciatis",
            PricingSummary: &shared.PricingSummary{
                AuctionReservePrice: &shared.Amount{
                    Currency: "nulla",
                    Value: "nihil",
                },
                AuctionStartPrice: &shared.Amount{
                    Currency: "fuga",
                    Value: "facilis",
                },
                Price: &shared.Amount{
                    Currency: "eum",
                    Value: "iusto",
                },
            },
            Product: &shared.Product{
                Aspects: []shared.Aspect{
                    shared.Aspect{
                        Name: "saepe",
                        Values: []string{
                            "sapiente",
                        },
                    },
                    shared.Aspect{
                        Name: "enim",
                        Values: []string{
                            "voluptatum",
                            "autem",
                        },
                    },
                },
                Brand: "vel",
                Description: "non",
                Epid: "deleniti",
                ImageUrls: []string{
                    "reprehenderit",
                    "molestiae",
                    "quo",
                },
                Title: "Senior Tactics Executive",
            },
        },
    }

    ctx := context.Background()
    res, err := s.ItemDraft.CreateItemDraft(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemDraftResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->