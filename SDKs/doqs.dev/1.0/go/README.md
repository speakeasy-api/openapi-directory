# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/doqs.dev/1.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CreateTemplateDesignerTemplatesPost` - Create Template
* `DeleteDesignerTemplatesIDDelete` - Delete
* `GeneratePdfDesignerTemplatesIDGeneratePost` - Generate Pdf
* `ListTemplatesDesignerTemplatesGet` - List Templates
* `ListTemplatesDesignerTemplatesIDGet` - List Templates
* `PreviewDesignerTemplatesPreviewPost` - Preview
* `UpdateTemplateDesignerTemplatesIDPut` - Update Template

### Templates

* `Create` - Create
* `DeleteTemplatesIDDelete` - Delete 
* `Fill` - Fill
* `Get` - Get Template
* `GetFileTemplatesIDFileGet` - Get File
* `List` - List 
* `Update` - Update
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
