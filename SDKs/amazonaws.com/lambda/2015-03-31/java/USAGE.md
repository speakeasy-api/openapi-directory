<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddLayerVersionPermissionRequest;
import org.openapis.openapi.models.operations.AddLayerVersionPermissionRequestBody;
import org.openapis.openapi.models.operations.AddLayerVersionPermissionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddLayerVersionPermissionRequest req = new AddLayerVersionPermissionRequest("provident",                 new AddLayerVersionPermissionRequestBody("distinctio", "quibusdam", "unde") {{
                                organizationId = "nulla";
                            }};, 544883L) {{
                revisionId = "illum";
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "error";
                xAmzCredential = "deserunt";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "iure";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "debitis";
            }};            

            AddLayerVersionPermissionResponse res = sdk.addLayerVersionPermission(req);

            if (res.addLayerVersionPermissionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->