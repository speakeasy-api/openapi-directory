# Credits

### Available Operations

* [PostCreditTransfer](#postcredittransfer) - Transfer credits to another account

## PostCreditTransfer

Before you can use the transfer credits endpoint, the _credit-transfer facility_ must be activated for your account.  You can request activation from `support@bulksms.com`. 

The recipient must be an enabled account that uses the same currency as your account.


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
    res, err := s.Credits.PostCreditTransfer(ctx, shared.TransferEntry{
        CommentOnFrom: sdk.String("Tranfer to Bobby"),
        CommentOnTo: sdk.String("Tranfer from Danny"),
        Credits: 2345,
        ToUserID: 2345,
        ToUsername: "roboto",
    }, operations.PostCreditTransferSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
