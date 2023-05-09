# Authentication

## Overview

Authentication-related endpoints

### Available Operations

* [PostLogin](#postlogin) - Log in to get an API token
* [PostLogout](#postlogout) - Log out

## PostLogin

Submit your email and password to get an API token

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            TokenHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Authentication.PostLogin(ctx, operations.PostLoginSample{
        Email: sdk.String("aijaz@example.org"),
        Password: sdk.String("hunter2"),
        Source: operations.PostLoginSampleSourceEnumWeb.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LoginResponse != nil {
        // handle response
    }
}
```

## PostLogout

Log out by deleting your token off the server.

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
            TokenHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Authentication.PostLogout(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
