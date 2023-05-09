# Health

### Available Operations

* [GetHeartbeat](#getheartbeat) - Ping the server for liveness
* [GetServerHealth](#getserverhealth) - Get state of the server and its dependencies.

## GetHeartbeat

Ping the server for liveness

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
    res, err := s.Health.GetHeartbeat(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetHeartbeat200TextPlainString != nil {
        // handle response
    }
}
```

## GetServerHealth

Get state of the server and its dependencies.

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
    res, err := s.Health.GetServerHealth(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetServerHealth200ApplicationJSONObject != nil {
        // handle response
    }
}
```
