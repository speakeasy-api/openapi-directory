<!-- Start SDK Example Usage -->
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
        ContentLanguage: sdk.String("corrupti"),
        ItemDraft: &shared.ItemDraft{
            CategoryID: sdk.String("provident"),
            Charity: &shared.Charity{
                CharityID: sdk.String("distinctio"),
                DonationPercentage: sdk.String("quibusdam"),
            },
            Condition: sdk.String("unde"),
            Format: sdk.String("nulla"),
            PricingSummary: &shared.PricingSummary{
                AuctionReservePrice: &shared.Amount{
                    Currency: sdk.String("corrupti"),
                    Value: sdk.String("illum"),
                },
                AuctionStartPrice: &shared.Amount{
                    Currency: sdk.String("vel"),
                    Value: sdk.String("error"),
                },
                Price: &shared.Amount{
                    Currency: sdk.String("deserunt"),
                    Value: sdk.String("suscipit"),
                },
            },
            Product: &shared.Product{
                Aspects: []shared.Aspect{
                    shared.Aspect{
                        Name: sdk.String("Raquel Bednar"),
                        Values: []string{
                            "molestiae",
                            "minus",
                        },
                    },
                    shared.Aspect{
                        Name: sdk.String("Ken Kshlerin"),
                        Values: []string{
                            "temporibus",
                            "ab",
                            "quis",
                            "veritatis",
                        },
                    },
                },
                Brand: sdk.String("deserunt"),
                Description: sdk.String("perferendis"),
                Epid: sdk.String("ipsam"),
                ImageUrls: []string{
                    "sapiente",
                    "quo",
                    "odit",
                    "at",
                },
                Title: sdk.String("Dr."),
            },
        },
        XEbayCMarketplaceID: "maiores",
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
<!-- End SDK Example Usage -->