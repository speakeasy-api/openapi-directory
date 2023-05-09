# Users

### Available Operations

* [GetUsersMe](#getusersme) - About Me

## GetUsersMe

Returns the user profile of the access token's owner. This could be useful if managing multiple accounts or confirming validity of a token.

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
    res, err := s.Users.GetUsersMe(ctx, operations.GetUsersMeSecurity{
        FdcAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserContactV2 != nil {
        // handle response
    }
}
```
