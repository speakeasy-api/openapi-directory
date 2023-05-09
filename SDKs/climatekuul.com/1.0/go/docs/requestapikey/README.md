# RequestAPIKey

### Available Operations

* [RequestAPIKey](#requestapikey) - requestApiKey

## RequestAPIKey

requestApiKey

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
    res, err := s.RequestAPIKey.RequestAPIKey(ctx, operations.RequestAPIKeyRequestBody{
        APIKeyL1: "qNahlSrEaduQ",
        APIKeyL2: "eCqMeAfaDBWG",
        Email: "abcd@gmail.com",
        Password: 234,
        UserFirstName: "usman",
        UserLastName: "ch",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
