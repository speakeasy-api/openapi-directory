# user

### Available Operations

* [createCurrentUserRepo](#createcurrentuserrepo) - Create a repository
* [getUserSettings](#getusersettings) - Get user settings
* [getVerificationToken](#getverificationtoken) - Get a Token to verify
* [updateUserSettingsJson](#updateusersettingsjson) - Update user settings
* [updateUserSettingsRaw](#updateusersettingsraw) - Update user settings
* [userAddEmailJson](#useraddemailjson) - Add email addresses
* [userAddEmailRaw](#useraddemailraw) - Add email addresses
* [userCheckFollowing](#usercheckfollowing) - Check if one user is following another user
* [userCreateHook](#usercreatehook) - Create a hook
* [userCreateOAuth2ApplicationJson](#usercreateoauth2applicationjson) - creates a new OAuth2 application
* [userCreateOAuth2ApplicationRaw](#usercreateoauth2applicationraw) - creates a new OAuth2 application
* [userCreateToken](#usercreatetoken) - Create an access token
* [userCurrentCheckFollowing](#usercurrentcheckfollowing) - Check whether a user is followed by the authenticated user
* [userCurrentCheckStarring](#usercurrentcheckstarring) - Whether the authenticated is starring the repo
* [userCurrentDeleteFollow](#usercurrentdeletefollow) - Unfollow a user
* [userCurrentDeleteGPGKey](#usercurrentdeletegpgkey) - Remove a GPG key
* [userCurrentDeleteKey](#usercurrentdeletekey) - Delete a public key
* [userCurrentDeleteStar](#usercurrentdeletestar) - Unstar the given repo
* [userCurrentGetGPGKey](#usercurrentgetgpgkey) - Get a GPG key
* [userCurrentGetKey](#usercurrentgetkey) - Get a public key
* [userCurrentListFollowers](#usercurrentlistfollowers) - List the authenticated user's followers
* [userCurrentListFollowing](#usercurrentlistfollowing) - List the users that the authenticated user is following
* [userCurrentListGPGKeys](#usercurrentlistgpgkeys) - List the authenticated user's GPG keys
* [userCurrentListKeys](#usercurrentlistkeys) - List the authenticated user's public keys
* [userCurrentListRepos](#usercurrentlistrepos) - List the repos that the authenticated user owns
* [userCurrentListStarred](#usercurrentliststarred) - The repos that the authenticated user has starred
* [userCurrentListSubscriptions](#usercurrentlistsubscriptions) - List repositories watched by the authenticated user
* [userCurrentPostGPGKey](#usercurrentpostgpgkey) - Create a GPG key
* [userCurrentPostKey](#usercurrentpostkey) - Create a public key
* [userCurrentPutFollow](#usercurrentputfollow) - Follow a user
* [userCurrentPutStar](#usercurrentputstar) - Star the given repo
* [userCurrentTrackedTimes](#usercurrenttrackedtimes) - List the current user's tracked times
* [userDeleteAccessToken](#userdeleteaccesstoken) - delete an access token
* [userDeleteEmailJson](#userdeleteemailjson) - Delete email addresses
* [userDeleteEmailRaw](#userdeleteemailraw) - Delete email addresses
* [userDeleteHook](#userdeletehook) - Delete a hook
* [userDeleteOAuth2Application](#userdeleteoauth2application) - delete an OAuth2 Application
* [userEditHook](#useredithook) - Update a hook
* [userGet](#userget) - Get a user
* [userGetCurrent](#usergetcurrent) - Get the authenticated user
* [userGetHeatmapData](#usergetheatmapdata) - Get a user's heatmap
* [userGetHook](#usergethook) - Get a hook
* [userGetOAuth2Application](#usergetoauth2application) - get an OAuth2 Application
* [userGetOauth2Application](#usergetoauth2application) - List the authenticated user's oauth2 applications
* [userGetStopWatches](#usergetstopwatches) - Get list of all existing stopwatches
* [userGetTokens](#usergettokens) - List the authenticated user's access tokens
* [userListActivityFeeds](#userlistactivityfeeds) - List a user's activity feeds
* [userListEmails](#userlistemails) - List the authenticated user's email addresses
* [userListFollowers](#userlistfollowers) - List the given user's followers
* [userListFollowing](#userlistfollowing) - List the users that the given user is following
* [userListGPGKeys](#userlistgpgkeys) - List the given user's GPG keys
* [userListHooks](#userlisthooks) - List the authenticated user's webhooks
* [userListKeys](#userlistkeys) - List the given user's public keys
* [userListRepos](#userlistrepos) - List the repos owned by the given user
* [userListStarred](#userliststarred) - The repos that the given user has starred
* [userListSubscriptions](#userlistsubscriptions) - List the repositories watched by a user
* [userListTeams](#userlistteams) - List all the teams a user belongs to
* [userSearch](#usersearch) - Search for users
* [userUpdateOAuth2ApplicationJson](#userupdateoauth2applicationjson) - update an OAuth2 Application, this includes regenerating the client secret
* [userUpdateOAuth2ApplicationRaw](#userupdateoauth2applicationraw) - update an OAuth2 Application, this includes regenerating the client secret
* [userVerifyGPGKey](#userverifygpgkey) - Verify a GPG key

## createCurrentUserRepo

Create a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCurrentUserRepoResponse;
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

            org.openapis.openapi.models.shared.CreateRepoOption req = new CreateRepoOption("necessitatibus") {{
                autoInit = false;
                defaultBranch = "animi";
                description = "impedit";
                gitignores = "ipsam";
                issueLabels = "corporis";
                license = "est";
                private_ = false;
                readme = "error";
                template = false;
                trustModel = CreateRepoOptionTrustModelEnum.COLLABORATOR;
            }};            

            CreateCurrentUserRepoResponse res = sdk.user.createCurrentUserRepo(req);

            if (res.repository != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserSettings

Get user settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUserSettingsResponse res = sdk.user.getUserSettings();

            if (res.userSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVerificationToken

Get a Token to verify

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVerificationTokenResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetVerificationTokenResponse res = sdk.user.getVerificationToken();

            if (res.getVerificationToken200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUserSettingsJson

Update user settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUserSettingsJsonResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UserSettingsOptions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.UserSettingsOptions req = new UserSettingsOptions() {{
                description = "labore";
                diffViewStyle = "veritatis";
                fullName = "vero";
                hideActivity = false;
                hideEmail = false;
                language = "consectetur";
                location = "vitae";
                theme = "inventore";
                website = "dolorem";
            }};            

            UpdateUserSettingsJsonResponse res = sdk.user.updateUserSettingsJson(req);

            if (res.userSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUserSettingsRaw

Update user settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUserSettingsRawResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UserSettingsOptions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = "ad".getBytes()            

            UpdateUserSettingsRawResponse res = sdk.user.updateUserSettingsRaw(req);

            if (res.userSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userAddEmailJson

Add email addresses

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserAddEmailJsonResponse;
import org.openapis.openapi.models.shared.CreateEmailOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreateEmailOption req = new CreateEmailOption() {{
                emails = new String[]{{
                    add("iste"),
                }};
            }};            

            UserAddEmailJsonResponse res = sdk.user.userAddEmailJson(req);

            if (res.emails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userAddEmailRaw

Add email addresses

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserAddEmailRawResponse;
import org.openapis.openapi.models.shared.CreateEmailOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = "ex".getBytes()            

            UserAddEmailRawResponse res = sdk.user.userAddEmailRaw(req);

            if (res.emails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userCheckFollowing

Check if one user is following another user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserCheckFollowingRequest;
import org.openapis.openapi.models.operations.UserCheckFollowingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserCheckFollowingRequest req = new UserCheckFollowingRequest("nemo", "soluta");            

            UserCheckFollowingResponse res = sdk.user.userCheckFollowing(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userCreateHook

Create a hook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserCreateHookResponse;
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
                                put("rem", "dolorum");
                                put("odio", "fugit");
                                put("alias", "magni");
                            }}, CreateHookOptionTypeEnum.MSTEAMS) {{
                active = false;
                authorizationHeader = "quae";
                branchFilter = "quae";
                events = new String[]{{
                    add("neque"),
                    add("exercitationem"),
                }};
            }};            

            UserCreateHookResponse res = sdk.user.userCreateHook(req);

            if (res.hook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userCreateOAuth2ApplicationJson

creates a new OAuth2 application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserCreateOAuth2ApplicationJsonResponse;
import org.openapis.openapi.models.shared.CreateOAuth2ApplicationOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreateOAuth2ApplicationOptions req = new CreateOAuth2ApplicationOptions() {{
                confidentialClient = false;
                name = "Douglas Emard";
                redirectUris = new String[]{{
                    add("maxime"),
                    add("quia"),
                    add("quia"),
                }};
            }};            

            UserCreateOAuth2ApplicationJsonResponse res = sdk.user.userCreateOAuth2ApplicationJson(req);

            if (res.oAuth2Application != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userCreateOAuth2ApplicationRaw

creates a new OAuth2 application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserCreateOAuth2ApplicationRawResponse;
import org.openapis.openapi.models.shared.CreateOAuth2ApplicationOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = "nostrum".getBytes()            

            UserCreateOAuth2ApplicationRawResponse res = sdk.user.userCreateOAuth2ApplicationRaw(req);

            if (res.oAuth2Application != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userCreateToken

Create an access token

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserCreateTokenRequest;
import org.openapis.openapi.models.operations.UserCreateTokenResponse;
import org.openapis.openapi.models.shared.CreateAccessTokenOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserCreateTokenRequest req = new UserCreateTokenRequest("omnis") {{
                createAccessTokenOption = new CreateAccessTokenOption("libero") {{
                    scopes = new String[]{{
                        add("id"),
                    }};
                }};;
            }};            

            UserCreateTokenResponse res = sdk.user.userCreateToken(req);

            if (res.accessToken != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userCurrentCheckFollowing

Check whether a user is followed by the authenticated user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserCurrentCheckFollowingRequest;
import org.openapis.openapi.models.operations.UserCurrentCheckFollowingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserCurrentCheckFollowingRequest req = new UserCurrentCheckFollowingRequest("libero");            

            UserCurrentCheckFollowingResponse res = sdk.user.userCurrentCheckFollowing(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userCurrentCheckStarring

Whether the authenticated is starring the repo

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserCurrentCheckStarringRequest;
import org.openapis.openapi.models.operations.UserCurrentCheckStarringResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserCurrentCheckStarringRequest req = new UserCurrentCheckStarringRequest("fugiat", "officia");            

            UserCurrentCheckStarringResponse res = sdk.user.userCurrentCheckStarring(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userCurrentDeleteFollow

Unfollow a user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserCurrentDeleteFollowRequest;
import org.openapis.openapi.models.operations.UserCurrentDeleteFollowResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserCurrentDeleteFollowRequest req = new UserCurrentDeleteFollowRequest("quos");            

            UserCurrentDeleteFollowResponse res = sdk.user.userCurrentDeleteFollow(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userCurrentDeleteGPGKey

Remove a GPG key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserCurrentDeleteGPGKeyRequest;
import org.openapis.openapi.models.operations.UserCurrentDeleteGPGKeyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserCurrentDeleteGPGKeyRequest req = new UserCurrentDeleteGPGKeyRequest(811939L);            

            UserCurrentDeleteGPGKeyResponse res = sdk.user.userCurrentDeleteGPGKey(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userCurrentDeleteKey

Delete a public key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserCurrentDeleteKeyRequest;
import org.openapis.openapi.models.operations.UserCurrentDeleteKeyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserCurrentDeleteKeyRequest req = new UserCurrentDeleteKeyRequest(25756L);            

            UserCurrentDeleteKeyResponse res = sdk.user.userCurrentDeleteKey(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userCurrentDeleteStar

Unstar the given repo

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserCurrentDeleteStarRequest;
import org.openapis.openapi.models.operations.UserCurrentDeleteStarResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserCurrentDeleteStarRequest req = new UserCurrentDeleteStarRequest("iusto", "ipsa");            

            UserCurrentDeleteStarResponse res = sdk.user.userCurrentDeleteStar(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userCurrentGetGPGKey

Get a GPG key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserCurrentGetGPGKeyRequest;
import org.openapis.openapi.models.operations.UserCurrentGetGPGKeyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserCurrentGetGPGKeyRequest req = new UserCurrentGetGPGKeyRequest(914864L);            

            UserCurrentGetGPGKeyResponse res = sdk.user.userCurrentGetGPGKey(req);

            if (res.gpgKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userCurrentGetKey

Get a public key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserCurrentGetKeyRequest;
import org.openapis.openapi.models.operations.UserCurrentGetKeyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserCurrentGetKeyRequest req = new UserCurrentGetKeyRequest(80061L);            

            UserCurrentGetKeyResponse res = sdk.user.userCurrentGetKey(req);

            if (res.publicKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userCurrentListFollowers

List the authenticated user's followers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserCurrentListFollowersRequest;
import org.openapis.openapi.models.operations.UserCurrentListFollowersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserCurrentListFollowersRequest req = new UserCurrentListFollowersRequest() {{
                limit = 49348L;
                page = 517137L;
            }};            

            UserCurrentListFollowersResponse res = sdk.user.userCurrentListFollowers(req);

            if (res.users != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userCurrentListFollowing

List the users that the authenticated user is following

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserCurrentListFollowingRequest;
import org.openapis.openapi.models.operations.UserCurrentListFollowingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserCurrentListFollowingRequest req = new UserCurrentListFollowingRequest() {{
                limit = 292888L;
                page = 755106L;
            }};            

            UserCurrentListFollowingResponse res = sdk.user.userCurrentListFollowing(req);

            if (res.users != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userCurrentListGPGKeys

List the authenticated user's GPG keys

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserCurrentListGPGKeysRequest;
import org.openapis.openapi.models.operations.UserCurrentListGPGKeysResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserCurrentListGPGKeysRequest req = new UserCurrentListGPGKeysRequest() {{
                limit = 715053L;
                page = 32273L;
            }};            

            UserCurrentListGPGKeysResponse res = sdk.user.userCurrentListGPGKeys(req);

            if (res.gpgKeys != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userCurrentListKeys

List the authenticated user's public keys

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserCurrentListKeysRequest;
import org.openapis.openapi.models.operations.UserCurrentListKeysResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserCurrentListKeysRequest req = new UserCurrentListKeysRequest() {{
                fingerprint = "autem";
                limit = 456688L;
                page = 172951L;
            }};            

            UserCurrentListKeysResponse res = sdk.user.userCurrentListKeys(req);

            if (res.publicKeys != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userCurrentListRepos

List the repos that the authenticated user owns

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserCurrentListReposRequest;
import org.openapis.openapi.models.operations.UserCurrentListReposResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserCurrentListReposRequest req = new UserCurrentListReposRequest() {{
                limit = 824798L;
                page = 107210L;
            }};            

            UserCurrentListReposResponse res = sdk.user.userCurrentListRepos(req);

            if (res.repositories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userCurrentListStarred

The repos that the authenticated user has starred

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserCurrentListStarredRequest;
import org.openapis.openapi.models.operations.UserCurrentListStarredResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserCurrentListStarredRequest req = new UserCurrentListStarredRequest() {{
                limit = 668606L;
                page = 817339L;
            }};            

            UserCurrentListStarredResponse res = sdk.user.userCurrentListStarred(req);

            if (res.repositories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userCurrentListSubscriptions

List repositories watched by the authenticated user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserCurrentListSubscriptionsRequest;
import org.openapis.openapi.models.operations.UserCurrentListSubscriptionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserCurrentListSubscriptionsRequest req = new UserCurrentListSubscriptionsRequest() {{
                limit = 545918L;
                page = 473143L;
            }};            

            UserCurrentListSubscriptionsResponse res = sdk.user.userCurrentListSubscriptions(req);

            if (res.repositories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userCurrentPostGPGKey

Create a GPG key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserCurrentPostGPGKeyResponse;
import org.openapis.openapi.models.shared.CreateGPGKeyOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreateGPGKeyOption req = new CreateGPGKeyOption("provident") {{
                armoredSignature = "accusamus";
            }};            

            UserCurrentPostGPGKeyResponse res = sdk.user.userCurrentPostGPGKey(req);

            if (res.gpgKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userCurrentPostKey

Create a public key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserCurrentPostKeyResponse;
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

            org.openapis.openapi.models.shared.CreateKeyOption req = new CreateKeyOption("necessitatibus", "tempore") {{
                readOnly = false;
            }};            

            UserCurrentPostKeyResponse res = sdk.user.userCurrentPostKey(req);

            if (res.publicKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userCurrentPutFollow

Follow a user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserCurrentPutFollowRequest;
import org.openapis.openapi.models.operations.UserCurrentPutFollowResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserCurrentPutFollowRequest req = new UserCurrentPutFollowRequest("sint");            

            UserCurrentPutFollowResponse res = sdk.user.userCurrentPutFollow(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userCurrentPutStar

Star the given repo

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserCurrentPutStarRequest;
import org.openapis.openapi.models.operations.UserCurrentPutStarResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserCurrentPutStarRequest req = new UserCurrentPutStarRequest("ea", "autem");            

            UserCurrentPutStarResponse res = sdk.user.userCurrentPutStar(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userCurrentTrackedTimes

List the current user's tracked times

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserCurrentTrackedTimesRequest;
import org.openapis.openapi.models.operations.UserCurrentTrackedTimesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserCurrentTrackedTimesRequest req = new UserCurrentTrackedTimesRequest() {{
                before = OffsetDateTime.parse("2022-04-19T10:08:34.555Z");
                limit = 515638L;
                page = 357207L;
                since = OffsetDateTime.parse("2020-01-31T15:52:45.660Z");
            }};            

            UserCurrentTrackedTimesResponse res = sdk.user.userCurrentTrackedTimes(req);

            if (res.trackedTimes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userDeleteAccessToken

delete an access token

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserDeleteAccessTokenRequest;
import org.openapis.openapi.models.operations.UserDeleteAccessTokenResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserDeleteAccessTokenRequest req = new UserDeleteAccessTokenRequest("cum", "at");            

            UserDeleteAccessTokenResponse res = sdk.user.userDeleteAccessToken(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userDeleteEmailJson

Delete email addresses

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserDeleteEmailJsonResponse;
import org.openapis.openapi.models.shared.DeleteEmailOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.DeleteEmailOption req = new DeleteEmailOption() {{
                emails = new String[]{{
                    add("quia"),
                }};
            }};            

            UserDeleteEmailJsonResponse res = sdk.user.userDeleteEmailJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userDeleteEmailRaw

Delete email addresses

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserDeleteEmailRawResponse;
import org.openapis.openapi.models.shared.DeleteEmailOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = "quidem".getBytes()            

            UserDeleteEmailRawResponse res = sdk.user.userDeleteEmailRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userDeleteHook

Delete a hook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserDeleteHookRequest;
import org.openapis.openapi.models.operations.UserDeleteHookResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserDeleteHookRequest req = new UserDeleteHookRequest(684126L);            

            UserDeleteHookResponse res = sdk.user.userDeleteHook(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userDeleteOAuth2Application

delete an OAuth2 Application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserDeleteOAuth2ApplicationRequest;
import org.openapis.openapi.models.operations.UserDeleteOAuth2ApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserDeleteOAuth2ApplicationRequest req = new UserDeleteOAuth2ApplicationRequest(919508L);            

            UserDeleteOAuth2ApplicationResponse res = sdk.user.userDeleteOAuth2Application(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userEditHook

Update a hook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserEditHookRequest;
import org.openapis.openapi.models.operations.UserEditHookResponse;
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

            UserEditHookRequest req = new UserEditHookRequest(34070L) {{
                editHookOption = new EditHookOption() {{
                    active = false;
                    authorizationHeader = "expedita";
                    branchFilter = "officiis";
                    config = new java.util.HashMap<String, String>() {{
                        put("quibusdam", "odio");
                    }};
                    events = new String[]{{
                        add("odit"),
                        add("explicabo"),
                        add("corporis"),
                    }};
                }};;
            }};            

            UserEditHookResponse res = sdk.user.userEditHook(req);

            if (res.hook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userGet

Get a user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserGetRequest;
import org.openapis.openapi.models.operations.UserGetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserGetRequest req = new UserGetRequest("error");            

            UserGetResponse res = sdk.user.userGet(req);

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userGetCurrent

Get the authenticated user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserGetCurrentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserGetCurrentResponse res = sdk.user.userGetCurrent();

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userGetHeatmapData

Get a user's heatmap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserGetHeatmapDataRequest;
import org.openapis.openapi.models.operations.UserGetHeatmapDataResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserGetHeatmapDataRequest req = new UserGetHeatmapDataRequest("earum");            

            UserGetHeatmapDataResponse res = sdk.user.userGetHeatmapData(req);

            if (res.userHeatmapData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userGetHook

Get a hook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserGetHookRequest;
import org.openapis.openapi.models.operations.UserGetHookResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserGetHookRequest req = new UserGetHookRequest(239337L);            

            UserGetHookResponse res = sdk.user.userGetHook(req);

            if (res.hook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userGetOAuth2Application

get an OAuth2 Application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserGetOAuth2ApplicationRequest;
import org.openapis.openapi.models.operations.UserGetOAuth2ApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserGetOAuth2ApplicationRequest req = new UserGetOAuth2ApplicationRequest(923306L);            

            UserGetOAuth2ApplicationResponse res = sdk.user.userGetOAuth2Application(req);

            if (res.oAuth2Application != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userGetOauth2Application

List the authenticated user's oauth2 applications

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserGetOauth2ApplicationRequest;
import org.openapis.openapi.models.operations.UserGetOauth2ApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserGetOauth2ApplicationRequest req = new UserGetOauth2ApplicationRequest() {{
                limit = 630871L;
                page = 282837L;
            }};            

            UserGetOauth2ApplicationResponse res = sdk.user.userGetOauth2Application(req);

            if (res.oAuth2Applications != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userGetStopWatches

Get list of all existing stopwatches

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserGetStopWatchesRequest;
import org.openapis.openapi.models.operations.UserGetStopWatchesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserGetStopWatchesRequest req = new UserGetStopWatchesRequest() {{
                limit = 693746L;
                page = 339631L;
            }};            

            UserGetStopWatchesResponse res = sdk.user.userGetStopWatches(req);

            if (res.stopWatches != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userGetTokens

List the authenticated user's access tokens

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserGetTokensRequest;
import org.openapis.openapi.models.operations.UserGetTokensResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserGetTokensRequest req = new UserGetTokensRequest("beatae") {{
                limit = 600213L;
                page = 476946L;
            }};            

            UserGetTokensResponse res = sdk.user.userGetTokens(req);

            if (res.accessTokens != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userListActivityFeeds

List a user's activity feeds

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserListActivityFeedsRequest;
import org.openapis.openapi.models.operations.UserListActivityFeedsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserListActivityFeedsRequest req = new UserListActivityFeedsRequest("delectus") {{
                date = LocalDate.parse("2022-09-15");
                limit = 253625L;
                onlyPerformedBy = false;
                page = 256916L;
            }};            

            UserListActivityFeedsResponse res = sdk.user.userListActivityFeeds(req);

            if (res.activities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userListEmails

List the authenticated user's email addresses

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserListEmailsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserListEmailsResponse res = sdk.user.userListEmails();

            if (res.emails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userListFollowers

List the given user's followers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserListFollowersRequest;
import org.openapis.openapi.models.operations.UserListFollowersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserListFollowersRequest req = new UserListFollowersRequest("nesciunt") {{
                limit = 873557L;
                page = 637856L;
            }};            

            UserListFollowersResponse res = sdk.user.userListFollowers(req);

            if (res.users != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userListFollowing

List the users that the given user is following

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserListFollowingRequest;
import org.openapis.openapi.models.operations.UserListFollowingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserListFollowingRequest req = new UserListFollowingRequest("dignissimos") {{
                limit = 760744L;
                page = 898961L;
            }};            

            UserListFollowingResponse res = sdk.user.userListFollowing(req);

            if (res.users != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userListGPGKeys

List the given user's GPG keys

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserListGPGKeysRequest;
import org.openapis.openapi.models.operations.UserListGPGKeysResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserListGPGKeysRequest req = new UserListGPGKeysRequest("corporis") {{
                limit = 185518L;
                page = 708898L;
            }};            

            UserListGPGKeysResponse res = sdk.user.userListGPGKeys(req);

            if (res.gpgKeys != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userListHooks

List the authenticated user's webhooks

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserListHooksRequest;
import org.openapis.openapi.models.operations.UserListHooksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserListHooksRequest req = new UserListHooksRequest() {{
                limit = 532669L;
                page = 587375L;
            }};            

            UserListHooksResponse res = sdk.user.userListHooks(req);

            if (res.hooks != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userListKeys

List the given user's public keys

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserListKeysRequest;
import org.openapis.openapi.models.operations.UserListKeysResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserListKeysRequest req = new UserListKeysRequest("minima") {{
                fingerprint = "placeat";
                limit = 316542L;
                page = 204072L;
            }};            

            UserListKeysResponse res = sdk.user.userListKeys(req);

            if (res.publicKeys != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userListRepos

List the repos owned by the given user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserListReposRequest;
import org.openapis.openapi.models.operations.UserListReposResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserListReposRequest req = new UserListReposRequest("in") {{
                limit = 796397L;
                page = 433077L;
            }};            

            UserListReposResponse res = sdk.user.userListRepos(req);

            if (res.repositories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userListStarred

The repos that the given user has starred

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserListStarredRequest;
import org.openapis.openapi.models.operations.UserListStarredResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserListStarredRequest req = new UserListStarredRequest("modi") {{
                limit = 357347L;
                page = 298264L;
            }};            

            UserListStarredResponse res = sdk.user.userListStarred(req);

            if (res.repositories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userListSubscriptions

List the repositories watched by a user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserListSubscriptionsRequest;
import org.openapis.openapi.models.operations.UserListSubscriptionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserListSubscriptionsRequest req = new UserListSubscriptionsRequest("voluptates") {{
                limit = 978173L;
                page = 731744L;
            }};            

            UserListSubscriptionsResponse res = sdk.user.userListSubscriptions(req);

            if (res.repositories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userListTeams

List all the teams a user belongs to

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserListTeamsRequest;
import org.openapis.openapi.models.operations.UserListTeamsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserListTeamsRequest req = new UserListTeamsRequest() {{
                limit = 46013L;
                page = 727547L;
            }};            

            UserListTeamsResponse res = sdk.user.userListTeams(req);

            if (res.teams != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userSearch

Search for users

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserSearchRequest;
import org.openapis.openapi.models.operations.UserSearchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserSearchRequest req = new UserSearchRequest() {{
                limit = 189753L;
                page = 289913L;
                q = "totam";
                uid = 577709L;
            }};            

            UserSearchResponse res = sdk.user.userSearch(req);

            if (res.userSearch200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userUpdateOAuth2ApplicationJson

update an OAuth2 Application, this includes regenerating the client secret

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserUpdateOAuth2ApplicationJsonRequest;
import org.openapis.openapi.models.operations.UserUpdateOAuth2ApplicationJsonResponse;
import org.openapis.openapi.models.shared.CreateOAuth2ApplicationOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserUpdateOAuth2ApplicationJsonRequest req = new UserUpdateOAuth2ApplicationJsonRequest(                new CreateOAuth2ApplicationOptions() {{
                                confidentialClient = false;
                                name = "Angelica Flatley";
                                redirectUris = new String[]{{
                                    add("est"),
                                    add("impedit"),
                                }};
                            }};, 963741L);            

            UserUpdateOAuth2ApplicationJsonResponse res = sdk.user.userUpdateOAuth2ApplicationJson(req);

            if (res.oAuth2Application != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userUpdateOAuth2ApplicationRaw

update an OAuth2 Application, this includes regenerating the client secret

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserUpdateOAuth2ApplicationRawRequest;
import org.openapis.openapi.models.operations.UserUpdateOAuth2ApplicationRawResponse;
import org.openapis.openapi.models.shared.CreateOAuth2ApplicationOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserUpdateOAuth2ApplicationRawRequest req = new UserUpdateOAuth2ApplicationRawRequest("tempore".getBytes(), 878601L);            

            UserUpdateOAuth2ApplicationRawResponse res = sdk.user.userUpdateOAuth2ApplicationRaw(req);

            if (res.oAuth2Application != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userVerifyGPGKey

Verify a GPG key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserVerifyGPGKeyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserVerifyGPGKeyResponse res = sdk.user.userVerifyGPGKey();

            if (res.gpgKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
