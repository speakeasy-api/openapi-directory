<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateDefaultViewHeaders;
import org.openapis.openapi.models.operations.AssociateDefaultViewRequestBody;
import org.openapis.openapi.models.operations.AssociateDefaultViewRequest;
import org.openapis.openapi.models.operations.AssociateDefaultViewResponse;

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

            AssociateDefaultViewRequest req = new AssociateDefaultViewRequest() {{
                headers = new AssociateDefaultViewHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new AssociateDefaultViewRequestBody() {{
                    viewArn = "illum";
                }};
            }};            

            AssociateDefaultViewResponse res = sdk.associateDefaultView(req);

            if (res.associateDefaultViewOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->