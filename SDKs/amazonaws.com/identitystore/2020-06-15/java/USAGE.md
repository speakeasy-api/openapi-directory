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

            DescribeGroupRequest req = new DescribeGroupRequest() {{
                headers = new DescribeGroupHeaders() {{
                    xAmzAlgorithm = "mollitia";
                    xAmzContentSha256 = "neque";
                    xAmzCredential = "autem";
                    xAmzDate = "ab";
                    xAmzSecurityToken = "dolore";
                    xAmzSignature = "fugit";
                    xAmzSignedHeaders = "saepe";
                    xAmzTarget = "AWSIdentityStore.DescribeGroup";
                }};
                request = new DescribeGroupRequest() {{
                    groupId = "dignissimos";
                    identityStoreId = "rerum";
                }};
            }};

            DescribeGroupResponse res = sdk.describeGroup(req);

            if (res.describeGroupResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->