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
    s := sdk.New()

    req := shared.TranslateRequest{
        From: "corrupti",
        Text: []string{
            "distinctio",
            "quibusdam",
            "unde",
        },
        To: "nulla",
        TranslationContext: "corrupti",
    }

    ctx := context.Background()
    res, err := s.Language.Translate(ctx, req, operations.TranslateSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TranslateResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->