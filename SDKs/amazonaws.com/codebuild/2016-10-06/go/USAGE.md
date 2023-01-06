<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.BatchDeleteBuildsRequest{
        Headers: operations.BatchDeleteBuildsHeaders{
            XAmzAlgorithm: "voluptates",
            XAmzContentSha256: "quo",
            XAmzCredential: "est",
            XAmzDate: "vel",
            XAmzSecurityToken: "optio",
            XAmzSignature: "at",
            XAmzSignedHeaders: "a",
            XAmzTarget: "CodeBuild_20161006.BatchDeleteBuilds",
        },
        Request: shared.BatchDeleteBuildsInput{
            Ids: []string{
                "praesentium",
                "tempora",
            },
        },
    }
    
    res, err := s.BatchDeleteBuilds(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDeleteBuildsOutput != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->