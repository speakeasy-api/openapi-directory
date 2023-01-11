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
                    cacheSecurityGroupName = "voluptas";
                    ec2SecurityGroupName = "culpa";
                    ec2SecurityGroupOwnerId = "expedita";
                    version = "2015-02-02";
                }};
                headers = new GetAuthorizeCacheSecurityGroupIngressHeaders() {{
                    xAmzAlgorithm = "dolor";
                    xAmzContentSha256 = "expedita";
                    xAmzCredential = "voluptas";
                    xAmzDate = "fugit";
                    xAmzSecurityToken = "et";
                    xAmzSignature = "nihil";
                    xAmzSignedHeaders = "rerum";
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