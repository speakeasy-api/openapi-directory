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

            FindListingRecommendationsRequest req = new FindListingRecommendationsRequest() {{
                security = new FindListingRecommendationsSecurity() {{
                    apiAuth = new SchemeApiAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new FindListingRecommendationsQueryParams() {{
                    filter = "sit";
                    limit = "voluptas";
                    offset = "culpa";
                }};
                headers = new FindListingRecommendationsHeaders() {{
                    xEBAYCMARKETPLACEID = "expedita";
                }};
                request = new FindListingRecommendationRequest() {{
                    listingIds = new String[]() {{
                        add("dolor"),
                        add("expedita"),
                        add("voluptas"),
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