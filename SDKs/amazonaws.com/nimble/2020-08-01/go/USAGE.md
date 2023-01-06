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
    
    req := operations.AcceptEulasRequest{
        PathParams: operations.AcceptEulasPathParams{
            StudioID: "qui",
        },
        Headers: operations.AcceptEulasHeaders{
            XAmzAlgorithm: "vel",
            XAmzClientToken: "odio",
            XAmzContentSha256: "ipsum",
            XAmzCredential: "in",
            XAmzDate: "dolorem",
            XAmzSecurityToken: "neque",
            XAmzSignature: "sint",
            XAmzSignedHeaders: "non",
        },
        Request: operations.AcceptEulasRequestBody{
            EulaIds: []string{
                "debitis",
                "in",
            },
        },
    }
    
    res, err := s.AcceptEulas(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptEulasResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->