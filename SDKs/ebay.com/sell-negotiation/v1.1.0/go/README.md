# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/ebay.com/sell-negotiation/v1.1.0/go
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

    req := operations.FindEligibleItemsRequest{
        XEbayCMarketplaceID: "corrupti",
        Limit: "provident",
        Offset: "distinctio",
    }

    ctx := context.Background()
    res, err := s.Offer.FindEligibleItems(ctx, req, operations.FindEligibleItemsSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedEligibleItemCollection != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Offer

* `FindEligibleItems` - This method evaluates a seller's current listings and returns the set of IDs that are eligible for a seller-initiated discount offer to a buyer. A listing ID is returned only when one or more buyers have shown an &quot;interest&quot; in the listing. If any buyers have shown interest in a listing, the seller can initiate a &quot;negotiation&quot; with them by calling sendOfferToInterestedBuyers, which sends all interested buyers a message that offers the listing at a discount. For details about how to create seller offers to buyers, see Sending offers to buyers.
* `SendOfferToInterestedBuyers` - This method sends eligible buyers offers to purchase items in a listing at a discount. When a buyer has shown interest in a listing, they become &quot;eligible&quot; to receive a seller-initiated offer to purchase the item(s). Sellers use findEligibleItems to get the set of listings that have interested buyers. If a listing has interested buyers, sellers can use this method (sendOfferToInterestedBuyers) to send an offer to the buyers who are interested in the listing. The offer gives buyers the ability to purchase the associated listings at a discounted price. For details about how to create seller offers to buyers, see Sending offers to buyers.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
