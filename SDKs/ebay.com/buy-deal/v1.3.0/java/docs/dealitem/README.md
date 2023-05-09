# dealItem

### Available Operations

* [getDealItems](#getdealitems) - This method retrieves a paginated set of deal items. The result set contains all deal items associated with the specified search criteria and marketplace ID. Request headers This method uses the X-EBAY-C-ENDUSERCTX request header to support revenue sharing for eBay Partner Networks and to improve the accuracy of shipping and delivery time estimations. For details see, Request headers in the Buying Integration Guide. Restrictions This method can return a maximum of 10,000 items. For a list of supported sites and other restrictions, see API Restrictions. eBay Partner Network: In order to receive a commission for your sales, you must use the URL returned in the itemAffiliateWebUrl field to forward your buyer to the ebay.com site.

## getDealItems

This method retrieves a paginated set of deal items. The result set contains all deal items associated with the specified search criteria and marketplace ID. Request headers This method uses the X-EBAY-C-ENDUSERCTX request header to support revenue sharing for eBay Partner Networks and to improve the accuracy of shipping and delivery time estimations. For details see, Request headers in the Buying Integration Guide. Restrictions This method can return a maximum of 10,000 items. For a list of supported sites and other restrictions, see API Restrictions. eBay Partner Network: In order to receive a commission for your sales, you must use the URL returned in the itemAffiliateWebUrl field to forward your buyer to the ebay.com site.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDealItemsRequest;
import org.openapis.openapi.models.operations.GetDealItemsResponse;
import org.openapis.openapi.models.operations.GetDealItemsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDealItemsRequest req = new GetDealItemsRequest("illum") {{
                categoryIds = "vel";
                commissionable = "error";
                deliveryCountry = "deserunt";
                limit = "suscipit";
                offset = "iure";
            }};            

            GetDealItemsResponse res = sdk.dealItem.getDealItems(req, new GetDealItemsSecurity("magnam") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.dealItemSearchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
