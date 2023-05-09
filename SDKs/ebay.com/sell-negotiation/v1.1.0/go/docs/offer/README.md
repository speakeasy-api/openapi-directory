# Offer

### Available Operations

* [FindEligibleItems](#findeligibleitems) - This method evaluates a seller's current listings and returns the set of IDs that are eligible for a seller-initiated discount offer to a buyer. A listing ID is returned only when one or more buyers have shown an &quot;interest&quot; in the listing. If any buyers have shown interest in a listing, the seller can initiate a &quot;negotiation&quot; with them by calling sendOfferToInterestedBuyers, which sends all interested buyers a message that offers the listing at a discount. For details about how to create seller offers to buyers, see Sending offers to buyers.
* [SendOfferToInterestedBuyers](#sendoffertointerestedbuyers) - This method sends eligible buyers offers to purchase items in a listing at a discount. When a buyer has shown interest in a listing, they become &quot;eligible&quot; to receive a seller-initiated offer to purchase the item(s). Sellers use findEligibleItems to get the set of listings that have interested buyers. If a listing has interested buyers, sellers can use this method (sendOfferToInterestedBuyers) to send an offer to the buyers who are interested in the listing. The offer gives buyers the ability to purchase the associated listings at a discounted price. For details about how to create seller offers to buyers, see Sending offers to buyers.

## FindEligibleItems

This method evaluates a seller's current listings and returns the set of IDs that are eligible for a seller-initiated discount offer to a buyer. A listing ID is returned only when one or more buyers have shown an &quot;interest&quot; in the listing. If any buyers have shown interest in a listing, the seller can initiate a &quot;negotiation&quot; with them by calling sendOfferToInterestedBuyers, which sends all interested buyers a message that offers the listing at a discount. For details about how to create seller offers to buyers, see Sending offers to buyers.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Offer.FindEligibleItems(ctx, operations.FindEligibleItemsRequest{
        XEbayCMarketplaceID: "quibusdam",
        Limit: sdk.String("unde"),
        Offset: sdk.String("nulla"),
    }, operations.FindEligibleItemsSecurity{
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

## SendOfferToInterestedBuyers

This method sends eligible buyers offers to purchase items in a listing at a discount. When a buyer has shown interest in a listing, they become &quot;eligible&quot; to receive a seller-initiated offer to purchase the item(s). Sellers use findEligibleItems to get the set of listings that have interested buyers. If a listing has interested buyers, sellers can use this method (sendOfferToInterestedBuyers) to send an offer to the buyers who are interested in the listing. The offer gives buyers the ability to purchase the associated listings at a discounted price. For details about how to create seller offers to buyers, see Sending offers to buyers.

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
    res, err := s.Offer.SendOfferToInterestedBuyers(ctx, operations.SendOfferToInterestedBuyersRequest{
        CreateOffersRequest: &shared.CreateOffersRequest{
            AllowCounterOffer: sdk.Bool(false),
            Message: sdk.String("corrupti"),
            OfferDuration: &shared.TimeDuration{
                Unit: sdk.String("illum"),
                Value: sdk.Int(423655),
            },
            OfferedItems: []shared.OfferedItem{
                shared.OfferedItem{
                    DiscountPercentage: sdk.String("deserunt"),
                    ListingID: sdk.String("suscipit"),
                    Price: &shared.Amount{
                        Currency: sdk.String("iure"),
                        Value: sdk.String("magnam"),
                    },
                    Quantity: sdk.Int(891773),
                },
                shared.OfferedItem{
                    DiscountPercentage: sdk.String("ipsa"),
                    ListingID: sdk.String("delectus"),
                    Price: &shared.Amount{
                        Currency: sdk.String("tempora"),
                        Value: sdk.String("suscipit"),
                    },
                    Quantity: sdk.Int(477665),
                },
                shared.OfferedItem{
                    DiscountPercentage: sdk.String("minus"),
                    ListingID: sdk.String("placeat"),
                    Price: &shared.Amount{
                        Currency: sdk.String("voluptatum"),
                        Value: sdk.String("iusto"),
                    },
                    Quantity: sdk.Int(568045),
                },
            },
        },
        XEbayCMarketplaceID: "nisi",
    }, operations.SendOfferToInterestedBuyersSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendOfferToInterestedBuyersCollectionResponse != nil {
        // handle response
    }
}
```
