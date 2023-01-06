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
            XAmzAlgorithm: "labore",
            XAmzContentSha256: "totam",
            XAmzCredential: "eum",
            XAmzDate: "laborum",
            XAmzSecurityToken: "maxime",
            XAmzSignature: "voluptatem",
            XAmzSignedHeaders: "aut",
        },
        Request: operations.AssociateDomainRequestBody{
            AcmCertificateArn: "qui",
            DisplayName: "facere",
            DomainName: "nulla",
            FleetArn: "qui",
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