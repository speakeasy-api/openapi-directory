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