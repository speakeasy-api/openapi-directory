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
    
    req := operations.BatchGetChannelRequest{
        Headers: operations.BatchGetChannelHeaders{
            XAmzAlgorithm: "debitis",
            XAmzContentSha256: "est",
            XAmzCredential: "animi",
            XAmzDate: "distinctio",
            XAmzSecurityToken: "hic",
            XAmzSignature: "mollitia",
            XAmzSignedHeaders: "qui",
        },
        Request: operations.BatchGetChannelRequestBody{
            Arns: []string{
                "labore",
            },
        },
    }
    
    res, err := s.BatchGetChannel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetChannelResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->