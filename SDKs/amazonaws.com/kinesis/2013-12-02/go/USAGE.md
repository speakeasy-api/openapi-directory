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
            XAmzAlgorithm: "ipsa",
            XAmzContentSha256: "error",
            XAmzCredential: "odit",
            XAmzDate: "repudiandae",
            XAmzSecurityToken: "pariatur",
            XAmzSignature: "est",
            XAmzSignedHeaders: "at",
            XAmzTarget: "Kinesis_20131202.AddTagsToStream",
        },
        Request: shared.AddTagsToStreamInput{
            StreamName: "libero",
            Tags: map[string]string{
                "voluptatem": "sunt",
                "animi": "quaerat",
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