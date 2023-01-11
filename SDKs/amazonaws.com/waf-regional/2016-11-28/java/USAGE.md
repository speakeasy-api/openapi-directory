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

            AssociateWebAclRequest req = new AssociateWebAclRequest() {{
                headers = new AssociateWebAclHeaders() {{
                    xAmzAlgorithm = "consequatur";
                    xAmzContentSha256 = "modi";
                    xAmzCredential = "consequatur";
                    xAmzDate = "quia";
                    xAmzSecurityToken = "eaque";
                    xAmzSignature = "et";
                    xAmzSignedHeaders = "assumenda";
                    xAmzTarget = "AWSWAF_Regional_20161128.AssociateWebACL";
                }};
                request = new AssociateWebAclRequest() {{
                    resourceArn = "perspiciatis";
                    webACLId = "quia";
                }};
            }};

            AssociateWebAclResponse res = sdk.associateWebAcl(req);

            if (res.associateWebACLResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->