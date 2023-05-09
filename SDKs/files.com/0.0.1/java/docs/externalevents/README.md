# externalEvents

## Overview

Operations about external_events

### Available Operations

* [getExternalEvents](#getexternalevents) - List External Events
* [getExternalEventsId](#getexternaleventsid) - Show External Event
* [postExternalEvents](#postexternalevents) - Create External Event

## getExternalEvents

List External Events

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetExternalEventsRequest;
import org.openapis.openapi.models.operations.GetExternalEventsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetExternalEventsRequest req = new GetExternalEventsRequest() {{
                cursor = "vero";
                filter = new java.util.HashMap<String, Object>() {{
                    put("quis", "ipsum");
                    put("delectus", "voluptate");
                    put("consectetur", "vero");
                }};
                filterGt = new java.util.HashMap<String, Object>() {{
                    put("dignissimos", "hic");
                    put("distinctio", "quod");
                    put("odio", "similique");
                    put("facilis", "vero");
                }};
                filterGteq = new java.util.HashMap<String, Object>() {{
                    put("dolore", "quibusdam");
                    put("illum", "sequi");
                }};
                filterLt = new java.util.HashMap<String, Object>() {{
                    put("impedit", "aut");
                    put("voluptatibus", "exercitationem");
                    put("nulla", "fugit");
                }};
                filterLteq = new java.util.HashMap<String, Object>() {{
                    put("maiores", "doloribus");
                    put("iusto", "eligendi");
                    put("ducimus", "alias");
                    put("officia", "tempora");
                }};
                filterPrefix = new java.util.HashMap<String, Object>() {{
                    put("ea", "aspernatur");
                    put("vel", "possimus");
                }};
                perPage = 297842;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("ex", "laudantium");
                }};
            }};            

            GetExternalEventsResponse res = sdk.externalEvents.getExternalEvents(req);

            if (res.externalEventEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getExternalEventsId

Show External Event

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetExternalEventsIdRequest;
import org.openapis.openapi.models.operations.GetExternalEventsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetExternalEventsIdRequest req = new GetExternalEventsIdRequest(120657);            

            GetExternalEventsIdResponse res = sdk.externalEvents.getExternalEventsId(req);

            if (res.externalEventEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postExternalEvents

Create External Event

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostExternalEventsRequestBody;
import org.openapis.openapi.models.operations.PostExternalEventsRequestBodyStatusEnum;
import org.openapis.openapi.models.operations.PostExternalEventsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostExternalEventsRequestBody req = new PostExternalEventsRequestBody("example", PostExternalEventsRequestBodyStatusEnum.FAILURE);            

            PostExternalEventsResponse res = sdk.externalEvents.postExternalEvents(req);

            if (res.externalEventEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
