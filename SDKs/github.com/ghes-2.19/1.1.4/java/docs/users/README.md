# users

## Overview

Interact with and view information about users and also current user.

### Available Operations

* [usersAddEmailForAuthenticated](#usersaddemailforauthenticated) - Add an email address for the authenticated user
* [usersCheckFollowingForUser](#userscheckfollowingforuser) - Check if a user follows another user
* [usersCheckPersonIsFollowedByAuthenticated](#userscheckpersonisfollowedbyauthenticated) - Check if a person is followed by the authenticated user
* [usersCreateGpgKeyForAuthenticated](#userscreategpgkeyforauthenticated) - Create a GPG key for the authenticated user
* [usersCreatePublicSshKeyForAuthenticated](#userscreatepublicsshkeyforauthenticated) - Create a public SSH key for the authenticated user
* [usersDeleteEmailForAuthenticated](#usersdeleteemailforauthenticated) - Delete an email address for the authenticated user
* [usersDeleteGpgKeyForAuthenticated](#usersdeletegpgkeyforauthenticated) - Delete a GPG key for the authenticated user
* [usersDeletePublicSshKeyForAuthenticated](#usersdeletepublicsshkeyforauthenticated) - Delete a public SSH key for the authenticated user
* [usersFollow](#usersfollow) - Follow a user
* [usersGetAuthenticated](#usersgetauthenticated) - Get the authenticated user
* [usersGetByUsername](#usersgetbyusername) - Get a user
* [usersGetContextForUser](#usersgetcontextforuser) - Get contextual information for a user
* [usersGetGpgKeyForAuthenticated](#usersgetgpgkeyforauthenticated) - Get a GPG key for the authenticated user
* [usersGetPublicSshKeyForAuthenticated](#usersgetpublicsshkeyforauthenticated) - Get a public SSH key for the authenticated user
* [usersList](#userslist) - List users
* [usersListEmailsForAuthenticated](#userslistemailsforauthenticated) - List email addresses for the authenticated user
* [usersListFollowedByAuthenticated](#userslistfollowedbyauthenticated) - List the people the authenticated user follows
* [usersListFollowersForAuthenticatedUser](#userslistfollowersforauthenticateduser) - List followers of the authenticated user
* [usersListFollowersForUser](#userslistfollowersforuser) - List followers of a user
* [usersListFollowingForUser](#userslistfollowingforuser) - List the people a user follows
* [usersListGpgKeysForAuthenticated](#userslistgpgkeysforauthenticated) - List GPG keys for the authenticated user
* [usersListGpgKeysForUser](#userslistgpgkeysforuser) - List GPG keys for a user
* [usersListPublicEmailsForAuthenticated](#userslistpublicemailsforauthenticated) - List public email addresses for the authenticated user
* [usersListPublicKeysForUser](#userslistpublickeysforuser) - List public keys for a user
* [usersListPublicSshKeysForAuthenticated](#userslistpublicsshkeysforauthenticated) - List public SSH keys for the authenticated user
* [usersUnfollow](#usersunfollow) - Unfollow a user
* [usersUpdateAuthenticated](#usersupdateauthenticated) - Update the authenticated user

## usersAddEmailForAuthenticated

This endpoint is accessible with the `user` scope.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#add-an-email-address-for-the-authenticated-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersAddEmailForAuthenticatedRequestBody1;
import org.openapis.openapi.models.operations.UsersAddEmailForAuthenticatedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "qui"            

            UsersAddEmailForAuthenticatedResponse res = sdk.users.usersAddEmailForAuthenticated(req);

            if (res.emails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersCheckFollowingForUser

Check if a user follows another user

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#check-if-a-user-follows-another-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersCheckFollowingForUserRequest;
import org.openapis.openapi.models.operations.UsersCheckFollowingForUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersCheckFollowingForUserRequest req = new UsersCheckFollowingForUserRequest("consectetur", "repellat");            

            UsersCheckFollowingForUserResponse res = sdk.users.usersCheckFollowingForUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersCheckPersonIsFollowedByAuthenticated

Check if a person is followed by the authenticated user

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#check-if-a-person-is-followed-by-the-authenticated-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersCheckPersonIsFollowedByAuthenticatedRequest;
import org.openapis.openapi.models.operations.UsersCheckPersonIsFollowedByAuthenticatedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersCheckPersonIsFollowedByAuthenticatedRequest req = new UsersCheckPersonIsFollowedByAuthenticatedRequest("explicabo");            

            UsersCheckPersonIsFollowedByAuthenticatedResponse res = sdk.users.usersCheckPersonIsFollowedByAuthenticated(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersCreateGpgKeyForAuthenticated

Adds a GPG key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:gpg_key` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#create-a-gpg-key-for-the-authenticated-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersCreateGpgKeyForAuthenticatedRequestBody;
import org.openapis.openapi.models.operations.UsersCreateGpgKeyForAuthenticatedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersCreateGpgKeyForAuthenticatedRequestBody req = new UsersCreateGpgKeyForAuthenticatedRequestBody("explicabo");            

            UsersCreateGpgKeyForAuthenticatedResponse res = sdk.users.usersCreateGpgKeyForAuthenticated(req);

            if (res.gpgKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersCreatePublicSshKeyForAuthenticated

Adds a public SSH key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:public_key` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#create-a-public-ssh-key-for-the-authenticated-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersCreatePublicSshKeyForAuthenticatedRequestBody;
import org.openapis.openapi.models.operations.UsersCreatePublicSshKeyForAuthenticatedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersCreatePublicSshKeyForAuthenticatedRequestBody req = new UsersCreatePublicSshKeyForAuthenticatedRequestBody("exercitationem") {{
                title = "Personal MacBook Air";
            }};            

            UsersCreatePublicSshKeyForAuthenticatedResponse res = sdk.users.usersCreatePublicSshKeyForAuthenticated(req);

            if (res.key != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersDeleteEmailForAuthenticated

This endpoint is accessible with the `user` scope.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#delete-an-email-address-for-the-authenticated-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersDeleteEmailForAuthenticatedRequestBody1;
import org.openapis.openapi.models.operations.UsersDeleteEmailForAuthenticatedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new String[]{{
                add("username@example.com"),
                add("username@example.com"),
            }}            

            UsersDeleteEmailForAuthenticatedResponse res = sdk.users.usersDeleteEmailForAuthenticated(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersDeleteGpgKeyForAuthenticated

Removes a GPG key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:gpg_key` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#delete-a-gpg-key-for-the-authenticated-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersDeleteGpgKeyForAuthenticatedRequest;
import org.openapis.openapi.models.operations.UsersDeleteGpgKeyForAuthenticatedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersDeleteGpgKeyForAuthenticatedRequest req = new UsersDeleteGpgKeyForAuthenticatedRequest(68093L);            

            UsersDeleteGpgKeyForAuthenticatedResponse res = sdk.users.usersDeleteGpgKeyForAuthenticated(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersDeletePublicSshKeyForAuthenticated

Removes a public SSH key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:public_key` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#delete-a-public-ssh-key-for-the-authenticated-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersDeletePublicSshKeyForAuthenticatedRequest;
import org.openapis.openapi.models.operations.UsersDeletePublicSshKeyForAuthenticatedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersDeletePublicSshKeyForAuthenticatedRequest req = new UsersDeletePublicSshKeyForAuthenticatedRequest(72754L);            

            UsersDeletePublicSshKeyForAuthenticatedResponse res = sdk.users.usersDeletePublicSshKeyForAuthenticated(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersFollow

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#http-verbs)."

Following a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#follow-a-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersFollowRequest;
import org.openapis.openapi.models.operations.UsersFollowResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersFollowRequest req = new UsersFollowRequest("hic");            

            UsersFollowResponse res = sdk.users.usersFollow(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersGetAuthenticated

If the authenticated user is authenticated through basic authentication or OAuth with the `user` scope, then the response lists public and private profile information.

If the authenticated user is authenticated through OAuth without the `user` scope, then the response lists only public profile information.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#get-the-authenticated-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersGetAuthenticatedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersGetAuthenticatedResponse res = sdk.users.usersGetAuthenticated();

            if (res.usersGetAuthenticated200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersGetByUsername

Provides publicly available information about someone with a GitHub account.

GitHub Apps with the `Plan` user permission can use this endpoint to retrieve information about a user's GitHub Enterprise Server plan. The GitHub App must be authenticated as a user. See "[Identifying and authorizing users for GitHub Apps](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)" for details about authentication. For an example response, see 'Response with GitHub Enterprise Server plan information' below"

The `email` key in the following response is the publicly visible email address from your GitHub Enterprise Server [profile page](https://github.com/settings/profile). When setting up your profile, you can select a primary email address to be “public” which provides an email entry for this endpoint. If you do not set a public email address for `email`, then it will have a value of `null`. You only see publicly visible email addresses when authenticated with GitHub Enterprise Server. For more information, see [Authentication](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#authentication).

The Emails API enables you to list all of your email addresses, and toggle a primary email to be visible publicly. For more information, see "[Emails API](https://docs.github.com/enterprise-server@2.19/rest/reference/users#emails)".

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#get-a-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersGetByUsernameRequest;
import org.openapis.openapi.models.operations.UsersGetByUsernameResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersGetByUsernameRequest req = new UsersGetByUsernameRequest("deserunt");            

            UsersGetByUsernameResponse res = sdk.users.usersGetByUsername(req);

            if (res.usersGetByUsername200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersGetContextForUser

Provides hovercard information when authenticated through basic auth or OAuth with the `repo` scope. You can find out more about someone in relation to their pull requests, issues, repositories, and organizations.

The `subject_type` and `subject_id` parameters provide context for the person's hovercard, which returns more information than without the parameters. For example, if you wanted to find out more about `octocat` who owns the `Spoon-Knife` repository via cURL, it would look like this:

```shell
 curl -u username:token
  https://api.github.com/users/octocat/hovercard?subject_type=repository&subject_id=1300192
```

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#get-contextual-information-for-a-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersGetContextForUserRequest;
import org.openapis.openapi.models.operations.UsersGetContextForUserResponse;
import org.openapis.openapi.models.operations.UsersGetContextForUserSubjectTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersGetContextForUserRequest req = new UsersGetContextForUserRequest("delectus") {{
                subjectId = "non";
                subjectType = UsersGetContextForUserSubjectTypeEnum.ISSUE;
            }};            

            UsersGetContextForUserResponse res = sdk.users.usersGetContextForUser(req);

            if (res.hovercard != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersGetGpgKeyForAuthenticated

View extended details for a single GPG key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#get-a-gpg-key-for-the-authenticated-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersGetGpgKeyForAuthenticatedRequest;
import org.openapis.openapi.models.operations.UsersGetGpgKeyForAuthenticatedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersGetGpgKeyForAuthenticatedRequest req = new UsersGetGpgKeyForAuthenticatedRequest(450224L);            

            UsersGetGpgKeyForAuthenticatedResponse res = sdk.users.usersGetGpgKeyForAuthenticated(req);

            if (res.gpgKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersGetPublicSshKeyForAuthenticated

View extended details for a single public SSH key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#get-a-public-ssh-key-for-the-authenticated-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersGetPublicSshKeyForAuthenticatedRequest;
import org.openapis.openapi.models.operations.UsersGetPublicSshKeyForAuthenticatedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersGetPublicSshKeyForAuthenticatedRequest req = new UsersGetPublicSshKeyForAuthenticatedRequest(349993L);            

            UsersGetPublicSshKeyForAuthenticatedResponse res = sdk.users.usersGetPublicSshKeyForAuthenticated(req);

            if (res.key != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersList

Lists all users, in the order that they signed up on GitHub Enterprise Server. This list includes personal user accounts and organization accounts.

Note: Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of users.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#list-users>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersListRequest;
import org.openapis.openapi.models.operations.UsersListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersListRequest req = new UsersListRequest() {{
                perPage = 288300L;
                since = 254382L;
            }};            

            UsersListResponse res = sdk.users.usersList(req);

            if (res.simpleUsers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersListEmailsForAuthenticated

Lists all of your email addresses, and specifies which one is visible to the public. This endpoint is accessible with the `user:email` scope.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#list-email-addresses-for-the-authenticated-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersListEmailsForAuthenticatedRequest;
import org.openapis.openapi.models.operations.UsersListEmailsForAuthenticatedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersListEmailsForAuthenticatedRequest req = new UsersListEmailsForAuthenticatedRequest() {{
                page = 921193L;
                perPage = 265303L;
            }};            

            UsersListEmailsForAuthenticatedResponse res = sdk.users.usersListEmailsForAuthenticated(req);

            if (res.emails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersListFollowedByAuthenticated

Lists the people who the authenticated user follows.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#list-the-people-the-authenticated-user-follows>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersListFollowedByAuthenticatedRequest;
import org.openapis.openapi.models.operations.UsersListFollowedByAuthenticatedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersListFollowedByAuthenticatedRequest req = new UsersListFollowedByAuthenticatedRequest() {{
                page = 450209L;
                perPage = 127294L;
            }};            

            UsersListFollowedByAuthenticatedResponse res = sdk.users.usersListFollowedByAuthenticated(req);

            if (res.simpleUsers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersListFollowersForAuthenticatedUser

Lists the people following the authenticated user.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#list-followers-of-the-authenticated-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersListFollowersForAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.UsersListFollowersForAuthenticatedUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersListFollowersForAuthenticatedUserRequest req = new UsersListFollowersForAuthenticatedUserRequest() {{
                page = 879857L;
                perPage = 525809L;
            }};            

            UsersListFollowersForAuthenticatedUserResponse res = sdk.users.usersListFollowersForAuthenticatedUser(req);

            if (res.simpleUsers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersListFollowersForUser

Lists the people following the specified user.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#list-followers-of-a-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersListFollowersForUserRequest;
import org.openapis.openapi.models.operations.UsersListFollowersForUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersListFollowersForUserRequest req = new UsersListFollowersForUserRequest("aperiam") {{
                page = 141817L;
                perPage = 535802L;
            }};            

            UsersListFollowersForUserResponse res = sdk.users.usersListFollowersForUser(req);

            if (res.simpleUsers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersListFollowingForUser

Lists the people who the specified user follows.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#list-the-people-a-user-follows>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersListFollowingForUserRequest;
import org.openapis.openapi.models.operations.UsersListFollowingForUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersListFollowingForUserRequest req = new UsersListFollowingForUserRequest("enim") {{
                page = 452730L;
                perPage = 626707L;
            }};            

            UsersListFollowingForUserResponse res = sdk.users.usersListFollowingForUser(req);

            if (res.simpleUsers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersListGpgKeysForAuthenticated

Lists the current user's GPG keys. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#list-gpg-keys-for-the-authenticated-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersListGpgKeysForAuthenticatedRequest;
import org.openapis.openapi.models.operations.UsersListGpgKeysForAuthenticatedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersListGpgKeysForAuthenticatedRequest req = new UsersListGpgKeysForAuthenticatedRequest() {{
                page = 326118L;
                perPage = 727544L;
            }};            

            UsersListGpgKeysForAuthenticatedResponse res = sdk.users.usersListGpgKeysForAuthenticated(req);

            if (res.gpgKeys != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersListGpgKeysForUser

Lists the GPG keys for a user. This information is accessible by anyone.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#list-gpg-keys-for-a-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersListGpgKeysForUserRequest;
import org.openapis.openapi.models.operations.UsersListGpgKeysForUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersListGpgKeysForUserRequest req = new UsersListGpgKeysForUserRequest("magnam") {{
                page = 24272L;
                perPage = 266788L;
            }};            

            UsersListGpgKeysForUserResponse res = sdk.users.usersListGpgKeysForUser(req);

            if (res.gpgKeys != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersListPublicEmailsForAuthenticated

Lists your publicly visible email address, which you can set with the [Set primary email visibility for the authenticated user](https://docs.github.com/enterprise-server@2.19/rest/reference/users#set-primary-email-visibility-for-the-authenticated-user) endpoint. This endpoint is accessible with the `user:email` scope.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#list-public-email-addresses-for-the-authenticated-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersListPublicEmailsForAuthenticatedRequest;
import org.openapis.openapi.models.operations.UsersListPublicEmailsForAuthenticatedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersListPublicEmailsForAuthenticatedRequest req = new UsersListPublicEmailsForAuthenticatedRequest() {{
                page = 430116L;
                perPage = 199529L;
            }};            

            UsersListPublicEmailsForAuthenticatedResponse res = sdk.users.usersListPublicEmailsForAuthenticated(req);

            if (res.emails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersListPublicKeysForUser

Lists the _verified_ public SSH keys for a user. This is accessible by anyone.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#list-public-keys-for-a-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersListPublicKeysForUserRequest;
import org.openapis.openapi.models.operations.UsersListPublicKeysForUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersListPublicKeysForUserRequest req = new UsersListPublicKeysForUserRequest("mollitia") {{
                page = 492632L;
                perPage = 853246L;
            }};            

            UsersListPublicKeysForUserResponse res = sdk.users.usersListPublicKeysForUser(req);

            if (res.keySimples != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersListPublicSshKeysForAuthenticated

Lists the public SSH keys for the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#list-public-ssh-keys-for-the-authenticated-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersListPublicSshKeysForAuthenticatedRequest;
import org.openapis.openapi.models.operations.UsersListPublicSshKeysForAuthenticatedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersListPublicSshKeysForAuthenticatedRequest req = new UsersListPublicSshKeysForAuthenticatedRequest() {{
                page = 345138L;
                perPage = 475325L;
            }};            

            UsersListPublicSshKeysForAuthenticatedResponse res = sdk.users.usersListPublicSshKeysForAuthenticated(req);

            if (res.keys != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersUnfollow

Unfollowing a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#unfollow-a-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersUnfollowRequest;
import org.openapis.openapi.models.operations.UsersUnfollowResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersUnfollowRequest req = new UsersUnfollowRequest("veniam");            

            UsersUnfollowResponse res = sdk.users.usersUnfollow(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersUpdateAuthenticated

**Note:** If your email is set to private and you send an `email` parameter as part of this request to update your profile, your privacy settings are still enforced: the email address will not be displayed on your public profile or via the API.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users/#update-the-authenticated-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersUpdateAuthenticatedRequestBody;
import org.openapis.openapi.models.operations.UsersUpdateAuthenticatedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersUpdateAuthenticatedRequestBody req = new UsersUpdateAuthenticatedRequestBody() {{
                bio = "reiciendis";
                blog = "blog.example.com";
                company = "Acme corporation";
                email = "omar@example.com";
                hireable = false;
                location = "Berlin, Germany";
                name = "Omar Jahandar";
                twitterUsername = "therealomarj";
            }};            

            UsersUpdateAuthenticatedResponse res = sdk.users.usersUpdateAuthenticated(req);

            if (res.privateUser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
