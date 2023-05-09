# appPkgmNotifications

## Overview

App Package management notifications

### Available Operations

* [appPkgNotificationPOST](#apppkgnotificationpost) - Registers a notification endpoint to notify application package operations

## appPkgNotificationPOST

Registers a notification endpoint to notify application package operations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppPkgNotificationPOSTResponse;
import org.openapis.openapi.models.shared.AppPkgNotification;
import org.openapis.openapi.models.shared.AppPkgNotificationLinks;
import org.openapis.openapi.models.shared.AppPkgNotificationOperationalStateEnum;
import org.openapis.openapi.models.shared.AppPkgNotificationTypeEnum;
import org.openapis.openapi.models.shared.LinkType;
import org.openapis.openapi.models.shared.TimeStamp;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.AppPkgNotification req = new AppPkgNotification(                new AppPkgNotificationLinks(                new LinkType("http://dental-schedule.net"););, "esse", "ipsum", "excepturi", AppPkgNotificationTypeEnum.APP_PACKAGE_ON_BOARDED, AppPkgNotificationOperationalStateEnum.DISABLED, "ad",                 new TimeStamp(617636L, 149675L););            

            AppPkgNotificationPOSTResponse res = sdk.appPkgmNotifications.appPkgNotificationPOST(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
