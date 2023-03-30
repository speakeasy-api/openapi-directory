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

    req := operations.CancelBatchJobExecutionRequest{
        PathParams: operations.CancelBatchJobExecutionPathParams{
            ApplicationID: "corrupti",
            ExecutionID: "provident",
        },
        Headers: operations.CancelBatchJobExecutionHeaders{
            XAmzAlgorithm: "distinctio",
            XAmzContentSha256: "quibusdam",
            XAmzCredential: "unde",
            XAmzDate: "nulla",
            XAmzSecurityToken: "corrupti",
            XAmzSignature: "illum",
            XAmzSignedHeaders: "vel",
        },
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