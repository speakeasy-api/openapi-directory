# TransactionRequests1234

### Available Operations

* [Sendtransaction4](#sendtransaction4) - sendTransaction

## Sendtransaction4

sendTransaction

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
    res, err := s.TransactionRequests1234.Sendtransaction4(ctx, operations.Sendtransaction4RequestBody{
        Amount: sdk.String("1"),
        Password: sdk.String("Test123"),
        Speed: sdk.String("fast"),
        Subtractfee: sdk.Bool(false),
        To: sdk.String("bc1qzq8m9ukvvgvj7kmlejnfr2q4ndmk2e4ndtr9rn"),
        Walletname: sdk.String("Evolo_6928232"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
