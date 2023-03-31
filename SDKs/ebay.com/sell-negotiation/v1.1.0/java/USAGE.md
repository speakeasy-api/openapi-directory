<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FindEligibleItemsSecurity;
import org.openapis.openapi.models.operations.FindEligibleItemsQueryParams;
import org.openapis.openapi.models.operations.FindEligibleItemsHeaders;
import org.openapis.openapi.models.operations.FindEligibleItemsRequest;
import org.openapis.openapi.models.operations.FindEligibleItemsResponse;
import org.openapis.openapi.models.shared.SchemeAPIAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindEligibleItemsRequest req = new FindEligibleItemsRequest() {{
                security = new FindEligibleItemsSecurity() {{
                    apiAuth = new SchemeAPIAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new FindEligibleItemsQueryParams() {{
                    limit = "corrupti";
                    offset = "provident";
                }};
                headers = new FindEligibleItemsHeaders() {{
                    xEbayCMarketplaceId = "distinctio";
                }};
            }};            

            FindEligibleItemsResponse res = sdk.offer.findEligibleItems(req);

            if (res.pagedEligibleItemCollection.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->