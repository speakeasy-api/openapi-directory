<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CancelJobRunPathParams;
import org.openapis.openapi.models.operations.CancelJobRunHeaders;
import org.openapis.openapi.models.operations.CancelJobRunRequest;
import org.openapis.openapi.models.operations.CancelJobRunResponse;

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

            CancelJobRunRequest req = new CancelJobRunRequest() {{
                pathParams = new CancelJobRunPathParams() {{
                    jobRunId = "corrupti";
                    virtualClusterId = "provident";
                }};
                headers = new CancelJobRunHeaders() {{
                    xAmzAlgorithm = "distinctio";
                    xAmzContentSha256 = "quibusdam";
                    xAmzCredential = "unde";
                    xAmzDate = "nulla";
                    xAmzSecurityToken = "corrupti";
                    xAmzSignature = "illum";
                    xAmzSignedHeaders = "vel";
                }};
            }};            

            CancelJobRunResponse res = sdk.cancelJobRun(req);

            if (res.cancelJobRunResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->