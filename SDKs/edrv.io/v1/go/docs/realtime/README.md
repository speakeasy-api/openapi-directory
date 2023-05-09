# Realtime

### Available Operations

* [GetRealtime](#getrealtime) - Use to request a Websockets handshake

## GetRealtime

Use to request a Websockets handshake

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Realtime.GetRealtime(ctx, operations.GetRealtimeRequest{
        SecWebsocketProtocol: "asperiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
