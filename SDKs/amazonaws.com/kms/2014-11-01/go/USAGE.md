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

    req := operations.CancelKeyDeletionRequest{
        CancelKeyDeletionRequest: shared.CancelKeyDeletionRequest{
            KeyID: "corrupti",
        },
        XAmzAlgorithm: "provident",
        XAmzContentSha256: "distinctio",
        XAmzCredential: "quibusdam",
        XAmzDate: "unde",
        XAmzSecurityToken: "nulla",
        XAmzSignature: "corrupti",
        XAmzSignedHeaders: "illum",
        XAmzTarget: "TrentService.CancelKeyDeletion",
    }

    ctx := context.Background()
    res, err := s.CancelKeyDeletion(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelKeyDeletionResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->