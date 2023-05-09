# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/ebay.com/sell-listing/v1_beta.3.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [ItemDraft](docs/itemdraft/README.md)

* [CreateItemDraft](docs/itemdraft/README.md#createitemdraft) - This call gives Partners the ability to create an eBay draft of a item for their seller using information from their site. This lets the Partner increase the exposure of items on their site and leverage the eBay user listing experience seamlessly. This experience provides guidance on pricing, aspects, etc. and recommendations that help create a listing that is complete and improves the exposure of the listing in search results. After the listing draft is created, the seller logs into their eBay account and uses the listing experience to finish the listing and publish the item on eBay.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
