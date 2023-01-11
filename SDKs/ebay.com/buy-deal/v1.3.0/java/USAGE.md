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

            GetDealItemsRequest req = new GetDealItemsRequest() {{
                security = new GetDealItemsSecurity() {{
                    apiAuth = new SchemeApiAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new GetDealItemsQueryParams() {{
                    categoryIds = "sit";
                    commissionable = "voluptas";
                    deliveryCountry = "culpa";
                    limit = "expedita";
                    offset = "consequuntur";
                }};
                headers = new GetDealItemsHeaders() {{
                    xEBAYCMARKETPLACEID = "dolor";
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