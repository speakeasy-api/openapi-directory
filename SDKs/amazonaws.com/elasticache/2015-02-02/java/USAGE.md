<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAuthorizeCacheSecurityGroupIngressActionEnum;
import org.openapis.openapi.models.operations.GETAuthorizeCacheSecurityGroupIngressRequest;
import org.openapis.openapi.models.operations.GETAuthorizeCacheSecurityGroupIngressResponse;
import org.openapis.openapi.models.operations.GETAuthorizeCacheSecurityGroupIngressVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAuthorizeCacheSecurityGroupIngressRequest req = new GETAuthorizeCacheSecurityGroupIngressRequest(GETAuthorizeCacheSecurityGroupIngressActionEnum.AUTHORIZE_CACHE_SECURITY_GROUP_INGRESS, "provident", "distinctio", "quibusdam", GETAuthorizeCacheSecurityGroupIngressVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "corrupti";
                xAmzDate = "illum";
                xAmzSecurityToken = "vel";
                xAmzSignature = "error";
                xAmzSignedHeaders = "deserunt";
            }};            

            GETAuthorizeCacheSecurityGroupIngressResponse res = sdk.getAuthorizeCacheSecurityGroupIngress(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->