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
            XAmzAlgorithm: "voluptate",
            XAmzContentSha256: "itaque",
            XAmzCredential: "harum",
            XAmzDate: "nulla",
            XAmzSecurityToken: "commodi",
            XAmzSignature: "corrupti",
            XAmzSignedHeaders: "quasi",
            XAmzTarget: "WorkspacesService.AssociateConnectionAlias",
        },
        Request: shared.AssociateConnectionAliasRequest{
            AliasID: "praesentium",
            ResourceID: "impedit",
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