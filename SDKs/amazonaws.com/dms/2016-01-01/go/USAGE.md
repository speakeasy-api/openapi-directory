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
        AddTagsToResourceMessage: shared.AddTagsToResourceMessage{
            ResourceArn: "corrupti",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "distinctio",
                    ResourceArn: "quibusdam",
                    Value: "unde",
                },
                shared.Tag{
                    Key: "nulla",
                    ResourceArn: "corrupti",
                    Value: "illum",
                },
                shared.Tag{
                    Key: "vel",
                    ResourceArn: "error",
                    Value: "deserunt",
                },
            },
        },
        XAmzAlgorithm: "suscipit",
        XAmzContentSha256: "iure",
        XAmzCredential: "magnam",
        XAmzDate: "debitis",
        XAmzSecurityToken: "ipsa",
        XAmzSignature: "delectus",
        XAmzSignedHeaders: "tempora",
        XAmzTarget: "AmazonDMSv20160101.AddTagsToResource",
    }

    ctx := context.Background()
    res, err := s.AddTagsToResource(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddTagsToResourceResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->