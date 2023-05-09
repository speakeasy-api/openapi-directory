# ItemDraft

### Available Operations

* [CreateItemDraft](#createitemdraft) - This call gives Partners the ability to create an eBay draft of a item for their seller using information from their site. This lets the Partner increase the exposure of items on their site and leverage the eBay user listing experience seamlessly. This experience provides guidance on pricing, aspects, etc. and recommendations that help create a listing that is complete and improves the exposure of the listing in search results. After the listing draft is created, the seller logs into their eBay account and uses the listing experience to finish the listing and publish the item on eBay.

## CreateItemDraft

This call gives Partners the ability to create an eBay draft of a item for their seller using information from their site. This lets the Partner increase the exposure of items on their site and leverage the eBay user listing experience seamlessly. This experience provides guidance on pricing, aspects, etc. and recommendations that help create a listing that is complete and improves the exposure of the listing in search results. After the listing draft is created, the seller logs into their eBay account and uses the listing experience to finish the listing and publish the item on eBay.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ItemDraft.CreateItemDraft(ctx, operations.CreateItemDraftRequest{
        ContentLanguage: sdk.String("molestiae"),
        ItemDraft: &shared.ItemDraft{
            CategoryID: sdk.String("quod"),
            Charity: &shared.Charity{
                CharityID: sdk.String("quod"),
                DonationPercentage: sdk.String("esse"),
            },
            Condition: sdk.String("totam"),
            Format: sdk.String("porro"),
            PricingSummary: &shared.PricingSummary{
                AuctionReservePrice: &shared.Amount{
                    Currency: sdk.String("dolorum"),
                    Value: sdk.String("dicta"),
                },
                AuctionStartPrice: &shared.Amount{
                    Currency: sdk.String("nam"),
                    Value: sdk.String("officia"),
                },
                Price: &shared.Amount{
                    Currency: sdk.String("occaecati"),
                    Value: sdk.String("fugit"),
                },
            },
            Product: &shared.Product{
                Aspects: []shared.Aspect{
                    shared.Aspect{
                        Name: sdk.String("Ms. Earnest Lebsack"),
                        Values: []string{
                            "qui",
                            "impedit",
                        },
                    },
                    shared.Aspect{
                        Name: sdk.String("Cory Emmerich"),
                        Values: []string{
                            "ad",
                        },
                    },
                    shared.Aspect{
                        Name: sdk.String("Louis Moore"),
                        Values: []string{
                            "hic",
                            "saepe",
                        },
                    },
                },
                Brand: sdk.String("fuga"),
                Description: sdk.String("in"),
                Epid: sdk.String("corporis"),
                ImageUrls: []string{
                    "iure",
                    "saepe",
                    "quidem",
                },
                Title: sdk.String("Mr."),
            },
        },
        XEbayCMarketplaceID: "ipsa",
    }, operations.CreateItemDraftSecurity{
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
