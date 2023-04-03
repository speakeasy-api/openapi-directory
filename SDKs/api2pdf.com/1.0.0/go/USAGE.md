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