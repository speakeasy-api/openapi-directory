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

            CreateAppRequest req = new CreateAppRequest() {{
                headers = new CreateAppHeaders() {{
                    xAmzAlgorithm = "dolorum";
                    xAmzContentSha256 = "ut";
                    xAmzCredential = "voluptatum";
                    xAmzDate = "alias";
                    xAmzSecurityToken = "consequatur";
                    xAmzSignature = "eum";
                    xAmzSignedHeaders = "nemo";
                }};
                request = new CreateAppRequestBody() {{
                    createApplicationRequest = new CreateAppRequestBodyCreateApplicationRequest() {{
                        name = "omnis";
                        tags = new java.util.HashMap<String, String>() {{
                            put("reprehenderit", "omnis");
                            put("velit", "molestiae");
                            put("id", "quia");
                        }};
                    }};
                }};
            }};

            CreateAppResponse res = sdk.createApp(req);

            if (res.createAppResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->