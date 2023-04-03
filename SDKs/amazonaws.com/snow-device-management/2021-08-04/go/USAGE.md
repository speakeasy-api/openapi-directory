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

    req := operations.CancelTaskRequest{
        XAmzAlgorithm: "corrupti",
        XAmzContentSha256: "provident",
        XAmzCredential: "distinctio",
        XAmzDate: "quibusdam",
        XAmzSecurityToken: "unde",
        XAmzSignature: "nulla",
        XAmzSignedHeaders: "corrupti",
        TaskID: "illum",
    }

    ctx := context.Background()
    res, err := s.CancelTask(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelTaskOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->