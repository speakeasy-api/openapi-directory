# Social

## Overview

social

### Available Operations

* [SocialAcceptFriendRequest](#socialacceptfriendrequest) - Accepts a friend relationship with the target user. The user must be on your incoming friend request list, though no error will occur if they are not.
* [SocialDeclineFriendRequest](#socialdeclinefriendrequest) - Declines a friend relationship with the target user. The user must be on your incoming friend request list, though no error will occur if they are not.
* [SocialGetFriendList](#socialgetfriendlist) - Returns your Bungie Friend list
* [SocialGetFriendRequestList](#socialgetfriendrequestlist) - Returns your friend request queue.
* [SocialGetPlatformFriendList](#socialgetplatformfriendlist) - Gets the platform friend of the requested type, with additional information if they have Bungie accounts. Must have a recent login session with said platform.
* [SocialIssueFriendRequest](#socialissuefriendrequest) - Requests a friend relationship with the target user. Any of the target user's linked membership ids are valid inputs.
* [SocialRemoveFriend](#socialremovefriend) - Remove a friend relationship with the target user. The user must be on your friend list, though no error will occur if they are not.
* [SocialRemoveFriendRequest](#socialremovefriendrequest) - Remove a friend relationship with the target user. The user must be on your outgoing request friend list, though no error will occur if they are not.

## SocialAcceptFriendRequest

Accepts a friend relationship with the target user. The user must be on your incoming friend request list, though no error will occur if they are not.

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
    res, err := s.Social.SocialAcceptFriendRequest(ctx, operations.SocialAcceptFriendRequestRequest{
        MembershipID: "ullam",
    }, operations.SocialAcceptFriendRequestSecurity{
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

## SocialDeclineFriendRequest

Declines a friend relationship with the target user. The user must be on your incoming friend request list, though no error will occur if they are not.

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
    res, err := s.Social.SocialDeclineFriendRequest(ctx, operations.SocialDeclineFriendRequestRequest{
        MembershipID: "provident",
    }, operations.SocialDeclineFriendRequestSecurity{
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

## SocialGetFriendList

Returns your Bungie Friend list

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
    res, err := s.Social.SocialGetFriendList(ctx, operations.SocialGetFriendListSecurity{
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

## SocialGetFriendRequestList

Returns your friend request queue.

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
    res, err := s.Social.SocialGetFriendRequestList(ctx, operations.SocialGetFriendRequestListSecurity{
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

## SocialGetPlatformFriendList

Gets the platform friend of the requested type, with additional information if they have Bungie accounts. Must have a recent login session with said platform.

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
    res, err := s.Social.SocialGetPlatformFriendList(ctx, operations.SocialGetPlatformFriendListRequest{
        FriendPlatform: 551816,
        Page: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## SocialIssueFriendRequest

Requests a friend relationship with the target user. Any of the target user's linked membership ids are valid inputs.

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
    res, err := s.Social.SocialIssueFriendRequest(ctx, operations.SocialIssueFriendRequestRequest{
        MembershipID: "accusantium",
    }, operations.SocialIssueFriendRequestSecurity{
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

## SocialRemoveFriend

Remove a friend relationship with the target user. The user must be on your friend list, though no error will occur if they are not.

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
    res, err := s.Social.SocialRemoveFriend(ctx, operations.SocialRemoveFriendRequest{
        MembershipID: "mollitia",
    }, operations.SocialRemoveFriendSecurity{
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

## SocialRemoveFriendRequest

Remove a friend relationship with the target user. The user must be on your outgoing request friend list, though no error will occur if they are not.

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
    res, err := s.Social.SocialRemoveFriendRequest(ctx, operations.SocialRemoveFriendRequestRequest{
        MembershipID: "reiciendis",
    }, operations.SocialRemoveFriendRequestSecurity{
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
