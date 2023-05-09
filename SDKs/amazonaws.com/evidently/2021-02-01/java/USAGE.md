<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchEvaluateFeatureRequest;
import org.openapis.openapi.models.operations.BatchEvaluateFeatureRequestBody;
import org.openapis.openapi.models.operations.BatchEvaluateFeatureResponse;
import org.openapis.openapi.models.shared.EvaluationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchEvaluateFeatureRequest req = new BatchEvaluateFeatureRequest(                new BatchEvaluateFeatureRequestBody(                new org.openapis.openapi.models.shared.EvaluationRequest[]{{
                                                add(new EvaluationRequest("nulla", "corrupti") {{
                                                    entityId = "distinctio";
                                                    evaluationContext = "quibusdam";
                                                    feature = "unde";
                                                }}),
                                                add(new EvaluationRequest("deserunt", "suscipit") {{
                                                    entityId = "illum";
                                                    evaluationContext = "vel";
                                                    feature = "error";
                                                }}),
                                                add(new EvaluationRequest("ipsa", "delectus") {{
                                                    entityId = "iure";
                                                    evaluationContext = "magnam";
                                                    feature = "debitis";
                                                }}),
                                            }});, "tempora") {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "minus";
                xAmzDate = "placeat";
                xAmzSecurityToken = "voluptatum";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "excepturi";
            }};            

            BatchEvaluateFeatureResponse res = sdk.batchEvaluateFeature(req);

            if (res.batchEvaluateFeatureResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->