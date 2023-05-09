# Sessions

## Overview

Operations about sessions

### Available Operations

* [DeleteSessions](#deletesessions) - Delete user session (log out)
* [PostSessions](#postsessions) - Create user session (log in)

## DeleteSessions

Delete user session (log out)

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
    res, err := s.Sessions.DeleteSessions(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostSessions

Create user session (log in)

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
    res, err := s.Sessions.PostSessions(ctx, operations.PostSessionsRequestBody{
        Otp: sdk.String("123456"),
        PartialSessionID: sdk.String("vitae"),
        Password: sdk.String("password"),
        Username: sdk.String("username"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SessionEntity != nil {
        // handle response
    }
}
```
