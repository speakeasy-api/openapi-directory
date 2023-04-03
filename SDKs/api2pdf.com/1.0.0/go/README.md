# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/api2pdf.com/1.0.0/go
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
            HeaderAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    req := shared.ChromeHTMLToPdfRequest{
        FileName: "test.pdf",
        HTML: "<p>Hello World</p>",
        InlinePdf: true,
        Options: &shared.ChromeAdvancedOptions{
            Landscape: "true",
            PrintBackground: false,
        },
    }

    ctx := context.Background()
    res, err := s.HeadlessChrome.ChromeFromHTMLPost(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponseSuccess != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### HeadlessChrome

* `ChromeFromHTMLPost` - Convert raw HTML to PDF
* `ChromeFromURLGET` - Convert URL to PDF
* `ChromeFromURLPost` - Convert URL to PDF

### LibreOffice

* `LibreConvertPost` - Convert office document or image to PDF

### MergeCombinePdfs

* `MergePost` - Merge multiple PDFs together

### ZXINGZebraCrossingBarCodes

* `ZebraGET` - Generate bar codes and QR codes with ZXING.

### Wkhtmltopdf

* `WkhtmltopdfFromHTMLPost` - Convert raw HTML to PDF
* `WkhtmltopdfFromURLGET` - Convert URL to PDF
* `WkhtmltopdfFromURLPost` - Convert URL to PDF
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
