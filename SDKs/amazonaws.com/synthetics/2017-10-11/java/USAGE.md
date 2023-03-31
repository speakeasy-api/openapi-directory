<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateResourcePathParams;
import org.openapis.openapi.models.operations.AssociateResourceHeaders;
import org.openapis.openapi.models.operations.AssociateResourceRequestBody;
import org.openapis.openapi.models.operations.AssociateResourceRequest;
import org.openapis.openapi.models.operations.AssociateResourceResponse;

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

            AssociateResourceRequest req = new AssociateResourceRequest() {{
                pathParams = new AssociateResourcePathParams() {{
                    groupIdentifier = "corrupti";
                }};
                headers = new AssociateResourceHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                }};
                request = new AssociateResourceRequestBody() {{
                    resourceArn = "vel";
                }};
            }};            

            AssociateResourceResponse res = sdk.associateResource(req);

            if (res.associateResourceResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->