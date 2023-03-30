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
            ClientID: "unde",
            Display: "deserunt",
            MaxAge: 715190,
            Nonce: "nulla",
            Prompt: "id",
            RedirectURI: "vero",
            ResponseMode: "perspiciatis",
            ResponseType: "nulla",
            Scope: "nihil",
            State: "fuga",
            UILocales: "facilis",
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