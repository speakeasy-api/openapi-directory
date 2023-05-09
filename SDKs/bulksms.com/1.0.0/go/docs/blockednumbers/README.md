# BlockedNumbers

### Available Operations

* [GetBlockedNumbers](#getblockednumbers) - List blocked numbers
* [PostBlockedNumbers](#postblockednumbers) - Create a blocked number

## GetBlockedNumbers

List blocked numbers

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
    res, err := s.BlockedNumbers.GetBlockedNumbers(ctx, operations.GetBlockedNumbersRequest{
        Limit: sdk.Int(548814),
        MinID: sdk.Int(592845),
    }, operations.GetBlockedNumbersSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BlockedNumber != nil {
        // handle response
    }
}
```

## PostBlockedNumbers

Blocked numbers are phone numbers to which your account is not permitted to send messages.
The numbers can be created via this API, by a recipient replying with a STOP message to one
of your previous SENT messages, or by a BulkSMS administrator.

Sending a message to a blocked number will result in the message being assigned a status of
`FAILED.BLOCKED`. Messages sent to blocked numbers are billed to your account.


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
    res, err := s.BlockedNumbers.PostBlockedNumbers(ctx, []string{
        "44123456789",
        "44123456789",
        "44123456789",
    }, operations.PostBlockedNumbersSecurity{
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
