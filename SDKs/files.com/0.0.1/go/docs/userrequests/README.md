# UserRequests

## Overview

Operations about user_requests

### Available Operations

* [DeleteUserRequestsID](#deleteuserrequestsid) - Delete User Request
* [GetUserRequests](#getuserrequests) - List User Requests
* [GetUserRequestsID](#getuserrequestsid) - Show User Request
* [PostUserRequests](#postuserrequests) - Create User Request

## DeleteUserRequestsID

Delete User Request

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
    res, err := s.UserRequests.DeleteUserRequestsID(ctx, operations.DeleteUserRequestsIDRequest{
        ID: 216457,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetUserRequests

List User Requests

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
    res, err := s.UserRequests.GetUserRequests(ctx, operations.GetUserRequestsRequest{
        Cursor: sdk.String("impedit"),
        PerPage: sdk.Int(166047),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserRequestEntities != nil {
        // handle response
    }
}
```

## GetUserRequestsID

Show User Request

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
    res, err := s.UserRequests.GetUserRequestsID(ctx, operations.GetUserRequestsIDRequest{
        ID: 746585,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserRequestEntity != nil {
        // handle response
    }
}
```

## PostUserRequests

Create User Request

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
    res, err := s.UserRequests.PostUserRequests(ctx, operations.PostUserRequestsRequestBody{
        Details: "repudiandae",
        Email: "Eldred.Kub@hotmail.com",
        Name: "Gladys Satterfield",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserRequestEntity != nil {
        // handle response
    }
}
```
