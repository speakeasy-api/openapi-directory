# notifications

## Overview

Notifications are templated email messages which can be sent to contributors. A notification might be used to request further information from a contributor or inform them when their contribution has been published.

### Available Operations

* [getNotificationsContributionsIdPreview](#getnotificationscontributionsidpreview)

## getNotificationsContributionsIdPreview

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNotificationsContributionsIdPreviewRequest;
import org.openapis.openapi.models.operations.GetNotificationsContributionsIdPreviewResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNotificationsContributionsIdPreviewRequest req = new GetNotificationsContributionsIdPreviewRequest("expedita", "deleniti");            

            GetNotificationsContributionsIdPreviewResponse res = sdk.notifications.getNotificationsContributionsIdPreview(req);

            if (res.notificationPreview != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
