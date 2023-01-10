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
            DomainName: "rem",
        },
        Headers: operations.AddProfileKeyHeaders{
            XAmzAlgorithm: "laudantium",
            XAmzContentSha256: "corporis",
            XAmzCredential: "qui",
            XAmzDate: "adipisci",
            XAmzSecurityToken: "qui",
            XAmzSignature: "iste",
            XAmzSignedHeaders: "minima",
        },
        Request: operations.AddProfileKeyRequestBody{
            KeyName: "blanditiis",
            ProfileID: "sit",
            Values: []string{
                "earum",
                "fugiat",
                "dolores",
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