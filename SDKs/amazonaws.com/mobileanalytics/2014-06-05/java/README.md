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
import org.openapis.openapi.models.shared.Session;

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
                    events = new org.openapis.openapi.models.shared.Event[]{{
                        add(new Event() {{
                            attributes = new java.util.HashMap<String, String>() {{
                                put("distinctio", "quibusdam");
                                put("unde", "nulla");
                                put("corrupti", "illum");
                            }};
                            eventType = "vel";
                            metrics = new java.util.HashMap<String, Double>() {{
                                put("deserunt", 3843.82);
                                put("iure", 2975.34);
                                put("debitis", 567.13);
                            }};
                            session = new Session() {{
                                duration = 963663;
                                id = "tempora";
                                startTimestamp = "suscipit";
                                stopTimestamp = "molestiae";
                            }};
                            timestamp = "minus";
                            version = "placeat";
                        }}),
                        add(new Event() {{
                            attributes = new java.util.HashMap<String, String>() {{
                                put("iusto", "excepturi");
                                put("nisi", "recusandae");
                                put("temporibus", "ab");
                            }};
                            eventType = "quis";
                            metrics = new java.util.HashMap<String, Double>() {{
                                put("deserunt", 202.18);
                            }};
                            session = new Session() {{
                                duration = 368241;
                                id = "repellendus";
                                startTimestamp = "sapiente";
                                stopTimestamp = "quo";
                            }};
                            timestamp = "odit";
                            version = "at";
                        }}),
                        add(new Event() {{
                            attributes = new java.util.HashMap<String, String>() {{
                                put("maiores", "molestiae");
                                put("quod", "quod");
                                put("esse", "totam");
                                put("porro", "dolorum");
                            }};
                            eventType = "dicta";
                            metrics = new java.util.HashMap<String, Double>() {{
                                put("officia", 5820.2);
                                put("fugit", 5373.73);
                                put("hic", 7586.16);
                            }};
                            session = new Session() {{
                                duration = 521848;
                                id = "beatae";
                                startTimestamp = "commodi";
                                stopTimestamp = "molestiae";
                            }};
                            timestamp = "modi";
                            version = "qui";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "cum";
                xAmzCredential = "esse";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "perferendis";
                xAmzClientContext = "ad";
                xAmzClientContextEncoding = "natus";
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

* `putEvents` - The PutEvents operation records one or more events. You can have up to 1,500 unique custom events per app, any combination of up to 40 attributes and metrics per custom event, and any number of attribute or metric values.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
