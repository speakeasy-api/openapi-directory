<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DeleteResourcePermissionHeaders;
import org.openapis.openapi.models.operations.DeleteResourcePermissionRequestBodyActionTypeEnum;
import org.openapis.openapi.models.operations.DeleteResourcePermissionRequestBody;
import org.openapis.openapi.models.operations.DeleteResourcePermissionRequest;
import org.openapis.openapi.models.operations.DeleteResourcePermissionResponse;

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

            DeleteResourcePermissionRequest req = new DeleteResourcePermissionRequest() {{
                headers = new DeleteResourcePermissionHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new DeleteResourcePermissionRequestBody() {{
                    actionType = "RESTORE";
                    resourceArn = "illum";
                    sourceResourceArn = "vel";
                }};
            }};            

            DeleteResourcePermissionResponse res = sdk.deleteResourcePermission(req);

            if (res.deleteResourcePermissionOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->