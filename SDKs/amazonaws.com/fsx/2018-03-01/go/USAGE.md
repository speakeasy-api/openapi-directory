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

    req := operations.AssociateFileSystemAliasesRequest{
        Headers: operations.AssociateFileSystemAliasesHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "AWSSimbaAPIService_v20180301.AssociateFileSystemAliases",
        },
        Request: shared.AssociateFileSystemAliasesRequest{
            Aliases: []string{
                "fuga",
                "facilis",
            },
            ClientRequestToken: "eum",
            FileSystemID: "iusto",
        },
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