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
    
    req := operations.DeleteThingShadowRequest{
        PathParams: operations.DeleteThingShadowPathParams{
            ThingName: "sit",
        },
        QueryParams: operations.DeleteThingShadowQueryParams{
            Name: "voluptas",
        },
        Headers: operations.DeleteThingShadowHeaders{
            XAmzAlgorithm: "culpa",
            XAmzContentSha256: "expedita",
            XAmzCredential: "consequuntur",
            XAmzDate: "dolor",
            XAmzSecurityToken: "expedita",
            XAmzSignature: "voluptas",
            XAmzSignedHeaders: "fugit",
        },
    }
    
    res, err := s.DeleteThingShadow(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteThingShadowResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->