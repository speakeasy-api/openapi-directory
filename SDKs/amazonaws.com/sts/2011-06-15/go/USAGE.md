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
    
    req := operations.GetDecodeAuthorizationMessageRequest{
        QueryParams: operations.GetDecodeAuthorizationMessageQueryParams{
            Action: "DecodeAuthorizationMessage",
            EncodedMessage: "voluptas",
            Version: "2011-06-15",
        },
        Headers: operations.GetDecodeAuthorizationMessageHeaders{
            XAmzAlgorithm: "expedita",
            XAmzContentSha256: "consequuntur",
            XAmzCredential: "dolor",
            XAmzDate: "expedita",
            XAmzSecurityToken: "voluptas",
            XAmzSignature: "fugit",
            XAmzSignedHeaders: "et",
        },
    }
    
    res, err := s.GetDecodeAuthorizationMessage(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->