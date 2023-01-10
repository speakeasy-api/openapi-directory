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
    
    req := operations.AddTagsToStreamRequest{
        Headers: operations.AddTagsToStreamHeaders{
            XAmzAlgorithm: "vel",
            XAmzContentSha256: "magni",
            XAmzCredential: "architecto",
            XAmzDate: "est",
            XAmzSecurityToken: "consectetur",
            XAmzSignature: "dolores",
            XAmzSignedHeaders: "in",
            XAmzTarget: "Kinesis_20131202.AddTagsToStream",
        },
        Request: shared.AddTagsToStreamInput{
            StreamName: "possimus",
            Tags: map[string]string{
                "animi": "nesciunt",
            },
        },
    }
    
    res, err := s.AddTagsToStream(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->