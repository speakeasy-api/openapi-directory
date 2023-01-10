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
            XAmzAlgorithm: "est",
            XAmzContentSha256: "aut",
            XAmzCredential: "dignissimos",
            XAmzDate: "et",
            XAmzSecurityToken: "alias",
            XAmzSignature: "vitae",
            XAmzSignedHeaders: "ipsum",
            XAmzTarget: "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags",
        },
        Request: shared.AddTagsRequest{
            ResourceID: "magni",
            TagsList: []shared.Tag{
                shared.Tag{
                    Key: "ea",
                    Value: "dolor",
                },
                shared.Tag{
                    Key: "consequatur",
                    Value: "assumenda",
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