<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            SendSshPublicKeyRequest req = new SendSshPublicKeyRequest() {{
                headers = new SendSshPublicKeyHeaders() {{
                    xAmzAlgorithm = "doloribus";
                    xAmzContentSha256 = "ratione";
                    xAmzCredential = "voluptas";
                    xAmzDate = "omnis";
                    xAmzSecurityToken = "rerum";
                    xAmzSignature = "possimus";
                    xAmzSignedHeaders = "quo";
                    xAmzTarget = "AWSEC2InstanceConnectService.SendSSHPublicKey";
                }};
                request = new SendSshPublicKeyRequest() {{
                    availabilityZone = "eos";
                    instanceId = "enim";
                    instanceOSUser = "temporibus";
                    sshPublicKey = "exercitationem";
                }};
            }};

            SendSshPublicKeyResponse res = sdk.sendSshPublicKey(req);

            if (res.sendSSHPublicKeyResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->