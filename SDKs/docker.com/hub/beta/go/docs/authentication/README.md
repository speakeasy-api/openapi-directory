# Authentication

## Overview

Most Docker Hub API endpoints require you to authenticate using your
Docker credentials before using them.

Additionally, similar to the Docker Hub UI features, API endpoint responses may vary depending 
on your plan (Free, Pro, or Team) and your account's permissions.

To learn more about the features available in each plan and to upgrade your existing plan, see [Docker Pricing](https://www.docker.com/pricing).


### Available Operations

* [PostUsers2FALogin](#postusers2falogin) - Second factor authentication.
* [PostUsersLogin](#postuserslogin) - Create an authentication token

## PostUsers2FALogin

When user has 2FA enabled, this is the second call to perform after
`/v2/users/login` call.

Creates and returns a bearer token in JWT format that you can use to authenticate with Docker Hub APIs.

The returned token is used in the HTTP Authorization header like `Authorization: Bearer {TOKEN}`.

Most Docker Hub APIs require this token either to consume or to get detailed information. For example, to list images in a private repository.


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Authentication.PostUsers2FALogin(ctx, shared.Users2FALoginRequest{
        Code: "123456",
        Login2faToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostUsersLoginSuccessResponse != nil {
        // handle response
    }
}
```

## PostUsersLogin

Creates and returns a bearer token in JWT format that you can use to
authenticate with Docker Hub APIs.

The returned token is used in the HTTP Authorization header like `Authorization: Bearer {TOKEN}`.

Most Docker Hub APIs require this token either to consume or to get detailed information. For example, to list images in a private repository.


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Authentication.PostUsersLogin(ctx, shared.UsersLoginRequest{
        Password: "hunter2",
        Username: "myusername",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostUsersLoginSuccessResponse != nil {
        // handle response
    }
}
```
