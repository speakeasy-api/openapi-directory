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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [putEvents](docs/sdk/README.md#putevents) - Records user interaction event data. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recording-events.html">Recording Events</a>.
* [putItems](docs/sdk/README.md#putitems) - Adds one or more items to an Items dataset. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-items.html">Importing Items Incrementally</a>. 
* [putUsers](docs/sdk/README.md#putusers) - Adds one or more users to a Users dataset. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-users.html">Importing Users Incrementally</a>.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
