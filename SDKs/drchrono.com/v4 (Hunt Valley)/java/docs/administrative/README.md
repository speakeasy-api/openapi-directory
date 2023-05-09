# administrative

## Overview

Create and manage administrative resources

### Available Operations

* [doctorsList](#doctorslist) - Retrieve or search doctors within practice group
* [doctorsRead](#doctorsread) - Retrieve an existing dcotor
* [userGroupsList](#usergroupslist) - Retrieve or search user groups
* [userGroupsRead](#usergroupsread) - Retrieve an existing user group
* [usersList](#userslist) - Retrieve or search users, `/api/users/current` can be used to identify logged in user, it will redirect to `/api/users/{current_user_id}`
* [usersRead](#usersread) - Retrieve an existing user, `/api/users/current` can be used to identify logged in user, it will redirect to `/api/users/{current_user_id}`

## doctorsList

Retrieve or search doctors within practice group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DoctorsListRequest;
import org.openapis.openapi.models.operations.DoctorsListResponse;
import org.openapis.openapi.models.operations.DoctorsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoctorsListRequest req = new DoctorsListRequest() {{
                cursor = "unde";
                doctor = 857946L;
                pageSize = 544883L;
            }};            

            DoctorsListResponse res = sdk.administrative.doctorsList(req, new DoctorsListSecurity("illum") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.doctorsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## doctorsRead

Retrieve an existing dcotor

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DoctorsReadRequest;
import org.openapis.openapi.models.operations.DoctorsReadResponse;
import org.openapis.openapi.models.operations.DoctorsReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoctorsReadRequest req = new DoctorsReadRequest("vel") {{
                doctor = 623564L;
            }};            

            DoctorsReadResponse res = sdk.administrative.doctorsRead(req, new DoctorsReadSecurity("deserunt") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.doctor != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userGroupsList

Retrieve or search user groups

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserGroupsListRequest;
import org.openapis.openapi.models.operations.UserGroupsListResponse;
import org.openapis.openapi.models.operations.UserGroupsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UserGroupsListRequest req = new UserGroupsListRequest() {{
                cursor = "suscipit";
                doctor = 437587L;
                pageSize = 297534L;
            }};            

            UserGroupsListResponse res = sdk.administrative.userGroupsList(req, new UserGroupsListSecurity("debitis") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userGroupsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userGroupsRead

Retrieve an existing user group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserGroupsReadRequest;
import org.openapis.openapi.models.operations.UserGroupsReadResponse;
import org.openapis.openapi.models.operations.UserGroupsReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UserGroupsReadRequest req = new UserGroupsReadRequest("ipsa") {{
                doctor = 963663L;
            }};            

            UserGroupsReadResponse res = sdk.administrative.userGroupsRead(req, new UserGroupsReadSecurity("tempora") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userProfilesGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersList

Retrieve or search users, `/api/users/current` can be used to identify logged in user, it will redirect to `/api/users/{current_user_id}`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersListRequest;
import org.openapis.openapi.models.operations.UsersListResponse;
import org.openapis.openapi.models.operations.UsersListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersListRequest req = new UsersListRequest() {{
                cursor = "suscipit";
                doctor = 477665L;
                pageSize = 791725L;
            }};            

            UsersListResponse res = sdk.administrative.usersList(req, new UsersListSecurity("placeat") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.usersList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersRead

Retrieve an existing user, `/api/users/current` can be used to identify logged in user, it will redirect to `/api/users/{current_user_id}`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersReadRequest;
import org.openapis.openapi.models.operations.UsersReadResponse;
import org.openapis.openapi.models.operations.UsersReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersReadRequest req = new UsersReadRequest("voluptatum") {{
                doctor = 479977L;
            }};            

            UsersReadResponse res = sdk.administrative.usersRead(req, new UsersReadSecurity("excepturi") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userProfile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
