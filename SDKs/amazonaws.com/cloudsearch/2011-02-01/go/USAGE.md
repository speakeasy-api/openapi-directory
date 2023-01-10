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
    
    req := operations.GetCreateDomainRequest{
        QueryParams: operations.GetCreateDomainQueryParams{
            Action: "CreateDomain",
            DomainName: "illo",
            Version: "2011-02-01",
        },
        Headers: operations.GetCreateDomainHeaders{
            XAmzAlgorithm: "est",
            XAmzContentSha256: "aut",
            XAmzCredential: "eum",
            XAmzDate: "mollitia",
            XAmzSecurityToken: "praesentium",
            XAmzSignature: "inventore",
            XAmzSignedHeaders: "adipisci",
        },
    }
    
    res, err := s.GetCreateDomain(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->