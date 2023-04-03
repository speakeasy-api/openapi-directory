<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GETAuthorizeCacheSecurityGroupIngressActionEnum;
import org.openapis.openapi.models.operations.GETAuthorizeCacheSecurityGroupIngressVersionEnum;
import org.openapis.openapi.models.operations.GETAuthorizeCacheSecurityGroupIngressRequest;
import org.openapis.openapi.models.operations.GETAuthorizeCacheSecurityGroupIngressResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAuthorizeCacheSecurityGroupIngressRequest req = new GETAuthorizeCacheSecurityGroupIngressRequest() {{
                action = "AuthorizeCacheSecurityGroupIngress";
                cacheSecurityGroupName = "corrupti";
                ec2SecurityGroupName = "provident";
                ec2SecurityGroupOwnerId = "distinctio";
                version = "2015-02-02";
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
            }}            

            GETAuthorizeCacheSecurityGroupIngressResponse res = sdk.getAuthorizeCacheSecurityGroupIngress(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->