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
            AWSAccessKeyID: "reiciendis",
            Action: "CreateDomain",
            DomainName: "modi",
            Signature: "cum",
            SignatureMethod: "similique",
            SignatureVersion: "voluptatibus",
            Timestamp: "quisquam",
            Version: "2009-04-15",
        },
    }
    
    res, err := s.GetCreateDomain(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->