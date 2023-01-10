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
            WorkloadID: "unde",
        },
        Headers: operations.AssociateLensesHeaders{
            XAmzAlgorithm: "ipsam",
            XAmzContentSha256: "ad",
            XAmzCredential: "sint",
            XAmzDate: "dolores",
            XAmzSecurityToken: "illum",
            XAmzSignature: "error",
            XAmzSignedHeaders: "cupiditate",
        },
        Request: operations.AssociateLensesRequestBody{
            LensAliases: []string{
                "sapiente",
                "et",
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