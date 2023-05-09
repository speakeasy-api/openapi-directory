# Transfer

### Available Operations

* [GetWebauth](#getwebauth) - First step to establish an oAuth2 connection.

## GetWebauth

The route encapsulate 2 functionalities: 1. Create or update a connection through oAuth2 session.<br><br>2. Execute a transfer through OAuth2 session.

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
    res, err := s.Transfer.GetWebauth(ctx, operations.GetWebauthRequestBody{
        ClientID: sdk.Int64(622231),
        IDTransfer: sdk.Int64(8511),
        RedirectURI: sdk.String("incidunt"),
        State: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
