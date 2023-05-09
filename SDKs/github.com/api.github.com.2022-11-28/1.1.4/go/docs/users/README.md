# Users

## Overview

Interact with and view information about users and also current user.

### Available Operations

* [UsersAddEmailForAuthenticatedUser](#usersaddemailforauthenticateduser) - Add an email address for the authenticated user
* [UsersBlock](#usersblock) - Block a user
* [UsersCheckBlocked](#userscheckblocked) - Check if a user is blocked by the authenticated user
* [UsersCheckFollowingForUser](#userscheckfollowingforuser) - Check if a user follows another user
* [UsersCheckPersonIsFollowedByAuthenticated](#userscheckpersonisfollowedbyauthenticated) - Check if a person is followed by the authenticated user
* [UsersCreateGpgKeyForAuthenticatedUser](#userscreategpgkeyforauthenticateduser) - Create a GPG key for the authenticated user
* [UsersCreatePublicSSHKeyForAuthenticatedUser](#userscreatepublicsshkeyforauthenticateduser) - Create a public SSH key for the authenticated user
* [UsersCreateSSHSigningKeyForAuthenticatedUser](#userscreatesshsigningkeyforauthenticateduser) - Create a SSH signing key for the authenticated user
* [UsersDeleteEmailForAuthenticatedUser](#usersdeleteemailforauthenticateduser) - Delete an email address for the authenticated user
* [UsersDeleteGpgKeyForAuthenticatedUser](#usersdeletegpgkeyforauthenticateduser) - Delete a GPG key for the authenticated user
* [UsersDeletePublicSSHKeyForAuthenticatedUser](#usersdeletepublicsshkeyforauthenticateduser) - Delete a public SSH key for the authenticated user
* [UsersDeleteSSHSigningKeyForAuthenticatedUser](#usersdeletesshsigningkeyforauthenticateduser) - Delete an SSH signing key for the authenticated user
* [UsersFollow](#usersfollow) - Follow a user
* [UsersGetAuthenticated](#usersgetauthenticated) - Get the authenticated user
* [UsersGetByUsername](#usersgetbyusername) - Get a user
* [UsersGetContextForUser](#usersgetcontextforuser) - Get contextual information for a user
* [UsersGetGpgKeyForAuthenticatedUser](#usersgetgpgkeyforauthenticateduser) - Get a GPG key for the authenticated user
* [UsersGetPublicSSHKeyForAuthenticatedUser](#usersgetpublicsshkeyforauthenticateduser) - Get a public SSH key for the authenticated user
* [UsersGetSSHSigningKeyForAuthenticatedUser](#usersgetsshsigningkeyforauthenticateduser) - Get an SSH signing key for the authenticated user
* [UsersList](#userslist) - List users
* [UsersListBlockedByAuthenticatedUser](#userslistblockedbyauthenticateduser) - List users blocked by the authenticated user
* [UsersListEmailsForAuthenticatedUser](#userslistemailsforauthenticateduser) - List email addresses for the authenticated user
* [UsersListFollowedByAuthenticatedUser](#userslistfollowedbyauthenticateduser) - List the people the authenticated user follows
* [UsersListFollowersForAuthenticatedUser](#userslistfollowersforauthenticateduser) - List followers of the authenticated user
* [UsersListFollowersForUser](#userslistfollowersforuser) - List followers of a user
* [UsersListFollowingForUser](#userslistfollowingforuser) - List the people a user follows
* [UsersListGpgKeysForAuthenticatedUser](#userslistgpgkeysforauthenticateduser) - List GPG keys for the authenticated user
* [UsersListGpgKeysForUser](#userslistgpgkeysforuser) - List GPG keys for a user
* [UsersListPublicEmailsForAuthenticatedUser](#userslistpublicemailsforauthenticateduser) - List public email addresses for the authenticated user
* [UsersListPublicKeysForUser](#userslistpublickeysforuser) - List public keys for a user
* [UsersListPublicSSHKeysForAuthenticatedUser](#userslistpublicsshkeysforauthenticateduser) - List public SSH keys for the authenticated user
* [UsersListSSHSigningKeysForAuthenticatedUser](#userslistsshsigningkeysforauthenticateduser) - List SSH signing keys for the authenticated user
* [UsersListSSHSigningKeysForUser](#userslistsshsigningkeysforuser) - List SSH signing keys for a user
* [UsersSetPrimaryEmailVisibilityForAuthenticatedUser](#userssetprimaryemailvisibilityforauthenticateduser) - Set primary email visibility for the authenticated user
* [UsersUnblock](#usersunblock) - Unblock a user
* [UsersUnfollow](#usersunfollow) - Unfollow a user
* [UsersUpdateAuthenticated](#usersupdateauthenticated) - Update the authenticated user

## UsersAddEmailForAuthenticatedUser

This endpoint is accessible with the `user` scope.

API method documentation
<https://docs.github.com/rest/reference/users#add-an-email-address-for-the-authenticated-user>

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
    res, err := s.Users.UsersAddEmailForAuthenticatedUser(ctx, operations.UsersAddEmailForAuthenticatedUserRequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.Emails != nil {
        // handle response
    }
}
```

## UsersBlock

Block a user

API method documentation
<https://docs.github.com/rest/reference/users#block-a-user>

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
    res, err := s.Users.UsersBlock(ctx, operations.UsersBlockRequest{
        Username: "Jon88",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UsersCheckBlocked

Check if a user is blocked by the authenticated user

API method documentation
<https://docs.github.com/rest/reference/users#check-if-a-user-is-blocked-by-the-authenticated-user>

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
    res, err := s.Users.UsersCheckBlocked(ctx, operations.UsersCheckBlockedRequest{
        Username: "Sadye_Waelchi31",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UsersCheckFollowingForUser

Check if a user follows another user

API method documentation
<https://docs.github.com/rest/reference/users#check-if-a-user-follows-another-user>

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
        TargetUser: "animi",
        Username: "Lawrence.Berge",
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
<https://docs.github.com/rest/reference/users#check-if-a-person-is-followed-by-the-authenticated-user>

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
        Username: "Sylvester50",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UsersCreateGpgKeyForAuthenticatedUser

Adds a GPG key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:gpg_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/rest/reference/users#create-a-gpg-key-for-the-authenticated-user>

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
    res, err := s.Users.UsersCreateGpgKeyForAuthenticatedUser(ctx, operations.UsersCreateGpgKeyForAuthenticatedUserRequestBody{
        ArmoredPublicKey: "quidem",
        Name: sdk.String("Dominick Schowalter I"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GpgKey != nil {
        // handle response
    }
}
```

## UsersCreatePublicSSHKeyForAuthenticatedUser

Adds a public SSH key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:public_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/rest/reference/users#create-a-public-ssh-key-for-the-authenticated-user>

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
    res, err := s.Users.UsersCreatePublicSSHKeyForAuthenticatedUser(ctx, operations.UsersCreatePublicSSHKeyForAuthenticatedUserRequestBody{
        Key: "quia",
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

## UsersCreateSSHSigningKeyForAuthenticatedUser

Creates an SSH signing key for the authenticated user's GitHub account. You must authenticate with Basic Authentication, or you must authenticate with OAuth with at least `write:ssh_signing_key` scope. For more information, see "[Understanding scopes for OAuth apps](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)."

API method documentation
<https://docs.github.com/rest/reference/users#create-an-ssh-signing-key-for-the-authenticated-user>

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
    res, err := s.Users.UsersCreateSSHSigningKeyForAuthenticatedUser(ctx, operations.UsersCreateSSHSigningKeyForAuthenticatedUserRequestBody{
        Key: "quidem",
        Title: sdk.String("Personal MacBook Air"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SSHSigningKey != nil {
        // handle response
    }
}
```

## UsersDeleteEmailForAuthenticatedUser

This endpoint is accessible with the `user` scope.

API method documentation
<https://docs.github.com/rest/reference/users#delete-an-email-address-for-the-authenticated-user>

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
    res, err := s.Users.UsersDeleteEmailForAuthenticatedUser(ctx, operations.UsersDeleteEmailForAuthenticatedUserRequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UsersDeleteGpgKeyForAuthenticatedUser

Removes a GPG key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:gpg_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/rest/reference/users#delete-a-gpg-key-for-the-authenticated-user>

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
    res, err := s.Users.UsersDeleteGpgKeyForAuthenticatedUser(ctx, operations.UsersDeleteGpgKeyForAuthenticatedUserRequest{
        GpgKeyID: 377161,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UsersDeletePublicSSHKeyForAuthenticatedUser

Removes a public SSH key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:public_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/rest/reference/users#delete-a-public-ssh-key-for-the-authenticated-user>

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
    res, err := s.Users.UsersDeletePublicSSHKeyForAuthenticatedUser(ctx, operations.UsersDeletePublicSSHKeyForAuthenticatedUserRequest{
        KeyID: 779154,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UsersDeleteSSHSigningKeyForAuthenticatedUser

Deletes an SSH signing key from the authenticated user's GitHub account. You must authenticate with Basic Authentication, or you must authenticate with OAuth with at least `admin:ssh_signing_key` scope. For more information, see "[Understanding scopes for OAuth apps](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)."

API method documentation
<https://docs.github.com/rest/reference/users#delete-a-ssh-signing-key-for-the-authenticated-user>

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
    res, err := s.Users.UsersDeleteSSHSigningKeyForAuthenticatedUser(ctx, operations.UsersDeleteSSHSigningKeyForAuthenticatedUserRequest{
        SSHSigningKeyID: 512017,
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

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."

Following a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.

API method documentation
<https://docs.github.com/rest/reference/users#follow-a-user>

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
        Username: "Jennings.Mohr",
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
<https://docs.github.com/rest/reference/users#get-the-authenticated-user>

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

GitHub Apps with the `Plan` user permission can use this endpoint to retrieve information about a user's GitHub plan. The GitHub App must be authenticated as a user. See "[Identifying and authorizing users for GitHub Apps](https://docs.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)" for details about authentication. For an example response, see 'Response with GitHub plan information' below"

The `email` key in the following response is the publicly visible email address from your GitHub [profile page](https://github.com/settings/profile). When setting up your profile, you can select a primary email address to be “public” which provides an email entry for this endpoint. If you do not set a public email address for `email`, then it will have a value of `null`. You only see publicly visible email addresses when authenticated with GitHub. For more information, see [Authentication](https://docs.github.com/rest/overview/resources-in-the-rest-api#authentication).

The Emails API enables you to list all of your email addresses, and toggle a primary email to be visible publicly. For more information, see "[Emails API](https://docs.github.com/rest/reference/users#emails)".

API method documentation
<https://docs.github.com/rest/reference/users#get-a-user>

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
        Username: "Craig_Predovic",
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
<https://docs.github.com/rest/reference/users#get-contextual-information-for-a-user>

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
        SubjectID: sdk.String("vitae"),
        SubjectType: operations.UsersGetContextForUserSubjectTypeEnumOrganization.ToPointer(),
        Username: "Emmitt98",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Hovercard != nil {
        // handle response
    }
}
```

## UsersGetGpgKeyForAuthenticatedUser

View extended details for a single GPG key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/rest/reference/users#get-a-gpg-key-for-the-authenticated-user>

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
    res, err := s.Users.UsersGetGpgKeyForAuthenticatedUser(ctx, operations.UsersGetGpgKeyForAuthenticatedUserRequest{
        GpgKeyID: 444625,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GpgKey != nil {
        // handle response
    }
}
```

## UsersGetPublicSSHKeyForAuthenticatedUser

View extended details for a single public SSH key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/rest/reference/users#get-a-public-ssh-key-for-the-authenticated-user>

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
    res, err := s.Users.UsersGetPublicSSHKeyForAuthenticatedUser(ctx, operations.UsersGetPublicSSHKeyForAuthenticatedUserRequest{
        KeyID: 644129,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Key != nil {
        // handle response
    }
}
```

## UsersGetSSHSigningKeyForAuthenticatedUser

Gets extended details for an SSH signing key. You must authenticate with Basic Authentication, or you must authenticate with OAuth with at least `read:ssh_signing_key` scope. For more information, see "[Understanding scopes for OAuth apps](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)."

API method documentation
<https://docs.github.com/rest/reference/users#get-a-ssh-signing-key-for-the-authenticated-user>

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
    res, err := s.Users.UsersGetSSHSigningKeyForAuthenticatedUser(ctx, operations.UsersGetSSHSigningKeyForAuthenticatedUserRequest{
        SSHSigningKeyID: 930127,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SSHSigningKey != nil {
        // handle response
    }
}
```

## UsersList

Lists all users, in the order that they signed up on GitHub. This list includes personal user accounts and organization accounts.

Note: Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of users.

API method documentation
<https://docs.github.com/rest/reference/users#list-users>

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
        PerPage: sdk.Int64(93254),
        Since: sdk.Int64(181267),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## UsersListBlockedByAuthenticatedUser

List the users you've blocked on your personal account.

API method documentation
<https://docs.github.com/rest/reference/users#list-users-blocked-by-the-authenticated-user>

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
    res, err := s.Users.UsersListBlockedByAuthenticatedUser(ctx, operations.UsersListBlockedByAuthenticatedUserRequest{
        Page: sdk.Int64(773355),
        PerPage: sdk.Int64(401388),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## UsersListEmailsForAuthenticatedUser

Lists all of your email addresses, and specifies which one is visible to the public. This endpoint is accessible with the `user:email` scope.

API method documentation
<https://docs.github.com/rest/reference/users#list-email-addresses-for-the-authenticated-user>

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
    res, err := s.Users.UsersListEmailsForAuthenticatedUser(ctx, operations.UsersListEmailsForAuthenticatedUserRequest{
        Page: sdk.Int64(507874),
        PerPage: sdk.Int64(615597),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Emails != nil {
        // handle response
    }
}
```

## UsersListFollowedByAuthenticatedUser

Lists the people who the authenticated user follows.

API method documentation
<https://docs.github.com/rest/reference/users#list-the-people-the-authenticated-user-follows>

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
    res, err := s.Users.UsersListFollowedByAuthenticatedUser(ctx, operations.UsersListFollowedByAuthenticatedUserRequest{
        Page: sdk.Int64(112014),
        PerPage: sdk.Int64(946558),
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
<https://docs.github.com/rest/reference/users#list-followers-of-the-authenticated-user>

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
        Page: sdk.Int64(515153),
        PerPage: sdk.Int64(133148),
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
<https://docs.github.com/rest/reference/users#list-followers-of-a-user>

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
        Page: sdk.Int64(755240),
        PerPage: sdk.Int64(917877),
        Username: "Bianka.Bode",
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
<https://docs.github.com/rest/reference/users#list-the-people-a-user-follows>

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
        Page: sdk.Int64(82396),
        PerPage: sdk.Int64(454590),
        Username: "Camron34",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## UsersListGpgKeysForAuthenticatedUser

Lists the current user's GPG keys. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/rest/reference/users#list-gpg-keys-for-the-authenticated-user>

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
    res, err := s.Users.UsersListGpgKeysForAuthenticatedUser(ctx, operations.UsersListGpgKeysForAuthenticatedUserRequest{
        Page: sdk.Int64(226143),
        PerPage: sdk.Int64(454165),
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
<https://docs.github.com/rest/reference/users#list-gpg-keys-for-a-user>

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
        Page: sdk.Int64(454232),
        PerPage: sdk.Int64(865212),
        Username: "Pauline_Wilkinson58",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GpgKeys != nil {
        // handle response
    }
}
```

## UsersListPublicEmailsForAuthenticatedUser

Lists your publicly visible email address, which you can set with the [Set primary email visibility for the authenticated user](https://docs.github.com/rest/reference/users#set-primary-email-visibility-for-the-authenticated-user) endpoint. This endpoint is accessible with the `user:email` scope.

API method documentation
<https://docs.github.com/rest/reference/users#list-public-email-addresses-for-the-authenticated-user>

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
    res, err := s.Users.UsersListPublicEmailsForAuthenticatedUser(ctx, operations.UsersListPublicEmailsForAuthenticatedUserRequest{
        Page: sdk.Int64(870100),
        PerPage: sdk.Int64(986594),
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
<https://docs.github.com/rest/reference/users#list-public-keys-for-a-user>

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
        Page: sdk.Int64(608172),
        PerPage: sdk.Int64(463695),
        Username: "Favian33",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KeySimples != nil {
        // handle response
    }
}
```

## UsersListPublicSSHKeysForAuthenticatedUser

Lists the public SSH keys for the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/rest/reference/users#list-public-ssh-keys-for-the-authenticated-user>

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
    res, err := s.Users.UsersListPublicSSHKeysForAuthenticatedUser(ctx, operations.UsersListPublicSSHKeysForAuthenticatedUserRequest{
        Page: sdk.Int64(413135),
        PerPage: sdk.Int64(426481),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Keys != nil {
        // handle response
    }
}
```

## UsersListSSHSigningKeysForAuthenticatedUser

Lists the SSH signing keys for the authenticated user's GitHub account. You must authenticate with Basic Authentication, or you must authenticate with OAuth with at least `read:ssh_signing_key` scope. For more information, see "[Understanding scopes for OAuth apps](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)."

API method documentation
<https://docs.github.com/rest/reference/users#list-public-ssh-signing-keys-for-the-authenticated-user>

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
    res, err := s.Users.UsersListSSHSigningKeysForAuthenticatedUser(ctx, operations.UsersListSSHSigningKeysForAuthenticatedUserRequest{
        Page: sdk.Int64(522824),
        PerPage: sdk.Int64(397268),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SSHSigningKeys != nil {
        // handle response
    }
}
```

## UsersListSSHSigningKeysForUser

Lists the SSH signing keys for a user. This operation is accessible by anyone.

API method documentation
<https://docs.github.com/rest/reference/users#list-ssh-signing-keys-for-a-user>

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
    res, err := s.Users.UsersListSSHSigningKeysForUser(ctx, operations.UsersListSSHSigningKeysForUserRequest{
        Page: sdk.Int64(44443),
        PerPage: sdk.Int64(596820),
        Username: "Buster_Waters",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SSHSigningKeys != nil {
        // handle response
    }
}
```

## UsersSetPrimaryEmailVisibilityForAuthenticatedUser

Sets the visibility for your primary email addresses.

API method documentation
<https://docs.github.com/rest/reference/users#set-primary-email-visibility-for-the-authenticated-user>

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
    res, err := s.Users.UsersSetPrimaryEmailVisibilityForAuthenticatedUser(ctx, operations.UsersSetPrimaryEmailVisibilityForAuthenticatedUserRequestBody{
        Visibility: operations.UsersSetPrimaryEmailVisibilityForAuthenticatedUserRequestBodyVisibilityEnumPublic,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Emails != nil {
        // handle response
    }
}
```

## UsersUnblock

Unblock a user

API method documentation
<https://docs.github.com/rest/reference/users#unblock-a-user>

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
    res, err := s.Users.UsersUnblock(ctx, operations.UsersUnblockRequest{
        Username: "Robert.Smitham95",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UsersUnfollow

Unfollowing a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.

API method documentation
<https://docs.github.com/rest/reference/users#unfollow-a-user>

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
        Username: "Belle81",
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
<https://docs.github.com/rest/reference/users/#update-the-authenticated-user>

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
        Bio: sdk.String("earum"),
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
