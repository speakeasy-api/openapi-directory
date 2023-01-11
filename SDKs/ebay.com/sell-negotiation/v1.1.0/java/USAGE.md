<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            FindEligibleItemsRequest req = new FindEligibleItemsRequest() {{
                security = new FindEligibleItemsSecurity() {{
                    apiAuth = new SchemeApiAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new FindEligibleItemsQueryParams() {{
                    limit = "non";
                    offset = "non";
                }};
                headers = new FindEligibleItemsHeaders() {{
                    xEBAYCMARKETPLACEID = "nam";
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