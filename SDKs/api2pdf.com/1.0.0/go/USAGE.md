<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                HeaderAPIKey: shared.SchemeHeaderAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.ChromeFromHTMLPostRequest{
        Request: &shared.ChromeHTMLToPdfRequest{
            FileName: "in",
            HTML: "quia",
            InlinePdf: false,
            Options: &shared.ChromeAdvancedOptions{
                Landscape: "quia",
                PrintBackground: true,
            },
        },
    }
    
    res, err := s.HeadlessChrome.ChromeFromHTMLPost(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponseSuccess != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->