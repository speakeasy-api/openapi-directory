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

            GetAuthorizeCacheSecurityGroupIngressRequest req = new GetAuthorizeCacheSecurityGroupIngressRequest() {{
                queryParams = new GetAuthorizeCacheSecurityGroupIngressQueryParams() {{
                    action = "AuthorizeCacheSecurityGroupIngress";
                    cacheSecurityGroupName = "labore";
                    ec2SecurityGroupName = "id";
                    ec2SecurityGroupOwnerId = "libero";
                    version = "2015-02-02";
                }};
                headers = new GetAuthorizeCacheSecurityGroupIngressHeaders() {{
                    xAmzAlgorithm = "amet";
                    xAmzContentSha256 = "sint";
                    xAmzCredential = "nostrum";
                    xAmzDate = "voluptatem";
                    xAmzSecurityToken = "tempore";
                    xAmzSignature = "est";
                    xAmzSignedHeaders = "molestias";
                }};
            }};

            GetAuthorizeCacheSecurityGroupIngressResponse res = sdk.getAuthorizeCacheSecurityGroupIngress(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->