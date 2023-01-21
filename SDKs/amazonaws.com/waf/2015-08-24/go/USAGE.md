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
    
    req := operations.CreateByteMatchSetRequest{
        Headers: operations.CreateByteMatchSetHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "AWSWAF_20150824.CreateByteMatchSet",
        },
        Request: shared.CreateByteMatchSetRequest{
            ChangeToken: "fugit",
            Name: "et",
        },
    }
    
    res, err := s.CreateByteMatchSet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateByteMatchSetResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->