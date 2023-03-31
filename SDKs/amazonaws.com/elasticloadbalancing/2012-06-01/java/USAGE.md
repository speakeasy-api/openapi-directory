<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GETApplySecurityGroupsToLoadBalancerActionEnum;
import org.openapis.openapi.models.operations.GETApplySecurityGroupsToLoadBalancerVersionEnum;
import org.openapis.openapi.models.operations.GETApplySecurityGroupsToLoadBalancerQueryParams;
import org.openapis.openapi.models.operations.GETApplySecurityGroupsToLoadBalancerHeaders;
import org.openapis.openapi.models.operations.GETApplySecurityGroupsToLoadBalancerRequest;
import org.openapis.openapi.models.operations.GETApplySecurityGroupsToLoadBalancerResponse;

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

            GETApplySecurityGroupsToLoadBalancerRequest req = new GETApplySecurityGroupsToLoadBalancerRequest() {{
                queryParams = new GETApplySecurityGroupsToLoadBalancerQueryParams() {{
                    action = "ApplySecurityGroupsToLoadBalancer";
                    loadBalancerName = "corrupti";
                    securityGroups = new String[]{{
                        add("distinctio"),
                        add("quibusdam"),
                        add("unde"),
                    }};
                    version = "2012-06-01";
                }};
                headers = new GETApplySecurityGroupsToLoadBalancerHeaders() {{
                    xAmzAlgorithm = "nulla";
                    xAmzContentSha256 = "corrupti";
                    xAmzCredential = "illum";
                    xAmzDate = "vel";
                    xAmzSecurityToken = "error";
                    xAmzSignature = "deserunt";
                    xAmzSignedHeaders = "suscipit";
                }};
            }};            

            GETApplySecurityGroupsToLoadBalancerResponse res = sdk.getApplySecurityGroupsToLoadBalancer(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->