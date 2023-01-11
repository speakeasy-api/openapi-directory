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

            PutEventsRequest req = new PutEventsRequest() {{
                headers = new PutEventsHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzClientContext = "voluptas";
                    xAmzClientContextEncoding = "fugit";
                }};
                request = new PutEventsRequestBody() {{
                    events = new openapisdk.models.shared.Event[]() {{
                        add(new Event() {{
                            attributes = new java.util.HashMap<String, String>() {{
                                put("rerum", "dicta");
                            }};
                            eventType = "debitis";
                            metrics = new java.util.HashMap<String, Double>() {{
                                put("et", 11.100000);
                            }};
                            session = new Session() {{
                                duration = 7259475919510918339;
                                id = "voluptate";
                                startTimestamp = "iste";
                                stopTimestamp = "vitae";
                            }};
                            timestamp = "totam";
                            version = "dolores";
                        }}),
                    }};
                }};
            }};

            PutEventsResponse res = sdk.putEvents(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->