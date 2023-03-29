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

    req := operations.AssociateAccountsRequest{
        Headers: operations.AssociateAccountsHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.AssociateAccountsRequestBody{
            AccountIds: []string{
                "nihil",
                "fuga",
                "facilis",
                "eum",
            },
            Arn: "iusto",
        },
    }

    ctx := context.Background()
    res, err := s.AssociateAccounts(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateAccountsOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->