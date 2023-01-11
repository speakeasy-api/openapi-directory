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

            AllocateStaticIpRequest req = new AllocateStaticIpRequest() {{
                headers = new AllocateStaticIpHeaders() {{
                    xAmzAlgorithm = "excepturi";
                    xAmzContentSha256 = "quia";
                    xAmzCredential = "dolore";
                    xAmzDate = "sapiente";
                    xAmzSecurityToken = "voluptas";
                    xAmzSignature = "quis";
                    xAmzSignedHeaders = "dolor";
                    xAmzTarget = "Lightsail_20161128.AllocateStaticIp";
                }};
                request = new AllocateStaticIpRequest() {{
                    staticIpName = "doloremque";
                }};
            }};

            AllocateStaticIpResponse res = sdk.allocateStaticIp(req);

            if (res.allocateStaticIpResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->