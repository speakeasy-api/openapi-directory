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
    
    req := operations.AllocateStaticIPRequest{
        Headers: operations.AllocateStaticIPHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "Lightsail_20161128.AllocateStaticIp",
        },
        Request: shared.AllocateStaticIPRequest{
            StaticIPName: "fugit",
        },
    }
    
    res, err := s.AllocateStaticIP(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AllocateStaticIPResult != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->