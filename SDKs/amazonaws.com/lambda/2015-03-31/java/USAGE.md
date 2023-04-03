<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddLayerVersionPermissionRequestBody;
import org.openapis.openapi.models.operations.AddLayerVersionPermissionRequest;
import org.openapis.openapi.models.operations.AddLayerVersionPermissionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddLayerVersionPermissionRequest req = new AddLayerVersionPermissionRequest() {{
                layerName = "corrupti";
                requestBody = new AddLayerVersionPermissionRequestBody() {{
                    action = "provident";
                    organizationId = "distinctio";
                    principal = "quibusdam";
                    statementId = "unde";
                }};
                revisionId = "nulla";
                versionNumber = 544883;
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "vel";
                xAmzCredential = "error";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "magnam";
            }}            

            AddLayerVersionPermissionResponse res = sdk.addLayerVersionPermission(req);

            if (res.addLayerVersionPermissionResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->