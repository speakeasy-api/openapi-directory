# Users

## Overview

Interact with and view information about users and also current user.

### Available Operations

* [UsersAddEmailForAuthenticated](#usersaddemailforauthenticated) - Add an email address for the authenticated user
* [UsersCheckFollowingForUser](#userscheckfollowingforuser) - Check if a user follows another user
* [UsersCheckPersonIsFollowedByAuthenticated](#userscheckpersonisfollowedbyauthenticated) - Check if a person is followed by the authenticated user
* [UsersCreateGpgKeyForAuthenticated](#userscreategpgkeyforauthenticated) - Create a GPG key for the authenticated user
* [UsersCreatePublicSSHKeyForAuthenticated](#userscreatepublicsshkeyforauthenticated) - Create a public SSH key for the authenticated user
* [UsersDeleteEmailForAuthenticated](#usersdeleteemailforauthenticated) - Delete an email address for the authenticated user
* [UsersDeleteGpgKeyForAuthenticated](#usersdeletegpgkeyforauthenticated) - Delete a GPG key for the authenticated user
* [UsersDeletePublicSSHKeyForAuthenticated](#usersdeletepublicsshkeyforauthenticated) - Delete a public SSH key for the authenticated user
* [UsersFollow](#usersfollow) - Follow a user
* [UsersGetAuthenticated](#usersgetauthenticated) - Get the authenticated user
* [UsersGetByUsername](#usersgetbyusername) - Get a user
* [UsersGetContextForUser](#usersgetcontextforuser) - Get contextual information for a user
* [UsersGetGpgKeyForAuthenticated](#usersgetgpgkeyforauthenticated) - Get a GPG key for the authenticated user
* [UsersGetPublicSSHKeyForAuthenticated](#usersgetpublicsshkeyforauthenticated) - Get a public SSH key for the authenticated user
* [UsersList](#userslist) - List users
* [UsersListEmailsForAuthenticated](#userslistemailsforauthenticated) - List email addresses for the authenticated user
* [UsersListFollowedByAuthenticated](#userslistfollowedbyauthenticated) - List the people the authenticated user follows
* [UsersListFollowersForAuthenticatedUser](#userslistfollowersforauthenticateduser) - List followers of the authenticated user
* [UsersListFollowersForUser](#userslistfollowersforuser) - List followers of a user
* [UsersListFollowingForUser](#userslistfollowingforuser) - List the people a user follows
* [UsersListGpgKeysForAuthenticated](#userslistgpgkeysforauthenticated) - List GPG keys for the authenticated user
* [UsersListGpgKeysForUser](#userslistgpgkeysforuser) - List GPG keys for a user
* [UsersListPublicEmailsForAuthenticated](#userslistpublicemailsforauthenticated) - List public email addresses for the authenticated user
* [UsersListPublicKeysForUser](#userslistpublickeysforuser) - List public keys for a user
* [UsersListPublicSSHKeysForAuthenticated](#userslistpublicsshkeysforauthenticated) - List public SSH keys for the authenticated user
* [UsersUnfollow](#usersunfollow) - Unfollow a user
* [UsersUpdateAuthenticated](#usersupdateauthenticated) - Update the authenticated user

## UsersAddEmailForAuthenticated

This endpoint is accessible with the `user` scope.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/users#add-an-email-address-for-the-authenticated-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.UsersAddEmailForAuthenticated(ctx, operations.UsersAddEmailForAuthenticatedRequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.Emails != nil {
        // handle response
    }
}
```

## UsersCheckFollowingForUser

Check if a user follows another user

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/users#check-if-a-user-follows-another-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.UsersCheckFollowingForUser(ctx, operations.UsersCheckFollowingForUserRequest{
        TargetUser: "nemo",
        Username: "Theresia49",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UsersCheckPersonIsFollowedByAuthenticated

Check if a person is followed by the authenticated user

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/users#check-if-a-person-is-followed-by-the-authenticated-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.UsersCheckPersonIsFollowedByAuthenticated(ctx, operations.UsersCheckPersonIsFollowedByAuthenticatedRequest{
        Username: "Gilda_Cremin",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UsersCreateGpgKeyForAuthenticated

Adds a GPG key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:gpg_key` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/users#create-a-gpg-key-for-the-authenticated-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.UsersCreateGpgKeyForAuthenticated(ctx, operations.UsersCreateGpgKeyForAuthenticatedRequestBody{
        ArmoredPublicKey: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GpgKey != nil {
        // handle response
    }
}
```

## UsersCreatePublicSSHKeyForAuthenticated

Adds a public SSH key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:public_key` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/users#create-a-public-ssh-key-for-the-authenticated-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.UsersCreatePublicSSHKeyForAuthenticated(ctx, operations.UsersCreatePublicSSHKeyForAuthenticatedRequestBody{
        Key: "cum",
        Title: sdk.String("Personal MacBook Air"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Key != nil {
        // handle response
    }
}
```

## UsersDeleteEmailForAuthenticated

This endpoint is accessible with the `user` scope.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/users#delete-an-email-address-for-the-authenticated-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.UsersDeleteEmailForAuthenticated(ctx, operations.UsersDeleteEmailForAuthenticatedRequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UsersDeleteGpgKeyForAuthenticated

Removes a GPG key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:gpg_key` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/users#delete-a-gpg-key-for-the-authenticated-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.UsersDeleteGpgKeyForAuthenticated(ctx, operations.UsersDeleteGpgKeyForAuthenticatedRequest{
        GpgKeyID: 983854,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UsersDeletePublicSSHKeyForAuthenticated

Removes a public SSH key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:public_key` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/users#delete-a-public-ssh-key-for-the-authenticated-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.UsersDeletePublicSSHKeyForAuthenticated(ctx, operations.UsersDeletePublicSSHKeyForAuthenticatedRequest{
        KeyID: 703966,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UsersFollow

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#http-verbs)."

Following a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/users#follow-a-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.UsersFollow(ctx, operations.UsersFollowRequest{
        Username: "Max_Waters",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UsersGetAuthenticated

If the authenticated user is authenticated through basic authentication or OAuth with the `user` scope, then the response lists public and private profile information.

If the authenticated user is authenticated through OAuth without the `user` scope, then the response lists only public profile information.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/users#get-the-authenticated-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.UsersGetAuthenticated(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.UsersGetAuthenticated200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## UsersGetByUsername

Provides publicly available information about someone with a GitHub account.

GitHub Apps with the `Plan` user permission can use this endpoint to retrieve information about a user's GitHub Enterprise Server plan. The GitHub App must be authenticated as a user. See "[Identifying and authorizing users for GitHub Apps](https://docs.github.com/enterprise-server@2.21/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)" for details about authentication. For an example response, see 'Response with GitHub Enterprise Server plan information' below"

The `email` key in the following response is the publicly visible email address from your GitHub Enterprise Server [profile page](https://github.com/settings/profile). When setting up your profile, you can select a primary email address to be “public” which provides an email entry for this endpoint. If you do not set a public email address for `email`, then it will have a value of `null`. You only see publicly visible email addresses when authenticated with GitHub Enterprise Server. For more information, see [Authentication](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#authentication).

The Emails API enables you to list all of your email addresses, and toggle a primary email to be visible publicly. For more information, see "[Emails API](https://docs.github.com/enterprise-server@2.21/rest/reference/users#emails)".

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/users#get-a-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.UsersGetByUsername(ctx, operations.UsersGetByUsernameRequest{
        Username: "Diana_Mertz13",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UsersGetByUsername200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## UsersGetContextForUser

Provides hovercard information when authenticated through basic auth or OAuth with the `repo` scope. You can find out more about someone in relation to their pull requests, issues, repositories, and organizations.

The `subject_type` and `subject_id` parameters provide context for the person's hovercard, which returns more information than without the parameters. For example, if you wanted to find out more about `octocat` who owns the `Spoon-Knife` repository via cURL, it would look like this:

```shell
 curl -u username:token
  https://api.github.com/users/octocat/hovercard?subject_type=repository&subject_id=1300192
```

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/users#get-contextual-information-for-a-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.UsersGetContextForUser(ctx, operations.UsersGetContextForUserRequest{
        SubjectID: sdk.String("libero"),
        SubjectType: operations.UsersGetContextForUserSubjectTypeEnumIssue.ToPointer(),
        Username: "Duncan_Walsh90",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Hovercard != nil {
        // handle response
    }
}
```

## UsersGetGpgKeyForAuthenticated

View extended details for a single GPG key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/users#get-a-gpg-key-for-the-authenticated-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.UsersGetGpgKeyForAuthenticated(ctx, operations.UsersGetGpgKeyForAuthenticatedRequest{
        GpgKeyID: 423054,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GpgKey != nil {
        // handle response
    }
}
```

## UsersGetPublicSSHKeyForAuthenticated

View extended details for a single public SSH key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/users#get-a-public-ssh-key-for-the-authenticated-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.UsersGetPublicSSHKeyForAuthenticated(ctx, operations.UsersGetPublicSSHKeyForAuthenticatedRequest{
        KeyID: 779409,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Key != nil {
        // handle response
    }
}
```

## UsersList

Lists all users, in the order that they signed up on GitHub Enterprise Server. This list includes personal user accounts and organization accounts.

Note: Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of users.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/users#list-users>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.UsersList(ctx, operations.UsersListRequest{
        PerPage: sdk.Int64(198991),
        Since: sdk.Int64(849383),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## UsersListEmailsForAuthenticated

Lists all of your email addresses, and specifies which one is visible to the public. This endpoint is accessible with the `user:email` scope.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/users#list-email-addresses-for-the-authenticated-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.UsersListEmailsForAuthenticated(ctx, operations.UsersListEmailsForAuthenticatedRequest{
        Page: sdk.Int64(367475),
        PerPage: sdk.Int64(848722),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Emails != nil {
        // handle response
    }
}
```

## UsersListFollowedByAuthenticated

Lists the people who the authenticated user follows.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/users#list-the-people-the-authenticated-user-follows>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.UsersListFollowedByAuthenticated(ctx, operations.UsersListFollowedByAuthenticatedRequest{
        Page: sdk.Int64(706872),
        PerPage: sdk.Int64(247618),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## UsersListFollowersForAuthenticatedUser

Lists the people following the authenticated user.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/users#list-followers-of-the-authenticated-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.UsersListFollowersForAuthenticatedUser(ctx, operations.UsersListFollowersForAuthenticatedUserRequest{
        Page: sdk.Int64(649534),
        PerPage: sdk.Int64(827051),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## UsersListFollowersForUser

Lists the people following the specified user.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/users#list-followers-of-a-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.UsersListFollowersForUser(ctx, operations.UsersListFollowersForUserRequest{
        Page: sdk.Int64(927977),
        PerPage: sdk.Int64(718981),
        Username: "Samson_Hand91",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## UsersListFollowingForUser

Lists the people who the specified user follows.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/users#list-the-people-a-user-follows>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.UsersListFollowingForUser(ctx, operations.UsersListFollowingForUserRequest{
        Page: sdk.Int64(673191),
        PerPage: sdk.Int64(276337),
        Username: "Priscilla37",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## UsersListGpgKeysForAuthenticated

Lists the current user's GPG keys. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/users#list-gpg-keys-for-the-authenticated-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.UsersListGpgKeysForAuthenticated(ctx, operations.UsersListGpgKeysForAuthenticatedRequest{
        Page: sdk.Int64(647210),
        PerPage: sdk.Int64(560451),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GpgKeys != nil {
        // handle response
    }
}
```

## UsersListGpgKeysForUser

Lists the GPG keys for a user. This information is accessible by anyone.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/users#list-gpg-keys-for-a-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.UsersListGpgKeysForUser(ctx, operations.UsersListGpgKeysForUserRequest{
        Page: sdk.Int64(672889),
        PerPage: sdk.Int64(668218),
        Username: "Kobe.Grant14",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GpgKeys != nil {
        // handle response
    }
}
```

## UsersListPublicEmailsForAuthenticated

Lists your publicly visible email address, which you can set with the [Set primary email visibility for the authenticated user](https://docs.github.com/enterprise-server@2.21/rest/reference/users#set-primary-email-visibility-for-the-authenticated-user) endpoint. This endpoint is accessible with the `user:email` scope.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/users#list-public-email-addresses-for-the-authenticated-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.UsersListPublicEmailsForAuthenticated(ctx, operations.UsersListPublicEmailsForAuthenticatedRequest{
        Page: sdk.Int64(399222),
        PerPage: sdk.Int64(301309),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Emails != nil {
        // handle response
    }
}
```

## UsersListPublicKeysForUser

Lists the _verified_ public SSH keys for a user. This is accessible by anyone.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/users#list-public-keys-for-a-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.UsersListPublicKeysForUser(ctx, operations.UsersListPublicKeysForUserRequest{
        Page: sdk.Int64(308528),
        PerPage: sdk.Int64(755868),
        Username: "Trystan_Heathcote86",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KeySimples != nil {
        // handle response
    }
}
```

## UsersListPublicSSHKeysForAuthenticated

Lists the public SSH keys for the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/users#list-public-ssh-keys-for-the-authenticated-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.UsersListPublicSSHKeysForAuthenticated(ctx, operations.UsersListPublicSSHKeysForAuthenticatedRequest{
        Page: sdk.Int64(621393),
        PerPage: sdk.Int64(653000),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Keys != nil {
        // handle response
    }
}
```

## UsersUnfollow

Unfollowing a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/users#unfollow-a-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.UsersUnfollow(ctx, operations.UsersUnfollowRequest{
        Username: "Elias_Heathcote",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UsersUpdateAuthenticated

**Note:** If your email is set to private and you send an `email` parameter as part of this request to update your profile, your privacy settings are still enforced: the email address will not be displayed on your public profile or via the API.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/users/#update-the-authenticated-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.UsersUpdateAuthenticated(ctx, operations.UsersUpdateAuthenticatedRequestBody{
        Bio: sdk.String("fuga"),
        Blog: sdk.String("blog.example.com"),
        Company: sdk.String("Acme corporation"),
        Email: sdk.String("omar@example.com"),
        Hireable: sdk.Bool(false),
        Location: sdk.String("Berlin, Germany"),
        Name: sdk.String("Omar Jahandar"),
        TwitterUsername: sdk.String("therealomarj"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PrivateUser != nil {
        // handle response
    }
}
```
