# users

## Overview

Operations about users

### Available Operations

* [deleteUsersId](#deleteusersid) - Delete User
* [getUsers](#getusers) - List Users
* [getUsersId](#getusersid) - Show User
* [getUsersUserIdApiKeys](#getusersuseridapikeys) - List Api Keys
* [getUsersUserIdCipherUses](#getusersuseridcipheruses) - List User Cipher Uses
* [getUsersUserIdGroups](#getusersuseridgroups) - List Group Users
* [getUsersUserIdPermissions](#getusersuseridpermissions) - List Permissions
* [getUsersUserIdPublicKeys](#getusersuseridpublickeys) - List Public Keys
* [patchUsersId](#patchusersid) - Update User
* [postUsers](#postusers) - Create User
* [postUsersId2faReset](#postusersid2fareset) - Trigger 2FA Reset process for user who has lost access to their existing 2FA methods.
* [postUsersIdResendWelcomeEmail](#postusersidresendwelcomeemail) - Resend user welcome email
* [postUsersIdUnlock](#postusersidunlock) - Unlock user who has been locked out due to failed logins.
* [postUsersUserIdApiKeys](#postusersuseridapikeys) - Create Api Key
* [postUsersUserIdPublicKeys](#postusersuseridpublickeys) - Create Public Key

## deleteUsersId

Delete User

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUsersIdRequest;
import org.openapis.openapi.models.operations.DeleteUsersIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUsersIdRequest req = new DeleteUsersIdRequest(930819);            

            DeleteUsersIdResponse res = sdk.users.deleteUsersId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsers

List Users

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersRequest;
import org.openapis.openapi.models.operations.GetUsersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersRequest req = new GetUsersRequest() {{
                cursor = "commodi";
                filter = new java.util.HashMap<String, Object>() {{
                    put("earum", "modi");
                    put("nam", "vero");
                    put("voluptatem", "ipsam");
                }};
                filterGt = new java.util.HashMap<String, Object>() {{
                    put("alias", "quasi");
                    put("non", "maiores");
                }};
                filterGteq = new java.util.HashMap<String, Object>() {{
                    put("sint", "nulla");
                    put("deserunt", "esse");
                }};
                filterLt = new java.util.HashMap<String, Object>() {{
                    put("reprehenderit", "est");
                    put("quis", "sint");
                }};
                filterLteq = new java.util.HashMap<String, Object>() {{
                    put("impedit", "hic");
                    put("necessitatibus", "asperiores");
                    put("ex", "voluptas");
                    put("debitis", "delectus");
                }};
                filterPrefix = new java.util.HashMap<String, Object>() {{
                    put("minus", "fuga");
                }};
                ids = "laborum";
                perPage = 231070;
                qAdmin = "velit";
                qAllowedIps = "atque";
                qEmail = "ipsum";
                qNotes = "impedit";
                qPasswordValidityDays = "magni";
                qSslRequired = "soluta";
                qUsername = "repudiandae";
                search = "nam";
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("iusto", "voluptate");
                    put("sequi", "dignissimos");
                }};
            }};            

            GetUsersResponse res = sdk.users.getUsers(req);

            if (res.userEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersId

Show User

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdRequest;
import org.openapis.openapi.models.operations.GetUsersIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdRequest req = new GetUsersIdRequest(205566);            

            GetUsersIdResponse res = sdk.users.getUsersId(req);

            if (res.userEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersUserIdApiKeys

List Api Keys

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersUserIdApiKeysRequest;
import org.openapis.openapi.models.operations.GetUsersUserIdApiKeysResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersUserIdApiKeysRequest req = new GetUsersUserIdApiKeysRequest(778172) {{
                cursor = "deleniti";
                filter = new java.util.HashMap<String, Object>() {{
                    put("iure", "odit");
                    put("voluptatibus", "vel");
                    put("magnam", "quibusdam");
                    put("inventore", "facere");
                }};
                filterGt = new java.util.HashMap<String, Object>() {{
                    put("architecto", "voluptatibus");
                    put("quia", "porro");
                    put("aliquam", "velit");
                }};
                filterGteq = new java.util.HashMap<String, Object>() {{
                    put("accusantium", "vel");
                }};
                filterLt = new java.util.HashMap<String, Object>() {{
                    put("beatae", "vero");
                    put("excepturi", "eum");
                }};
                filterLteq = new java.util.HashMap<String, Object>() {{
                    put("ut", "perspiciatis");
                }};
                perPage = 935302;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("impedit", "voluptatibus");
                }};
            }};            

            GetUsersUserIdApiKeysResponse res = sdk.users.getUsersUserIdApiKeys(req);

            if (res.apiKeyEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersUserIdCipherUses

List User Cipher Uses

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersUserIdCipherUsesRequest;
import org.openapis.openapi.models.operations.GetUsersUserIdCipherUsesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersUserIdCipherUsesRequest req = new GetUsersUserIdCipherUsesRequest(610987) {{
                cursor = "itaque";
                perPage = 2677;
            }};            

            GetUsersUserIdCipherUsesResponse res = sdk.users.getUsersUserIdCipherUses(req);

            if (res.userCipherUseEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersUserIdGroups

List Group Users

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersUserIdGroupsRequest;
import org.openapis.openapi.models.operations.GetUsersUserIdGroupsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersUserIdGroupsRequest req = new GetUsersUserIdGroupsRequest(391797) {{
                cursor = "itaque";
                groupId = 242178;
                perPage = 673838;
            }};            

            GetUsersUserIdGroupsResponse res = sdk.users.getUsersUserIdGroups(req);

            if (res.groupUserEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersUserIdPermissions

List Permissions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersUserIdPermissionsRequest;
import org.openapis.openapi.models.operations.GetUsersUserIdPermissionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersUserIdPermissionsRequest req = new GetUsersUserIdPermissionsRequest("non") {{
                cursor = "dolor";
                filter = new java.util.HashMap<String, Object>() {{
                    put("sit", "doloremque");
                    put("consequatur", "officia");
                }};
                filterPrefix = new java.util.HashMap<String, Object>() {{
                    put("ea", "quidem");
                    put("voluptas", "facilis");
                    put("placeat", "perspiciatis");
                    put("expedita", "deleniti");
                }};
                groupId = "a";
                includeGroups = false;
                path = "voluptate";
                perPage = 351936;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("necessitatibus", "animi");
                    put("impedit", "ipsam");
                    put("corporis", "est");
                }};
            }};            

            GetUsersUserIdPermissionsResponse res = sdk.users.getUsersUserIdPermissions(req);

            if (res.permissionEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersUserIdPublicKeys

List Public Keys

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersUserIdPublicKeysRequest;
import org.openapis.openapi.models.operations.GetUsersUserIdPublicKeysResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersUserIdPublicKeysRequest req = new GetUsersUserIdPublicKeysRequest(621666) {{
                cursor = "esse";
                perPage = 288570;
            }};            

            GetUsersUserIdPublicKeysResponse res = sdk.users.getUsersUserIdPublicKeys(req);

            if (res.publicKeyEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchUsersId

Update User

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchUsersIdRequest;
import org.openapis.openapi.models.operations.PatchUsersIdRequestBody;
import org.openapis.openapi.models.operations.PatchUsersIdRequestBodyAuthenticationMethodEnum;
import org.openapis.openapi.models.operations.PatchUsersIdRequestBodyAvatarFile;
import org.openapis.openapi.models.operations.PatchUsersIdRequestBodyRequire2faEnum;
import org.openapis.openapi.models.operations.PatchUsersIdRequestBodySslRequiredEnum;
import org.openapis.openapi.models.operations.PatchUsersIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchUsersIdRequest req = new PatchUsersIdRequest(85066) {{
                requestBody = new PatchUsersIdRequestBody() {{
                    allowedIps = "127.0.0.1";
                    announcementsRead = false;
                    attachmentsPermission = true;
                    authenticateUntil = OffsetDateTime.parse("2000-01-01T01:00:00Z");
                    authenticationMethod = PatchUsersIdRequestBodyAuthenticationMethodEnum.PASSWORD;
                    avatarDelete = false;
                    avatarFile = new PatchUsersIdRequestBodyAvatarFile("vero", "consectetur".getBytes());;
                    billingPermission = false;
                    bypassInactiveDisable = false;
                    bypassSiteAllowedIps = false;
                    changePassword = "vitae";
                    changePasswordConfirmation = "inventore";
                    company = "ACME Corp.";
                    davPermission = true;
                    disabled = true;
                    email = "Emory.Deckow@gmail.com";
                    ftpPermission = true;
                    grantPermission = "nemo";
                    groupId = 745233;
                    groupIds = "libero";
                    headerText = "User-specific message.";
                    importedPasswordHash = "rem";
                    language = "en";
                    name = "John Doe";
                    notes = "Internal notes on this user.";
                    notificationDailySendTime = 18;
                    officeIntegrationEnabled = true;
                    password = "dolorum";
                    passwordConfirmation = "odio";
                    passwordValidityDays = 1;
                    receiveAdminAlerts = true;
                    require2fa = PatchUsersIdRequestBodyRequire2faEnum.ALWAYS_REQUIRE;
                    requirePasswordChange = true;
                    restapiPermission = true;
                    selfManaged = true;
                    sftpPermission = true;
                    siteAdmin = true;
                    skipWelcomeScreen = true;
                    sslRequired = PatchUsersIdRequestBodySslRequiredEnum.ALWAYS_REQUIRE;
                    ssoStrategyId = 1;
                    subscribeToNewsletter = true;
                    timeZone = "Pacific Time (US & Canada)";
                    userRoot = "example";
                    username = "user";
                }};;
            }};            

            PatchUsersIdResponse res = sdk.users.patchUsersId(req);

            if (res.userEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUsers

Create User

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsersRequestBody;
import org.openapis.openapi.models.operations.PostUsersRequestBodyAuthenticationMethodEnum;
import org.openapis.openapi.models.operations.PostUsersRequestBodyAvatarFile;
import org.openapis.openapi.models.operations.PostUsersRequestBodyRequire2faEnum;
import org.openapis.openapi.models.operations.PostUsersRequestBodySslRequiredEnum;
import org.openapis.openapi.models.operations.PostUsersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostUsersRequestBody req = new PostUsersRequestBody() {{
                allowedIps = "127.0.0.1";
                announcementsRead = false;
                attachmentsPermission = true;
                authenticateUntil = OffsetDateTime.parse("2000-01-01T01:00:00Z");
                authenticationMethod = PostUsersRequestBodyAuthenticationMethodEnum.PASSWORD;
                avatarDelete = false;
                avatarFile = new PostUsersRequestBodyAvatarFile("fugit", "alias".getBytes());;
                billingPermission = false;
                bypassInactiveDisable = false;
                bypassSiteAllowedIps = false;
                changePassword = "magni";
                changePasswordConfirmation = "vel";
                company = "ACME Corp.";
                davPermission = true;
                disabled = true;
                email = "Anibal34@gmail.com";
                ftpPermission = true;
                grantPermission = "itaque";
                groupId = 88248;
                groupIds = "ipsum";
                headerText = "User-specific message.";
                importedPasswordHash = "unde";
                language = "en";
                name = "John Doe";
                notes = "Internal notes on this user.";
                notificationDailySendTime = 18;
                officeIntegrationEnabled = true;
                password = "nulla";
                passwordConfirmation = "distinctio";
                passwordValidityDays = 1;
                receiveAdminAlerts = true;
                require2fa = PostUsersRequestBodyRequire2faEnum.ALWAYS_REQUIRE;
                requirePasswordChange = true;
                restapiPermission = true;
                selfManaged = true;
                sftpPermission = true;
                siteAdmin = true;
                skipWelcomeScreen = true;
                sslRequired = PostUsersRequestBodySslRequiredEnum.ALWAYS_REQUIRE;
                ssoStrategyId = 1;
                subscribeToNewsletter = true;
                timeZone = "Pacific Time (US & Canada)";
                userRoot = "example";
                username = "user";
            }};            

            PostUsersResponse res = sdk.users.postUsers(req);

            if (res.userEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUsersId2faReset

Trigger 2FA Reset process for user who has lost access to their existing 2FA methods.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsersId2faResetRequest;
import org.openapis.openapi.models.operations.PostUsersId2faResetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostUsersId2faResetRequest req = new PostUsersId2faResetRequest(802894);            

            PostUsersId2faResetResponse res = sdk.users.postUsersId2faReset(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUsersIdResendWelcomeEmail

Resend user welcome email

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsersIdResendWelcomeEmailRequest;
import org.openapis.openapi.models.operations.PostUsersIdResendWelcomeEmailResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostUsersIdResendWelcomeEmailRequest req = new PostUsersIdResendWelcomeEmailRequest(157222);            

            PostUsersIdResendWelcomeEmailResponse res = sdk.users.postUsersIdResendWelcomeEmail(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUsersIdUnlock

Unlock user who has been locked out due to failed logins.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsersIdUnlockRequest;
import org.openapis.openapi.models.operations.PostUsersIdUnlockResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostUsersIdUnlockRequest req = new PostUsersIdUnlockRequest(159146);            

            PostUsersIdUnlockResponse res = sdk.users.postUsersIdUnlock(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUsersUserIdApiKeys

Create Api Key

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsersUserIdApiKeysRequest;
import org.openapis.openapi.models.operations.PostUsersUserIdApiKeysRequestBody;
import org.openapis.openapi.models.operations.PostUsersUserIdApiKeysRequestBodyPermissionSetEnum;
import org.openapis.openapi.models.operations.PostUsersUserIdApiKeysResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostUsersUserIdApiKeysRequest req = new PostUsersUserIdApiKeysRequest(342137) {{
                requestBody = new PostUsersUserIdApiKeysRequestBody() {{
                    description = "example";
                    expiresAt = OffsetDateTime.parse("2000-01-01T01:00:00Z");
                    name = "My Main API Key";
                    path = "shared/docs";
                    permissionSet = PostUsersUserIdApiKeysRequestBodyPermissionSetEnum.FULL;
                }};;
            }};            

            PostUsersUserIdApiKeysResponse res = sdk.users.postUsersUserIdApiKeys(req);

            if (res.apiKeyEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUsersUserIdPublicKeys

Create Public Key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsersUserIdPublicKeysRequest;
import org.openapis.openapi.models.operations.PostUsersUserIdPublicKeysRequestBody;
import org.openapis.openapi.models.operations.PostUsersUserIdPublicKeysResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostUsersUserIdPublicKeysRequest req = new PostUsersUserIdPublicKeysRequest(                new PostUsersUserIdPublicKeysRequestBody("omnis", "My Main Key");, 727250);            

            PostUsersUserIdPublicKeysResponse res = sdk.users.postUsersUserIdPublicKeys(req);

            if (res.publicKeyEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
