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

            CreateMeshRequest req = new CreateMeshRequest() {{
                headers = new CreateMeshHeaders() {{
                    xAmzAlgorithm = "nihil";
                    xAmzContentSha256 = "quam";
                    xAmzCredential = "et";
                    xAmzDate = "vel";
                    xAmzSecurityToken = "itaque";
                    xAmzSignature = "provident";
                    xAmzSignedHeaders = "voluptatem";
                }};
                request = new CreateMeshRequestBody() {{
                    clientToken = "qui";
                    meshName = "modi";
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