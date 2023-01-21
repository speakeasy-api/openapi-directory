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
    
    req := operations.AssociateFileSystemAliasesRequest{
        Headers: operations.AssociateFileSystemAliasesHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "AWSSimbaAPIService_v20180301.AssociateFileSystemAliases",
        },
        Request: shared.AssociateFileSystemAliasesRequest{
            Aliases: []string{
                "et",
            },
            ClientRequestToken: "nihil",
            FileSystemID: "rerum",
        },
    }
    
    res, err := s.AssociateFileSystemAliases(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateFileSystemAliasesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->