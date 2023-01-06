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
            XAmzAlgorithm: "in",
            XAmzContentSha256: "et",
            XAmzCredential: "est",
            XAmzDate: "eos",
            XAmzSecurityToken: "quas",
            XAmzSignature: "commodi",
            XAmzSignedHeaders: "eum",
            XAmzTarget: "SSMContacts.AcceptPage",
        },
        Request: shared.AcceptPageRequest{
            AcceptCode: "aut",
            AcceptCodeValidation: "IGNORE",
            AcceptType: "DELIVERED",
            ContactChannelID: "in",
            Note: "est",
            PageID: "aperiam",
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