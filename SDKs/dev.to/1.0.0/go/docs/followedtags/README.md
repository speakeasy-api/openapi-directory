# FollowedTags

### Available Operations

* [GetFollowedTags](#getfollowedtags) - Followed Tags

## GetFollowedTags

This endpoint allows the client to retrieve a list of the tags they follow.

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.FollowedTags.GetFollowedTags(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.FollowedTags != nil {
        // handle response
    }
}
```
