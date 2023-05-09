<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelResourceRequestRequest;
import org.openapis.openapi.models.operations.CancelResourceRequestResponse;
import org.openapis.openapi.models.operations.CancelResourceRequestXAmzTargetEnum;
import org.openapis.openapi.models.shared.CancelResourceRequestInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelResourceRequestRequest req = new CancelResourceRequestRequest(                new CancelResourceRequestInput("provident");, CancelResourceRequestXAmzTargetEnum.CLOUD_API_SERVICE_CANCEL_RESOURCE_REQUEST) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            CancelResourceRequestResponse res = sdk.cancelResourceRequest(req);

            if (res.cancelResourceRequestOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->