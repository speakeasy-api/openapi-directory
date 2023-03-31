<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AllocateStaticIpXAmzTargetEnum;
import org.openapis.openapi.models.operations.AllocateStaticIpHeaders;
import org.openapis.openapi.models.operations.AllocateStaticIpRequest;
import org.openapis.openapi.models.operations.AllocateStaticIpResponse;
import org.openapis.openapi.models.shared.AllocateStaticIpRequest;

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

            AllocateStaticIpRequest req = new AllocateStaticIpRequest() {{
                headers = new AllocateStaticIpHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "Lightsail_20161128.AllocateStaticIp";
                }};
                request = new AllocateStaticIpRequest() {{
                    staticIpName = "illum";
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