<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateDefaultViewRequestBody;
import org.openapis.openapi.models.operations.AssociateDefaultViewRequest;
import org.openapis.openapi.models.operations.AssociateDefaultViewResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateDefaultViewRequest req = new AssociateDefaultViewRequest() {{
                requestBody = new AssociateDefaultViewRequestBody() {{
                    viewArn = "corrupti";
                }};
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quibusdam";
                xAmzDate = "unde";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "illum";
            }}            

            AssociateDefaultViewResponse res = sdk.associateDefaultView(req);

            if (res.associateDefaultViewOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->