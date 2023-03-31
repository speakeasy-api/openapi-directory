<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AcknowledgeJobXAmzTargetEnum;
import org.openapis.openapi.models.operations.AcknowledgeJobHeaders;
import org.openapis.openapi.models.operations.AcknowledgeJobRequest;
import org.openapis.openapi.models.operations.AcknowledgeJobResponse;
import org.openapis.openapi.models.shared.AcknowledgeJobInput;

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

            AcknowledgeJobRequest req = new AcknowledgeJobRequest() {{
                headers = new AcknowledgeJobHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "CodePipeline_20150709.AcknowledgeJob";
                }};
                request = new AcknowledgeJobInput() {{
                    jobId = "illum";
                    nonce = "vel";
                }};
            }};            

            AcknowledgeJobResponse res = sdk.acknowledgeJob(req);

            if (res.acknowledgeJobOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->