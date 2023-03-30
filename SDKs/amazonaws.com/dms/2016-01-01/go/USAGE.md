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

    req := operations.AddTagsToResourceRequest{
        Headers: operations.AddTagsToResourceHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "AmazonDMSv20160101.AddTagsToResource",
        },
        Request: shared.AddTagsToResourceMessage{
            ResourceArn: "illum",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "error",
                    ResourceArn: "deserunt",
                    Value: "suscipit",
                },
                shared.Tag{
                    Key: "iure",
                    ResourceArn: "magnam",
                    Value: "debitis",
                },
            },
        },
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