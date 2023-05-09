# Auth

## Overview

Authentication related

### Available Operations

* [GetCredentials](#getcredentials) - List the credentials associated with the authenticated user.
* [GetScopes](#getscopes) - Scopes
* [PostVerify](#postverify) - Verify token and return details of the owning user

## GetCredentials

List the credentials associated with the authenticated user.

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
    res, err := s.Auth.GetCredentials(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Credentials != nil {
        // handle response
    }
}
```

## GetScopes

List available token scopes

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
    res, err := s.Auth.GetScopes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetScopes200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## PostVerify

Verify token and return details of the owning user

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
    res, err := s.Auth.PostVerify(ctx, operations.PostVerifySecurity{
        Oauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Authority != nil {
        // handle response
    }
}
```
