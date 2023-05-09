<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAlertManagerDefinitionRequest;
import org.openapis.openapi.models.operations.CreateAlertManagerDefinitionRequestBody;
import org.openapis.openapi.models.operations.CreateAlertManagerDefinitionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAlertManagerDefinitionRequest req = new CreateAlertManagerDefinitionRequest(                new CreateAlertManagerDefinitionRequestBody("provident") {{
                                clientToken = "distinctio";
                            }};, "quibusdam") {{
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "corrupti";
                xAmzDate = "illum";
                xAmzSecurityToken = "vel";
                xAmzSignature = "error";
                xAmzSignedHeaders = "deserunt";
            }};            

            CreateAlertManagerDefinitionResponse res = sdk.createAlertManagerDefinition(req);

            if (res.createAlertManagerDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->