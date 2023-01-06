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
            XAmzAlgorithm: "cumque",
            XAmzContentSha256: "occaecati",
            XAmzCredential: "iusto",
            XAmzDate: "possimus",
            XAmzSecurityToken: "deserunt",
            XAmzSignature: "maiores",
            XAmzSignedHeaders: "error",
            XAmzTarget: "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags",
        },
        Request: shared.AddTagsRequest{
            ResourceID: "dolorem",
            TagsList: []shared.Tag{
                shared.Tag{
                    Key: "dolor",
                    Value: "excepturi",
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