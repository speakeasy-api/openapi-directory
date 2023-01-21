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
    
    req := operations.AcceptPageRequest{
        Headers: operations.AcceptPageHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "SSMContacts.AcceptPage",
        },
        Request: shared.AcceptPageRequest{
            AcceptCode: "fugit",
            AcceptCodeValidation: "IGNORE",
            AcceptType: "DELIVERED",
            ContactChannelID: "rerum",
            Note: "dicta",
            PageID: "debitis",
        },
    }
    
    res, err := s.AcceptPage(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptPageResult != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->