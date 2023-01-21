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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
        },
        Request: operations.AssociateDomainRequestBody{
            AcmCertificateArn: "voluptas",
            DisplayName: "fugit",
            DomainName: "et",
            FleetArn: "nihil",
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