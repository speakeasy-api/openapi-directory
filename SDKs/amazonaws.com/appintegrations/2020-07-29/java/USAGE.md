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

            CreateEventIntegrationRequest req = new CreateEventIntegrationRequest() {{
                headers = new CreateEventIntegrationHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                }};
                request = new CreateEventIntegrationRequestBody() {{
                    clientToken = "voluptas";
                    description = "fugit";
                    eventBridgeBus = "et";
                    eventFilter = new CreateEventIntegrationRequestBodyEventFilter() {{
                        source = "nihil";
                    }};
                    name = "rerum";
                    tags = new java.util.HashMap<String, String>() {{
                        put("debitis", "voluptatum");
                        put("et", "ut");
                        put("dolorem", "et");
                    }};
                }};
            }};

            CreateEventIntegrationResponse res = sdk.createEventIntegration(req);

            if (res.createEventIntegrationResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->