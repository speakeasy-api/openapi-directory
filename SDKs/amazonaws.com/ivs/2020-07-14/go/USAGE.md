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
            XAmzAlgorithm: "ea",
            XAmzContentSha256: "enim",
            XAmzCredential: "sunt",
            XAmzDate: "quos",
            XAmzSecurityToken: "at",
            XAmzSignature: "iusto",
            XAmzSignedHeaders: "et",
        },
        Request: operations.BatchGetChannelRequestBody{
            Arns: []string{
                "consectetur",
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