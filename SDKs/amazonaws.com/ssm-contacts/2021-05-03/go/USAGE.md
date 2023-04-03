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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.AcceptPageRequest{
        AcceptPageRequest: shared.AcceptPageRequest{
            AcceptCode: "corrupti",
            AcceptCodeValidation: "ENFORCE",
            AcceptType: "READ",
            ContactChannelID: "quibusdam",
            Note: "unde",
            PageID: "nulla",
        },
        XAmzAlgorithm: "corrupti",
        XAmzContentSha256: "illum",
        XAmzCredential: "vel",
        XAmzDate: "error",
        XAmzSecurityToken: "deserunt",
        XAmzSignature: "suscipit",
        XAmzSignedHeaders: "iure",
        XAmzTarget: "SSMContacts.AcceptPage",
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