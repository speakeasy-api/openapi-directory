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
                }};
                request = new PutEventsRequestBody() {{
                    eventList = new openapisdk.models.shared.Event[]() {{
                        add(new Event() {{
                            eventId = "fugit";
                            eventType = "et";
                            eventValue = 68.199997;
                            impression = new String[]() {{
                                add("debitis"),
                                add("voluptatum"),
                                add("et"),
                            }};
                            itemId = "ut";
                            properties = "dolorem";
                            recommendationId = "et";
                            sentAt = "1998-09-30T11:01:25Z";
                        }}),
                        add(new Event() {{
                            eventId = "vitae";
                            eventType = "totam";
                            eventValue = 80.199997;
                            impression = new String[]() {{
                                add("vel"),
                            }};
                            itemId = "odio";
                            properties = "dolore";
                            recommendationId = "id";
                            sentAt = "2015-12-03T16:44:03Z";
                        }}),
                        add(new Event() {{
                            eventId = "accusantium";
                            eventType = "totam";
                            eventValue = 64.099998;
                            impression = new String[]() {{
                                add("aut"),
                                add("odit"),
                            }};
                            itemId = "non";
                            properties = "voluptas";
                            recommendationId = "omnis";
                            sentAt = "2015-03-08T17:52:36Z";
                        }}),
                    }};
                    sessionId = "illo";
                    trackingId = "sed";
                    userId = "officiis";
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