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
            XAmzTarget: "AmazonML_20141212.AddTags",
        },
        Request: shared.AddTagsInput{
            ResourceID: "fugit",
            ResourceType: "BatchPrediction",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "rerum",
                    Value: "dicta",
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