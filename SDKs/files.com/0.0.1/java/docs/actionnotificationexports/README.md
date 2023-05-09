# actionNotificationExports

## Overview

Operations about action_notification_exports

### Available Operations

* [getActionNotificationExportsId](#getactionnotificationexportsid) - Show Action Notification Export
* [postActionNotificationExports](#postactionnotificationexports) - Create Action Notification Export

## getActionNotificationExportsId

Show Action Notification Export

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActionNotificationExportsIdRequest;
import org.openapis.openapi.models.operations.GetActionNotificationExportsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetActionNotificationExportsIdRequest req = new GetActionNotificationExportsIdRequest(423655);            

            GetActionNotificationExportsIdResponse res = sdk.actionNotificationExports.getActionNotificationExportsId(req);

            if (res.actionNotificationExportEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postActionNotificationExports

Create Action Notification Export

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostActionNotificationExportsRequestBody;
import org.openapis.openapi.models.operations.PostActionNotificationExportsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostActionNotificationExportsRequestBody req = new PostActionNotificationExportsRequestBody() {{
                endAt = OffsetDateTime.parse("2000-01-01T01:00:00Z");
                queryFolder = "MyFolder";
                queryMessage = "Connection Refused";
                queryPath = "MyFile.txt";
                queryRequestMethod = "GET";
                queryRequestUrl = "http://example.com/webhook";
                queryStatus = "200";
                querySuccess = true;
                startAt = OffsetDateTime.parse("2000-01-01T01:00:00Z");
                userId = 623564;
            }};            

            PostActionNotificationExportsResponse res = sdk.actionNotificationExports.postActionNotificationExports(req);

            if (res.actionNotificationExportEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
