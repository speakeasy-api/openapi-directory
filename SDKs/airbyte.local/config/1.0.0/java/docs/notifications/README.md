# notifications

### Available Operations

* [tryNotificationConfig](#trynotificationconfig) - Try sending a notifications

## tryNotificationConfig

Try sending a notifications

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TryNotificationConfigResponse;
import org.openapis.openapi.models.shared.Notification;
import org.openapis.openapi.models.shared.NotificationTypeEnum;
import org.openapis.openapi.models.shared.SlackNotificationConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.Notification req = new Notification(NotificationTypeEnum.SLACK, false, false) {{
                customerioConfiguration = new java.util.HashMap<String, Object>() {{
                    put("dignissimos", "minus");
                    put("distinctio", "possimus");
                    put("cum", "suscipit");
                    put("saepe", "earum");
                }};
                slackConfiguration = new SlackNotificationConfiguration("quod");;
            }};            

            TryNotificationConfigResponse res = sdk.notifications.tryNotificationConfig(req);

            if (res.notificationRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
