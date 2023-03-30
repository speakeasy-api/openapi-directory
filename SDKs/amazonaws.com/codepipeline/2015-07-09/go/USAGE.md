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

    req := operations.AcknowledgeJobRequest{
        Headers: operations.AcknowledgeJobHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "CodePipeline_20150709.AcknowledgeJob",
        },
        Request: shared.AcknowledgeJobInput{
            JobID: "illum",
            Nonce: "vel",
        },
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