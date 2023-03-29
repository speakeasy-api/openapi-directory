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

    req := operations.GETCloneReceiptRuleSetRequest{
        QueryParams: operations.GETCloneReceiptRuleSetQueryParams{
            Action: "CloneReceiptRuleSet",
            OriginalRuleSetName: "deserunt",
            RuleSetName: "porro",
            Version: "2010-12-01",
        },
        Headers: operations.GETCloneReceiptRuleSetHeaders{
            XAmzAlgorithm: "id",
            XAmzContentSha256: "vero",
            XAmzCredential: "perspiciatis",
            XAmzDate: "nulla",
            XAmzSecurityToken: "nihil",
            XAmzSignature: "fuga",
            XAmzSignedHeaders: "facilis",
        },
    }

    ctx := context.Background()
    res, err := s.GETCloneReceiptRuleSet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->