<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetDealItemsSecurity;
import org.openapis.openapi.models.operations.GetDealItemsQueryParams;
import org.openapis.openapi.models.operations.GetDealItemsHeaders;
import org.openapis.openapi.models.operations.GetDealItemsRequest;
import org.openapis.openapi.models.operations.GetDealItemsResponse;
import org.openapis.openapi.models.shared.SchemeAPIAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDealItemsRequest req = new GetDealItemsRequest() {{
                security = new GetDealItemsSecurity() {{
                    apiAuth = new SchemeAPIAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new GetDealItemsQueryParams() {{
                    categoryIds = "corrupti";
                    commissionable = "provident";
                    deliveryCountry = "distinctio";
                    limit = "quibusdam";
                    offset = "unde";
                }};
                headers = new GetDealItemsHeaders() {{
                    xEbayCMarketplaceId = "nulla";
                }};
            }};            

            GetDealItemsResponse res = sdk.dealItem.getDealItems(req);

            if (res.dealItemSearchResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->