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
                    xAmzAlgorithm = "asperiores";
                    xAmzContentSha256 = "voluptatem";
                    xAmzCredential = "hic";
                    xAmzDate = "doloribus";
                    xAmzSecurityToken = "corrupti";
                    xAmzSignature = "nemo";
                    xAmzSignedHeaders = "architecto";
                }};
                request = new CreateEventIntegrationRequestBody() {{
                    clientToken = "neque";
                    description = "autem";
                    eventBridgeBus = "saepe";
                    eventFilter = new CreateEventIntegrationRequestBodyEventFilter() {{
                        source = "voluptatem";
                    }};
                    name = "error";
                    tags = new java.util.HashMap<String, String>() {{
                        put("in", "mollitia");
                        put("autem", "distinctio");
                        put("consequuntur", "autem");
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