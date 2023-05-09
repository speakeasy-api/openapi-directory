# User

## Overview

user

### Available Operations

* [UserGetAvailableThemes](#usergetavailablethemes) - Returns a list of all available user themes.
* [UserGetBungieNetUserByID](#usergetbungienetuserbyid) - Loads a bungienet user by membership id.
* [UserGetCredentialTypesForTargetAccount](#usergetcredentialtypesfortargetaccount) - Returns a list of credential types attached to the requested account
* [UserGetMembershipDataByID](#usergetmembershipdatabyid) - Returns a list of accounts associated with the supplied membership ID and membership type. This will include all linked accounts (even when hidden) if supplied credentials permit it.
* [UserGetMembershipDataForCurrentUser](#usergetmembershipdataforcurrentuser) - Returns a list of accounts associated with signed in user. This is useful for OAuth implementations that do not give you access to the token response.
* [UserGetMembershipFromHardLinkedCredential](#usergetmembershipfromhardlinkedcredential) - Gets any hard linked membership given a credential. Only works for credentials that are public (just SteamID64 right now). Cross Save aware.
* [UserGetSanitizedPlatformDisplayNames](#usergetsanitizedplatformdisplaynames) - Gets a list of all display names linked to this membership id but sanitized (profanity filtered). Obeys all visibility rules of calling user and is heavily cached.
* [UserSearchByGlobalNamePost](#usersearchbyglobalnamepost) - Given the prefix of a global display name, returns all users who share that name.
* [UserSearchByGlobalNamePrefix](#usersearchbyglobalnameprefix) - [OBSOLETE] Do not use this to search users, use SearchByGlobalNamePost instead.

## UserGetAvailableThemes

Returns a list of all available user themes.

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
    res, err := s.User.UserGetAvailableThemes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UserGetBungieNetUserByID

Loads a bungienet user by membership id.

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
    res, err := s.User.UserGetBungieNetUserByID(ctx, operations.UserGetBungieNetUserByIDRequest{
        ID: 537023,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UserGetCredentialTypesForTargetAccount

Returns a list of credential types attached to the requested account

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
    res, err := s.User.UserGetCredentialTypesForTargetAccount(ctx, operations.UserGetCredentialTypesForTargetAccountRequest{
        MembershipID: 703889,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UserGetMembershipDataByID

Returns a list of accounts associated with the supplied membership ID and membership type. This will include all linked accounts (even when hidden) if supplied credentials permit it.

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
    res, err := s.User.UserGetMembershipDataByID(ctx, operations.UserGetMembershipDataByIDRequest{
        MembershipID: 447926,
        MembershipType: 100226,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UserGetMembershipDataForCurrentUser

Returns a list of accounts associated with signed in user. This is useful for OAuth implementations that do not give you access to the token response.

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
    res, err := s.User.UserGetMembershipDataForCurrentUser(ctx, operations.UserGetMembershipDataForCurrentUserSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UserGetMembershipFromHardLinkedCredential

Gets any hard linked membership given a credential. Only works for credentials that are public (just SteamID64 right now). Cross Save aware.

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
    res, err := s.User.UserGetMembershipFromHardLinkedCredential(ctx, operations.UserGetMembershipFromHardLinkedCredentialRequest{
        CrType: 99569,
        Credential: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UserGetSanitizedPlatformDisplayNames

Gets a list of all display names linked to this membership id but sanitized (profanity filtered). Obeys all visibility rules of calling user and is heavily cached.

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
    res, err := s.User.UserGetSanitizedPlatformDisplayNames(ctx, operations.UserGetSanitizedPlatformDisplayNamesRequest{
        MembershipID: 352312,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UserSearchByGlobalNamePost

Given the prefix of a global display name, returns all users who share that name.

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
    res, err := s.User.UserSearchByGlobalNamePost(ctx, operations.UserSearchByGlobalNamePostRequest{
        Page: 714242,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UserSearchByGlobalNamePrefix

[OBSOLETE] Do not use this to search users, use SearchByGlobalNamePost instead.

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
    res, err := s.User.UserSearchByGlobalNamePrefix(ctx, operations.UserSearchByGlobalNamePrefixRequest{
        DisplayNamePrefix: "nihil",
        Page: 998848,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
