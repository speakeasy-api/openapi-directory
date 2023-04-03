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

    req := operations.CancelJobRunRequest{
        XAmzAlgorithm: "corrupti",
        XAmzContentSha256: "provident",
        XAmzCredential: "distinctio",
        XAmzDate: "quibusdam",
        XAmzSecurityToken: "unde",
        XAmzSignature: "nulla",
        XAmzSignedHeaders: "corrupti",
        JobRunID: "illum",
        VirtualClusterID: "vel",
    }

    ctx := context.Background()
    res, err := s.CancelJobRun(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelJobRunResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->