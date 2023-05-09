# Authentication

### Available Operations

* [PostUsers2FALogin](#postusers2falogin) - Second factor authentication.
* [PostUsersLogin](#postuserslogin) - Create an authentication token

## PostUsers2FALogin

When a user has 2FA enabled, this is the second call to perform after
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            HubAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            HubAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

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
