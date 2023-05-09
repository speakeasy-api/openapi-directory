# Gifs

### Available Operations

* [GetGifByID](#getgifbyid) - Get GIF by Id
* [GetGifsByID](#getgifsbyid) - Get GIFs by ID
* [RandomGif](#randomgif) - Random GIF
* [SearchGifs](#searchgifs) - Search GIFs
* [TranslateGif](#translategif) - Translate phrase to GIF
* [TrendingGifs](#trendinggifs) - Trending GIFs

## GetGifByID

Returns a GIF given that GIF's unique ID


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
    res, err := s.Gifs.GetGifByID(ctx, operations.GetGifByIDRequest{
        GifID: 592845,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetGifByID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetGifsByID

A multiget version of the get GIF by ID endpoint.


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
    res, err := s.Gifs.GetGifsByID(ctx, operations.GetGifsByIDRequest{
        Ids: sdk.String("distinctio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetGifsByID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RandomGif

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
    res, err := s.Gifs.RandomGif(ctx, operations.RandomGifRequest{
        Rating: sdk.String("quibusdam"),
        Tag: sdk.String("unde"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RandomGif200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SearchGifs

Search all GIPHY GIFs for a word or phrase. Punctuation will be stripped and ignored.  Use a plus or url encode for phrases. Example paul+rudd, ryan+gosling or american+psycho.


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
    res, err := s.Gifs.SearchGifs(ctx, operations.SearchGifsRequest{
        Lang: sdk.String("nulla"),
        Limit: sdk.Int(544883),
        Offset: sdk.Int(847252),
        Q: "vel",
        Rating: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchGifs200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## TranslateGif

The translate API draws on search, but uses the GIPHY `special sauce` to handle translating from one vocabulary to another. In this case, words and phrases to GIF


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
    res, err := s.Gifs.TranslateGif(ctx, operations.TranslateGifRequest{
        S: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TranslateGif200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## TrendingGifs

Fetch GIFs currently trending online. Hand curated by the GIPHY editorial team.  The data returned mirrors the GIFs showcased on the GIPHY homepage. Returns 25 results by default.


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
    res, err := s.Gifs.TrendingGifs(ctx, operations.TrendingGifsRequest{
        Limit: sdk.Int(384382),
        Offset: sdk.Int(437587),
        Rating: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrendingGifs200ApplicationJSONObject != nil {
        // handle response
    }
}
```
