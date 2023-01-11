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
                    xAmzAlgorithm = "est";
                    xAmzContentSha256 = "est";
                    xAmzCredential = "id";
                    xAmzDate = "voluptatem";
                    xAmzSecurityToken = "fuga";
                    xAmzSignature = "aperiam";
                    xAmzSignedHeaders = "facilis";
                }};
                request = new PutEventsRequestBody() {{
                    eventList = new openapisdk.models.shared.Event[]() {{
                        add(new Event() {{
                            eventId = "atque";
                            eventType = "recusandae";
                            eventValue = 44.099998;
                            impression = new String[]() {{
                                add("atque"),
                                add("iure"),
                                add("qui"),
                            }};
                            itemId = "voluptas";
                            properties = "sunt";
                            recommendationId = "ratione";
                            sentAt = "2013-10-07T01:00:59Z";
                        }}),
                        add(new Event() {{
                            eventId = "excepturi";
                            eventType = "vel";
                            eventValue = 63.099998;
                            impression = new String[]() {{
                                add("sapiente"),
                            }};
                            itemId = "officia";
                            properties = "id";
                            recommendationId = "voluptatibus";
                            sentAt = "1995-07-01T12:28:08Z";
                        }}),
                    }};
                    sessionId = "dolor";
                    trackingId = "itaque";
                    userId = "veritatis";
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