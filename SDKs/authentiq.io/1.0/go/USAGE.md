<!-- Start SDK Example Usage -->
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
    res, err := s.Authentication.Authorize(ctx, operations.AuthorizeRequest{
        ClientID: "corrupti",
        Display: sdk.String("provident"),
        MaxAge: sdk.Int64(715190),
        Nonce: sdk.String("quibusdam"),
        Prompt: sdk.String("unde"),
        RedirectURI: "nulla",
        ResponseMode: sdk.String("corrupti"),
        ResponseType: "illum",
        Scope: "vel",
        State: "error",
        UILocales: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->