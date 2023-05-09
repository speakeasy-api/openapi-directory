<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AllocateStaticIpRequest;
import org.openapis.openapi.models.operations.AllocateStaticIpResponse;
import org.openapis.openapi.models.operations.AllocateStaticIpXAmzTargetEnum;
import org.openapis.openapi.models.shared.AllocateStaticIpRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AllocateStaticIpRequest req = new AllocateStaticIpRequest(                new AllocateStaticIpRequest("provident");, AllocateStaticIpXAmzTargetEnum.LIGHTSAIL20161128_ALLOCATE_STATIC_IP) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            AllocateStaticIpResponse res = sdk.allocateStaticIp(req);

            if (res.allocateStaticIpResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->