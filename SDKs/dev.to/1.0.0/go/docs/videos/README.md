# Videos

### Available Operations

* [Videos](#videos) - Articles with a video

## Videos

This endpoint allows the client to retrieve a list of articles that are uploaded with a video.

It will only return published video articles ordered by descending popularity.

It supports pagination, each page will contain 24 articles by default.

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
    res, err := s.Videos.Videos(ctx, operations.VideosRequest{
        Page: sdk.Int(20107),
        PerPage: sdk.Int(164940),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoArticles != nil {
        // handle response
    }
}
```
