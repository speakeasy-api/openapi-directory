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

    req := operations.CancelTaskExecutionRequest{
        CancelTaskExecutionRequest: shared.CancelTaskExecutionRequest{
            TaskExecutionArn: "corrupti",
        },
        XAmzAlgorithm: "provident",
        XAmzContentSha256: "distinctio",
        XAmzCredential: "quibusdam",
        XAmzDate: "unde",
        XAmzSecurityToken: "nulla",
        XAmzSignature: "corrupti",
        XAmzSignedHeaders: "illum",
        XAmzTarget: "FmrsService.CancelTaskExecution",
    }

    ctx := context.Background()
    res, err := s.CancelTaskExecution(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelTaskExecutionResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->