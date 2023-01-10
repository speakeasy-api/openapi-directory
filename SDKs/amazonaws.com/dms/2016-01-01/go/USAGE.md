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
    
    req := operations.AddTagsToResourceRequest{
        Headers: operations.AddTagsToResourceHeaders{
            XAmzAlgorithm: "laborum",
            XAmzContentSha256: "ex",
            XAmzCredential: "ad",
            XAmzDate: "voluptatem",
            XAmzSecurityToken: "accusantium",
            XAmzSignature: "et",
            XAmzSignedHeaders: "sunt",
            XAmzTarget: "AmazonDMSv20160101.AddTagsToResource",
        },
        Request: shared.AddTagsToResourceMessage{
            ResourceArn: "quidem",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "iure",
                    ResourceArn: "incidunt",
                    Value: "iusto",
                },
                shared.Tag{
                    Key: "voluptatibus",
                    ResourceArn: "voluptates",
                    Value: "quia",
                },
                shared.Tag{
                    Key: "tenetur",
                    ResourceArn: "et",
                    Value: "rerum",
                },
            },
        },
    }
    
    res, err := s.AddTagsToResource(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddTagsToResourceResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->