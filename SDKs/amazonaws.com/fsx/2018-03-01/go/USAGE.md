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

    req := operations.AssociateFileSystemAliasesRequest{
        AssociateFileSystemAliasesRequest: shared.AssociateFileSystemAliasesRequest{
            Aliases: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
            ClientRequestToken: "unde",
            FileSystemID: "nulla",
        },
        XAmzAlgorithm: "corrupti",
        XAmzContentSha256: "illum",
        XAmzCredential: "vel",
        XAmzDate: "error",
        XAmzSecurityToken: "deserunt",
        XAmzSignature: "suscipit",
        XAmzSignedHeaders: "iure",
        XAmzTarget: "AWSSimbaAPIService_v20180301.AssociateFileSystemAliases",
    }

    ctx := context.Background()
    res, err := s.AssociateFileSystemAliases(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateFileSystemAliasesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->