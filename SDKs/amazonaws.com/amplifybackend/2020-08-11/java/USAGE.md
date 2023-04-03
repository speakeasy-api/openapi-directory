<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CloneBackendRequestBody;
import org.openapis.openapi.models.operations.CloneBackendRequest;
import org.openapis.openapi.models.operations.CloneBackendResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CloneBackendRequest req = new CloneBackendRequest() {{
                requestBody = new CloneBackendRequestBody() {{
                    targetEnvironmentName = "corrupti";
                }};
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quibusdam";
                xAmzDate = "unde";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "illum";
                appId = "vel";
                backendEnvironmentName = "error";
            }}            

            CloneBackendResponse res = sdk.cloneBackend(req);

            if (res.cloneBackendResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->