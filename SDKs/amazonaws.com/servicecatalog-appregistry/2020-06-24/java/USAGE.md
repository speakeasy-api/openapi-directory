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

            AssociateAttributeGroupRequest req = new AssociateAttributeGroupRequest() {{
                pathParams = new AssociateAttributeGroupPathParams() {{
                    application = "quasi";
                    attributeGroup = "eos";
                }};
                headers = new AssociateAttributeGroupHeaders() {{
                    xAmzAlgorithm = "nesciunt";
                    xAmzContentSha256 = "neque";
                    xAmzCredential = "quos";
                    xAmzDate = "et";
                    xAmzSecurityToken = "magni";
                    xAmzSignature = "nemo";
                    xAmzSignedHeaders = "ad";
                }};
            }};

            AssociateAttributeGroupResponse res = sdk.associateAttributeGroup(req);

            if (res.associateAttributeGroupResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->