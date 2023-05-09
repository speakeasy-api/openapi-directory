# Tokens

### Available Operations

* [GetMe](#getme) - Get token details

## GetMe

Get token details

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Tokens.GetMe(ctx, operations.GetMeSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Me != nil {
        // handle response
    }
}
```
