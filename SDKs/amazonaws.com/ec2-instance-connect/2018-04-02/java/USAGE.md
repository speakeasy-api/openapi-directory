<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendSSHPublicKeyRequest;
import org.openapis.openapi.models.operations.SendSSHPublicKeyResponse;
import org.openapis.openapi.models.operations.SendSSHPublicKeyXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SendSSHPublicKeyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendSSHPublicKeyRequest req = new SendSSHPublicKeyRequest(                new SendSSHPublicKeyRequest("provident", "distinctio", "quibusdam") {{
                                availabilityZone = "unde";
                            }};, SendSSHPublicKeyXAmzTargetEnum.AWSEC2_INSTANCE_CONNECT_SERVICE_SEND_SSH_PUBLIC_KEY) {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "illum";
                xAmzDate = "vel";
                xAmzSecurityToken = "error";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "suscipit";
            }};            

            SendSSHPublicKeyResponse res = sdk.sendSSHPublicKey(req);

            if (res.sendSSHPublicKeyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->