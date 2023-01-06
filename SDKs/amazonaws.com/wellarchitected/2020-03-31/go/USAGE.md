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
    
    req := operations.AssociateLensesRequest{
        PathParams: operations.AssociateLensesPathParams{
            WorkloadID: "cupiditate",
        },
        Headers: operations.AssociateLensesHeaders{
            XAmzAlgorithm: "minus",
            XAmzContentSha256: "in",
            XAmzCredential: "debitis",
            XAmzDate: "est",
            XAmzSecurityToken: "animi",
            XAmzSignature: "distinctio",
            XAmzSignedHeaders: "hic",
        },
        Request: operations.AssociateLensesRequestBody{
            LensAliases: []string{
                "qui",
                "rerum",
            },
        },
    }
    
    res, err := s.AssociateLenses(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->