<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            AddLayerVersionPermissionRequest req = new AddLayerVersionPermissionRequest() {{
                pathParams = new AddLayerVersionPermissionPathParams() {{
                    layerName = "qui";
                    versionNumber = 1890455036426927167;
                }};
                queryParams = new AddLayerVersionPermissionQueryParams() {{
                    revisionId = "sed";
                }};
                headers = new AddLayerVersionPermissionHeaders() {{
                    xAmzAlgorithm = "enim";
                    xAmzContentSha256 = "eum";
                    xAmzCredential = "et";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "et";
                    xAmzSignature = "quasi";
                    xAmzSignedHeaders = "nisi";
                }};
                request = new AddLayerVersionPermissionRequestBody() {{
                    action = "et";
                    organizationId = "unde";
                    principal = "in";
                    statementId = "ut";
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