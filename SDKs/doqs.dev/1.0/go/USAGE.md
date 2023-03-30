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
            APIKeyAuth: shared.SchemeAPIKeyAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateTemplateDesignerTemplatesPostRequest{
        Request: shared.CreateOrUpdateTemplateRequest{
            Components: []map[string]interface{}{
                map[string]interface{}{
                    "porro": "nulla",
                    "id": "vero",
                    "perspiciatis": "nulla",
                },
                map[string]interface{}{
                    "fuga": "facilis",
                    "eum": "iusto",
                },
                map[string]interface{}{
                    "saepe": "inventore",
                    "sapiente": "enim",
                },
            },
            CSS: "eum",
            FooterHTML: "voluptatum",
            Format: "a5",
            HeaderHTML: "vel",
            Name: "non",
            Orientation: "landscape",
            PreviewPayload: map[string]interface{}{
                "reprehenderit": "molestiae",
                "quo": "quasi",
                "laboriosam": "dicta",
            },
            TemplateHTML: "est",
        },
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