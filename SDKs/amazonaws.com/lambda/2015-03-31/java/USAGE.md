<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddLayerVersionPermissionPathParams;
import org.openapis.openapi.models.operations.AddLayerVersionPermissionQueryParams;
import org.openapis.openapi.models.operations.AddLayerVersionPermissionHeaders;
import org.openapis.openapi.models.operations.AddLayerVersionPermissionRequestBody;
import org.openapis.openapi.models.operations.AddLayerVersionPermissionRequest;
import org.openapis.openapi.models.operations.AddLayerVersionPermissionResponse;

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

            AddLayerVersionPermissionRequest req = new AddLayerVersionPermissionRequest() {{
                pathParams = new AddLayerVersionPermissionPathParams() {{
                    layerName = "corrupti";
                    versionNumber = 592845;
                }};
                queryParams = new AddLayerVersionPermissionQueryParams() {{
                    revisionId = "distinctio";
                }};
                headers = new AddLayerVersionPermissionHeaders() {{
                    xAmzAlgorithm = "quibusdam";
                    xAmzContentSha256 = "unde";
                    xAmzCredential = "nulla";
                    xAmzDate = "corrupti";
                    xAmzSecurityToken = "illum";
                    xAmzSignature = "vel";
                    xAmzSignedHeaders = "error";
                }};
                request = new AddLayerVersionPermissionRequestBody() {{
                    action = "deserunt";
                    organizationId = "suscipit";
                    principal = "iure";
                    statementId = "magnam";
                }};
            }};            

            AddLayerVersionPermissionResponse res = sdk.addLayerVersionPermission(req);

            if (res.addLayerVersionPermissionResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->