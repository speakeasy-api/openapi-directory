# Media

## Overview

Submit media

### Available Operations

* [PostMedia](#postmedia) - Submit a new media file

## PostMedia

Submit a new media file

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
    res, err := s.Media.PostMedia(ctx, "natus", operations.PostMediaSecurity{
        Oauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Media != nil {
        // handle response
    }
}
```
