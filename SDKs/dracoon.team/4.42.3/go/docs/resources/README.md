# Resources

## Overview

Client resources

### Available Operations

* [RequestSubscriptionScopes](#requestsubscriptionscopes) - Request list of subscription scopes
* [RequestUserAvatar](#requestuseravatar) - Request user avatar

## RequestSubscriptionScopes

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>

### Description:
Retrieve a list of subscription scopes.

### Precondition:
Authenticated user.

### Postcondition:
List of scopes is returned.

### Further Information:
None.

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Resources.RequestSubscriptionScopes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.NotificationScopeList != nil {
        // handle response
    }
}
```

## RequestUserAvatar

### Description:
Get user avatar.

### Precondition:
Valid user ID and avatar UUID

### Postcondition:
Avatar is returned.

### Further Information:
None.

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Resources.RequestUserAvatar(ctx, operations.RequestUserAvatarRequest{
        UserID: 680515,
        UUID: "89fbe3a5-aa8e-4482-8d0a-b4075088e518",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Avatar != nil {
        // handle response
    }
}
```
