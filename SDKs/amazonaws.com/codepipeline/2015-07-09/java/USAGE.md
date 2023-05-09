<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcknowledgeJobRequest;
import org.openapis.openapi.models.operations.AcknowledgeJobResponse;
import org.openapis.openapi.models.operations.AcknowledgeJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.AcknowledgeJobInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcknowledgeJobRequest req = new AcknowledgeJobRequest(                new AcknowledgeJobInput("provident", "distinctio");, AcknowledgeJobXAmzTargetEnum.CODE_PIPELINE20150709_ACKNOWLEDGE_JOB) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
            }};            

            AcknowledgeJobResponse res = sdk.acknowledgeJob(req);

            if (res.acknowledgeJobOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->