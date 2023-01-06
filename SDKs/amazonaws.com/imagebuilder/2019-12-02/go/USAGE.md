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
    
    req := operations.CancelImageCreationRequest{
        Headers: operations.CancelImageCreationHeaders{
            XAmzAlgorithm: "eum",
            XAmzContentSha256: "hic",
            XAmzCredential: "ut",
            XAmzDate: "et",
            XAmzSecurityToken: "odio",
            XAmzSignature: "voluptate",
            XAmzSignedHeaders: "velit",
        },
        Request: operations.CancelImageCreationRequestBody{
            ClientToken: "commodi",
            ImageBuildVersionArn: "iste",
        },
    }
    
    res, err := s.CancelImageCreation(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelImageCreationResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->