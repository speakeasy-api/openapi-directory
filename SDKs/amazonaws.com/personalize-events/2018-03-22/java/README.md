# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `putEvents` - Records user interaction event data. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recording-events.html">Recording Events</a>.
* `putItems` - Adds one or more items to an Items dataset. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-items.html">Importing Items Incrementally</a>. 
* `putUsers` - Adds one or more users to a Users dataset. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-users.html">Importing Users Incrementally</a>.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
