# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/giphy.com/1.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.Gifs.GetGifByID(ctx, operations.GetGifByIDRequest{
        GifID: 548814,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetGifByID200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Gifs](docs/gifs/README.md)

* [GetGifByID](docs/gifs/README.md#getgifbyid) - Get GIF by Id
* [GetGifsByID](docs/gifs/README.md#getgifsbyid) - Get GIFs by ID
* [RandomGif](docs/gifs/README.md#randomgif) - Random GIF
* [SearchGifs](docs/gifs/README.md#searchgifs) - Search GIFs
* [TranslateGif](docs/gifs/README.md#translategif) - Translate phrase to GIF
* [TrendingGifs](docs/gifs/README.md#trendinggifs) - Trending GIFs

### [Stickers](docs/stickers/README.md)

* [RandomSticker](docs/stickers/README.md#randomsticker) - Random Sticker
* [SearchStickers](docs/stickers/README.md#searchstickers) - Search Stickers
* [TranslateSticker](docs/stickers/README.md#translatesticker) - Translate phrase to Sticker
* [TrendingStickers](docs/stickers/README.md#trendingstickers) - Trending Stickers
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
