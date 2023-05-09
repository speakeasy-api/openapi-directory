# notifications

## Overview

Operations about notifications

### Available Operations

* [deleteNotificationsId](#deletenotificationsid) - Delete Notification
* [getNotifications](#getnotifications) - List Notifications
* [getNotificationsId](#getnotificationsid) - Show Notification
* [patchNotificationsId](#patchnotificationsid) - Update Notification
* [postNotifications](#postnotifications) - Create Notification

## deleteNotificationsId

Delete Notification

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNotificationsIdRequest;
import org.openapis.openapi.models.operations.DeleteNotificationsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteNotificationsIdRequest req = new DeleteNotificationsIdRequest(274823);            

            DeleteNotificationsIdResponse res = sdk.notifications.deleteNotificationsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNotifications

List Notifications

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNotificationsRequest;
import org.openapis.openapi.models.operations.GetNotificationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNotificationsRequest req = new GetNotificationsRequest() {{
                cursor = "sed";
                filter = new java.util.HashMap<String, Object>() {{
                    put("eius", "necessitatibus");
                    put("ipsum", "ea");
                    put("occaecati", "quos");
                }};
                filterPrefix = new java.util.HashMap<String, Object>() {{
                    put("tempora", "tempora");
                    put("voluptate", "reiciendis");
                    put("ex", "sit");
                    put("non", "officiis");
                }};
                groupId = "praesentium";
                includeAncestors = false;
                path = "facilis";
                perPage = 310381;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("ipsam", "debitis");
                    put("rem", "sit");
                }};
                userId = 750595;
            }};            

            GetNotificationsResponse res = sdk.notifications.getNotifications(req);

            if (res.notificationEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNotificationsId

Show Notification

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNotificationsIdRequest;
import org.openapis.openapi.models.operations.GetNotificationsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNotificationsIdRequest req = new GetNotificationsIdRequest(625637);            

            GetNotificationsIdResponse res = sdk.notifications.getNotificationsId(req);

            if (res.notificationEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchNotificationsId

Update Notification

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchNotificationsIdRequest;
import org.openapis.openapi.models.operations.PatchNotificationsIdRequestBody;
import org.openapis.openapi.models.operations.PatchNotificationsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchNotificationsIdRequest req = new PatchNotificationsIdRequest(333507) {{
                requestBody = new PatchNotificationsIdRequestBody() {{
                    message = "custom notification email message";
                    notifyOnCopy = false;
                    notifyOnDelete = true;
                    notifyOnDownload = true;
                    notifyOnMove = true;
                    notifyOnUpload = true;
                    notifyUserActions = false;
                    recursive = false;
                    sendInterval = "daily";
                    triggerByShareRecipients = true;
                    triggeringFilenames = new String[]{{
                        add("recusandae"),
                        add("reiciendis"),
                    }};
                    triggeringGroupIds = new Integer[]{{
                        add(168576),
                        add(48690),
                        add(901483),
                        add(253642),
                    }};
                    triggeringUserIds = new Integer[]{{
                        add(446135),
                        add(889234),
                    }};
                }};;
            }};            

            PatchNotificationsIdResponse res = sdk.notifications.patchNotificationsId(req);

            if (res.notificationEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postNotifications

Create Notification

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostNotificationsRequestBody;
import org.openapis.openapi.models.operations.PostNotificationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostNotificationsRequestBody req = new PostNotificationsRequestBody() {{
                groupId = 104627;
                message = "custom notification email message";
                notifyOnCopy = false;
                notifyOnDelete = true;
                notifyOnDownload = true;
                notifyOnMove = true;
                notifyOnUpload = true;
                notifyUserActions = false;
                path = "laudantium";
                recursive = false;
                sendInterval = "daily";
                triggerByShareRecipients = true;
                triggeringFilenames = new String[]{{
                    add("praesentium"),
                    add("cum"),
                }};
                triggeringGroupIds = new Integer[]{{
                    add(680515),
                    add(530089),
                }};
                triggeringUserIds = new Integer[]{{
                    add(944708),
                    add(710529),
                    add(892863),
                }};
                userId = 204923;
                username = "Marianna_Heaney";
            }};            

            PostNotificationsResponse res = sdk.notifications.postNotifications(req);

            if (res.notificationEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
