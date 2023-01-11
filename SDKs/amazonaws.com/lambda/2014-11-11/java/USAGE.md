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
                    xAmzAlgorithm = "ipsum";
                    xAmzContentSha256 = "omnis";
                    xAmzCredential = "error";
                    xAmzDate = "reprehenderit";
                    xAmzSecurityToken = "explicabo";
                    xAmzSignature = "aut";
                    xAmzSignedHeaders = "eum";
                }};
                request = new AddEventSourceRequestBody() {{
                    batchSize = 6380244943489637684;
                    eventSource = "ratione";
                    functionName = "labore";
                    parameters = new java.util.HashMap<String, String>() {{
                        put("saepe", "libero");
                        put("nobis", "ut");
                    }};
                    role = "accusamus";
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