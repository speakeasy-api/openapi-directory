# SDK

## Overview

Amazon Personalize can consume real-time user event data, such as <i>stream</i> or <i>click</i> data, and use it for model training either alone or combined with historical data. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recording-events.html">Recording Events</a>.

Amazon Web Services documentation
<https://docs.aws.amazon.com/personalize-events/>
### Available Operations

* [putEvents](#putevents) - Records user interaction event data. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recording-events.html">Recording Events</a>.
* [putItems](#putitems) - Adds one or more items to an Items dataset. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-items.html">Importing Items Incrementally</a>. 
* [putUsers](#putusers) - Adds one or more users to a Users dataset. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-users.html">Importing Users Incrementally</a>.

## putEvents

Records user interaction event data. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recording-events.html">Recording Events</a>.

### Example Usage

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
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutEventsRequest req = new PutEventsRequest(                new PutEventsRequestBody(                new org.openapis.openapi.models.shared.Event[]{{
                                                add(new Event("in", OffsetDateTime.parse("2022-05-22T05:33:50.280Z")) {{
                                                    eventId = "excepturi";
                                                    eventType = "aspernatur";
                                                    eventValue = 187.89;
                                                    impression = new String[]{{
                                                        add("natus"),
                                                        add("sed"),
                                                    }};
                                                    itemId = "iste";
                                                    metricAttribution = new MetricAttribution("natus") {{
                                                        eventAttributionSource = "dolor";
                                                    }};
                                                    properties = "laboriosam";
                                                    recommendationId = "hic";
                                                    sentAt = OffsetDateTime.parse("2020-12-15T09:45:44.943Z");
                                                }}),
                                            }}, "iure", "saepe") {{
                                userId = "quidem";
                            }};) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "reiciendis";
                xAmzDate = "est";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "dolores";
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

## putItems

Adds one or more items to an Items dataset. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-items.html">Importing Items Incrementally</a>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutItemsRequest;
import org.openapis.openapi.models.operations.PutItemsRequestBody;
import org.openapis.openapi.models.operations.PutItemsResponse;
import org.openapis.openapi.models.shared.Item;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutItemsRequest req = new PutItemsRequest(                new PutItemsRequestBody("corporis",                 new org.openapis.openapi.models.shared.Item[]{{
                                                add(new Item("omnis") {{
                                                    itemId = "nobis";
                                                    properties = "enim";
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "minima";
                xAmzCredential = "excepturi";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "iure";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "doloribus";
            }};            

            PutItemsResponse res = sdk.sdk.putItems(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putUsers

Adds one or more users to a Users dataset. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-users.html">Importing Users Incrementally</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutUsersRequest;
import org.openapis.openapi.models.operations.PutUsersRequestBody;
import org.openapis.openapi.models.operations.PutUsersResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.User;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutUsersRequest req = new PutUsersRequest(                new PutUsersRequestBody("architecto",                 new org.openapis.openapi.models.shared.User[]{{
                                                add(new User("consequuntur") {{
                                                    properties = "dolorem";
                                                    userId = "culpa";
                                                }}),
                                                add(new User("occaecati") {{
                                                    properties = "repellat";
                                                    userId = "mollitia";
                                                }}),
                                                add(new User("quam") {{
                                                    properties = "numquam";
                                                    userId = "commodi";
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "velit";
                xAmzCredential = "error";
                xAmzDate = "quia";
                xAmzSecurityToken = "quis";
                xAmzSignature = "vitae";
                xAmzSignedHeaders = "laborum";
            }};            

            PutUsersResponse res = sdk.sdk.putUsers(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
