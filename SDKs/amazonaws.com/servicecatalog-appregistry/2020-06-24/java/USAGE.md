<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateAttributeGroupPathParams;
import org.openapis.openapi.models.operations.AssociateAttributeGroupHeaders;
import org.openapis.openapi.models.operations.AssociateAttributeGroupRequest;
import org.openapis.openapi.models.operations.AssociateAttributeGroupResponse;

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

            AssociateAttributeGroupRequest req = new AssociateAttributeGroupRequest() {{
                pathParams = new AssociateAttributeGroupPathParams() {{
                    application = "corrupti";
                    attributeGroup = "provident";
                }};
                headers = new AssociateAttributeGroupHeaders() {{
                    xAmzAlgorithm = "distinctio";
                    xAmzContentSha256 = "quibusdam";
                    xAmzCredential = "unde";
                    xAmzDate = "nulla";
                    xAmzSecurityToken = "corrupti";
                    xAmzSignature = "illum";
                    xAmzSignedHeaders = "vel";
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