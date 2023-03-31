<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateAlertManagerDefinitionPathParams;
import org.openapis.openapi.models.operations.CreateAlertManagerDefinitionHeaders;
import org.openapis.openapi.models.operations.CreateAlertManagerDefinitionRequestBody;
import org.openapis.openapi.models.operations.CreateAlertManagerDefinitionRequest;
import org.openapis.openapi.models.operations.CreateAlertManagerDefinitionResponse;

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

            CreateAlertManagerDefinitionRequest req = new CreateAlertManagerDefinitionRequest() {{
                pathParams = new CreateAlertManagerDefinitionPathParams() {{
                    workspaceId = "corrupti";
                }};
                headers = new CreateAlertManagerDefinitionHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                }};
                request = new CreateAlertManagerDefinitionRequestBody() {{
                    clientToken = "vel";
                    data = "error";
                }};
            }};            

            CreateAlertManagerDefinitionResponse res = sdk.createAlertManagerDefinition(req);

            if (res.createAlertManagerDefinitionResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->