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
            DomainName: "aut",
        },
        Headers: operations.AddProfileKeyHeaders{
            XAmzAlgorithm: "dicta",
            XAmzContentSha256: "minima",
            XAmzCredential: "pariatur",
            XAmzDate: "nesciunt",
            XAmzSecurityToken: "ducimus",
            XAmzSignature: "dolores",
            XAmzSignedHeaders: "magni",
        },
        Request: operations.AddProfileKeyRequestBody{
            KeyName: "inventore",
            ProfileID: "qui",
            Values: []string{
                "accusantium",
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