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
            OriginalRuleSetName: "in",
            RuleSetName: "dolorem",
            Version: "2010-12-01",
        },
        Headers: operations.GetCloneReceiptRuleSetHeaders{
            XAmzAlgorithm: "sint",
            XAmzContentSha256: "non",
            XAmzCredential: "qui",
            XAmzDate: "debitis",
            XAmzSecurityToken: "in",
            XAmzSignature: "dolore",
            XAmzSignedHeaders: "quas",
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