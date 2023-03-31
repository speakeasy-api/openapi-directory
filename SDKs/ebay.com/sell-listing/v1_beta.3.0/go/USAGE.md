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
        ContentLanguage: "corrupti",
        ItemDraft: &shared.ItemDraft{
            CategoryID: "provident",
            Charity: &shared.Charity{
                CharityID: "distinctio",
                DonationPercentage: "quibusdam",
            },
            Condition: "unde",
            Format: "nulla",
            PricingSummary: &shared.PricingSummary{
                AuctionReservePrice: &shared.Amount{
                    Currency: "corrupti",
                    Value: "illum",
                },
                AuctionStartPrice: &shared.Amount{
                    Currency: "vel",
                    Value: "error",
                },
                Price: &shared.Amount{
                    Currency: "deserunt",
                    Value: "suscipit",
                },
            },
            Product: &shared.Product{
                Aspects: []shared.Aspect{
                    shared.Aspect{
                        Name: "magnam",
                        Values: []string{
                            "ipsa",
                            "delectus",
                            "tempora",
                            "suscipit",
                        },
                    },
                    shared.Aspect{
                        Name: "molestiae",
                        Values: []string{
                            "placeat",
                            "voluptatum",
                            "iusto",
                            "excepturi",
                        },
                    },
                },
                Brand: "nisi",
                Description: "recusandae",
                Epid: "temporibus",
                ImageUrls: []string{
                    "quis",
                },
                Title: "Mr.",
            },
        },
        XEbayCMarketplaceID: "deserunt",
    }

    ctx := context.Background()
    res, err := s.ItemDraft.CreateItemDraft(ctx, req, operations.CreateItemDraftSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemDraftResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->