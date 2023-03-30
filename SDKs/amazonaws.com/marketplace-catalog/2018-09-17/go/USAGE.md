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

    req := operations.CancelChangeSetRequest{
        QueryParams: operations.CancelChangeSetQueryParams{
            Catalog: "corrupti",
            ChangeSetID: "provident",
        },
        Headers: operations.CancelChangeSetHeaders{
            XAmzAlgorithm: "distinctio",
            XAmzContentSha256: "quibusdam",
            XAmzCredential: "unde",
            XAmzDate: "nulla",
            XAmzSecurityToken: "corrupti",
            XAmzSignature: "illum",
            XAmzSignedHeaders: "vel",
        },
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