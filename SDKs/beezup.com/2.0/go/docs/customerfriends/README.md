# CustomerFriends

### Available Operations

* [GetFriendInfo](#getfriendinfo) - Get friend information

## GetFriendInfo

Get friend information

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
    res, err := s.CustomerFriends.GetFriendInfo(ctx, operations.GetFriendInfoRequest{
        IfNoneMatch: sdk.String("asperiores"),
        UserID: "facere",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserFriendInfo != nil {
        // handle response
    }
}
```
