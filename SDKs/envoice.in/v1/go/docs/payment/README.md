# Payment

### Available Operations

* [PaymentAPISupported](#paymentapisupported) - Return all supported payment gateways (no currencies means all are supported)

## PaymentAPISupported

Return all supported payment gateways (no currencies means all are supported)

### Example Usage

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
    res, err := s.Payment.PaymentAPISupported(ctx, operations.PaymentAPISupportedRequest{
        XAuthKey: "cupiditate",
        XAuthSecret: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentGatewayDetailsAPIModels != nil {
        // handle response
    }
}
```
