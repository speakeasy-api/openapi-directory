# groupUsers

## Overview

Operations about group_users

### Available Operations

* [deleteGroupUsersId](#deletegroupusersid) - Delete Group User
* [getGroupUsers](#getgroupusers) - List Group Users
* [patchGroupUsersId](#patchgroupusersid) - Update Group User
* [postGroupUsers](#postgroupusers) - Create Group User

## deleteGroupUsersId

Delete Group User

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteGroupUsersIdRequest;
import org.openapis.openapi.models.operations.DeleteGroupUsersIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteGroupUsersIdRequest req = new DeleteGroupUsersIdRequest(414567, 959434, 174112);            

            DeleteGroupUsersIdResponse res = sdk.groupUsers.deleteGroupUsersId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGroupUsers

List Group Users

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGroupUsersRequest;
import org.openapis.openapi.models.operations.GetGroupUsersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGroupUsersRequest req = new GetGroupUsersRequest() {{
                cursor = "deserunt";
                groupId = 475289;
                perPage = 35362;
                userId = 783648;
            }};            

            GetGroupUsersResponse res = sdk.groupUsers.getGroupUsers(req);

            if (res.groupUserEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchGroupUsersId

Update Group User

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchGroupUsersIdRequest;
import org.openapis.openapi.models.operations.PatchGroupUsersIdRequestBody;
import org.openapis.openapi.models.operations.PatchGroupUsersIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchGroupUsersIdRequest req = new PatchGroupUsersIdRequest(                new PatchGroupUsersIdRequestBody(430402, 556429) {{
                                admin = false;
                            }};, 510017);            

            PatchGroupUsersIdResponse res = sdk.groupUsers.patchGroupUsersId(req);

            if (res.groupUserEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGroupUsers

Create Group User

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostGroupUsersRequestBody;
import org.openapis.openapi.models.operations.PostGroupUsersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostGroupUsersRequestBody req = new PostGroupUsersRequestBody(159867, 536178) {{
                admin = false;
            }};            

            PostGroupUsersResponse res = sdk.groupUsers.postGroupUsers(req);

            if (res.groupUserEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
