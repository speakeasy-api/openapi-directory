# Followers

### Available Operations

* [GetFollowers](#getfollowers) - Followers

## GetFollowers

This endpoint allows the client to retrieve a list of the followers they have.
        "Followers" are users that are following other users on the website.
        It supports pagination, each page will contain 80 followers by default.

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Followers.GetFollowers(ctx, operations.GetFollowersRequest{
        Page: sdk.Int(943749),
        PerPage: sdk.Int(902599),
        Sort: sdk.String("fuga"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFollowers200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
