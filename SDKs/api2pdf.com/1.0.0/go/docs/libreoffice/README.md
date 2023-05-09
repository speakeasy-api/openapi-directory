# LibreOffice

### Available Operations

* [LibreConvertPost](#libreconvertpost) - Convert office document or image to PDF

## LibreConvertPost

Convert an office document (Word, Excel, Powerpoint) or an image (jpg, gif, png) to a PDF using LibreOffice on AWS Lambda.
### Authorize via Header of Request
**Authorization: YOUR-API-KEY**

### Example Usage

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
    res, err := s.LibreOffice.LibreConvertPost(ctx, shared.LibreOfficeConvertRequest{
        FileName: sdk.String("test.pdf"),
        InlinePdf: sdk.Bool(true),
        URL: "https://www.api2pdf.com/wp-content/themes/api2pdf/assets/samples/sample-word-doc.docx",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponseSuccess != nil {
        // handle response
    }
}
```
