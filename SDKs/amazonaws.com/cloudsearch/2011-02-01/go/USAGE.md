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
            DomainName: "totam",
            Version: "2011-02-01",
        },
        Headers: operations.GetCreateDomainHeaders{
            XAmzAlgorithm: "voluptatibus",
            XAmzContentSha256: "sint",
            XAmzCredential: "aut",
            XAmzDate: "fugiat",
            XAmzSecurityToken: "adipisci",
            XAmzSignature: "sunt",
            XAmzSignedHeaders: "asperiores",
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