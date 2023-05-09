<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateKmsKeyRequest;
import org.openapis.openapi.models.operations.AssociateKmsKeyResponse;
import org.openapis.openapi.models.operations.AssociateKmsKeyXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateKmsKeyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateKmsKeyRequest req = new AssociateKmsKeyRequest(                new AssociateKmsKeyRequest("provident", "distinctio");, AssociateKmsKeyXAmzTargetEnum.LOGS20140328_ASSOCIATE_KMS_KEY) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
            }};            

            AssociateKmsKeyResponse res = sdk.associateKmsKey(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->