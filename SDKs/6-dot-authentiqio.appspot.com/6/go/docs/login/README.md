# Login

### Available Operations

* [PushLoginRequest](#pushloginrequest) - push sign-in request
See: https://github.com/skion/authentiq/wiki/JWT-Examples


## PushLoginRequest

push sign-in request
See: https://github.com/skion/authentiq/wiki/JWT-Examples


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Login.PushLoginRequest(ctx, operations.PushLoginRequestRequest{
        RequestBody: []byte("qui"),
        Callback: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PushLoginRequest200ApplicationJSONObject != nil {
        // handle response
    }
}
```
