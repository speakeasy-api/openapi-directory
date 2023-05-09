# bundleNotifications

## Overview

Operations about bundle_notifications

### Available Operations

* [deleteBundleNotificationsId](#deletebundlenotificationsid) - Delete Bundle Notification
* [getBundleNotifications](#getbundlenotifications) - List Bundle Notifications
* [getBundleNotificationsId](#getbundlenotificationsid) - Show Bundle Notification
* [patchBundleNotificationsId](#patchbundlenotificationsid) - Update Bundle Notification
* [postBundleNotifications](#postbundlenotifications) - Create Bundle Notification

## deleteBundleNotificationsId

Delete Bundle Notification

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBundleNotificationsIdRequest;
import org.openapis.openapi.models.operations.DeleteBundleNotificationsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteBundleNotificationsIdRequest req = new DeleteBundleNotificationsIdRequest(758379);            

            DeleteBundleNotificationsIdResponse res = sdk.bundleNotifications.deleteBundleNotificationsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBundleNotifications

List Bundle Notifications

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBundleNotificationsRequest;
import org.openapis.openapi.models.operations.GetBundleNotificationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBundleNotificationsRequest req = new GetBundleNotificationsRequest() {{
                bundleId = "accusamus";
                cursor = "ad";
                filter = new java.util.HashMap<String, Object>() {{
                    put("suscipit", "deserunt");
                    put("provident", "minima");
                    put("repellendus", "totam");
                    put("similique", "alias");
                }};
                perPage = 872651;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("tempora", "vel");
                    put("quod", "officiis");
                }};
                userId = 185636;
            }};            

            GetBundleNotificationsResponse res = sdk.bundleNotifications.getBundleNotifications(req);

            if (res.bundleNotificationEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBundleNotificationsId

Show Bundle Notification

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBundleNotificationsIdRequest;
import org.openapis.openapi.models.operations.GetBundleNotificationsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBundleNotificationsIdRequest req = new GetBundleNotificationsIdRequest(679880);            

            GetBundleNotificationsIdResponse res = sdk.bundleNotifications.getBundleNotificationsId(req);

            if (res.bundleNotificationEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchBundleNotificationsId

Update Bundle Notification

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchBundleNotificationsIdRequest;
import org.openapis.openapi.models.operations.PatchBundleNotificationsIdRequestBody;
import org.openapis.openapi.models.operations.PatchBundleNotificationsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchBundleNotificationsIdRequest req = new PatchBundleNotificationsIdRequest(952792) {{
                requestBody = new PatchBundleNotificationsIdRequestBody() {{
                    notifyOnRegistration = true;
                    notifyOnUpload = true;
                }};;
            }};            

            PatchBundleNotificationsIdResponse res = sdk.bundleNotifications.patchBundleNotificationsId(req);

            if (res.bundleNotificationEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postBundleNotifications

Create Bundle Notification

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostBundleNotificationsRequestBody;
import org.openapis.openapi.models.operations.PostBundleNotificationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostBundleNotificationsRequestBody req = new PostBundleNotificationsRequestBody(1) {{
                notifyOnRegistration = true;
                notifyOnUpload = true;
                userId = 1;
            }};            

            PostBundleNotificationsResponse res = sdk.bundleNotifications.postBundleNotifications(req);

            if (res.bundleNotificationEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
