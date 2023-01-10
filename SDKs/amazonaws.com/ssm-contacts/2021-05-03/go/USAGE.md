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
            XAmzAlgorithm: "vitae",
            XAmzContentSha256: "quasi",
            XAmzCredential: "ipsum",
            XAmzDate: "incidunt",
            XAmzSecurityToken: "vitae",
            XAmzSignature: "animi",
            XAmzSignedHeaders: "eos",
            XAmzTarget: "SSMContacts.AcceptPage",
        },
        Request: shared.AcceptPageRequest{
            AcceptCode: "aperiam",
            AcceptCodeValidation: "ENFORCE",
            AcceptType: "DELIVERED",
            ContactChannelID: "in",
            Note: "eum",
            PageID: "quibusdam",
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