<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DeleteRecommendationPreferencesXAmzTargetEnum;
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
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRecommendationPreferencesRequest req = new DeleteRecommendationPreferencesRequest() {{
                deleteRecommendationPreferencesRequest = new DeleteRecommendationPreferencesRequest() {{
                    recommendationPreferenceNames = new org.openapis.openapi.models.shared.RecommendationPreferenceNameEnum[]{{
                        add("InferredWorkloadTypes"),
                        add("ExternalMetricsPreference"),
                        add("ExternalMetricsPreference"),
                    }};
                    resourceType = "LambdaFunction";
                    scope = new Scope() {{
                        name = "ResourceArn";
                        value = "corrupti";
                    }};
                }};
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "vel";
                xAmzCredential = "error";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "magnam";
                xAmzTarget = "ComputeOptimizerService.DeleteRecommendationPreferences";
            }}            

            DeleteRecommendationPreferencesResponse res = sdk.deleteRecommendationPreferences(req);

            if (res.deleteRecommendationPreferencesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->