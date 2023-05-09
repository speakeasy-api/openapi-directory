# SDK

## Overview

Amazon Mobile Analytics is a service for collecting, visualizing, and understanding app usage data at scale.

Amazon Web Services documentation
<https://docs.aws.amazon.com/mobileanalytics/>
### Available Operations

* [putEvents](#putevents) - The PutEvents operation records one or more events. You can have up to 1,500 unique custom events per app, any combination of up to 40 attributes and metrics per custom event, and any number of attribute or metric values.

## putEvents

The PutEvents operation records one or more events. You can have up to 1,500 unique custom events per app, any combination of up to 40 attributes and metrics per custom event, and any number of attribute or metric values.

### Example Usage

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
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutEventsRequest req = new PutEventsRequest(                new PutEventsRequestBody(                new org.openapis.openapi.models.shared.Event[]{{
                                                add(new Event("aliquid", "provident") {{
                                                    attributes = new java.util.HashMap<String, String>() {{
                                                        put("repudiandae", "quae");
                                                        put("ipsum", "quidem");
                                                    }};
                                                    eventType = "molestias";
                                                    metrics = new java.util.HashMap<String, Double>() {{
                                                        put("pariatur", 2653.89);
                                                        put("praesentium", 5232.48);
                                                        put("voluptates", 939.4);
                                                    }};
                                                    session = new Session() {{
                                                        duration = 921158L;
                                                        id = "91e450ad-2abd-4442-a980-2d502a94bb4f";
                                                        startTimestamp = "eum";
                                                        stopTimestamp = "non";
                                                    }};
                                                    timestamp = "eligendi";
                                                    version = "sint";
                                                }}),
                                                add(new Event("excepturi", "ullam") {{
                                                    attributes = new java.util.HashMap<String, String>() {{
                                                        put("sint", "officia");
                                                        put("dolor", "debitis");
                                                        put("a", "dolorum");
                                                        put("in", "in");
                                                    }};
                                                    eventType = "illum";
                                                    metrics = new java.util.HashMap<String, Double>() {{
                                                        put("rerum", 1162.02);
                                                        put("magnam", 7670.24);
                                                        put("facere", 4118.2);
                                                        put("aliquid", 6754.39);
                                                    }};
                                                    session = new Session() {{
                                                        duration = 881104L;
                                                        id = "395efb9b-a88f-43a6-a997-074ba4469b6e";
                                                        startTimestamp = "aspernatur";
                                                        stopTimestamp = "architecto";
                                                    }};
                                                    timestamp = "magnam";
                                                    version = "et";
                                                }}),
                                                add(new Event("maiores", "quidem") {{
                                                    attributes = new java.util.HashMap<String, String>() {{
                                                        put("quos", "sint");
                                                        put("accusantium", "mollitia");
                                                        put("reiciendis", "mollitia");
                                                    }};
                                                    eventType = "ad";
                                                    metrics = new java.util.HashMap<String, Double>() {{
                                                        put("dolor", 8965.47);
                                                        put("odit", 3675.62);
                                                    }};
                                                    session = new Session() {{
                                                        duration = 97260L;
                                                        id = "6fe4c8b7-11e5-4b7f-92ed-028921cddc69";
                                                        startTimestamp = "odit";
                                                        stopTimestamp = "ea";
                                                    }};
                                                    timestamp = "accusantium";
                                                    version = "ab";
                                                }}),
                                                add(new Event("earum", "modi") {{
                                                    attributes = new java.util.HashMap<String, String>() {{
                                                        put("voluptate", "autem");
                                                        put("nam", "eaque");
                                                    }};
                                                    eventType = "pariatur";
                                                    metrics = new java.util.HashMap<String, Double>() {{
                                                        put("voluptatibus", 166.27);
                                                        put("fugiat", 2307.42);
                                                    }};
                                                    session = new Session() {{
                                                        duration = 11714L;
                                                        id = "c5fbb258-7053-4202-873d-5fe9b90c2890";
                                                        startTimestamp = "occaecati";
                                                        stopTimestamp = "rerum";
                                                    }};
                                                    timestamp = "adipisci";
                                                    version = "asperiores";
                                                }}),
                                            }});, "iste") {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "pariatur";
                xAmzDate = "provident";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "delectus";
                xAmzClientContextEncoding = "quaerat";
            }};            

            PutEventsResponse res = sdk.sdk.putEvents(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
