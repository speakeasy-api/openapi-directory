# User

## Overview

Flat users

### Available Operations

* [GerUserLikes](#geruserlikes) - List liked scores
* [GetUser](#getuser) - Get a public user profile
* [GetUserScores](#getuserscores) - List user's scores

## GerUserLikes

List liked scores

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
    res, err := s.User.GerUserLikes(ctx, operations.GerUserLikesRequest{
        Ids: sdk.Bool(false),
        User: "tempore",
    }, operations.GerUserLikesSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScoreDetails != nil {
        // handle response
    }
}
```

## GetUser

Get a public profile of a Flat User.


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
    res, err := s.User.GetUser(ctx, operations.GetUserRequest{
        User: "cupiditate",
    }, operations.GetUserSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserPublic != nil {
        // handle response
    }
}
```

## GetUserScores

Get the list of public scores owned by a User.

**DEPRECATED**: Please note that the current behavior will be deprecrated on **2019-01-01**.
This method will no longer list private and shared scores, but only public scores of a Flat account.
If you want to access to private scores, please use the [Collections API](#tag/Collection) instead.


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
    res, err := s.User.GetUserScores(ctx, operations.GetUserScoresRequest{
        Parent: sdk.String("aperiam"),
        User: "delectus",
    }, operations.GetUserScoresSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScoreDetails != nil {
        // handle response
    }
}
```
