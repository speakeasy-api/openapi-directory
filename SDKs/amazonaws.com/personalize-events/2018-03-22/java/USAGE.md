<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutEventsRequest;
import org.openapis.openapi.models.operations.PutEventsRequestBody;
import org.openapis.openapi.models.operations.PutEventsResponse;
import org.openapis.openapi.models.shared.Event;
import org.openapis.openapi.models.shared.MetricAttribution;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutEventsRequest req = new PutEventsRequest(                new PutEventsRequestBody(                new org.openapis.openapi.models.shared.Event[]{{
                                                add(new Event("tempora", OffsetDateTime.parse("2022-07-10T15:39:12.517Z")) {{
                                                    eventId = "distinctio";
                                                    eventType = "quibusdam";
                                                    eventValue = 6027.63;
                                                    impression = new String[]{{
                                                        add("corrupti"),
                                                        add("illum"),
                                                        add("vel"),
                                                        add("error"),
                                                    }};
                                                    itemId = "deserunt";
                                                    metricAttribution = new MetricAttribution("iure") {{
                                                        eventAttributionSource = "suscipit";
                                                    }};
                                                    properties = "magnam";
                                                    recommendationId = "debitis";
                                                    sentAt = OffsetDateTime.parse("2022-01-14T06:18:51.036Z");
                                                }}),
                                                add(new Event("ipsam", OffsetDateTime.parse("2020-02-17T21:57:45.117Z")) {{
                                                    eventId = "minus";
                                                    eventType = "placeat";
                                                    eventValue = 5288.95;
                                                    impression = new String[]{{
                                                        add("excepturi"),
                                                        add("nisi"),
                                                    }};
                                                    itemId = "recusandae";
                                                    metricAttribution = new MetricAttribution("ab") {{
                                                        eventAttributionSource = "temporibus";
                                                    }};
                                                    properties = "quis";
                                                    recommendationId = "veritatis";
                                                    sentAt = OffsetDateTime.parse("2022-12-17T05:46:24.151Z");
                                                }}),
                                                add(new Event("occaecati", OffsetDateTime.parse("2022-06-18T20:36:37.412Z")) {{
                                                    eventId = "quo";
                                                    eventType = "odit";
                                                    eventValue = 8700.13;
                                                    impression = new String[]{{
                                                        add("maiores"),
                                                        add("molestiae"),
                                                        add("quod"),
                                                        add("quod"),
                                                    }};
                                                    itemId = "esse";
                                                    metricAttribution = new MetricAttribution("porro") {{
                                                        eventAttributionSource = "totam";
                                                    }};
                                                    properties = "dolorum";
                                                    recommendationId = "dicta";
                                                    sentAt = OffsetDateTime.parse("2021-09-20T20:35:01.256Z");
                                                }}),
                                            }}, "hic", "optio") {{
                                userId = "totam";
                            }};) {{
                xAmzAlgorithm = "beatae";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "molestiae";
                xAmzDate = "modi";
                xAmzSecurityToken = "qui";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "cum";
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