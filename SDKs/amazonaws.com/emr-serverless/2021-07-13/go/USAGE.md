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

    req := operations.CancelJobRunRequest{
        PathParams: operations.CancelJobRunPathParams{
            ApplicationID: "corrupti",
            JobRunID: "provident",
        },
        Headers: operations.CancelJobRunHeaders{
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