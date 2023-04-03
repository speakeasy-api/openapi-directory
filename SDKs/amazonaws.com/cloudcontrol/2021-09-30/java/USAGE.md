<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CancelResourceRequestXAmzTargetEnum;
import org.openapis.openapi.models.operations.CancelResourceRequestRequest;
import org.openapis.openapi.models.operations.CancelResourceRequestResponse;
import org.openapis.openapi.models.shared.CancelResourceRequestInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelResourceRequestRequest req = new CancelResourceRequestRequest() {{
                cancelResourceRequestInput = new CancelResourceRequestInput() {{
                    requestToken = "corrupti";
                }};
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quibusdam";
                xAmzDate = "unde";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "illum";
                xAmzTarget = "CloudApiService.CancelResourceRequest";
            }}            

            CancelResourceRequestResponse res = sdk.cancelResourceRequest(req);

            if (res.cancelResourceRequestOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->