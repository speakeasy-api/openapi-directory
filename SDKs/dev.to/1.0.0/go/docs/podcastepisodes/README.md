# PodcastEpisodes

### Available Operations

* [GetPodcastEpisodes](#getpodcastepisodes) - Podcast Episodes

## GetPodcastEpisodes

This endpoint allows the client to retrieve a list of podcast episodes.
        "Podcast episodes" are episodes belonging to podcasts.
        It will only return active (reachable) podcast episodes that belong to published podcasts available on the platform, ordered by descending publication date.
        It supports pagination, each page will contain 30 articles by default.

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
    res, err := s.PodcastEpisodes.GetPodcastEpisodes(ctx, operations.GetPodcastEpisodesRequest{
        Page: sdk.Int(466311),
        PerPage: sdk.Int(474697),
        Username: sdk.String("Deion33"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PodcastEpisodeIndices != nil {
        // handle response
    }
}
```
