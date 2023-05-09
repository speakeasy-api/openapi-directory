# HeadlessChrome

### Available Operations

* [ChromeFromHTMLPost](#chromefromhtmlpost) - Convert raw HTML to PDF
* [ChromeFromURLGET](#chromefromurlget) - Convert URL to PDF
* [ChromeFromURLPost](#chromefromurlpost) - Convert URL to PDF

## ChromeFromHTMLPost

Convert HTML to a PDF using Headless Chrome on AWS Lambda.
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

## ChromeFromURLGET

Convert a URL or Web Page to PDF using Headless Chrome on AWS Lambda. This GET request is for convenience and does not support advanced options. Use the POST request for more flexibility.
### Authorize via Query String Parameter
**apikey=YOUR-API-KEY**
### Example
``` https://v2018.api2pdf.com/chrome/url?url={UrlToConvert}&apikey={YourApiKey} ``` 

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
    res, err := s.HeadlessChrome.ChromeFromURLGET(ctx, operations.ChromeFromURLGETRequest{
        Output: sdk.String("corrupti"),
        URL: "provident",
    }, operations.ChromeFromURLGETSecurity{
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

## ChromeFromURLPost

Convert a URL or Web Page to PDF using Headless Chrome on AWS Lambda..
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
    res, err := s.HeadlessChrome.ChromeFromURLPost(ctx, shared.ChromeURLToPdfRequest{
        FileName: sdk.String("test.pdf"),
        InlinePdf: sdk.Bool(true),
        Options: &shared.ChromeAdvancedOptions{
            Landscape: sdk.String("true"),
            PrintBackground: sdk.Bool(false),
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
