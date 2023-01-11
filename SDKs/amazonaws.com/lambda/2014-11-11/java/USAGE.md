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

            AddEventSourceRequest req = new AddEventSourceRequest() {{
                headers = new AddEventSourceHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                }};
                request = new AddEventSourceRequestBody() {{
                    batchSize = 6044372234677422456;
                    eventSource = "fugit";
                    functionName = "et";
                    parameters = new java.util.HashMap<String, String>() {{
                        put("rerum", "dicta");
                    }};
                    role = "debitis";
                }};
            }};

            AddEventSourceResponse res = sdk.addEventSource(req);

            if (res.eventSourceConfiguration.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->