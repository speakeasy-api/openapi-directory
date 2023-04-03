<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DeleteResourcePermissionRequestBodyActionTypeEnum;
import org.openapis.openapi.models.operations.DeleteResourcePermissionRequestBody;
import org.openapis.openapi.models.operations.DeleteResourcePermissionRequest;
import org.openapis.openapi.models.operations.DeleteResourcePermissionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteResourcePermissionRequest req = new DeleteResourcePermissionRequest() {{
                requestBody = new DeleteResourcePermissionRequestBody() {{
                    actionType = "RESTORE";
                    resourceArn = "corrupti";
                    sourceResourceArn = "provident";
                }};
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }}            

            DeleteResourcePermissionResponse res = sdk.deleteResourcePermission(req);

            if (res.deleteResourcePermissionOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->