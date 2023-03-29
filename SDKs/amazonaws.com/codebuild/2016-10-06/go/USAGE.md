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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "CodeBuild_20161006.BatchDeleteBuilds",
        },
        Request: shared.BatchDeleteBuildsInput{
            Ids: []string{
                "fuga",
                "facilis",
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