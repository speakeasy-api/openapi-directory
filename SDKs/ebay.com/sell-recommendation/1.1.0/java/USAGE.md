<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FindListingRecommendationsSecurity;
import org.openapis.openapi.models.operations.FindListingRecommendationsQueryParams;
import org.openapis.openapi.models.operations.FindListingRecommendationsHeaders;
import org.openapis.openapi.models.operations.FindListingRecommendationsRequest;
import org.openapis.openapi.models.operations.FindListingRecommendationsResponse;
import org.openapis.openapi.models.shared.FindListingRecommendationRequest;
import org.openapis.openapi.models.shared.SchemeAPIAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindListingRecommendationsRequest req = new FindListingRecommendationsRequest() {{
                security = new FindListingRecommendationsSecurity() {{
                    apiAuth = new SchemeAPIAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new FindListingRecommendationsQueryParams() {{
                    filter = "corrupti";
                    limit = "provident";
                    offset = "distinctio";
                }};
                headers = new FindListingRecommendationsHeaders() {{
                    xEbayCMarketplaceId = "quibusdam";
                }};
                request = new FindListingRecommendationRequest() {{
                    listingIds = new String[]{{
                        add("nulla"),
                        add("corrupti"),
                        add("illum"),
                    }};
                }};
            }};            

            FindListingRecommendationsResponse res = sdk.listingRecommendation.findListingRecommendations(req);

            if (res.pagedListingRecommendationCollection.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->