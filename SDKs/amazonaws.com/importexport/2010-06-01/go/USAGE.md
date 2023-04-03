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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.GETCancelJobRequest{
        APIVersion: "corrupti",
        AWSAccessKeyID: "provident",
        Action: "CancelJob",
        JobID: "distinctio",
        Operation: "CancelJob",
        Signature: "quibusdam",
        SignatureMethod: "unde",
        SignatureVersion: "nulla",
        Timestamp: "corrupti",
        Version: "2010-06-01",
    }

    ctx := context.Background()
    res, err := s.GETCancelJob(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->