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
    
    req := operations.AddProfileKeyRequest{
        PathParams: operations.AddProfileKeyPathParams{
            DomainName: "sit",
        },
        Headers: operations.AddProfileKeyHeaders{
            XAmzAlgorithm: "voluptas",
            XAmzContentSha256: "culpa",
            XAmzCredential: "expedita",
            XAmzDate: "consequuntur",
            XAmzSecurityToken: "dolor",
            XAmzSignature: "expedita",
            XAmzSignedHeaders: "voluptas",
        },
        Request: operations.AddProfileKeyRequestBody{
            KeyName: "fugit",
            ProfileID: "et",
            Values: []string{
                "rerum",
            },
        },
    }
    
    res, err := s.AddProfileKey(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddProfileKeyResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->