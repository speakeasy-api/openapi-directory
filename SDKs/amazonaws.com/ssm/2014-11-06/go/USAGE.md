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

    req := operations.AddTagsToResourceRequest{
        AddTagsToResourceRequest: shared.AddTagsToResourceRequest{
            ResourceID: "corrupti",
            ResourceType: "OpsItem",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "quibusdam",
                    Value: "unde",
                },
                shared.Tag{
                    Key: "nulla",
                    Value: "corrupti",
                },
                shared.Tag{
                    Key: "illum",
                    Value: "vel",
                },
            },
        },
        XAmzAlgorithm: "error",
        XAmzContentSha256: "deserunt",
        XAmzCredential: "suscipit",
        XAmzDate: "iure",
        XAmzSecurityToken: "magnam",
        XAmzSignature: "debitis",
        XAmzSignedHeaders: "ipsa",
        XAmzTarget: "AmazonSSM.AddTagsToResource",
    }

    ctx := context.Background()
    res, err := s.AddTagsToResource(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddTagsToResourceResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->