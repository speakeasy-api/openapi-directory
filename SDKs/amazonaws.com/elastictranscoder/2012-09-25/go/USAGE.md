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

    req := operations.CancelJobRequest{
        ID: "corrupti",
        XAmzAlgorithm: "provident",
        XAmzContentSha256: "distinctio",
        XAmzCredential: "quibusdam",
        XAmzDate: "unde",
        XAmzSecurityToken: "nulla",
        XAmzSignature: "corrupti",
        XAmzSignedHeaders: "illum",
    }

    ctx := context.Background()
    res, err := s.CancelJob(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelJobResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->