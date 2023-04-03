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

    req := operations.AcknowledgeJobRequest{
        AcknowledgeJobInput: shared.AcknowledgeJobInput{
            JobID: "corrupti",
            Nonce: "provident",
        },
        XAmzAlgorithm: "distinctio",
        XAmzContentSha256: "quibusdam",
        XAmzCredential: "unde",
        XAmzDate: "nulla",
        XAmzSecurityToken: "corrupti",
        XAmzSignature: "illum",
        XAmzSignedHeaders: "vel",
        XAmzTarget: "CodePipeline_20150709.AcknowledgeJob",
    }

    ctx := context.Background()
    res, err := s.AcknowledgeJob(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcknowledgeJobOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->