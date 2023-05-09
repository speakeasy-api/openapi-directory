# notification

### Available Operations

* [notifyGetList](#notifygetlist) - List users's notification threads
* [notifyGetRepoList](#notifygetrepolist) - List users's notification threads on a specific repo
* [notifyGetThread](#notifygetthread) - Get notification thread by ID
* [notifyNewAvailable](#notifynewavailable) - Check if unread notifications exist
* [notifyReadList](#notifyreadlist) - Mark notification threads as read, pinned or unread
* [notifyReadRepoList](#notifyreadrepolist) - Mark notification threads as read, pinned or unread on a specific repo
* [notifyReadThread](#notifyreadthread) - Mark notification thread as read by ID

## notifyGetList

List users's notification threads

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotifyGetListRequest;
import org.openapis.openapi.models.operations.NotifyGetListResponse;
import org.openapis.openapi.models.operations.NotifyGetListSubjectTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            NotifyGetListRequest req = new NotifyGetListRequest() {{
                all = false;
                before = OffsetDateTime.parse("2022-08-24T04:49:56.144Z");
                limit = 722081L;
                page = 940432L;
                since = OffsetDateTime.parse("2022-03-27T15:45:02.604Z");
                statusTypes = new String[]{{
                    add("nobis"),
                    add("et"),
                    add("saepe"),
                }};
                subjectType = new org.openapis.openapi.models.operations.NotifyGetListSubjectTypeEnum[]{{
                    add(NotifyGetListSubjectTypeEnum.ISSUE),
                }};
            }};            

            NotifyGetListResponse res = sdk.notification.notifyGetList(req);

            if (res.notificationThreads != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## notifyGetRepoList

List users's notification threads on a specific repo

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotifyGetRepoListRequest;
import org.openapis.openapi.models.operations.NotifyGetRepoListResponse;
import org.openapis.openapi.models.operations.NotifyGetRepoListSubjectTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            NotifyGetRepoListRequest req = new NotifyGetRepoListRequest("nobis", "quos") {{
                all = false;
                before = OffsetDateTime.parse("2021-10-31T07:58:44.750Z");
                limit = 45614L;
                page = 961937L;
                since = OffsetDateTime.parse("2022-09-16T08:47:14.764Z");
                statusTypes = new String[]{{
                    add("adipisci"),
                    add("dolorum"),
                }};
                subjectType = new org.openapis.openapi.models.operations.NotifyGetRepoListSubjectTypeEnum[]{{
                    add(NotifyGetRepoListSubjectTypeEnum.ISSUE),
                }};
            }};            

            NotifyGetRepoListResponse res = sdk.notification.notifyGetRepoList(req);

            if (res.notificationThreads != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## notifyGetThread

Get notification thread by ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotifyGetThreadRequest;
import org.openapis.openapi.models.operations.NotifyGetThreadResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            NotifyGetThreadRequest req = new NotifyGetThreadRequest("aut");            

            NotifyGetThreadResponse res = sdk.notification.notifyGetThread(req);

            if (res.notificationThread != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## notifyNewAvailable

Check if unread notifications exist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotifyNewAvailableResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            NotifyNewAvailableResponse res = sdk.notification.notifyNewAvailable();

            if (res.notificationCount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## notifyReadList

Mark notification threads as read, pinned or unread

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotifyReadListRequest;
import org.openapis.openapi.models.operations.NotifyReadListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            NotifyReadListRequest req = new NotifyReadListRequest() {{
                all = "quas";
                lastReadAt = OffsetDateTime.parse("2022-12-21T21:10:14.455Z");
                statusTypes = new String[]{{
                    add("repellendus"),
                    add("porro"),
                    add("doloribus"),
                }};
                toStatus = "ut";
            }};            

            NotifyReadListResponse res = sdk.notification.notifyReadList(req);

            if (res.notificationThreads != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## notifyReadRepoList

Mark notification threads as read, pinned or unread on a specific repo

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotifyReadRepoListRequest;
import org.openapis.openapi.models.operations.NotifyReadRepoListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            NotifyReadRepoListRequest req = new NotifyReadRepoListRequest("facilis", "cupiditate") {{
                all = "qui";
                lastReadAt = OffsetDateTime.parse("2022-06-27T23:25:59.184Z");
                statusTypes = new String[]{{
                    add("occaecati"),
                    add("voluptatibus"),
                }};
                toStatus = "quisquam";
            }};            

            NotifyReadRepoListResponse res = sdk.notification.notifyReadRepoList(req);

            if (res.notificationThreads != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## notifyReadThread

Mark notification thread as read by ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotifyReadThreadRequest;
import org.openapis.openapi.models.operations.NotifyReadThreadResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            NotifyReadThreadRequest req = new NotifyReadThreadRequest("vero") {{
                toStatus = "omnis";
            }};            

            NotifyReadThreadResponse res = sdk.notification.notifyReadThread(req);

            if (res.notificationThread != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
