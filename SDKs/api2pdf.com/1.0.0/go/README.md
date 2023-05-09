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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            HeaderAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.HeadlessChrome.ChromeFromHTMLPost(ctx, shared.ChromeHTMLToPdfRequest{
        FileName: sdk.String("test.pdf"),
        HTML: "<p>Hello World</p>",
        InlinePdf: sdk.Bool(true),
        Options: &shared.ChromeAdvancedOptions{
            Landscape: sdk.String("true"),
            PrintBackground: sdk.Bool(false),
        },
    })
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


### [HeadlessChrome](docs/headlesschrome/README.md)

* [ChromeFromHTMLPost](docs/headlesschrome/README.md#chromefromhtmlpost) - Convert raw HTML to PDF
* [ChromeFromURLGET](docs/headlesschrome/README.md#chromefromurlget) - Convert URL to PDF
* [ChromeFromURLPost](docs/headlesschrome/README.md#chromefromurlpost) - Convert URL to PDF

### [LibreOffice](docs/libreoffice/README.md)

* [LibreConvertPost](docs/libreoffice/README.md#libreconvertpost) - Convert office document or image to PDF

### [MergeCombinePdfs](docs/mergecombinepdfs/README.md)

* [MergePost](docs/mergecombinepdfs/README.md#mergepost) - Merge multiple PDFs together

### [ZXINGZebraCrossingBarCodes](docs/zxingzebracrossingbarcodes/README.md)

* [ZebraGET](docs/zxingzebracrossingbarcodes/README.md#zebraget) - Generate bar codes and QR codes with ZXING.

### [Wkhtmltopdf](docs/wkhtmltopdf/README.md)

* [WkhtmltopdfFromHTMLPost](docs/wkhtmltopdf/README.md#wkhtmltopdffromhtmlpost) - Convert raw HTML to PDF
* [WkhtmltopdfFromURLGET](docs/wkhtmltopdf/README.md#wkhtmltopdffromurlget) - Convert URL to PDF
* [WkhtmltopdfFromURLPost](docs/wkhtmltopdf/README.md#wkhtmltopdffromurlpost) - Convert URL to PDF
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
