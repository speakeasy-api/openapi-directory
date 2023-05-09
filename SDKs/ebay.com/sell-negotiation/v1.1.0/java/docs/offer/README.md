# offer

### Available Operations

* [findEligibleItems](#findeligibleitems) - This method evaluates a seller's current listings and returns the set of IDs that are eligible for a seller-initiated discount offer to a buyer. A listing ID is returned only when one or more buyers have shown an &quot;interest&quot; in the listing. If any buyers have shown interest in a listing, the seller can initiate a &quot;negotiation&quot; with them by calling sendOfferToInterestedBuyers, which sends all interested buyers a message that offers the listing at a discount. For details about how to create seller offers to buyers, see Sending offers to buyers.
* [sendOfferToInterestedBuyers](#sendoffertointerestedbuyers) - This method sends eligible buyers offers to purchase items in a listing at a discount. When a buyer has shown interest in a listing, they become &quot;eligible&quot; to receive a seller-initiated offer to purchase the item(s). Sellers use findEligibleItems to get the set of listings that have interested buyers. If a listing has interested buyers, sellers can use this method (sendOfferToInterestedBuyers) to send an offer to the buyers who are interested in the listing. The offer gives buyers the ability to purchase the associated listings at a discounted price. For details about how to create seller offers to buyers, see Sending offers to buyers.

## findEligibleItems

This method evaluates a seller's current listings and returns the set of IDs that are eligible for a seller-initiated discount offer to a buyer. A listing ID is returned only when one or more buyers have shown an &quot;interest&quot; in the listing. If any buyers have shown interest in a listing, the seller can initiate a &quot;negotiation&quot; with them by calling sendOfferToInterestedBuyers, which sends all interested buyers a message that offers the listing at a discount. For details about how to create seller offers to buyers, see Sending offers to buyers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindEligibleItemsRequest;
import org.openapis.openapi.models.operations.FindEligibleItemsResponse;
import org.openapis.openapi.models.operations.FindEligibleItemsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindEligibleItemsRequest req = new FindEligibleItemsRequest("unde") {{
                limit = "nulla";
                offset = "corrupti";
            }};            

            FindEligibleItemsResponse res = sdk.offer.findEligibleItems(req, new FindEligibleItemsSecurity("illum") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.pagedEligibleItemCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendOfferToInterestedBuyers

This method sends eligible buyers offers to purchase items in a listing at a discount. When a buyer has shown interest in a listing, they become &quot;eligible&quot; to receive a seller-initiated offer to purchase the item(s). Sellers use findEligibleItems to get the set of listings that have interested buyers. If a listing has interested buyers, sellers can use this method (sendOfferToInterestedBuyers) to send an offer to the buyers who are interested in the listing. The offer gives buyers the ability to purchase the associated listings at a discounted price. For details about how to create seller offers to buyers, see Sending offers to buyers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendOfferToInterestedBuyersRequest;
import org.openapis.openapi.models.operations.SendOfferToInterestedBuyersResponse;
import org.openapis.openapi.models.operations.SendOfferToInterestedBuyersSecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.CreateOffersRequest;
import org.openapis.openapi.models.shared.OfferedItem;
import org.openapis.openapi.models.shared.TimeDuration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SendOfferToInterestedBuyersRequest req = new SendOfferToInterestedBuyersRequest("vel") {{
                createOffersRequest = new CreateOffersRequest() {{
                    allowCounterOffer = false;
                    message = "error";
                    offerDuration = new TimeDuration() {{
                        unit = "deserunt";
                        value = 384382;
                    }};;
                    offeredItems = new org.openapis.openapi.models.shared.OfferedItem[]{{
                        add(new OfferedItem() {{
                            discountPercentage = "magnam";
                            listingId = "debitis";
                            price = new Amount() {{
                                currency = "ipsa";
                                value = "delectus";
                            }};
                            quantity = 272656;
                        }}),
                        add(new OfferedItem() {{
                            discountPercentage = "suscipit";
                            listingId = "molestiae";
                            price = new Amount() {{
                                currency = "minus";
                                value = "placeat";
                            }};
                            quantity = 528895;
                        }}),
                    }};
                }};;
            }};            

            SendOfferToInterestedBuyersResponse res = sdk.offer.sendOfferToInterestedBuyers(req, new SendOfferToInterestedBuyersSecurity("iusto") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.sendOfferToInterestedBuyersCollectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
