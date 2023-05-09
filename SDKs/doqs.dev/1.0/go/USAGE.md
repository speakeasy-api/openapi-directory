<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateTemplateDesignerTemplatesPost(ctx, shared.CreateOrUpdateTemplateRequest{
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
        FooterHTML: sdk.String("molestiae"),
        Format: shared.FormatEnumA5,
        HeaderHTML: sdk.String("placeat"),
        Margin: &shared.CreateOrUpdateTemplateRequestMargin{
            Bottom: sdk.Int64(528895),
            Left: sdk.Int64(479977),
            Right: sdk.Int64(568045),
            Top: sdk.Int64(392785),
        },
        Name: "Jake Bernier MD",
        Orientation: shared.OrientationEnumLandscape,
        PreviewPayload: map[string]interface{}{
            "repellendus": "sapiente",
            "quo": "odit",
        },
        TemplateHTML: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseOkDesignerTemplate != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->