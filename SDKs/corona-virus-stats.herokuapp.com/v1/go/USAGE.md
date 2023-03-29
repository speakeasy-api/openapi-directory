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
            Bearer: shared.SchemeBearer{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Cases.CasesGeneralStatsList(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GeneralStats != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->