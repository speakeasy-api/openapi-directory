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

            CreateWorkspaceRequest req = new CreateWorkspaceRequest() {{
                headers = new CreateWorkspaceHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                }};
                request = new CreateWorkspaceRequestBody() {{
                    alias = "voluptas";
                    clientToken = "fugit";
                    tags = new java.util.HashMap<String, String>() {{
                        put("nihil", "rerum");
                    }};
                }};
            }};

            CreateWorkspaceResponse res = sdk.createWorkspace(req);

            if (res.createWorkspaceResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->