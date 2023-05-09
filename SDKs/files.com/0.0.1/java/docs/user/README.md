# user

## Overview

Operations about users

### Available Operations

* [getUserApiKeys](#getuserapikeys) - List Api Keys
* [getUserGroups](#getusergroups) - List Group Users
* [getUserPublicKeys](#getuserpublickeys) - List Public Keys
* [patchUser](#patchuser) - Update User
* [postUserApiKeys](#postuserapikeys) - Create Api Key
* [postUserPublicKeys](#postuserpublickeys) - Create Public Key

## getUserApiKeys

List Api Keys

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserApiKeysRequest;
import org.openapis.openapi.models.operations.GetUserApiKeysResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserApiKeysRequest req = new GetUserApiKeysRequest() {{
                cursor = "veniam";
                filter = new java.util.HashMap<String, Object>() {{
                    put("expedita", "eum");
                }};
                filterGt = new java.util.HashMap<String, Object>() {{
                    put("voluptatum", "magnam");
                    put("exercitationem", "ab");
                }};
                filterGteq = new java.util.HashMap<String, Object>() {{
                    put("autem", "nobis");
                    put("laboriosam", "recusandae");
                    put("consequuntur", "voluptatem");
                    put("exercitationem", "necessitatibus");
                }};
                filterLt = new java.util.HashMap<String, Object>() {{
                    put("nisi", "at");
                }};
                filterLteq = new java.util.HashMap<String, Object>() {{
                    put("est", "harum");
                    put("sequi", "doloribus");
                    put("repudiandae", "optio");
                    put("occaecati", "nemo");
                }};
                perPage = 455898;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("officia", "voluptas");
                    put("numquam", "nemo");
                    put("quos", "eius");
                }};
                userId = 131903;
            }};            

            GetUserApiKeysResponse res = sdk.user.getUserApiKeys(req);

            if (res.apiKeyEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserGroups

List Group Users

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserGroupsRequest;
import org.openapis.openapi.models.operations.GetUserGroupsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserGroupsRequest req = new GetUserGroupsRequest() {{
                cursor = "ducimus";
                groupId = 200516;
                perPage = 681740;
                userId = 514054;
            }};            

            GetUserGroupsResponse res = sdk.user.getUserGroups(req);

            if (res.groupUserEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserPublicKeys

List Public Keys

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserPublicKeysRequest;
import org.openapis.openapi.models.operations.GetUserPublicKeysResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserPublicKeysRequest req = new GetUserPublicKeysRequest() {{
                cursor = "incidunt";
                perPage = 97493;
                userId = 524380;
            }};            

            GetUserPublicKeysResponse res = sdk.user.getUserPublicKeys(req);

            if (res.publicKeyEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchUser

Update User

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchUserRequestBody;
import org.openapis.openapi.models.operations.PatchUserRequestBodyAuthenticationMethodEnum;
import org.openapis.openapi.models.operations.PatchUserRequestBodyAvatarFile;
import org.openapis.openapi.models.operations.PatchUserRequestBodyRequire2faEnum;
import org.openapis.openapi.models.operations.PatchUserRequestBodySslRequiredEnum;
import org.openapis.openapi.models.operations.PatchUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchUserRequestBody req = new PatchUserRequestBody() {{
                allowedIps = "127.0.0.1";
                announcementsRead = false;
                attachmentsPermission = true;
                authenticateUntil = OffsetDateTime.parse("2000-01-01T01:00:00Z");
                authenticationMethod = PatchUserRequestBodyAuthenticationMethodEnum.PASSWORD;
                avatarDelete = false;
                avatarFile = new PatchUserRequestBodyAvatarFile("fugiat", "dicta".getBytes());;
                billingPermission = false;
                bypassInactiveDisable = false;
                bypassSiteAllowedIps = false;
                changePassword = "nisi";
                changePasswordConfirmation = "consequuntur";
                company = "ACME Corp.";
                davPermission = true;
                disabled = true;
                email = "Alycia_McDermott0@gmail.com";
                ftpPermission = true;
                grantPermission = "omnis";
                groupId = 178580;
                groupIds = "occaecati";
                headerText = "User-specific message.";
                importedPasswordHash = "iste";
                language = "en";
                name = "John Doe";
                notes = "Internal notes on this user.";
                notificationDailySendTime = 18;
                officeIntegrationEnabled = true;
                password = "magni";
                passwordConfirmation = "inventore";
                passwordValidityDays = 1;
                receiveAdminAlerts = true;
                require2fa = PatchUserRequestBodyRequire2faEnum.ALWAYS_REQUIRE;
                requirePasswordChange = true;
                restapiPermission = true;
                selfManaged = true;
                sftpPermission = true;
                siteAdmin = true;
                skipWelcomeScreen = true;
                sslRequired = PatchUserRequestBodySslRequiredEnum.ALWAYS_REQUIRE;
                ssoStrategyId = 1;
                subscribeToNewsletter = true;
                timeZone = "Pacific Time (US & Canada)";
                userRoot = "example";
                username = "user";
            }};            

            PatchUserResponse res = sdk.user.patchUser(req);

            if (res.userEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUserApiKeys

Create Api Key

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUserApiKeysRequestBody;
import org.openapis.openapi.models.operations.PostUserApiKeysRequestBodyPermissionSetEnum;
import org.openapis.openapi.models.operations.PostUserApiKeysResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostUserApiKeysRequestBody req = new PostUserApiKeysRequestBody() {{
                description = "example";
                expiresAt = OffsetDateTime.parse("2000-01-01T01:00:00Z");
                name = "My Main API Key";
                path = "shared/docs";
                permissionSet = PostUserApiKeysRequestBodyPermissionSetEnum.FULL;
                userId = 686362;
            }};            

            PostUserApiKeysResponse res = sdk.user.postUserApiKeys(req);

            if (res.apiKeyEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUserPublicKeys

Create Public Key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUserPublicKeysRequestBody;
import org.openapis.openapi.models.operations.PostUserPublicKeysResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostUserPublicKeysRequestBody req = new PostUserPublicKeysRequestBody("accusamus", "My Main Key") {{
                userId = 976802;
            }};            

            PostUserPublicKeysResponse res = sdk.user.postUserPublicKeys(req);

            if (res.publicKeyEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
