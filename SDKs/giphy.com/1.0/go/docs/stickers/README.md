# Stickers

### Available Operations

* [RandomSticker](#randomsticker) - Random Sticker
* [SearchStickers](#searchstickers) - Search Stickers
* [TranslateSticker](#translatesticker) - Translate phrase to Sticker
* [TrendingStickers](#trendingstickers) - Trending Stickers

## RandomSticker

Returns a random GIF, limited by tag. Excluding the tag parameter will return a random GIF from the GIPHY catalog.


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
    res, err := s.Stickers.RandomSticker(ctx, operations.RandomStickerRequest{
        Rating: sdk.String("debitis"),
        Tag: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RandomSticker200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SearchStickers

Replicates the functionality and requirements of the classic GIPHY search, but returns animated stickers rather than GIFs.


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
    res, err := s.Stickers.SearchStickers(ctx, operations.SearchStickersRequest{
        Lang: sdk.String("delectus"),
        Limit: sdk.Int(272656),
        Offset: sdk.Int(383441),
        Q: "molestiae",
        Rating: sdk.String("minus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchStickers200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## TranslateSticker

The translate API draws on search, but uses the GIPHY `special sauce` to handle translating from one vocabulary to another. In this case, words and phrases to GIFs.


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
    res, err := s.Stickers.TranslateSticker(ctx, operations.TranslateStickerRequest{
        S: "placeat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TranslateSticker200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## TrendingStickers

Fetch Stickers currently trending online. Hand curated by the GIPHY editorial team. Returns 25 results by default.


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
    res, err := s.Stickers.TrendingStickers(ctx, operations.TrendingStickersRequest{
        Limit: sdk.Int(528895),
        Offset: sdk.Int(479977),
        Rating: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrendingStickers200ApplicationJSONObject != nil {
        // handle response
    }
}
```
