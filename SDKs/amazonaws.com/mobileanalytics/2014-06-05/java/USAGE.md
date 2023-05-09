<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutEventsRequest;
import org.openapis.openapi.models.operations.PutEventsRequestBody;
import org.openapis.openapi.models.operations.PutEventsResponse;
import org.openapis.openapi.models.shared.Event;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Session;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutEventsRequest req = new PutEventsRequest(                new PutEventsRequestBody(                new org.openapis.openapi.models.shared.Event[]{{
                                                add(new Event("deleniti", "hic") {{
                                                    attributes = new java.util.HashMap<String, String>() {{
                                                        put("quibusdam", "unde");
                                                        put("nulla", "corrupti");
                                                        put("illum", "vel");
                                                    }};
                                                    eventType = "error";
                                                    metrics = new java.util.HashMap<String, Double>() {{
                                                        put("suscipit", 4375.87);
                                                        put("magnam", 8917.73);
                                                        put("ipsa", 9636.63);
                                                    }};
                                                    session = new Session() {{
                                                        duration = 272656L;
                                                        id = "67cc8796-ed15-41a0-9dfc-2ddf7cc78ca1";
                                                        startTimestamp = "nam";
                                                        stopTimestamp = "officia";
                                                    }};
                                                    timestamp = "occaecati";
                                                    version = "fugit";
                                                }}),
                                                add(new Event("doloribus", "sapiente") {{
                                                    attributes = new java.util.HashMap<String, String>() {{
                                                        put("totam", "beatae");
                                                        put("commodi", "molestiae");
                                                        put("modi", "qui");
                                                        put("impedit", "cum");
                                                    }};
                                                    eventType = "esse";
                                                    metrics = new java.util.HashMap<String, Double>() {{
                                                        put("excepturi", 1352.18);
                                                    }};
                                                    session = new Session() {{
                                                        duration = 18789L;
                                                        id = "5929396f-ea75-496e-b10f-aaa2352c5955";
                                                        startTimestamp = "excepturi";
                                                        stopTimestamp = "accusantium";
                                                    }};
                                                    timestamp = "iure";
                                                    version = "culpa";
                                                }}),
                                                add(new Event("perferendis", "doloremque") {{
                                                    attributes = new java.util.HashMap<String, String>() {{
                                                        put("mollitia", "dolorem");
                                                    }};
                                                    eventType = "culpa";
                                                    metrics = new java.util.HashMap<String, Double>() {{
                                                        put("repellat", 6531.08);
                                                    }};
                                                    session = new Session() {{
                                                        duration = 581850L;
                                                        id = "46773925-1aa5-42c3-b5ad-019da1ffe78f";
                                                        startTimestamp = "ipsa";
                                                        stopTimestamp = "omnis";
                                                    }};
                                                    timestamp = "voluptate";
                                                    version = "cum";
                                                }}),
                                            }});, "reprehenderit") {{
                xAmzAlgorithm = "ut";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "dicta";
                xAmzDate = "corporis";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "dicta";
                xAmzClientContextEncoding = "harum";
            }};            

            PutEventsResponse res = sdk.putEvents(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->