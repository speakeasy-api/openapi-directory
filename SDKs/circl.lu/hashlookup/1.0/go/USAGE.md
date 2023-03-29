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

    req := operations.GetLookupSha1Sha1Request{
        PathParams: operations.GetLookupSha1Sha1PathParams{
            Sha1: "unde",
        },
    }

    ctx := context.Background()
    res, err := s.Default.GetLookupSha1Sha1(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->