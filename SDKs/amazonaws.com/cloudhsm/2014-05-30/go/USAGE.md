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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "CloudHsmFrontendService.AddTagsToResource",
        },
        Request: shared.AddTagsToResourceRequest{
            ResourceArn: "nihil",
            TagList: []shared.Tag{
                shared.Tag{
                    Key: "facilis",
                    Value: "eum",
                },
                shared.Tag{
                    Key: "iusto",
                    Value: "ullam",
                },
                shared.Tag{
                    Key: "saepe",
                    Value: "inventore",
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