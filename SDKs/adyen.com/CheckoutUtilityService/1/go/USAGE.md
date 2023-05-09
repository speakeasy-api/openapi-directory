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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PostOriginKeys(ctx, shared.CheckoutUtilityRequest{
        OriginDomains: []string{
            "provident",
            "distinctio",
            "quibusdam",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckoutUtilityResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->