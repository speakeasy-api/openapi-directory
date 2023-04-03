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

    req := operations.GetV1Request{
        APIKey: "corrupti",
        Fields: "country,city,timezone",
        IPAddress: "195.154.25.40",
    }

    ctx := context.Background()
    res, err := s.GetV1(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.InlineResponse200 != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->