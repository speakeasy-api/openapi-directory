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
                    xAmzAlgorithm = "commodi";
                    xAmzContentSha256 = "in";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "asperiores";
                    xAmzSecurityToken = "quo";
                    xAmzSignature = "ea";
                    xAmzSignedHeaders = "soluta";
                }};
                request = new CreateWorkspaceRequestBody() {{
                    alias = "tempora";
                    clientToken = "commodi";
                    tags = new java.util.HashMap<String, String>() {{
                        put("facere", "in");
                        put("et", "odit");
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