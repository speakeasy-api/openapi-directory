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
    
    req := operations.AssociateDomainRequest{
        Headers: operations.AssociateDomainHeaders{
            XAmzAlgorithm: "nobis",
            XAmzContentSha256: "possimus",
            XAmzCredential: "voluptate",
            XAmzDate: "illum",
            XAmzSecurityToken: "iusto",
            XAmzSignature: "sunt",
            XAmzSignedHeaders: "saepe",
        },
        Request: operations.AssociateDomainRequestBody{
            AcmCertificateArn: "veniam",
            DisplayName: "quod",
            DomainName: "ducimus",
            FleetArn: "esse",
        },
    }
    
    res, err := s.AssociateDomain(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateDomainResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->