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
    
    req := operations.CancelContactRequest{
        PathParams: operations.CancelContactPathParams{
            ContactID: "repudiandae",
        },
        Headers: operations.CancelContactHeaders{
            XAmzAlgorithm: "quo",
            XAmzContentSha256: "omnis",
            XAmzCredential: "adipisci",
            XAmzDate: "praesentium",
            XAmzSecurityToken: "qui",
            XAmzSignature: "ipsam",
            XAmzSignedHeaders: "in",
        },
    }
    
    res, err := s.CancelContact(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ContactIDResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->