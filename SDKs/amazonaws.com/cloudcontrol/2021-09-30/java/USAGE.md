<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CancelResourceRequestXAmzTargetEnum;
import org.openapis.openapi.models.operations.CancelResourceRequestHeaders;
import org.openapis.openapi.models.operations.CancelResourceRequestRequest;
import org.openapis.openapi.models.operations.CancelResourceRequestResponse;
import org.openapis.openapi.models.shared.CancelResourceRequestInput;

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

            CancelResourceRequestRequest req = new CancelResourceRequestRequest() {{
                headers = new CancelResourceRequestHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "CloudApiService.CancelResourceRequest";
                }};
                request = new CancelResourceRequestInput() {{
                    requestToken = "illum";
                }};
            }};            

            CancelResourceRequestResponse res = sdk.cancelResourceRequest(req);

            if (res.cancelResourceRequestOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->