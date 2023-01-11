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

            GetApplySecurityGroupsToLoadBalancerRequest req = new GetApplySecurityGroupsToLoadBalancerRequest() {{
                queryParams = new GetApplySecurityGroupsToLoadBalancerQueryParams() {{
                    action = "ApplySecurityGroupsToLoadBalancer";
                    loadBalancerName = "molestias";
                    securityGroups = new String[]() {{
                        add("fugiat"),
                        add("cumque"),
                        add("ad"),
                    }};
                    version = "2012-06-01";
                }};
                headers = new GetApplySecurityGroupsToLoadBalancerHeaders() {{
                    xAmzAlgorithm = "officiis";
                    xAmzContentSha256 = "sit";
                    xAmzCredential = "atque";
                    xAmzDate = "ad";
                    xAmzSecurityToken = "ab";
                    xAmzSignature = "dolores";
                    xAmzSignedHeaders = "delectus";
                }};
            }};

            GetApplySecurityGroupsToLoadBalancerResponse res = sdk.getApplySecurityGroupsToLoadBalancer(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->