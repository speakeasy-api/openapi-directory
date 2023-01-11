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
                    appId = "sit";
                    backendEnvironmentName = "voluptas";
                }};
                headers = new CloneBackendHeaders() {{
                    xAmzAlgorithm = "culpa";
                    xAmzContentSha256 = "expedita";
                    xAmzCredential = "consequuntur";
                    xAmzDate = "dolor";
                    xAmzSecurityToken = "expedita";
                    xAmzSignature = "voluptas";
                    xAmzSignedHeaders = "fugit";
                }};
                request = new CloneBackendRequestBody() {{
                    targetEnvironmentName = "et";
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