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
    
    req := operations.AssociateCustomDomainRequest{
        Headers: operations.AssociateCustomDomainHeaders{
            XAmzAlgorithm: "pariatur",
            XAmzContentSha256: "id",
            XAmzCredential: "voluptatem",
            XAmzDate: "esse",
            XAmzSecurityToken: "in",
            XAmzSignature: "amet",
            XAmzSignedHeaders: "consectetur",
            XAmzTarget: "AppRunner.AssociateCustomDomain",
        },
        Request: shared.AssociateCustomDomainRequest{
            DomainName: "nesciunt",
            EnableWWWSubdomain: false,
            ServiceArn: "aut",
        },
    }
    
    res, err := s.AssociateCustomDomain(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateCustomDomainResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->