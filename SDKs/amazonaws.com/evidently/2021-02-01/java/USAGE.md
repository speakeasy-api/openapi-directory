<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchEvaluateFeatureRequestBody;
import org.openapis.openapi.models.operations.BatchEvaluateFeatureRequest;
import org.openapis.openapi.models.operations.BatchEvaluateFeatureResponse;
import org.openapis.openapi.models.shared.EvaluationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchEvaluateFeatureRequest req = new BatchEvaluateFeatureRequest() {{
                requestBody = new BatchEvaluateFeatureRequestBody() {{
                    requests = new org.openapis.openapi.models.shared.EvaluationRequest[]{{
                        add(new EvaluationRequest() {{
                            entityId = "provident";
                            evaluationContext = "distinctio";
                            feature = "quibusdam";
                        }}),
                        add(new EvaluationRequest() {{
                            entityId = "unde";
                            evaluationContext = "nulla";
                            feature = "corrupti";
                        }}),
                        add(new EvaluationRequest() {{
                            entityId = "illum";
                            evaluationContext = "vel";
                            feature = "error";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "iure";
                xAmzDate = "magnam";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "delectus";
                project = "tempora";
            }}            

            BatchEvaluateFeatureResponse res = sdk.batchEvaluateFeature(req);

            if (res.batchEvaluateFeatureResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->