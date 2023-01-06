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
    
    req := operations.BuildBotLocaleRequest{
        PathParams: operations.BuildBotLocalePathParams{
            BotID: "voluptatem",
            BotVersion: "tempore",
            LocaleID: "est",
        },
        Headers: operations.BuildBotLocaleHeaders{
            XAmzAlgorithm: "molestias",
            XAmzContentSha256: "ab",
            XAmzCredential: "voluptas",
            XAmzDate: "facilis",
            XAmzSecurityToken: "quis",
            XAmzSignature: "sunt",
            XAmzSignedHeaders: "quis",
        },
    }
    
    res, err := s.BuildBotLocale(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BuildBotLocaleResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->