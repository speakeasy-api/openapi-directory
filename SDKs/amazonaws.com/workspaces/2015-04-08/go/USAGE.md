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
    
    req := operations.AssociateConnectionAliasRequest{
        Headers: operations.AssociateConnectionAliasHeaders{
            XAmzAlgorithm: "hic",
            XAmzContentSha256: "quisquam",
            XAmzCredential: "sit",
            XAmzDate: "autem",
            XAmzSecurityToken: "sed",
            XAmzSignature: "itaque",
            XAmzSignedHeaders: "qui",
            XAmzTarget: "WorkspacesService.AssociateConnectionAlias",
        },
        Request: shared.AssociateConnectionAliasRequest{
            AliasID: "et",
            ResourceID: "sequi",
        },
    }
    
    res, err := s.AssociateConnectionAlias(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateConnectionAliasResult != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->