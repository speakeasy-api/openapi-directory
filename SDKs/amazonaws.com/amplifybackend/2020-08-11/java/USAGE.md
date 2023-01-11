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

            CloneBackendRequest req = new CloneBackendRequest() {{
                pathParams = new CloneBackendPathParams() {{
                    appId = "laboriosam";
                    backendEnvironmentName = "velit";
                }};
                headers = new CloneBackendHeaders() {{
                    xAmzAlgorithm = "ea";
                    xAmzContentSha256 = "tempore";
                    xAmzCredential = "fugit";
                    xAmzDate = "aut";
                    xAmzSecurityToken = "tempora";
                    xAmzSignature = "aliquid";
                    xAmzSignedHeaders = "mollitia";
                }};
                request = new CloneBackendRequestBody() {{
                    targetEnvironmentName = "non";
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