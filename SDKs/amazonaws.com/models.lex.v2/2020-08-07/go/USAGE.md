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
            BotID: "sit",
            BotVersion: "voluptas",
            LocaleID: "culpa",
        },
        Headers: operations.BuildBotLocaleHeaders{
            XAmzAlgorithm: "expedita",
            XAmzContentSha256: "consequuntur",
            XAmzCredential: "dolor",
            XAmzDate: "expedita",
            XAmzSecurityToken: "voluptas",
            XAmzSignature: "fugit",
            XAmzSignedHeaders: "et",
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