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

    req := operations.AddTagsRequest{
        Headers: operations.AddTagsHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags",
        },
        Request: shared.AddTagsRequest{
            ResourceID: "illum",
            TagsList: []shared.Tag{
                shared.Tag{
                    Key: "error",
                    Value: "deserunt",
                },
                shared.Tag{
                    Key: "suscipit",
                    Value: "iure",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.AddTags(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddTagsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->