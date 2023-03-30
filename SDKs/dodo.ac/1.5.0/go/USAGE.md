<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetNhArtRequest{
        QueryParams: operations.GetNhArtQueryParams{
            Excludedetails: "unde",
            Hasfake: "deserunt",
            Thumbsize: 715190,
        },
        Headers: operations.GetNhArtHeaders{
            AcceptVersion: "nulla",
            XAPIKey: "9d8d69a6-74e0-4f46-bcc8-796ed151a05d",
        },
    }

    ctx := context.Background()
    res, err := s.GetNhArt(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.NHArtworks != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->