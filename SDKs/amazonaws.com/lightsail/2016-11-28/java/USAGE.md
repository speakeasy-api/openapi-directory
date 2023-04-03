<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AllocateStaticIpXAmzTargetEnum;
import org.openapis.openapi.models.operations.AllocateStaticIpRequest;
import org.openapis.openapi.models.operations.AllocateStaticIpResponse;
import org.openapis.openapi.models.shared.AllocateStaticIpRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AllocateStaticIpRequest req = new AllocateStaticIpRequest() {{
                allocateStaticIpRequest = new AllocateStaticIpRequest() {{
                    staticIpName = "corrupti";
                }};
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quibusdam";
                xAmzDate = "unde";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "illum";
                xAmzTarget = "Lightsail_20161128.AllocateStaticIp";
            }}            

            AllocateStaticIpResponse res = sdk.allocateStaticIp(req);

            if (res.allocateStaticIpResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->