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
            OriginalRuleSetName: "et",
            RuleSetName: "vero",
            Version: "2010-12-01",
        },
        Headers: operations.GetCloneReceiptRuleSetHeaders{
            XAmzAlgorithm: "ex",
            XAmzContentSha256: "magni",
            XAmzCredential: "vero",
            XAmzDate: "distinctio",
            XAmzSecurityToken: "cumque",
            XAmzSignature: "ea",
            XAmzSignedHeaders: "non",
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