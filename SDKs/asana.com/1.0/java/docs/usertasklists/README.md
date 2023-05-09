# userTaskLists

## Overview

A user task list represents the tasks assigned to a particular user. This list is the user's [My Tasks](https://asana.com/guide/help/fundamentals/my-tasks) list.

### Available Operations

* [getUserTaskList](#getusertasklist) - Get a user task list
* [getUserTaskListForUser](#getusertasklistforuser) - Get a user's task list

## getUserTaskList

Returns the full record for a user task list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserTaskListRequest;
import org.openapis.openapi.models.operations.GetUserTaskListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetUserTaskListRequest req = new GetUserTaskListRequest("tempora") {{
                optFields = new String[]{{
                    add("fugit"),
                    add("ut"),
                    add("fugiat"),
                }};
                optPretty = false;
            }};            

            GetUserTaskListResponse res = sdk.userTaskLists.getUserTaskList(req);

            if (res.getUserTaskList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserTaskListForUser

Returns the full record for a user's task list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserTaskListForUserRequest;
import org.openapis.openapi.models.operations.GetUserTaskListForUserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetUserTaskListForUserRequest req = new GetUserTaskListForUserRequest("voluptatem", "culpa") {{
                optFields = new String[]{{
                    add("magnam"),
                    add("consequatur"),
                    add("esse"),
                }};
                optPretty = false;
            }};            

            GetUserTaskListForUserResponse res = sdk.userTaskLists.getUserTaskListForUser(req);

            if (res.getUserTaskListForUser200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
