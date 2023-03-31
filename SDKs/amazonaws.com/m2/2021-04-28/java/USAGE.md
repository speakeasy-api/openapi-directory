<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CancelBatchJobExecutionPathParams;
import org.openapis.openapi.models.operations.CancelBatchJobExecutionHeaders;
import org.openapis.openapi.models.operations.CancelBatchJobExecutionRequest;
import org.openapis.openapi.models.operations.CancelBatchJobExecutionResponse;

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

            CancelBatchJobExecutionRequest req = new CancelBatchJobExecutionRequest() {{
                pathParams = new CancelBatchJobExecutionPathParams() {{
                    applicationId = "corrupti";
                    executionId = "provident";
                }};
                headers = new CancelBatchJobExecutionHeaders() {{
                    xAmzAlgorithm = "distinctio";
                    xAmzContentSha256 = "quibusdam";
                    xAmzCredential = "unde";
                    xAmzDate = "nulla";
                    xAmzSecurityToken = "corrupti";
                    xAmzSignature = "illum";
                    xAmzSignedHeaders = "vel";
                }};
            }};            

            CancelBatchJobExecutionResponse res = sdk.cancelBatchJobExecution(req);

            if (res.cancelBatchJobExecutionResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->