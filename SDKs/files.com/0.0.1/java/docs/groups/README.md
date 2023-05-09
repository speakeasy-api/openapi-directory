# groups

## Overview

Operations about groups

### Available Operations

* [deleteGroupsGroupIdMembershipsUserId](#deletegroupsgroupidmembershipsuserid) - Delete Group User
* [deleteGroupsId](#deletegroupsid) - Delete Group
* [getGroups](#getgroups) - List Groups
* [getGroupsGroupIdPermissions](#getgroupsgroupidpermissions) - List Permissions
* [getGroupsGroupIdUsers](#getgroupsgroupidusers) - List Group Users
* [getGroupsId](#getgroupsid) - Show Group
* [patchGroupsGroupIdMembershipsUserId](#patchgroupsgroupidmembershipsuserid) - Update Group User
* [patchGroupsId](#patchgroupsid) - Update Group
* [postGroups](#postgroups) - Create Group
* [postGroupsGroupIdUsers](#postgroupsgroupidusers) - Create User

## deleteGroupsGroupIdMembershipsUserId

Delete Group User

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteGroupsGroupIdMembershipsUserIdRequest;
import org.openapis.openapi.models.operations.DeleteGroupsGroupIdMembershipsUserIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteGroupsGroupIdMembershipsUserIdRequest req = new DeleteGroupsGroupIdMembershipsUserIdRequest(143829, 681393);            

            DeleteGroupsGroupIdMembershipsUserIdResponse res = sdk.groups.deleteGroupsGroupIdMembershipsUserId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteGroupsId

Delete Group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteGroupsIdRequest;
import org.openapis.openapi.models.operations.DeleteGroupsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteGroupsIdRequest req = new DeleteGroupsIdRequest(649463);            

            DeleteGroupsIdResponse res = sdk.groups.deleteGroupsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGroups

List Groups

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGroupsRequest;
import org.openapis.openapi.models.operations.GetGroupsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGroupsRequest req = new GetGroupsRequest() {{
                cursor = "incidunt";
                filter = new java.util.HashMap<String, Object>() {{
                    put("explicabo", "minima");
                    put("nisi", "fugit");
                    put("sapiente", "consequuntur");
                }};
                filterPrefix = new java.util.HashMap<String, Object>() {{
                    put("explicabo", "saepe");
                }};
                ids = "occaecati";
                perPage = 543806;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("esse", "eveniet");
                }};
            }};            

            GetGroupsResponse res = sdk.groups.getGroups(req);

            if (res.groupEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGroupsGroupIdPermissions

List Permissions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGroupsGroupIdPermissionsRequest;
import org.openapis.openapi.models.operations.GetGroupsGroupIdPermissionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGroupsGroupIdPermissionsRequest req = new GetGroupsGroupIdPermissionsRequest("accusamus") {{
                cursor = "veritatis";
                filter = new java.util.HashMap<String, Object>() {{
                    put("quod", "nam");
                    put("vero", "aliquid");
                }};
                filterPrefix = new java.util.HashMap<String, Object>() {{
                    put("saepe", "vel");
                }};
                includeGroups = false;
                path = "harum";
                perPage = 473221;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("occaecati", "minima");
                    put("distinctio", "eligendi");
                    put("sit", "culpa");
                }};
                userId = "tempore";
            }};            

            GetGroupsGroupIdPermissionsResponse res = sdk.groups.getGroupsGroupIdPermissions(req);

            if (res.permissionEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGroupsGroupIdUsers

List Group Users

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGroupsGroupIdUsersRequest;
import org.openapis.openapi.models.operations.GetGroupsGroupIdUsersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGroupsGroupIdUsersRequest req = new GetGroupsGroupIdUsersRequest(240020) {{
                cursor = "cumque";
                perPage = 160538;
                userId = 9766;
            }};            

            GetGroupsGroupIdUsersResponse res = sdk.groups.getGroupsGroupIdUsers(req);

            if (res.groupUserEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGroupsId

Show Group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGroupsIdRequest;
import org.openapis.openapi.models.operations.GetGroupsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGroupsIdRequest req = new GetGroupsIdRequest(796392);            

            GetGroupsIdResponse res = sdk.groups.getGroupsId(req);

            if (res.groupEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchGroupsGroupIdMembershipsUserId

Update Group User

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchGroupsGroupIdMembershipsUserIdRequest;
import org.openapis.openapi.models.operations.PatchGroupsGroupIdMembershipsUserIdRequestBody;
import org.openapis.openapi.models.operations.PatchGroupsGroupIdMembershipsUserIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchGroupsGroupIdMembershipsUserIdRequest req = new PatchGroupsGroupIdMembershipsUserIdRequest(308286, 959167) {{
                requestBody = new PatchGroupsGroupIdMembershipsUserIdRequestBody() {{
                    admin = false;
                }};;
            }};            

            PatchGroupsGroupIdMembershipsUserIdResponse res = sdk.groups.patchGroupsGroupIdMembershipsUserId(req);

            if (res.groupUserEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchGroupsId

Update Group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchGroupsIdRequest;
import org.openapis.openapi.models.operations.PatchGroupsIdRequestBody;
import org.openapis.openapi.models.operations.PatchGroupsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchGroupsIdRequest req = new PatchGroupsIdRequest(232865) {{
                requestBody = new PatchGroupsIdRequestBody() {{
                    adminIds = "esse";
                    name = "Eduardo Wilkinson";
                    notes = "esse";
                    userIds = "quasi";
                }};;
            }};            

            PatchGroupsIdResponse res = sdk.groups.patchGroupsId(req);

            if (res.groupEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGroups

Create Group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostGroupsRequestBody;
import org.openapis.openapi.models.operations.PostGroupsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostGroupsRequestBody req = new PostGroupsRequestBody() {{
                adminIds = "a";
                name = "Kirk Stracke";
                notes = "eveniet";
                userIds = "asperiores";
            }};            

            PostGroupsResponse res = sdk.groups.postGroups(req);

            if (res.groupEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGroupsGroupIdUsers

Create User

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostGroupsGroupIdUsersRequest;
import org.openapis.openapi.models.operations.PostGroupsGroupIdUsersRequestBody;
import org.openapis.openapi.models.operations.PostGroupsGroupIdUsersRequestBodyAuthenticationMethodEnum;
import org.openapis.openapi.models.operations.PostGroupsGroupIdUsersRequestBodyAvatarFile;
import org.openapis.openapi.models.operations.PostGroupsGroupIdUsersRequestBodyRequire2faEnum;
import org.openapis.openapi.models.operations.PostGroupsGroupIdUsersRequestBodySslRequiredEnum;
import org.openapis.openapi.models.operations.PostGroupsGroupIdUsersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostGroupsGroupIdUsersRequest req = new PostGroupsGroupIdUsersRequest(815524) {{
                requestBody = new PostGroupsGroupIdUsersRequestBody() {{
                    allowedIps = "127.0.0.1";
                    announcementsRead = false;
                    attachmentsPermission = true;
                    authenticateUntil = OffsetDateTime.parse("2000-01-01T01:00:00Z");
                    authenticationMethod = PostGroupsGroupIdUsersRequestBodyAuthenticationMethodEnum.PASSWORD;
                    avatarDelete = false;
                    avatarFile = new PostGroupsGroupIdUsersRequestBodyAvatarFile("veritatis", "consequuntur".getBytes());;
                    billingPermission = false;
                    bypassInactiveDisable = false;
                    bypassSiteAllowedIps = false;
                    changePassword = "quasi";
                    changePasswordConfirmation = "similique";
                    company = "ACME Corp.";
                    davPermission = true;
                    disabled = true;
                    email = "Grayce93@yahoo.com";
                    ftpPermission = true;
                    grantPermission = "vel";
                    groupIds = "in";
                    headerText = "User-specific message.";
                    importedPasswordHash = "eius";
                    language = "en";
                    name = "John Doe";
                    notes = "Internal notes on this user.";
                    notificationDailySendTime = 18;
                    officeIntegrationEnabled = true;
                    password = "libero";
                    passwordConfirmation = "illum";
                    passwordValidityDays = 1;
                    receiveAdminAlerts = true;
                    require2fa = PostGroupsGroupIdUsersRequestBodyRequire2faEnum.ALWAYS_REQUIRE;
                    requirePasswordChange = true;
                    restapiPermission = true;
                    selfManaged = true;
                    sftpPermission = true;
                    siteAdmin = true;
                    skipWelcomeScreen = true;
                    sslRequired = PostGroupsGroupIdUsersRequestBodySslRequiredEnum.ALWAYS_REQUIRE;
                    ssoStrategyId = 1;
                    subscribeToNewsletter = true;
                    timeZone = "Pacific Time (US & Canada)";
                    userRoot = "example";
                    username = "user";
                }};;
            }};            

            PostGroupsGroupIdUsersResponse res = sdk.groups.postGroupsGroupIdUsers(req);

            if (res.userEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
