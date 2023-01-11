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
                    application = "sit";
                    attributeGroup = "voluptas";
                }};
                headers = new AssociateAttributeGroupHeaders() {{
                    xAmzAlgorithm = "culpa";
                    xAmzContentSha256 = "expedita";
                    xAmzCredential = "consequuntur";
                    xAmzDate = "dolor";
                    xAmzSecurityToken = "expedita";
                    xAmzSignature = "voluptas";
                    xAmzSignedHeaders = "fugit";
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