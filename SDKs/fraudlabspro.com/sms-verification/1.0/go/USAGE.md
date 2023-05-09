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
    res, err := s.GetV1VerificationResult(ctx, operations.GetV1VerificationResultRequest{
        Format: operations.GetV1VerificationResultFormatEnumXML.ToPointer(),
        Key: "provident",
        Otp: "distinctio",
        TranID: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetV1VerificationResult200ApplicationJSONString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->