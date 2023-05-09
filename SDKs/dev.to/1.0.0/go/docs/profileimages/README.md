# ProfileImages

### Available Operations

* [GetProfileImage](#getprofileimage) - A Users or organizations profile image

## GetProfileImage

This endpoint allows the client to retrieve a user or organization profile image information by its
        corresponding username.

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
    res, err := s.ProfileImages.GetProfileImage(ctx, operations.GetProfileImageRequest{
        Username: "Bernie.Padberg",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProfileImage200ApplicationJSONObject != nil {
        // handle response
    }
}
```
