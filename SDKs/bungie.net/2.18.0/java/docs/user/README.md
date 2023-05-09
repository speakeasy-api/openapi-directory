# user

## Overview

user

### Available Operations

* [userGetAvailableThemes](#usergetavailablethemes) - Returns a list of all available user themes.
* [userGetBungieNetUserById](#usergetbungienetuserbyid) - Loads a bungienet user by membership id.
* [userGetCredentialTypesForTargetAccount](#usergetcredentialtypesfortargetaccount) - Returns a list of credential types attached to the requested account
* [userGetMembershipDataById](#usergetmembershipdatabyid) - Returns a list of accounts associated with the supplied membership ID and membership type. This will include all linked accounts (even when hidden) if supplied credentials permit it.
* [userGetMembershipDataForCurrentUser](#usergetmembershipdataforcurrentuser) - Returns a list of accounts associated with signed in user. This is useful for OAuth implementations that do not give you access to the token response.
* [userGetMembershipFromHardLinkedCredential](#usergetmembershipfromhardlinkedcredential) - Gets any hard linked membership given a credential. Only works for credentials that are public (just SteamID64 right now). Cross Save aware.
* [userGetSanitizedPlatformDisplayNames](#usergetsanitizedplatformdisplaynames) - Gets a list of all display names linked to this membership id but sanitized (profanity filtered). Obeys all visibility rules of calling user and is heavily cached.
* [userSearchByGlobalNamePost](#usersearchbyglobalnamepost) - Given the prefix of a global display name, returns all users who share that name.
* [userSearchByGlobalNamePrefix](#usersearchbyglobalnameprefix) - [OBSOLETE] Do not use this to search users, use SearchByGlobalNamePost instead.

## userGetAvailableThemes

Returns a list of all available user themes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserGetAvailableThemesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UserGetAvailableThemesResponse res = sdk.user.userGetAvailableThemes();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userGetBungieNetUserById

Loads a bungienet user by membership id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserGetBungieNetUserByIdRequest;
import org.openapis.openapi.models.operations.UserGetBungieNetUserByIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UserGetBungieNetUserByIdRequest req = new UserGetBungieNetUserByIdRequest(608253L);            

            UserGetBungieNetUserByIdResponse res = sdk.user.userGetBungieNetUserById(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userGetCredentialTypesForTargetAccount

Returns a list of credential types attached to the requested account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserGetCredentialTypesForTargetAccountRequest;
import org.openapis.openapi.models.operations.UserGetCredentialTypesForTargetAccountResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UserGetCredentialTypesForTargetAccountRequest req = new UserGetCredentialTypesForTargetAccountRequest(704415L);            

            UserGetCredentialTypesForTargetAccountResponse res = sdk.user.userGetCredentialTypesForTargetAccount(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userGetMembershipDataById

Returns a list of accounts associated with the supplied membership ID and membership type. This will include all linked accounts (even when hidden) if supplied credentials permit it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserGetMembershipDataByIdRequest;
import org.openapis.openapi.models.operations.UserGetMembershipDataByIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UserGetMembershipDataByIdRequest req = new UserGetMembershipDataByIdRequest(596656L, 31838);            

            UserGetMembershipDataByIdResponse res = sdk.user.userGetMembershipDataById(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userGetMembershipDataForCurrentUser

Returns a list of accounts associated with signed in user. This is useful for OAuth implementations that do not give you access to the token response.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserGetMembershipDataForCurrentUserResponse;
import org.openapis.openapi.models.operations.UserGetMembershipDataForCurrentUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UserGetMembershipDataForCurrentUserResponse res = sdk.user.userGetMembershipDataForCurrentUser(new UserGetMembershipDataForCurrentUserSecurity("porro") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userGetMembershipFromHardLinkedCredential

Gets any hard linked membership given a credential. Only works for credentials that are public (just SteamID64 right now). Cross Save aware.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserGetMembershipFromHardLinkedCredentialRequest;
import org.openapis.openapi.models.operations.UserGetMembershipFromHardLinkedCredentialResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UserGetMembershipFromHardLinkedCredentialRequest req = new UserGetMembershipFromHardLinkedCredentialRequest(164694L, "blanditiis");            

            UserGetMembershipFromHardLinkedCredentialResponse res = sdk.user.userGetMembershipFromHardLinkedCredential(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userGetSanitizedPlatformDisplayNames

Gets a list of all display names linked to this membership id but sanitized (profanity filtered). Obeys all visibility rules of calling user and is heavily cached.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserGetSanitizedPlatformDisplayNamesRequest;
import org.openapis.openapi.models.operations.UserGetSanitizedPlatformDisplayNamesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UserGetSanitizedPlatformDisplayNamesRequest req = new UserGetSanitizedPlatformDisplayNamesRequest(621479L);            

            UserGetSanitizedPlatformDisplayNamesResponse res = sdk.user.userGetSanitizedPlatformDisplayNames(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userSearchByGlobalNamePost

Given the prefix of a global display name, returns all users who share that name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserSearchByGlobalNamePostRequest;
import org.openapis.openapi.models.operations.UserSearchByGlobalNamePostResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UserSearchByGlobalNamePostRequest req = new UserSearchByGlobalNamePostRequest(50370);            

            UserSearchByGlobalNamePostResponse res = sdk.user.userSearchByGlobalNamePost(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userSearchByGlobalNamePrefix

[OBSOLETE] Do not use this to search users, use SearchByGlobalNamePost instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserSearchByGlobalNamePrefixRequest;
import org.openapis.openapi.models.operations.UserSearchByGlobalNamePrefixResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UserSearchByGlobalNamePrefixRequest req = new UserSearchByGlobalNamePrefixRequest("occaecati", 699098);            

            UserSearchByGlobalNamePrefixResponse res = sdk.user.userSearchByGlobalNamePrefix(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
