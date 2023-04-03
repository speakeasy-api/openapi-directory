<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateAlertManagerDefinitionRequestBody;
import org.openapis.openapi.models.operations.CreateAlertManagerDefinitionRequest;
import org.openapis.openapi.models.operations.CreateAlertManagerDefinitionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAlertManagerDefinitionRequest req = new CreateAlertManagerDefinitionRequest() {{
                requestBody = new CreateAlertManagerDefinitionRequestBody() {{
                    clientToken = "corrupti";
                    data = "provident";
                }};
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
                workspaceId = "error";
            }}            

            CreateAlertManagerDefinitionResponse res = sdk.createAlertManagerDefinition(req);

            if (res.createAlertManagerDefinitionResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->