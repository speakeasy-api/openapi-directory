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

    req := operations.AcceptPageRequest{
        Headers: operations.AcceptPageHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "SSMContacts.AcceptPage",
        },
        Request: shared.AcceptPageRequest{
            AcceptCode: "nihil",
            AcceptCodeValidation: "ENFORCE",
            AcceptType: "READ",
            ContactChannelID: "eum",
            Note: "iusto",
            PageID: "ullam",
        },
    }

    ctx := context.Background()
    res, err := s.AcceptPage(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptPageResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->