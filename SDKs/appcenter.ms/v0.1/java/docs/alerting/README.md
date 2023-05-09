# alerting

### Available Operations

* [bugTrackerGetRepoIssueFromCrash](#bugtrackergetrepoissuefromcrash) - Get project issue related to a crash group
* [bugtrackerGetSettings](#bugtrackergetsettings) - Get bug tracker settings for a particular app
* [notificationsGetAppEmailSettings](#notificationsgetappemailsettings) - Get Email notification settings of user for a particular app
* [notificationsGetUserEmailSettings](#notificationsgetuseremailsettings) - Get Default email notification settings for the user
* [webhooksList](#webhookslist) - Get web hooks configured for a particular app

## bugTrackerGetRepoIssueFromCrash

Get project issue related to a crash group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BugTrackerGetRepoIssueFromCrashRequest;
import org.openapis.openapi.models.operations.BugTrackerGetRepoIssueFromCrashResponse;
import org.openapis.openapi.models.operations.BugTrackerGetRepoIssueFromCrashSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BugTrackerGetRepoIssueFromCrashRequest req = new BugTrackerGetRepoIssueFromCrashRequest("odio", "similique", "facilis");            

            BugTrackerGetRepoIssueFromCrashResponse res = sdk.alerting.bugTrackerGetRepoIssueFromCrash(req, new BugTrackerGetRepoIssueFromCrashSecurity("vero") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.bugTrackerGetRepoIssueFromCrash200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bugtrackerGetSettings

Get bug tracker settings for a particular app

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BugtrackerGetSettingsRequest;
import org.openapis.openapi.models.operations.BugtrackerGetSettingsResponse;
import org.openapis.openapi.models.operations.BugtrackerGetSettingsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BugtrackerGetSettingsRequest req = new BugtrackerGetSettingsRequest("ducimus", "dolore");            

            BugtrackerGetSettingsResponse res = sdk.alerting.bugtrackerGetSettings(req, new BugtrackerGetSettingsSecurity("quibusdam") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.bugtrackerGetSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## notificationsGetAppEmailSettings

Get Email notification settings of user for a particular app

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotificationsGetAppEmailSettingsRequest;
import org.openapis.openapi.models.operations.NotificationsGetAppEmailSettingsResponse;
import org.openapis.openapi.models.operations.NotificationsGetAppEmailSettingsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotificationsGetAppEmailSettingsRequest req = new NotificationsGetAppEmailSettingsRequest("illum", "sequi");            

            NotificationsGetAppEmailSettingsResponse res = sdk.alerting.notificationsGetAppEmailSettings(req, new NotificationsGetAppEmailSettingsSecurity("natus") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.notificationsGetAppEmailSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## notificationsGetUserEmailSettings

Get Default email notification settings for the user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotificationsGetUserEmailSettingsResponse;
import org.openapis.openapi.models.operations.NotificationsGetUserEmailSettingsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotificationsGetUserEmailSettingsResponse res = sdk.alerting.notificationsGetUserEmailSettings(new NotificationsGetUserEmailSettingsSecurity("impedit") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.notificationsGetUserEmailSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## webhooksList

Get web hooks configured for a particular app

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebhooksListRequest;
import org.openapis.openapi.models.operations.WebhooksListResponse;
import org.openapis.openapi.models.operations.WebhooksListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebhooksListRequest req = new WebhooksListRequest("aut", "voluptatibus");            

            WebhooksListResponse res = sdk.alerting.webhooksList(req, new WebhooksListSecurity("exercitationem") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.webhooksList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
