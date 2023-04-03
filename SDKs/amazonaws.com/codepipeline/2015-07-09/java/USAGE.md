<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AcknowledgeJobXAmzTargetEnum;
import org.openapis.openapi.models.operations.AcknowledgeJobRequest;
import org.openapis.openapi.models.operations.AcknowledgeJobResponse;
import org.openapis.openapi.models.shared.AcknowledgeJobInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcknowledgeJobRequest req = new AcknowledgeJobRequest() {{
                acknowledgeJobInput = new AcknowledgeJobInput() {{
                    jobId = "corrupti";
                    nonce = "provident";
                }};
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
                xAmzTarget = "CodePipeline_20150709.AcknowledgeJob";
            }}            

            AcknowledgeJobResponse res = sdk.acknowledgeJob(req);

            if (res.acknowledgeJobOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->