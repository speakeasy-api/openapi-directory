<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Language.Translate(ctx, shared.TranslateRequest{
        From: sdk.String("corrupti"),
        Text: []string{
            "distinctio",
            "quibusdam",
            "unde",
        },
        To: sdk.String("nulla"),
        TranslationContext: sdk.String("corrupti"),
    }, operations.TranslateSecurity{
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