<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.AssociateMemberRequest{
        Headers: operations.AssociateMemberHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.AssociateMemberRequestBody{
            AccountID: "nulla",
        },
    }

    ctx := context.Background()
    res, err := s.AssociateMember(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateMemberResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->