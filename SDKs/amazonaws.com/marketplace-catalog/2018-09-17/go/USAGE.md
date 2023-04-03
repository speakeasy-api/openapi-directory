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

    req := operations.CancelChangeSetRequest{
        XAmzAlgorithm: "corrupti",
        XAmzContentSha256: "provident",
        XAmzCredential: "distinctio",
        XAmzDate: "quibusdam",
        XAmzSecurityToken: "unde",
        XAmzSignature: "nulla",
        XAmzSignedHeaders: "corrupti",
        Catalog: "illum",
        ChangeSetID: "vel",
    }

    ctx := context.Background()
    res, err := s.CancelChangeSet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelChangeSetResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->