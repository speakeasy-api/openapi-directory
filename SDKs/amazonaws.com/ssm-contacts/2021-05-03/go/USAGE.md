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
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "SSMContacts.AcceptPage",
        },
        Request: shared.AcceptPageRequest{
            AcceptCode: "illum",
            AcceptCodeValidation: "IGNORE",
            AcceptType: "READ",
            ContactChannelID: "deserunt",
            Note: "suscipit",
            PageID: "iure",
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