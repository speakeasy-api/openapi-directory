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
        AcceptVersion: "corrupti",
        XAPIKey: "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
        Excludedetails: "perferendis",
        Hasfake: "ipsam",
        Thumbsize: 832620,
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