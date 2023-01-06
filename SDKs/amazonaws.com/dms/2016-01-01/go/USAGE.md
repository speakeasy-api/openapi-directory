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
            XAmzAlgorithm: "iste",
            XAmzContentSha256: "at",
            XAmzCredential: "accusantium",
            XAmzDate: "qui",
            XAmzSecurityToken: "ea",
            XAmzSignature: "illo",
            XAmzSignedHeaders: "voluptas",
            XAmzTarget: "AmazonDMSv20160101.AddTagsToResource",
        },
        Request: shared.AddTagsToResourceMessage{
            ResourceArn: "debitis",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "at",
                    ResourceArn: "vero",
                    Value: "quis",
                },
                shared.Tag{
                    Key: "nisi",
                    ResourceArn: "qui",
                    Value: "quasi",
                },
                shared.Tag{
                    Key: "quis",
                    ResourceArn: "vitae",
                    Value: "nesciunt",
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