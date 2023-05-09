# Tags

### Available Operations

* [GetFollowedTags](#getfollowedtags) - Followed Tags
* [GetTags](#gettags) - Tags

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
    res, err := s.Tags.GetFollowedTags(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.FollowedTags != nil {
        // handle response
    }
}
```

## GetTags

This endpoint allows the client to retrieve a list of tags that can be used to tag articles.

It will return tags ordered by popularity.

It supports pagination, each page will contain 10 tags by default.

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
    res, err := s.Tags.GetTags(ctx, operations.GetTagsRequest{
        Page: sdk.Int(97101),
        PerPage: sdk.Int(622846),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tags != nil {
        // handle response
    }
}
```
