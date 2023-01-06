<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.TranslateRequest{
        Security: operations.TranslateSecurity{
            APIAuth: shared.SchemeAPIAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        Request: shared.TranslateRequest{
            From: "accusantium",
            Text: []string{
                "quis",
                "et",
                "tempora",
            },
            To: "quaerat",
            TranslationContext: "vel",
        },
    }
    
    res, err := s.Language.Translate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.TranslateResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->