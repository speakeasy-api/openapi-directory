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

            AssociateDelegateToResourceRequest req = new AssociateDelegateToResourceRequest() {{
                headers = new AssociateDelegateToResourceHeaders() {{
                    xAmzAlgorithm = "voluptates";
                    xAmzContentSha256 = "non";
                    xAmzCredential = "nam";
                    xAmzDate = "enim";
                    xAmzSecurityToken = "enim";
                    xAmzSignature = "assumenda";
                    xAmzSignedHeaders = "quo";
                    xAmzTarget = "WorkMailService.AssociateDelegateToResource";
                }};
                request = new AssociateDelegateToResourceRequest() {{
                    entityId = "quis";
                    organizationId = "esse";
                    resourceId = "voluptate";
                }};
            }};

            AssociateDelegateToResourceResponse res = sdk.associateDelegateToResource(req);

            if (res.associateDelegateToResourceResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->