<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateDestinationHeaders;
import org.openapis.openapi.models.operations.CreateDestinationRequestBodyStateEnum;
import org.openapis.openapi.models.operations.CreateDestinationRequestBody;
import org.openapis.openapi.models.operations.CreateDestinationRequest;
import org.openapis.openapi.models.operations.CreateDestinationResponse;

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

            CreateDestinationRequest req = new CreateDestinationRequest() {{
                headers = new CreateDestinationHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateDestinationRequestBody() {{
                    additionalFixedProperties = "illum";
                    clientToken = "vel";
                    name = "error";
                    site = "deserunt";
                    state = "DISABLED";
                }};
            }};            

            CreateDestinationResponse res = sdk.createDestination(req);

            if (res.createDestinationResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->