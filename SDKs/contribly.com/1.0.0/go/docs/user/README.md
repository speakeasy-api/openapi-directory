# User

## Overview

Manage users

### Available Operations

* [GetUsers](#getusers) - List users
* [GetUsersID](#getusersid) - Retrieve a single user by id
* [GetUsersIDLinkedType](#getusersidlinkedtype) - Retrieve a users linked profile by type

## GetUsers

List users

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.User.GetUsers(ctx, operations.GetUsersRequest{
        Assignment: sdk.String("veniam"),
        Country: sdk.String("Tunisia"),
        LinkedProfile: sdk.String("neque"),
        MinimumContributions: sdk.Float64(8163.65),
        OwnedBy: sdk.String("aliquam"),
        SubmittedAfter: types.MustTimeFromString("2021-01-12T02:47:10.751Z"),
        SubmittedBefore: types.MustTimeFromString("2020-12-29T21:47:32.245Z"),
        Username: sdk.String("Vilma20"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Users != nil {
        // handle response
    }
}
```

## GetUsersID

Retrieve a single user by id

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
    res, err := s.User.GetUsersID(ctx, operations.GetUsersIDRequest{
        ID: "a1f5fd94-259c-40b3-af25-ea944f3b756c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## GetUsersIDLinkedType

Retrieve a users linked profile by type

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
    res, err := s.User.GetUsersIDLinkedType(ctx, operations.GetUsersIDLinkedTypeRequest{
        ID: "11f6c37a-5126-4243-835b-bc05a23a45ce",
        Type: "a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkedProfile != nil {
        // handle response
    }
}
```
