<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.PutEventsRequestBody;
import org.openapis.openapi.models.operations.PutEventsRequest;
import org.openapis.openapi.models.operations.PutEventsResponse;
import org.openapis.openapi.models.shared.Event;
import org.openapis.openapi.models.shared.MetricAttribution;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutEventsRequest req = new PutEventsRequest() {{
                requestBody = new PutEventsRequestBody() {{
                    eventList = new org.openapis.openapi.models.shared.Event[]{{
                        add(new Event() {{
                            eventId = "provident";
                            eventType = "distinctio";
                            eventValue = 8442.66;
                            impression = new String[]{{
                                add("nulla"),
                                add("corrupti"),
                                add("illum"),
                            }};
                            itemId = "vel";
                            metricAttribution = new MetricAttribution() {{
                                eventAttributionSource = "error";
                            }};
                            properties = "deserunt";
                            recommendationId = "suscipit";
                            sentAt = "2022-09-14T09:35:47.986Z";
                        }}),
                        add(new Event() {{
                            eventId = "debitis";
                            eventType = "ipsa";
                            eventValue = 9636.63;
                            impression = new String[]{{
                                add("suscipit"),
                                add("molestiae"),
                            }};
                            itemId = "minus";
                            metricAttribution = new MetricAttribution() {{
                                eventAttributionSource = "placeat";
                            }};
                            properties = "voluptatum";
                            recommendationId = "iusto";
                            sentAt = "2022-03-20T06:24:36.919Z";
                        }}),
                        add(new Event() {{
                            eventId = "recusandae";
                            eventType = "temporibus";
                            eventValue = 710.36;
                            impression = new String[]{{
                                add("veritatis"),
                                add("deserunt"),
                            }};
                            itemId = "perferendis";
                            metricAttribution = new MetricAttribution() {{
                                eventAttributionSource = "ipsam";
                            }};
                            properties = "repellendus";
                            recommendationId = "sapiente";
                            sentAt = "2022-07-31T07:34:52.790Z";
                        }}),
                    }};
                    sessionId = "at";
                    trackingId = "at";
                    userId = "maiores";
                }};
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "quod";
                xAmzCredential = "quod";
                xAmzDate = "esse";
                xAmzSecurityToken = "totam";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "dolorum";
            }}            

            PutEventsResponse res = sdk.putEvents(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->