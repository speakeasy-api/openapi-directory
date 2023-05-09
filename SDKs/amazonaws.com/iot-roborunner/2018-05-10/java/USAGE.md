<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDestinationRequest;
import org.openapis.openapi.models.operations.CreateDestinationRequestBody;
import org.openapis.openapi.models.operations.CreateDestinationRequestBodyStateEnum;
import org.openapis.openapi.models.operations.CreateDestinationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDestinationRequest req = new CreateDestinationRequest(                new CreateDestinationRequestBody("provident", "distinctio") {{
                                additionalFixedProperties = "quibusdam";
                                clientToken = "unde";
                                state = CreateDestinationRequestBodyStateEnum.DECOMMISSIONED;
                            }};) {{
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "illum";
                xAmzCredential = "vel";
                xAmzDate = "error";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "iure";
            }};            

            CreateDestinationResponse res = sdk.createDestination(req);

            if (res.createDestinationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->