# Users

## Overview

Operations related to users.

### Available Operations

* [GetCurrentUserInfo](#getcurrentuserinfo) - Get current user

## GetCurrentUserInfo

Returns information about the currently authenticated user.

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
    res, err := s.Users.GetCurrentUserInfo(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.UserInfo != nil {
        // handle response
    }
}
```
