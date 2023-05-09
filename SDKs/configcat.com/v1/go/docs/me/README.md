# Me

## Overview

Information about the current user.

### Available Operations

* [GetMe](#getme) - Get authenticated user details

## GetMe

Get authenticated user details

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Me.GetMe(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.MeModel != nil {
        // handle response
    }
}
```
