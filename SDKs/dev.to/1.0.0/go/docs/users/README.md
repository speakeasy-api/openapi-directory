# Users

### Available Operations

* [GetOrgUsers](#getorgusers) - Organization's users
* [GetUser](#getuser) - A User
* [GetUserAllArticles](#getuserallarticles) - User's all articles
* [GetUserArticles](#getuserarticles) - User's articles
* [GetUserMe](#getuserme) - The authenticated user
* [GetUserPublishedArticles](#getuserpublishedarticles) - User's published articles
* [GetUserUnpublishedArticles](#getuserunpublishedarticles) - User's unpublished articles
* [PostAdminUsersCreate](#postadminuserscreate) - Invite a User
* [SuspendUser](#suspenduser) - Suspend a User
* [UnpublishUser](#unpublishuser) - Unpublish a User's Articles and Comments

## GetOrgUsers

This endpoint allows the client to retrieve a list of users belonging to the organization

It supports pagination, each page will contain `30` users by default.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Users.GetOrgUsers(ctx, operations.GetOrgUsersRequest{
        Page: sdk.Int(837945),
        PerPage: sdk.Int(673660),
        Username: "Austyn_Witting46",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Users != nil {
        // handle response
    }
}
```

## GetUser

This endpoint allows the client to retrieve a single user, either by id
or by the user's username.

For complete documentation, see the v0 API docs: https://developers.forem.com/api/v0#tag/users/operation/getUser

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Users.GetUser(ctx, operations.GetUserRequest{
        ID: "8f097b00-74f1-4547-9b5e-6e13b99d488e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetUserAllArticles

This endpoint allows the client to retrieve a list of all articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

It will return both published and unpublished articles with pagination.

Unpublished articles will be at the top of the list in reverse chronological creation order. Published articles will follow in reverse chronological publication order.

By default a page will contain 30 articles.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Users.GetUserAllArticles(ctx, operations.GetUserAllArticlesRequest{
        Page: sdk.Int(93940),
        PerPage: sdk.Int(921158),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArticleIndices != nil {
        // handle response
    }
}
```

## GetUserArticles

This endpoint allows the client to retrieve a list of published articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

Published articles will be in reverse chronological publication order.

It will return published articles with pagination. By default a page will contain 30 articles.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Users.GetUserArticles(ctx, operations.GetUserArticlesRequest{
        Page: sdk.Int(575947),
        PerPage: sdk.Int(83112),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArticleIndices != nil {
        // handle response
    }
}
```

## GetUserMe

This endpoint allows the client to retrieve information about the authenticated user

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Users.GetUserMe(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUserMe200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetUserPublishedArticles

This endpoint allows the client to retrieve a list of published articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

Published articles will be in reverse chronological publication order.

It will return published articles with pagination. By default a page will contain 30 articles.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Users.GetUserPublishedArticles(ctx, operations.GetUserPublishedArticlesRequest{
        Page: sdk.Int(929297),
        PerPage: sdk.Int(277718),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArticleIndices != nil {
        // handle response
    }
}
```

## GetUserUnpublishedArticles

This endpoint allows the client to retrieve a list of unpublished articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

Unpublished articles will be in reverse chronological creation order.

It will return unpublished articles with pagination. By default a page will contain 30 articles.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Users.GetUserUnpublishedArticles(ctx, operations.GetUserUnpublishedArticlesRequest{
        Page: sdk.Int(318569),
        PerPage: sdk.Int(9356),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArticleIndices != nil {
        // handle response
    }
}
```

## PostAdminUsersCreate

This endpoint allows the client to trigger an invitation to the provided email address.

        It requires a token from a user with `super_admin` privileges.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Users.PostAdminUsersCreate(ctx, shared.UserInviteParam{
        Email: sdk.String("Roosevelt_Cole@hotmail.com"),
        Name: sdk.String("Francisco Gleason"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SuspendUser

This endpoint allows the client to suspend a user.

The user associated with the API key must have any 'admin' or 'moderator' role.

This specified user will be assigned the 'suspended' role. Suspending a user will stop the
user from posting new posts and comments. It doesn't delete any of the user's content, just
prevents them from creating new content while suspended. Users are not notified of their suspension
in the UI, so if you want them to know about this, you must notify them.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Users.SuspendUser(ctx, operations.SuspendUserRequest{
        ID: 586513,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UnpublishUser

This endpoint allows the client to unpublish all of the articles and
comments created by a user.

The user associated with the API key must have any 'admin' or 'moderator' role.

This specified user's articles and comments will be unpublished and will no longer be
visible to the public. They will remain in the database and will set back to draft status
on the specified user's  dashboard. Any notifications associated with the specified user's
articles and comments will be deleted.

Note this endpoint unpublishes articles and comments asychronously: it will return a 204 NO CONTENT
status code immediately, but the articles and comments will not be unpublished until the
request is completed on the server.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Users.UnpublishUser(ctx, operations.UnpublishUserRequest{
        ID: 552822,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
