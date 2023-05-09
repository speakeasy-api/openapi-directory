<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindListingRecommendationsRequest;
import org.openapis.openapi.models.operations.FindListingRecommendationsResponse;
import org.openapis.openapi.models.operations.FindListingRecommendationsSecurity;
import org.openapis.openapi.models.shared.FindListingRecommendationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindListingRecommendationsRequest req = new FindListingRecommendationsRequest("corrupti") {{
                findListingRecommendationRequest = new FindListingRecommendationRequest() {{
                    listingIds = new String[]{{
                        add("distinctio"),
                        add("quibusdam"),
                        add("unde"),
                    }};
                }};;
                filter = "nulla";
                limit = "corrupti";
                offset = "illum";
            }};            

            FindListingRecommendationsResponse res = sdk.listingRecommendation.findListingRecommendations(req, new FindListingRecommendationsSecurity("vel") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.pagedListingRecommendationCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->