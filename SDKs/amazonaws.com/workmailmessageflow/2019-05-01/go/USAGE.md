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
    
    req := operations.GetRawMessageContentRequest{
        PathParams: operations.GetRawMessageContentPathParams{
            MessageID: "ipsa",
        },
        Headers: operations.GetRawMessageContentHeaders{
            XAmzAlgorithm: "nemo",
            XAmzContentSha256: "reiciendis",
            XAmzCredential: "quae",
            XAmzDate: "odit",
            XAmzSecurityToken: "expedita",
            XAmzSignature: "ut",
            XAmzSignedHeaders: "occaecati",
        },
    }
    
    res, err := s.GetRawMessageContent(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRawMessageContentResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->