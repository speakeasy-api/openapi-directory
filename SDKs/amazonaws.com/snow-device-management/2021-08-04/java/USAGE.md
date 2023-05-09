<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelTaskRequest;
import org.openapis.openapi.models.operations.CancelTaskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelTaskRequest req = new CancelTaskRequest("provident") {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            CancelTaskResponse res = sdk.cancelTask(req);

            if (res.cancelTaskOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->