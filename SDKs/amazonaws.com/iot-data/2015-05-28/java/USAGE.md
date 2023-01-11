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

            DeleteThingShadowRequest req = new DeleteThingShadowRequest() {{
                pathParams = new DeleteThingShadowPathParams() {{
                    thingName = "aliquam";
                }};
                queryParams = new DeleteThingShadowQueryParams() {{
                    name = "quos";
                }};
                headers = new DeleteThingShadowHeaders() {{
                    xAmzAlgorithm = "omnis";
                    xAmzContentSha256 = "illum";
                    xAmzCredential = "repellat";
                    xAmzDate = "id";
                    xAmzSecurityToken = "blanditiis";
                    xAmzSignature = "possimus";
                    xAmzSignedHeaders = "eius";
                }};
            }};

            DeleteThingShadowResponse res = sdk.deleteThingShadow(req);

            if (res.deleteThingShadowResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->