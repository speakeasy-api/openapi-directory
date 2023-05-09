<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRecommendationPreferencesRequest;
import org.openapis.openapi.models.operations.DeleteRecommendationPreferencesResponse;
import org.openapis.openapi.models.operations.DeleteRecommendationPreferencesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteRecommendationPreferencesRequest;
import org.openapis.openapi.models.shared.RecommendationPreferenceNameEnum;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.Scope;
import org.openapis.openapi.models.shared.ScopeNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRecommendationPreferencesRequest req = new DeleteRecommendationPreferencesRequest(                new DeleteRecommendationPreferencesRequest(                new org.openapis.openapi.models.shared.RecommendationPreferenceNameEnum[]{{
                                                add(RecommendationPreferenceNameEnum.EXTERNAL_METRICS_PREFERENCE),
                                                add(RecommendationPreferenceNameEnum.EXTERNAL_METRICS_PREFERENCE),
                                                add(RecommendationPreferenceNameEnum.INFERRED_WORKLOAD_TYPES),
                                            }}, ResourceTypeEnum.ECS_SERVICE) {{
                                scope = new Scope() {{
                                    name = ScopeNameEnum.ACCOUNT_ID;
                                    value = "illum";
                                }};;
                            }};, DeleteRecommendationPreferencesXAmzTargetEnum.COMPUTE_OPTIMIZER_SERVICE_DELETE_RECOMMENDATION_PREFERENCES) {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "error";
                xAmzCredential = "deserunt";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "iure";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "debitis";
            }};            

            DeleteRecommendationPreferencesResponse res = sdk.deleteRecommendationPreferences(req);

            if (res.deleteRecommendationPreferencesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->