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
            XAmzAlgorithm: "et",
            XAmzContentSha256: "ut",
            XAmzCredential: "occaecati",
            XAmzDate: "eum",
            XAmzSecurityToken: "ut",
            XAmzSignature: "assumenda",
            XAmzSignedHeaders: "fuga",
        },
        Request: operations.CancelImageCreationRequestBody{
            ClientToken: "aut",
            ImageBuildVersionArn: "corrupti",
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