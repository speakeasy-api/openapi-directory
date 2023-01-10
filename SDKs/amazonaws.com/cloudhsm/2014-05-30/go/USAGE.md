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
            XAmzAlgorithm: "nihil",
            XAmzContentSha256: "magni",
            XAmzCredential: "vitae",
            XAmzDate: "excepturi",
            XAmzSecurityToken: "ut",
            XAmzSignature: "totam",
            XAmzSignedHeaders: "blanditiis",
            XAmzTarget: "CloudHsmFrontendService.AddTagsToResource",
        },
        Request: shared.AddTagsToResourceRequest{
            ResourceArn: "sint",
            TagList: []shared.Tag{
                shared.Tag{
                    Key: "fugiat",
                    Value: "adipisci",
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