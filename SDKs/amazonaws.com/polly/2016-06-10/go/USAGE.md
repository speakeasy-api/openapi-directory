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
    
    req := operations.DeleteLexiconRequest{
        PathParams: operations.DeleteLexiconPathParams{
            LexiconName: "nemo",
        },
        Headers: operations.DeleteLexiconHeaders{
            XAmzAlgorithm: "quia",
            XAmzContentSha256: "provident",
            XAmzCredential: "sint",
            XAmzDate: "distinctio",
            XAmzSecurityToken: "maiores",
            XAmzSignature: "exercitationem",
            XAmzSignedHeaders: "sunt",
        },
    }
    
    res, err := s.DeleteLexicon(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteLexiconOutput != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->