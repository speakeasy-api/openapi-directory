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

    req := operations.PostRequestSubjectErasureRequest{
        Security: operations.PostRequestSubjectErasureSecurity{
            APIKeyAuth: &shared.SchemeAPIKeyAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &shared.SubjectErasureByPspReferenceRequest{
            ForceErasure: false,
            MerchantAccount: "unde",
            PspReference: "deserunt",
        },
    }

    ctx := context.Background()
    res, err := s.General.PostRequestSubjectErasure(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SubjectErasureResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->