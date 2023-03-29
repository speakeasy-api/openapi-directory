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
            XAmzTarget: "AmazonDMSv20160101.AddTagsToResource",
        },
        Request: shared.AddTagsToResourceMessage{
            ResourceArn: "nihil",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "facilis",
                    ResourceArn: "eum",
                    Value: "iusto",
                },
                shared.Tag{
                    Key: "ullam",
                    ResourceArn: "saepe",
                    Value: "inventore",
                },
                shared.Tag{
                    Key: "sapiente",
                    ResourceArn: "enim",
                    Value: "eum",
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