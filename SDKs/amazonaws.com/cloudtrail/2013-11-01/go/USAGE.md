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
    
    req := operations.AddTagsRequest{
        Headers: operations.AddTagsHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags",
        },
        Request: shared.AddTagsRequest{
            ResourceID: "fugit",
            TagsList: []shared.Tag{
                shared.Tag{
                    Key: "nihil",
                    Value: "rerum",
                },
            },
        },
    }
    
    res, err := s.AddTags(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddTagsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->