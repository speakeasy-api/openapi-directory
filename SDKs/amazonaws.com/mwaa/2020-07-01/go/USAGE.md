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
    
    req := operations.CreateCliTokenRequest{
        PathParams: operations.CreateCliTokenPathParams{
            Name: "minima",
        },
        Headers: operations.CreateCliTokenHeaders{
            XAmzAlgorithm: "tenetur",
            XAmzContentSha256: "numquam",
            XAmzCredential: "quam",
            XAmzDate: "molestias",
            XAmzSecurityToken: "aut",
            XAmzSignature: "fugiat",
            XAmzSignedHeaders: "cumque",
        },
    }
    
    res, err := s.CreateCliToken(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCliTokenResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->