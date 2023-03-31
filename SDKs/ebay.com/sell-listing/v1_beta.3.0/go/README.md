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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### ItemDraft

* `CreateItemDraft` - This call gives Partners the ability to create an eBay draft of a item for their seller using information from their site. This lets the Partner increase the exposure of items on their site and leverage the eBay user listing experience seamlessly. This experience provides guidance on pricing, aspects, etc. and recommendations that help create a listing that is complete and improves the exposure of the listing in search results. After the listing draft is created, the seller logs into their eBay account and uses the listing experience to finish the listing and publish the item on eBay.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
