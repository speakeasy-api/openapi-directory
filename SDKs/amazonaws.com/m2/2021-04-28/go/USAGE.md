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

    req := operations.CancelBatchJobExecutionRequest{
        XAmzAlgorithm: "corrupti",
        XAmzContentSha256: "provident",
        XAmzCredential: "distinctio",
        XAmzDate: "quibusdam",
        XAmzSecurityToken: "unde",
        XAmzSignature: "nulla",
        XAmzSignedHeaders: "corrupti",
        ApplicationID: "illum",
        ExecutionID: "vel",
    }

    ctx := context.Background()
    res, err := s.CancelBatchJobExecution(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelBatchJobExecutionResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->