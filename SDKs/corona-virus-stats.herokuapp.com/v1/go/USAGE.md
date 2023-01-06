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
                Bearer: shared.SchemeBearer{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    res, err := s.Cases.CasesGeneralStatsList(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GeneralStats != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->