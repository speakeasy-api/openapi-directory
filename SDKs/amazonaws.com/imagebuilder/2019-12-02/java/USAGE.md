<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CancelImageCreationHeaders;
import org.openapis.openapi.models.operations.CancelImageCreationRequestBody;
import org.openapis.openapi.models.operations.CancelImageCreationRequest;
import org.openapis.openapi.models.operations.CancelImageCreationResponse;

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

            CancelImageCreationRequest req = new CancelImageCreationRequest() {{
                headers = new CancelImageCreationHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CancelImageCreationRequestBody() {{
                    clientToken = "illum";
                    imageBuildVersionArn = "vel";
                }};
            }};            

            CancelImageCreationResponse res = sdk.cancelImageCreation(req);

            if (res.cancelImageCreationResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->