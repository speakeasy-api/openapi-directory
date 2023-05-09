# DisplayAds

### Available Operations

* [GetAPIDisplayAds](#getapidisplayads) - display ads
* [GetAPIDisplayAdsID](#getapidisplayadsid) - display ad
* [PostAPIDisplayAds](#postapidisplayads) - display ads
* [PutAPIDisplayAdsID](#putapidisplayadsid) - display ads
* [PutAPIDisplayAdsIDUnpublish](#putapidisplayadsidunpublish) - unpublish

## GetAPIDisplayAds

This endpoint allows the client to retrieve a list of all display ads.

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
    res, err := s.DisplayAds.GetAPIDisplayAds(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.DisplayAds != nil {
        // handle response
    }
}
```

## GetAPIDisplayAdsID

This endpoint allows the client to retrieve a single display ad, via its id.

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
    res, err := s.DisplayAds.GetAPIDisplayAdsID(ctx, operations.GetAPIDisplayAdsIDRequest{
        ID: 135218,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostAPIDisplayAds

This endpoint allows the client to create a new display ad.

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
    res, err := s.DisplayAds.PostAPIDisplayAds(ctx, map[string]interface{}{
        "ad": "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAPIDisplayAds200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PutAPIDisplayAdsID

This endpoint allows the client to update the attributes of a single display ad, via its id.

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
    res, err := s.DisplayAds.PutAPIDisplayAdsID(ctx, operations.PutAPIDisplayAdsIDRequest{
        RequestBody: map[string]interface{}{
            "iste": "dolor",
        },
        ID: 616934,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutAPIDisplayAdsID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PutAPIDisplayAdsIDUnpublish

This endpoint allows the client to remove a display ad from rotation by un-publishing it.

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
    res, err := s.DisplayAds.PutAPIDisplayAdsIDUnpublish(ctx, operations.PutAPIDisplayAdsIDUnpublishRequest{
        ID: 386489,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
