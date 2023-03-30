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

    req := operations.BatchDeleteBuildsRequest{
        Headers: operations.BatchDeleteBuildsHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "CodeBuild_20161006.BatchDeleteBuilds",
        },
        Request: shared.BatchDeleteBuildsInput{
            Ids: []string{
                "vel",
                "error",
                "deserunt",
                "suscipit",
            },
        },
    }

    ctx := context.Background()
    res, err := s.BatchDeleteBuilds(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDeleteBuildsOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->