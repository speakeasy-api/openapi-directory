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
            XAmzAlgorithm: "dolorem",
            XAmzContentSha256: "facere",
            XAmzCredential: "magnam",
            XAmzDate: "aut",
            XAmzSecurityToken: "eum",
            XAmzSignature: "facilis",
            XAmzSignedHeaders: "perferendis",
            XAmzTarget: "AmazonML_20141212.AddTags",
        },
        Request: shared.AddTagsInput{
            ResourceID: "ut",
            ResourceType: "MLModel",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "ut",
                    Value: "ut",
                },
            },
        },
    }
    
    res, err := s.AddTags(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddTagsOutput != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->