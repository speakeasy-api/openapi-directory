# General

### Available Operations

* [PostRequestSubjectErasure](#postrequestsubjecterasure) - Submit a Subject Erasure Request.

## PostRequestSubjectErasure

Sends the PSP reference containing the shopper data that should be deleted.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.General.PostRequestSubjectErasure(ctx, shared.SubjectErasureByPspReferenceRequest{
        ForceErasure: sdk.Bool(false),
        MerchantAccount: sdk.String("distinctio"),
        PspReference: sdk.String("quibusdam"),
    }, operations.PostRequestSubjectErasureSecurity{
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
