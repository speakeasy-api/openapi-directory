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
    s := sdk.New()

    req := operations.AuthorizeRequest{
        QueryParams: operations.AuthorizeQueryParams{
            ClientID: "corrupti",
            Display: "provident",
            MaxAge: 715190,
            Nonce: "quibusdam",
            Prompt: "unde",
            RedirectURI: "nulla",
            ResponseMode: "corrupti",
            ResponseType: "illum",
            Scope: "vel",
            State: "error",
            UILocales: "deserunt",
        },
    }

    ctx := context.Background()
    res, err := s.Authentication.Authorize(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->