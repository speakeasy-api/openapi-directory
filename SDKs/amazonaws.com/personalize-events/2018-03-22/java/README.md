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
import org.openapis.openapi.models.operations.PutEventsHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            PutEventsRequest req = new PutEventsRequest() {{
                headers = new PutEventsHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new PutEventsRequestBody() {{
                    eventList = new org.openapis.openapi.models.shared.Event[]{{
                        add(new Event() {{
                            eventId = "vel";
                            eventType = "error";
                            eventValue = 6458.94;
                            impression = new String[]{{
                                add("iure"),
                                add("magnam"),
                            }};
                            itemId = "debitis";
                            metricAttribution = new MetricAttribution() {{
                                eventAttributionSource = "ipsa";
                            }};
                            properties = "delectus";
                            recommendationId = "tempora";
                            sentAt = "2022-07-10T15:39:12.517Z";
                        }}),
                        add(new Event() {{
                            eventId = "minus";
                            eventType = "placeat";
                            eventValue = 5288.95;
                            impression = new String[]{{
                                add("excepturi"),
                                add("nisi"),
                            }};
                            itemId = "recusandae";
                            metricAttribution = new MetricAttribution() {{
                                eventAttributionSource = "temporibus";
                            }};
                            properties = "ab";
                            recommendationId = "quis";
                            sentAt = "2022-05-09T10:00:51.349Z";
                        }}),
                        add(new Event() {{
                            eventId = "perferendis";
                            eventType = "ipsam";
                            eventValue = 8326.2;
                            impression = new String[]{{
                                add("quo"),
                                add("odit"),
                                add("at"),
                                add("at"),
                            }};
                            itemId = "maiores";
                            metricAttribution = new MetricAttribution() {{
                                eventAttributionSource = "molestiae";
                            }};
                            properties = "quod";
                            recommendationId = "quod";
                            sentAt = "2022-06-25T00:37:01.696Z";
                        }}),
                        add(new Event() {{
                            eventId = "porro";
                            eventType = "dolorum";
                            eventValue = 1182.74;
                            impression = new String[]{{
                                add("officia"),
                                add("occaecati"),
                                add("fugit"),
                            }};
                            itemId = "deleniti";
                            metricAttribution = new MetricAttribution() {{
                                eventAttributionSource = "hic";
                            }};
                            properties = "optio";
                            recommendationId = "totam";
                            sentAt = "2022-08-02T15:33:40.440Z";
                        }}),
                    }};
                    sessionId = "molestiae";
                    trackingId = "modi";
                    userId = "qui";
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

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
