<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelKeyDeletionRequest;
import org.openapis.openapi.models.operations.CancelKeyDeletionResponse;
import org.openapis.openapi.models.operations.CancelKeyDeletionXAmzTargetEnum;
import org.openapis.openapi.models.shared.CancelKeyDeletionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelKeyDeletionRequest req = new CancelKeyDeletionRequest(                new CancelKeyDeletionRequest("provident");, CancelKeyDeletionXAmzTargetEnum.TRENT_SERVICE_CANCEL_KEY_DELETION) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            CancelKeyDeletionResponse res = sdk.cancelKeyDeletion(req);

            if (res.cancelKeyDeletionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->