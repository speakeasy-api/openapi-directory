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
                    filter = "beatae";
                    limit = "quae";
                    offset = "qui";
                }};
                headers = new FindListingRecommendationsHeaders() {{
                    xEBAYCMARKETPLACEID = "magni";
                }};
                request = new FindListingRecommendationRequest() {{
                    listingIds = new String[]() {{
                        add("sit"),
                        add("aut"),
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