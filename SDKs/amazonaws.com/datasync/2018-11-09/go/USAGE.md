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
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CancelTaskExecutionRequest{
        Headers: operations.CancelTaskExecutionHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "FmrsService.CancelTaskExecution",
        },
        Request: shared.CancelTaskExecutionRequest{
            TaskExecutionArn: "illum",
        },
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