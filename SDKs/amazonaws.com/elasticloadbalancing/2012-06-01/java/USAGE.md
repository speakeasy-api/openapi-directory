<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETApplySecurityGroupsToLoadBalancerActionEnum;
import org.openapis.openapi.models.operations.GETApplySecurityGroupsToLoadBalancerRequest;
import org.openapis.openapi.models.operations.GETApplySecurityGroupsToLoadBalancerResponse;
import org.openapis.openapi.models.operations.GETApplySecurityGroupsToLoadBalancerVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETApplySecurityGroupsToLoadBalancerRequest req = new GETApplySecurityGroupsToLoadBalancerRequest(GETApplySecurityGroupsToLoadBalancerActionEnum.APPLY_SECURITY_GROUPS_TO_LOAD_BALANCER, "provident",                 new String[]{{
                                add("quibusdam"),
                                add("unde"),
                                add("nulla"),
                            }}, GETApplySecurityGroupsToLoadBalancerVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "illum";
                xAmzCredential = "vel";
                xAmzDate = "error";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "iure";
            }};            

            GETApplySecurityGroupsToLoadBalancerResponse res = sdk.getApplySecurityGroupsToLoadBalancer(req);

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