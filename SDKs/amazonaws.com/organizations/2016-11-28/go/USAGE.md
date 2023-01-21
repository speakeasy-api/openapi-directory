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
    
    req := operations.AcceptHandshakeRequest{
        Headers: operations.AcceptHandshakeHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "AWSOrganizationsV20161128.AcceptHandshake",
        },
        Request: shared.AcceptHandshakeRequest{
            HandshakeID: "fugit",
        },
    }
    
    res, err := s.AcceptHandshake(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptHandshakeResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->