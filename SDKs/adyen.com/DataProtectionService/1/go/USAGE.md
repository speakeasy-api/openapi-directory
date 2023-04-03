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

    req := shared.SubjectErasureByPspReferenceRequest{
        ForceErasure: false,
        MerchantAccount: "corrupti",
        PspReference: "provident",
    }

    ctx := context.Background()
    res, err := s.General.PostRequestSubjectErasure(ctx, req, operations.PostRequestSubjectErasureSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubjectErasureResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->