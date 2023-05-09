# SDK

### Available Operations

* [Connect](#connect) - connect
* [Connections](#connections) - connections
* [Disconnect](#disconnect) - disconnect
* [Status](#status) - status

## Connect

Initiate a connection to a specified peer.

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
    res, err := s.SDK.Connect(ctx, operations.ConnectRequestBody{
        Endpoint: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connect200ApplicationJSONString != nil {
        // handle response
    }
}
```

## Connections

Returns an array of all peer connection statuses.

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
    res, err := s.SDK.Connections(ctx, map[string]interface{}{
        "quibusdam": "unde",
        "nulla": "corrupti",
        "illum": "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connections200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## Disconnect

Initiate disconnection from a specified peer.

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
    res, err := s.SDK.Disconnect(ctx, operations.DisconnectRequestBody{
        Endpoint: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Disconnect200ApplicationJSONString != nil {
        // handle response
    }
}
```

## Status

Retrieves the connection status for a specified peer.

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
    res, err := s.SDK.Status(ctx, operations.StatusRequestBody{
        Endpoint: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Status200ApplicationJSONObject != nil {
        // handle response
    }
}
```
