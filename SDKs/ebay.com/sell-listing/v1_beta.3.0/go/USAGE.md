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
            ContentLanguage: "corrupti",
            XEbayCMarketplaceID: "provident",
        },
        Request: &shared.ItemDraft{
            CategoryID: "distinctio",
            Charity: &shared.Charity{
                CharityID: "quibusdam",
                DonationPercentage: "unde",
            },
            Condition: "nulla",
            Format: "corrupti",
            PricingSummary: &shared.PricingSummary{
                AuctionReservePrice: &shared.Amount{
                    Currency: "illum",
                    Value: "vel",
                },
                AuctionStartPrice: &shared.Amount{
                    Currency: "error",
                    Value: "deserunt",
                },
                Price: &shared.Amount{
                    Currency: "suscipit",
                    Value: "iure",
                },
            },
            Product: &shared.Product{
                Aspects: []shared.Aspect{
                    shared.Aspect{
                        Name: "debitis",
                        Values: []string{
                            "delectus",
                        },
                    },
                    shared.Aspect{
                        Name: "tempora",
                        Values: []string{
                            "molestiae",
                            "minus",
                        },
                    },
                },
                Brand: "placeat",
                Description: "voluptatum",
                Epid: "iusto",
                ImageUrls: []string{
                    "nisi",
                    "recusandae",
                    "temporibus",
                },
                Title: "Mr.",
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