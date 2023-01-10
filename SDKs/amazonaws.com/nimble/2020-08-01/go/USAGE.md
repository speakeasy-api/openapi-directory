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
            StudioID: "asperiores",
        },
        Headers: operations.AcceptEulasHeaders{
            XAmzAlgorithm: "tempore",
            XAmzClientToken: "tempore",
            XAmzContentSha256: "assumenda",
            XAmzCredential: "deleniti",
            XAmzDate: "ea",
            XAmzSecurityToken: "aut",
            XAmzSignature: "dignissimos",
            XAmzSignedHeaders: "voluptatem",
        },
        Request: operations.AcceptEulasRequestBody{
            EulaIds: []string{
                "quo",
                "atque",
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