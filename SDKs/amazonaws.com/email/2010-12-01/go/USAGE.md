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
    
    req := operations.GetCloneReceiptRuleSetRequest{
        QueryParams: operations.GetCloneReceiptRuleSetQueryParams{
            Action: "CloneReceiptRuleSet",
            OriginalRuleSetName: "voluptas",
            RuleSetName: "culpa",
            Version: "2010-12-01",
        },
        Headers: operations.GetCloneReceiptRuleSetHeaders{
            XAmzAlgorithm: "consequuntur",
            XAmzContentSha256: "dolor",
            XAmzCredential: "expedita",
            XAmzDate: "voluptas",
            XAmzSecurityToken: "fugit",
            XAmzSignature: "et",
            XAmzSignedHeaders: "nihil",
        },
    }
    
    res, err := s.GetCloneReceiptRuleSet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->