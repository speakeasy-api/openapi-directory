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
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    req := shared.CreateOrUpdateTemplateRequest{
        Components: []map[string]interface{}{
            map[string]interface{}{
                "distinctio": "quibusdam",
                "unde": "nulla",
                "corrupti": "illum",
            },
            map[string]interface{}{
                "error": "deserunt",
                "suscipit": "iure",
            },
            map[string]interface{}{
                "debitis": "ipsa",
                "delectus": "tempora",
            },
        },
        CSS: "suscipit",
        FooterHTML: "molestiae",
        Format: "a5",
        HeaderHTML: "placeat",
        Name: "voluptatum",
        Orientation: "landscape",
        PreviewPayload: map[string]interface{}{
            "nisi": "recusandae",
            "temporibus": "ab",
            "quis": "veritatis",
        },
        TemplateHTML: "deserunt",
    }

    ctx := context.Background()
    res, err := s.CreateTemplateDesignerTemplatesPost(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseOkDesignerTemplate != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->