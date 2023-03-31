<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CancelKeyDeletionXAmzTargetEnum;
import org.openapis.openapi.models.operations.CancelKeyDeletionHeaders;
import org.openapis.openapi.models.operations.CancelKeyDeletionRequest;
import org.openapis.openapi.models.operations.CancelKeyDeletionResponse;
import org.openapis.openapi.models.shared.CancelKeyDeletionRequest;

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

            CancelKeyDeletionRequest req = new CancelKeyDeletionRequest() {{
                headers = new CancelKeyDeletionHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "TrentService.CancelKeyDeletion";
                }};
                request = new CancelKeyDeletionRequest() {{
                    keyId = "illum";
                }};
            }};            

            CancelKeyDeletionResponse res = sdk.cancelKeyDeletion(req);

            if (res.cancelKeyDeletionResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->