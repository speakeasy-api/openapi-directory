# Account

## Overview

These API endpoints are related to the Flat account you are currently using. When using an OAuth2 access token, you can use [`GET /me`](#operation/getAuthenticatedUser) to get information about the account.


### Available Operations

* [GetAuthenticatedUser](#getauthenticateduser) - Get current user profile

## GetAuthenticatedUser

Get details about the current authenticated User.


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
    res, err := s.Account.GetAuthenticatedUser(ctx, operations.GetAuthenticatedUserRequest{
        OnlyID: sdk.Bool(false),
    }, operations.GetAuthenticatedUserSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserDetails != nil {
        // handle response
    }
}
```
