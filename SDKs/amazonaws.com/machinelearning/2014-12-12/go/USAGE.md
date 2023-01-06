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
            XAmzAlgorithm: "quasi",
            XAmzContentSha256: "quis",
            XAmzCredential: "vitae",
            XAmzDate: "nesciunt",
            XAmzSecurityToken: "fugit",
            XAmzSignature: "et",
            XAmzSignedHeaders: "consequuntur",
            XAmzTarget: "AmazonML_20141212.AddTags",
        },
        Request: shared.AddTagsInput{
            ResourceID: "magni",
            ResourceType: "DataSource",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "quia",
                    Value: "sit",
                },
                shared.Tag{
                    Key: "qui",
                    Value: "qui",
                },
                shared.Tag{
                    Key: "assumenda",
                    Value: "excepturi",
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