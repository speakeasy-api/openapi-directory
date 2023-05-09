<!-- Start SDK Example Usage -->
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

            GetDealItemsRequest req = new GetDealItemsRequest("corrupti") {{
                categoryIds = "provident";
                commissionable = "distinctio";
                deliveryCountry = "quibusdam";
                limit = "unde";
                offset = "nulla";
            }};            

            GetDealItemsResponse res = sdk.dealItem.getDealItems(req, new GetDealItemsSecurity("corrupti") {{
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
<!-- End SDK Example Usage -->