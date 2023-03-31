<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DeleteRecommendationPreferencesXAmzTargetEnum;
import org.openapis.openapi.models.operations.DeleteRecommendationPreferencesHeaders;
import org.openapis.openapi.models.operations.DeleteRecommendationPreferencesRequest;
import org.openapis.openapi.models.operations.DeleteRecommendationPreferencesResponse;
import org.openapis.openapi.models.shared.DeleteRecommendationPreferencesRequest;
import org.openapis.openapi.models.shared.Scope;
import org.openapis.openapi.models.shared.ScopeNameEnum;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.RecommendationPreferenceNameEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            DeleteRecommendationPreferencesRequest req = new DeleteRecommendationPreferencesRequest() {{
                headers = new DeleteRecommendationPreferencesHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "ComputeOptimizerService.DeleteRecommendationPreferences";
                }};
                request = new DeleteRecommendationPreferencesRequest() {{
                    recommendationPreferenceNames = new org.openapis.openapi.models.shared.RecommendationPreferenceNameEnum[]{{
                        add("InferredWorkloadTypes"),
                        add("InferredWorkloadTypes"),
                        add("InferredWorkloadTypes"),
                        add("InferredWorkloadTypes"),
                    }};
                    resourceType = "EbsVolume";
                    scope = new Scope() {{
                        name = "Organization";
                        value = "debitis";
                    }};
                }};
            }};            

            DeleteRecommendationPreferencesResponse res = sdk.deleteRecommendationPreferences(req);

            if (res.deleteRecommendationPreferencesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->