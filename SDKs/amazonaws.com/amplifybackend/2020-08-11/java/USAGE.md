<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CloneBackendPathParams;
import org.openapis.openapi.models.operations.CloneBackendHeaders;
import org.openapis.openapi.models.operations.CloneBackendRequestBody;
import org.openapis.openapi.models.operations.CloneBackendRequest;
import org.openapis.openapi.models.operations.CloneBackendResponse;

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

            CloneBackendRequest req = new CloneBackendRequest() {{
                pathParams = new CloneBackendPathParams() {{
                    appId = "corrupti";
                    backendEnvironmentName = "provident";
                }};
                headers = new CloneBackendHeaders() {{
                    xAmzAlgorithm = "distinctio";
                    xAmzContentSha256 = "quibusdam";
                    xAmzCredential = "unde";
                    xAmzDate = "nulla";
                    xAmzSecurityToken = "corrupti";
                    xAmzSignature = "illum";
                    xAmzSignedHeaders = "vel";
                }};
                request = new CloneBackendRequestBody() {{
                    targetEnvironmentName = "error";
                }};
            }};            

            CloneBackendResponse res = sdk.cloneBackend(req);

            if (res.cloneBackendResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->