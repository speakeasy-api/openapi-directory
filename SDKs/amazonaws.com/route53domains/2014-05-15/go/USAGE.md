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
    
    req := operations.AcceptDomainTransferFromAnotherAwsAccountRequest{
        Headers: operations.AcceptDomainTransferFromAnotherAwsAccountHeaders{
            XAmzAlgorithm: "sint",
            XAmzContentSha256: "et",
            XAmzCredential: "fuga",
            XAmzDate: "distinctio",
            XAmzSecurityToken: "quidem",
            XAmzSignature: "reiciendis",
            XAmzSignedHeaders: "laboriosam",
            XAmzTarget: "Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount",
        },
        Request: shared.AcceptDomainTransferFromAnotherAwsAccountRequest{
            DomainName: "pariatur",
            Password: "omnis",
        },
    }
    
    res, err := s.AcceptDomainTransferFromAnotherAwsAccount(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptDomainTransferFromAnotherAwsAccountResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->