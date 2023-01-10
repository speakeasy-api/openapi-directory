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
            ThingName: "aliquam",
        },
        QueryParams: operations.DeleteThingShadowQueryParams{
            Name: "quos",
        },
        Headers: operations.DeleteThingShadowHeaders{
            XAmzAlgorithm: "omnis",
            XAmzContentSha256: "illum",
            XAmzCredential: "repellat",
            XAmzDate: "id",
            XAmzSecurityToken: "blanditiis",
            XAmzSignature: "possimus",
            XAmzSignedHeaders: "eius",
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