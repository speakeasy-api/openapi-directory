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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "magni",
            XAmzCredential: "quis",
            XAmzDate: "sed",
            XAmzSecurityToken: "ratione",
            XAmzSignature: "sed",
            XAmzSignedHeaders: "quaerat",
            XAmzTarget: "Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount",
        },
        Request: shared.AcceptDomainTransferFromAnotherAwsAccountRequest{
            DomainName: "vel",
            Password: "fuga",
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