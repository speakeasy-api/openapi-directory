# Util

### Available Operations

* [GetID](#getid) - Convert legacy ID to v3 ID.

## GetID

Retrieves the API v3 ID.

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
    res, err := s.Util.GetID(ctx, operations.GetIDRequest{
        ID: 297437,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ID != nil {
        // handle response
    }
}
```
