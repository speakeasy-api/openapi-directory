# Site

### Available Operations

* [GetSite](#getsite) - Get site info

## GetSite

Can be used to fetch all categories and subcategories

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Site.GetSite(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSite200ApplicationJSONObject != nil {
        // handle response
    }
}
```
