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

    req := operations.GetV1VerificationResultRequest{
        QueryParams: operations.GetV1VerificationResultQueryParams{
            Format: "xml",
            Key: "deserunt",
            Otp: "porro",
            TranID: "nulla",
        },
    }

    ctx := context.Background()
    res, err := s.GetV1VerificationResult(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetV1VerificationResult200ApplicationJSONString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->