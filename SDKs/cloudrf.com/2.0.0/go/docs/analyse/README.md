# Analyse

### Available Operations

* [Interference](#interference) - Find the best server for overlapping coverage
* [Mesh](#mesh) - Merge sites into a super layer.
* [Network](#network) - Find the best server for somewhere

## Interference

Merge and analyse sites within a network channel to determine the best server at a given location. Each site will be dynamically allocated a monochrome colour from a palette and the strongest signal promoted at a given location.

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
    res, err := s.Analyse.Interference(ctx, operations.InterferenceRequest{
        Name: "Dallas Kassulke",
        Network: "suscipit",
    }, operations.InterferenceSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Mesh

A merge of 'area' calculations for a network to create a single super layer. Stronger signals are promoted over weaker ones. The same colour key must be used.

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
    res, err := s.Analyse.Mesh(ctx, operations.MeshRequest{
        Name: "Dr. Valerie Toy",
        Network: "suscipit",
    }, operations.MeshSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Network

Query your network to find the best server(s) for a given receiver/customer location. A previously generated network is required.

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
    res, err := s.Analyse.Network(ctx, operations.NetworkRequest{
        Alt: 477665,
        Lat: 7917.25,
        Lon: 8121.69,
        Nam: "voluptatum",
        Net: "iusto",
        Rxg: sdk.Float32(5680.45),
    }, operations.NetworkSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
