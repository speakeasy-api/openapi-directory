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
            MessageID: "quibusdam",
        },
        Headers: operations.GetRawMessageContentHeaders{
            XAmzAlgorithm: "vero",
            XAmzContentSha256: "ea",
            XAmzCredential: "doloremque",
            XAmzDate: "maxime",
            XAmzSecurityToken: "aperiam",
            XAmzSignature: "ut",
            XAmzSignedHeaders: "illum",
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