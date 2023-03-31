<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchEvaluateFeaturePathParams;
import org.openapis.openapi.models.operations.BatchEvaluateFeatureHeaders;
import org.openapis.openapi.models.operations.BatchEvaluateFeatureRequestBody;
import org.openapis.openapi.models.operations.BatchEvaluateFeatureRequest;
import org.openapis.openapi.models.operations.BatchEvaluateFeatureResponse;
import org.openapis.openapi.models.shared.EvaluationRequest;

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

            BatchEvaluateFeatureRequest req = new BatchEvaluateFeatureRequest() {{
                pathParams = new BatchEvaluateFeaturePathParams() {{
                    project = "corrupti";
                }};
                headers = new BatchEvaluateFeatureHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                }};
                request = new BatchEvaluateFeatureRequestBody() {{
                    requests = new org.openapis.openapi.models.shared.EvaluationRequest[]{{
                        add(new EvaluationRequest() {{
                            entityId = "error";
                            evaluationContext = "deserunt";
                            feature = "suscipit";
                        }}),
                        add(new EvaluationRequest() {{
                            entityId = "iure";
                            evaluationContext = "magnam";
                            feature = "debitis";
                        }}),
                    }};
                }};
            }};            

            BatchEvaluateFeatureResponse res = sdk.batchEvaluateFeature(req);

            if (res.batchEvaluateFeatureResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->