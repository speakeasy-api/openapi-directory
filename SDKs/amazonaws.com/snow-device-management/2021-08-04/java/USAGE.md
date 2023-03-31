<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CancelTaskPathParams;
import org.openapis.openapi.models.operations.CancelTaskHeaders;
import org.openapis.openapi.models.operations.CancelTaskRequest;
import org.openapis.openapi.models.operations.CancelTaskResponse;

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

            CancelTaskRequest req = new CancelTaskRequest() {{
                pathParams = new CancelTaskPathParams() {{
                    taskId = "corrupti";
                }};
                headers = new CancelTaskHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                }};
            }};            

            CancelTaskResponse res = sdk.cancelTask(req);

            if (res.cancelTaskOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->