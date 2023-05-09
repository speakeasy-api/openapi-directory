<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelRotateSecretRequest;
import org.openapis.openapi.models.operations.CancelRotateSecretResponse;
import org.openapis.openapi.models.operations.CancelRotateSecretXAmzTargetEnum;
import org.openapis.openapi.models.shared.CancelRotateSecretRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelRotateSecretRequest req = new CancelRotateSecretRequest(                new CancelRotateSecretRequest("provident");, CancelRotateSecretXAmzTargetEnum.SECRETSMANAGER_CANCEL_ROTATE_SECRET) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            CancelRotateSecretResponse res = sdk.cancelRotateSecret(req);

            if (res.cancelRotateSecretResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->