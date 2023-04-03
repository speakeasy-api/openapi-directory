<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateKmsKeyXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateKmsKeyRequest;
import org.openapis.openapi.models.operations.AssociateKmsKeyResponse;
import org.openapis.openapi.models.shared.AssociateKmsKeyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateKmsKeyRequest req = new AssociateKmsKeyRequest() {{
                associateKmsKeyRequest = new AssociateKmsKeyRequest() {{
                    kmsKeyId = "corrupti";
                    logGroupName = "provident";
                }};
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
                xAmzTarget = "Logs_20140328.AssociateKmsKey";
            }}            

            AssociateKmsKeyResponse res = sdk.associateKmsKey(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->