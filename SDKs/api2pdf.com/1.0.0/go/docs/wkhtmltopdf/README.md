# Wkhtmltopdf

### Available Operations

* [WkhtmltopdfFromHTMLPost](#wkhtmltopdffromhtmlpost) - Convert raw HTML to PDF
* [WkhtmltopdfFromURLGET](#wkhtmltopdffromurlget) - Convert URL to PDF
* [WkhtmltopdfFromURLPost](#wkhtmltopdffromurlpost) - Convert URL to PDF

## WkhtmltopdfFromHTMLPost

Convert HTML to a PDF using WkHtmlToPdf on AWS Lambda.
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
    res, err := s.Wkhtmltopdf.WkhtmltopdfFromHTMLPost(ctx, shared.WkHTMLToPdfHTMLToPdfRequest{
        FileName: sdk.String("test.pdf"),
        HTML: "<p>Hello World</p>",
        InlinePdf: sdk.Bool(true),
        Options: &shared.WkHTMLToPdfAdvancedOptions{
            Orientation: sdk.String("landscape"),
            PageSize: sdk.String("A4"),
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

## WkhtmltopdfFromURLGET

Convert a URL or Web Page to PDF using WkHtmlToPdf on AWS Lambda. This GET request is for convenience and does not support advanced options. Use the POST request for more flexibility.
### Authorize via Query String Parameter
**apikey=YOUR-API-KEY**
### Example
``` https://v2018.api2pdf.com/wkhtmltopdf/url?url={UrlToConvert}&apikey={YourApiKey} ``` 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Wkhtmltopdf.WkhtmltopdfFromURLGET(ctx, operations.WkhtmltopdfFromURLGETRequest{
        Output: sdk.String("deserunt"),
        URL: "suscipit",
    }, operations.WkhtmltopdfFromURLGETSecurity{
        QueryAPIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponseSuccess != nil {
        // handle response
    }
}
```

## WkhtmltopdfFromURLPost

Convert a URL or Web Page to PDF using WkHtmlToPdf on AWS Lambda..
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
    res, err := s.Wkhtmltopdf.WkhtmltopdfFromURLPost(ctx, shared.WkHTMLToPdfURLToPdfRequest{
        FileName: sdk.String("test.pdf"),
        InlinePdf: sdk.Bool(true),
        Options: &shared.WkHTMLToPdfAdvancedOptions{
            Orientation: sdk.String("landscape"),
            PageSize: sdk.String("A4"),
        },
        URL: "https://www.github.com",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponseSuccess != nil {
        // handle response
    }
}
```
