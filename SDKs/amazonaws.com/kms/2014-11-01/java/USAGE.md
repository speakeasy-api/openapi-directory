<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CancelKeyDeletionXAmzTargetEnum;
import org.openapis.openapi.models.operations.CancelKeyDeletionRequest;
import org.openapis.openapi.models.operations.CancelKeyDeletionResponse;
import org.openapis.openapi.models.shared.CancelKeyDeletionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelKeyDeletionRequest req = new CancelKeyDeletionRequest() {{
                cancelKeyDeletionRequest = new CancelKeyDeletionRequest() {{
                    keyId = "corrupti";
                }};
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quibusdam";
                xAmzDate = "unde";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "illum";
                xAmzTarget = "TrentService.CancelKeyDeletion";
            }}            

            CancelKeyDeletionResponse res = sdk.cancelKeyDeletion(req);

            if (res.cancelKeyDeletionResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->