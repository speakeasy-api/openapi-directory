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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateTemplateDesignerTemplatesPost](docs/sdk/README.md#createtemplatedesignertemplatespost) - Create Template
* [DeleteDesignerTemplatesIDDelete](docs/sdk/README.md#deletedesignertemplatesiddelete) - Delete
* [GeneratePdfDesignerTemplatesIDGeneratePost](docs/sdk/README.md#generatepdfdesignertemplatesidgeneratepost) - Generate Pdf
* [ListTemplatesDesignerTemplatesIDGet](docs/sdk/README.md#listtemplatesdesignertemplatesidget) - List Templates
* [ListTemplatesDesignerTemplatesGet](docs/sdk/README.md#listtemplatesdesignertemplatesget) - List Templates
* [PreviewDesignerTemplatesPreviewPost](docs/sdk/README.md#previewdesignertemplatespreviewpost) - Preview
* [UpdateTemplateDesignerTemplatesIDPut](docs/sdk/README.md#updatetemplatedesignertemplatesidput) - Update Template

### [Templates](docs/templates/README.md)

* [Create](docs/templates/README.md#create) - Create
* [DeleteTemplatesIDDelete](docs/templates/README.md#deletetemplatesiddelete) - Delete 
* [Fill](docs/templates/README.md#fill) - Fill
* [Get](docs/templates/README.md#get) - Get Template
* [GetFileTemplatesIDFileGet](docs/templates/README.md#getfiletemplatesidfileget) - Get File
* [List](docs/templates/README.md#list) - List 
* [Update](docs/templates/README.md#update) - Update
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
