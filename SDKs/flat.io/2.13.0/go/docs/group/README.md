# Group

## Overview

Flat Groups

### Available Operations

* [GetGroupDetails](#getgroupdetails) - Get group information
* [GetGroupScores](#getgroupscores) - List group's scores
* [ListGroupUsers](#listgroupusers) - List group's users

## GetGroupDetails

Get group information

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
    res, err := s.Group.GetGroupDetails(ctx, operations.GetGroupDetailsRequest{
        Group: "sint",
    }, operations.GetGroupDetailsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupDetails != nil {
        // handle response
    }
}
```

## GetGroupScores

Get the list of scores shared with a group.


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
    res, err := s.Group.GetGroupScores(ctx, operations.GetGroupScoresRequest{
        Group: "veritatis",
        Parent: sdk.String("itaque"),
    }, operations.GetGroupScoresSecurity{
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

## ListGroupUsers

List group's users

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
    res, err := s.Group.ListGroupUsers(ctx, operations.ListGroupUsersRequest{
        Group: "incidunt",
        Source: operations.ListGroupUsersSourceEnumGoogleClassroom.ToPointer(),
    }, operations.ListGroupUsersSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserPublics != nil {
        // handle response
    }
}
```
