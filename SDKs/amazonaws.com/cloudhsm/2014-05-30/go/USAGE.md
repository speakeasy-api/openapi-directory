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
            XAmzAlgorithm: "hic",
            XAmzContentSha256: "ut",
            XAmzCredential: "et",
            XAmzDate: "odio",
            XAmzSecurityToken: "voluptate",
            XAmzSignature: "velit",
            XAmzSignedHeaders: "commodi",
            XAmzTarget: "CloudHsmFrontendService.AddTagsToResource",
        },
        Request: shared.AddTagsToResourceRequest{
            ResourceArn: "vero",
            TagList: []shared.Tag{
                shared.Tag{
                    Key: "placeat",
                    Value: "odio",
                },
                shared.Tag{
                    Key: "autem",
                    Value: "eligendi",
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