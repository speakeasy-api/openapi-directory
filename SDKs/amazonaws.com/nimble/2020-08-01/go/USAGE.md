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
            StudioID: "sit",
        },
        Headers: operations.AcceptEulasHeaders{
            XAmzAlgorithm: "voluptas",
            XAmzClientToken: "culpa",
            XAmzContentSha256: "expedita",
            XAmzCredential: "consequuntur",
            XAmzDate: "dolor",
            XAmzSecurityToken: "expedita",
            XAmzSignature: "voluptas",
            XAmzSignedHeaders: "fugit",
        },
        Request: operations.AcceptEulasRequestBody{
            EulaIds: []string{
                "nihil",
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