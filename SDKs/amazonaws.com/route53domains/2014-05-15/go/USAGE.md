<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.AcceptDomainTransferFromAnotherAwsAccountRequest{
        Headers: operations.AcceptDomainTransferFromAnotherAwsAccountHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount",
        },
        Request: shared.AcceptDomainTransferFromAnotherAwsAccountRequest{
            DomainName: "nihil",
            Password: "fuga",
        },
    }

    ctx := context.Background()
    res, err := s.AcceptDomainTransferFromAnotherAwsAccount(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptDomainTransferFromAnotherAwsAccountResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->