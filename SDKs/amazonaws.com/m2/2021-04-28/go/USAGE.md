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
            ApplicationID: "unde",
            ExecutionID: "deserunt",
        },
        Headers: operations.CancelBatchJobExecutionHeaders{
            XAmzAlgorithm: "porro",
            XAmzContentSha256: "nulla",
            XAmzCredential: "id",
            XAmzDate: "vero",
            XAmzSecurityToken: "perspiciatis",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "nihil",
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