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
                    layerName = "sit";
                    versionNumber = 2259404117704393152;
                }};
                queryParams = new AddLayerVersionPermissionQueryParams() {{
                    revisionId = "culpa";
                }};
                headers = new AddLayerVersionPermissionHeaders() {{
                    xAmzAlgorithm = "expedita";
                    xAmzContentSha256 = "consequuntur";
                    xAmzCredential = "dolor";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "voluptas";
                    xAmzSignature = "fugit";
                    xAmzSignedHeaders = "et";
                }};
                request = new AddLayerVersionPermissionRequestBody() {{
                    action = "nihil";
                    organizationId = "rerum";
                    principal = "dicta";
                    statementId = "debitis";
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