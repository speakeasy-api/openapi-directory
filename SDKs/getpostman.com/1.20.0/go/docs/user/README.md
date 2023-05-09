# User

### Available Operations

* [APIKeyOwner](#apikeyowner) - API Key Owner

## APIKeyOwner

the `/me` Postman API endpoint lets you access information about the authenticated user. You can retrieve the authenticated user's username, full name, e-mail address, and any other available information.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.User.APIKeyOwner(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKeyOwner200ApplicationJSONObject != nil {
        // handle response
    }
}
```
