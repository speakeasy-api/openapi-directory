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
            ThingName: "asperiores",
        },
        QueryParams: operations.DeleteThingShadowQueryParams{
            Name: "reprehenderit",
        },
        Headers: operations.DeleteThingShadowHeaders{
            XAmzAlgorithm: "consectetur",
            XAmzContentSha256: "sequi",
            XAmzCredential: "reprehenderit",
            XAmzDate: "qui",
            XAmzSecurityToken: "libero",
            XAmzSignature: "enim",
            XAmzSignedHeaders: "sint",
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