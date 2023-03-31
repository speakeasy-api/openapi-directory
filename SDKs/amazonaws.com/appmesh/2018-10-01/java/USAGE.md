<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateMeshHeaders;
import org.openapis.openapi.models.operations.CreateMeshRequestBody;
import org.openapis.openapi.models.operations.CreateMeshRequest;
import org.openapis.openapi.models.operations.CreateMeshResponse;

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

            CreateMeshRequest req = new CreateMeshRequest() {{
                headers = new CreateMeshHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateMeshRequestBody() {{
                    clientToken = "illum";
                    meshName = "vel";
                }};
            }};            

            CreateMeshResponse res = sdk.createMesh(req);

            if (res.createMeshOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->