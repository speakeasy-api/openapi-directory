<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CancelJobHeaders;
import org.openapis.openapi.models.operations.CancelJobRequestBody;
import org.openapis.openapi.models.operations.CancelJobRequest;
import org.openapis.openapi.models.operations.CancelJobResponse;

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

            CancelJobRequest req = new CancelJobRequest() {{
                headers = new CancelJobHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CancelJobRequestBody() {{
                    jobId = "illum";
                    reason = "vel";
                }};
            }};            

            CancelJobResponse res = sdk.cancelJob(req);

            if (res.cancelJobResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->