<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CancelTaskExecutionXAmzTargetEnum;
import org.openapis.openapi.models.operations.CancelTaskExecutionHeaders;
import org.openapis.openapi.models.operations.CancelTaskExecutionRequest;
import org.openapis.openapi.models.operations.CancelTaskExecutionResponse;
import org.openapis.openapi.models.shared.CancelTaskExecutionRequest;

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

            CancelTaskExecutionRequest req = new CancelTaskExecutionRequest() {{
                headers = new CancelTaskExecutionHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "FmrsService.CancelTaskExecution";
                }};
                request = new CancelTaskExecutionRequest() {{
                    taskExecutionArn = "illum";
                }};
            }};            

            CancelTaskExecutionResponse res = sdk.cancelTaskExecution(req);

            if (res.cancelTaskExecutionResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->