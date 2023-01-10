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
    
    req := operations.DeleteSessionRequest{
        PathParams: operations.DeleteSessionPathParams{
            BotAlias: "ex",
            BotName: "magnam",
            UserID: "a",
        },
        Headers: operations.DeleteSessionHeaders{
            XAmzAlgorithm: "et",
            XAmzContentSha256: "omnis",
            XAmzCredential: "dicta",
            XAmzDate: "in",
            XAmzSecurityToken: "et",
            XAmzSignature: "enim",
            XAmzSignedHeaders: "saepe",
        },
    }
    
    res, err := s.DeleteSession(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSessionResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->