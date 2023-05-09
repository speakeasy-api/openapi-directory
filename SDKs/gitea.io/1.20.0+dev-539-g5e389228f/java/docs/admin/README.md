# admin

### Available Operations

* [adminAdoptRepository](#adminadoptrepository) - Adopt unadopted files as a repository
* [adminCreateHook](#admincreatehook) - Create a hook
* [adminCreateOrg](#admincreateorg) - Create an organization
* [adminCreatePublicKey](#admincreatepublickey) - Add a public key on behalf of a user
* [adminCreateRepo](#admincreaterepo) - Create a repository on behalf of a user
* [adminCreateUser](#admincreateuser) - Create a user
* [adminCronList](#admincronlist) - List cron tasks
* [adminCronRun](#admincronrun) - Run cron task
* [adminDeleteHook](#admindeletehook) - Delete a hook
* [adminDeleteUnadoptedRepository](#admindeleteunadoptedrepository) - Delete unadopted files
* [adminDeleteUser](#admindeleteuser) - Delete a user
* [adminDeleteUserPublicKey](#admindeleteuserpublickey) - Delete a user's public key
* [adminEditHook](#adminedithook) - Update a hook
* [adminEditUser](#adminedituser) - Edit an existing user
* [adminGetAllEmails](#admingetallemails) - List all emails
* [adminGetAllOrgs](#admingetallorgs) - List all organizations
* [adminGetHook](#admingethook) - Get a hook
* [adminListHooks](#adminlisthooks) - List system's webhooks
* [adminRenameUserJson](#adminrenameuserjson) - Rename a user
* [adminRenameUserRaw](#adminrenameuserraw) - Rename a user
* [adminSearchEmails](#adminsearchemails) - Search all emails
* [adminSearchUsers](#adminsearchusers) - Search users according filter conditions
* [adminUnadoptedList](#adminunadoptedlist) - List unadopted repositories

## adminAdoptRepository

Adopt unadopted files as a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminAdoptRepositoryRequest;
import org.openapis.openapi.models.operations.AdminAdoptRepositoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminAdoptRepositoryRequest req = new AdminAdoptRepositoryRequest("quibusdam", "unde");            

            AdminAdoptRepositoryResponse res = sdk.admin.adminAdoptRepository(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminCreateHook

Create a hook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminCreateHookResponse;
import org.openapis.openapi.models.shared.CreateHookOption;
import org.openapis.openapi.models.shared.CreateHookOptionTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreateHookOption req = new CreateHookOption(                new java.util.HashMap<String, String>() {{
                                put("corrupti", "illum");
                                put("vel", "error");
                                put("deserunt", "suscipit");
                                put("iure", "magnam");
                            }}, CreateHookOptionTypeEnum.WECHATWORK) {{
                active = false;
                authorizationHeader = "ipsa";
                branchFilter = "delectus";
                events = new String[]{{
                    add("suscipit"),
                    add("molestiae"),
                }};
            }};            

            AdminCreateHookResponse res = sdk.admin.adminCreateHook(req);

            if (res.hook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminCreateOrg

Create an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminCreateOrgRequest;
import org.openapis.openapi.models.operations.AdminCreateOrgResponse;
import org.openapis.openapi.models.shared.CreateOrgOption;
import org.openapis.openapi.models.shared.CreateOrgOptionVisibilityEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminCreateOrgRequest req = new AdminCreateOrgRequest(                new CreateOrgOption("minus") {{
                                description = "placeat";
                                fullName = "voluptatum";
                                location = "iusto";
                                repoAdminChangeTeamAccess = false;
                                visibility = CreateOrgOptionVisibilityEnum.LIMITED;
                                website = "nisi";
                            }};, "recusandae");            

            AdminCreateOrgResponse res = sdk.admin.adminCreateOrg(req);

            if (res.organization != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminCreatePublicKey

Add a public key on behalf of a user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminCreatePublicKeyRequest;
import org.openapis.openapi.models.operations.AdminCreatePublicKeyResponse;
import org.openapis.openapi.models.shared.CreateKeyOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminCreatePublicKeyRequest req = new AdminCreatePublicKeyRequest("temporibus") {{
                createKeyOption = new CreateKeyOption("ab", "quis") {{
                    readOnly = false;
                }};;
            }};            

            AdminCreatePublicKeyResponse res = sdk.admin.adminCreatePublicKey(req);

            if (res.publicKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminCreateRepo

Create a repository on behalf of a user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminCreateRepoRequest;
import org.openapis.openapi.models.operations.AdminCreateRepoResponse;
import org.openapis.openapi.models.shared.CreateRepoOption;
import org.openapis.openapi.models.shared.CreateRepoOptionTrustModelEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminCreateRepoRequest req = new AdminCreateRepoRequest(                new CreateRepoOption("veritatis") {{
                                autoInit = false;
                                defaultBranch = "deserunt";
                                description = "perferendis";
                                gitignores = "ipsam";
                                issueLabels = "repellendus";
                                license = "sapiente";
                                private_ = false;
                                readme = "quo";
                                template = false;
                                trustModel = CreateRepoOptionTrustModelEnum.DEFAULT_;
                            }};, "at");            

            AdminCreateRepoResponse res = sdk.admin.adminCreateRepo(req);

            if (res.repository != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminCreateUser

Create a user

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminCreateUserResponse;
import org.openapis.openapi.models.shared.CreateUserOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreateUserOption req = new CreateUserOption("Wilford_Krajcik46@hotmail.com", "totam", "porro") {{
                createdAt = OffsetDateTime.parse("2022-10-06T15:49:54.663Z");
                fullName = "nam";
                loginName = "officia";
                mustChangePassword = false;
                restricted = false;
                sendNotify = false;
                sourceId = 582020L;
                visibility = "fugit";
            }};            

            AdminCreateUserResponse res = sdk.admin.adminCreateUser(req);

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminCronList

List cron tasks

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminCronListRequest;
import org.openapis.openapi.models.operations.AdminCronListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminCronListRequest req = new AdminCronListRequest() {{
                limit = 537373L;
                page = 944669L;
            }};            

            AdminCronListResponse res = sdk.admin.adminCronList(req);

            if (res.crons != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminCronRun

Run cron task

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminCronRunRequest;
import org.openapis.openapi.models.operations.AdminCronRunResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminCronRunRequest req = new AdminCronRunRequest("optio");            

            AdminCronRunResponse res = sdk.admin.adminCronRun(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminDeleteHook

Delete a hook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminDeleteHookRequest;
import org.openapis.openapi.models.operations.AdminDeleteHookResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminDeleteHookRequest req = new AdminDeleteHookRequest(521848L);            

            AdminDeleteHookResponse res = sdk.admin.adminDeleteHook(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminDeleteUnadoptedRepository

Delete unadopted files

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminDeleteUnadoptedRepositoryRequest;
import org.openapis.openapi.models.operations.AdminDeleteUnadoptedRepositoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminDeleteUnadoptedRepositoryRequest req = new AdminDeleteUnadoptedRepositoryRequest("beatae", "commodi");            

            AdminDeleteUnadoptedRepositoryResponse res = sdk.admin.adminDeleteUnadoptedRepository(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminDeleteUser

Delete a user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminDeleteUserRequest;
import org.openapis.openapi.models.operations.AdminDeleteUserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminDeleteUserRequest req = new AdminDeleteUserRequest("molestiae") {{
                purge = false;
            }};            

            AdminDeleteUserResponse res = sdk.admin.adminDeleteUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminDeleteUserPublicKey

Delete a user's public key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminDeleteUserPublicKeyRequest;
import org.openapis.openapi.models.operations.AdminDeleteUserPublicKeyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminDeleteUserPublicKeyRequest req = new AdminDeleteUserPublicKeyRequest(264555L, "qui");            

            AdminDeleteUserPublicKeyResponse res = sdk.admin.adminDeleteUserPublicKey(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminEditHook

Update a hook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminEditHookRequest;
import org.openapis.openapi.models.operations.AdminEditHookResponse;
import org.openapis.openapi.models.shared.EditHookOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminEditHookRequest req = new AdminEditHookRequest(774234L) {{
                editHookOption = new EditHookOption() {{
                    active = false;
                    authorizationHeader = "cum";
                    branchFilter = "esse";
                    config = new java.util.HashMap<String, String>() {{
                        put("excepturi", "aspernatur");
                    }};
                    events = new String[]{{
                        add("ad"),
                    }};
                }};;
            }};            

            AdminEditHookResponse res = sdk.admin.adminEditHook(req);

            if (res.hook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminEditUser

Edit an existing user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminEditUserRequest;
import org.openapis.openapi.models.operations.AdminEditUserResponse;
import org.openapis.openapi.models.shared.EditUserOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminEditUserRequest req = new AdminEditUserRequest("natus") {{
                editUserOption = new EditUserOption("sed", 612096L) {{
                    active = false;
                    admin = false;
                    allowCreateOrganization = false;
                    allowGitHook = false;
                    allowImportLocal = false;
                    description = "dolor";
                    email = "Gertrude_Welch44@yahoo.com";
                    fullName = "corporis";
                    location = "iste";
                    maxRepoCreation = 437032L;
                    mustChangePassword = false;
                    password = "saepe";
                    prohibitLogin = false;
                    restricted = false;
                    visibility = "quidem";
                    website = "architecto";
                }};;
            }};            

            AdminEditUserResponse res = sdk.admin.adminEditUser(req);

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminGetAllEmails

List all emails

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminGetAllEmailsRequest;
import org.openapis.openapi.models.operations.AdminGetAllEmailsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminGetAllEmailsRequest req = new AdminGetAllEmailsRequest() {{
                limit = 60225L;
                page = 969810L;
            }};            

            AdminGetAllEmailsResponse res = sdk.admin.adminGetAllEmails(req);

            if (res.emails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminGetAllOrgs

List all organizations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminGetAllOrgsRequest;
import org.openapis.openapi.models.operations.AdminGetAllOrgsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminGetAllOrgsRequest req = new AdminGetAllOrgsRequest() {{
                limit = 666767L;
                page = 653140L;
            }};            

            AdminGetAllOrgsResponse res = sdk.admin.adminGetAllOrgs(req);

            if (res.organizations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminGetHook

Get a hook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminGetHookRequest;
import org.openapis.openapi.models.operations.AdminGetHookResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminGetHookRequest req = new AdminGetHookRequest(670638L);            

            AdminGetHookResponse res = sdk.admin.adminGetHook(req);

            if (res.hook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminListHooks

List system's webhooks

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminListHooksRequest;
import org.openapis.openapi.models.operations.AdminListHooksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminListHooksRequest req = new AdminListHooksRequest() {{
                limit = 170909L;
                page = 210382L;
            }};            

            AdminListHooksResponse res = sdk.admin.adminListHooks(req);

            if (res.hooks != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminRenameUserJson

Rename a user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminRenameUserJsonRequest;
import org.openapis.openapi.models.operations.AdminRenameUserJsonResponse;
import org.openapis.openapi.models.shared.RenameUserOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminRenameUserJsonRequest req = new AdminRenameUserJsonRequest(                new RenameUserOption("corporis");, "explicabo");            

            AdminRenameUserJsonResponse res = sdk.admin.adminRenameUserJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminRenameUserRaw

Rename a user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminRenameUserRawRequest;
import org.openapis.openapi.models.operations.AdminRenameUserRawResponse;
import org.openapis.openapi.models.shared.RenameUserOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminRenameUserRawRequest req = new AdminRenameUserRawRequest("nobis".getBytes(), "enim");            

            AdminRenameUserRawResponse res = sdk.admin.adminRenameUserRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminSearchEmails

Search all emails

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminSearchEmailsRequest;
import org.openapis.openapi.models.operations.AdminSearchEmailsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminSearchEmailsRequest req = new AdminSearchEmailsRequest() {{
                limit = 607831L;
                page = 363711L;
                q = "minima";
            }};            

            AdminSearchEmailsResponse res = sdk.admin.adminSearchEmails(req);

            if (res.emails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminSearchUsers

Search users according filter conditions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminSearchUsersRequest;
import org.openapis.openapi.models.operations.AdminSearchUsersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminSearchUsersRequest req = new AdminSearchUsersRequest() {{
                limit = 570197L;
                loginName = "accusantium";
                page = 438601L;
                sourceId = 634274L;
            }};            

            AdminSearchUsersResponse res = sdk.admin.adminSearchUsers(req);

            if (res.users != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminUnadoptedList

List unadopted repositories

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminUnadoptedListRequest;
import org.openapis.openapi.models.operations.AdminUnadoptedListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminUnadoptedListRequest req = new AdminUnadoptedListRequest() {{
                limit = 988374L;
                page = 958950L;
                pattern = "architecto";
            }};            

            AdminUnadoptedListResponse res = sdk.admin.adminUnadoptedList(req);

            if (res.adminUnadoptedList200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
