<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteResourcePermissionRequest;
import org.openapis.openapi.models.operations.DeleteResourcePermissionRequestBody;
import org.openapis.openapi.models.operations.DeleteResourcePermissionRequestBodyActionTypeEnum;
import org.openapis.openapi.models.operations.DeleteResourcePermissionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteResourcePermissionRequest req = new DeleteResourcePermissionRequest(                new DeleteResourcePermissionRequestBody("provident") {{
                                actionType = DeleteResourcePermissionRequestBodyActionTypeEnum.RESTORE;
                                sourceResourceArn = "distinctio";
                            }};) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
            }};            

            DeleteResourcePermissionResponse res = sdk.deleteResourcePermission(req);

            if (res.deleteResourcePermissionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->