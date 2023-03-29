<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.AssociateBrowserSettingsRequest{
        PathParams: operations.AssociateBrowserSettingsPathParams{
            PortalArn: "unde",
        },
        QueryParams: operations.AssociateBrowserSettingsQueryParams{
            BrowserSettingsArn: "deserunt",
        },
        Headers: operations.AssociateBrowserSettingsHeaders{
            XAmzAlgorithm: "porro",
            XAmzContentSha256: "nulla",
            XAmzCredential: "id",
            XAmzDate: "vero",
            XAmzSecurityToken: "perspiciatis",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "nihil",
        },
    }

    ctx := context.Background()
    res, err := s.AssociateBrowserSettings(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateBrowserSettingsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->