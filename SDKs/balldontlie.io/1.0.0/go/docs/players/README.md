# Players

### Available Operations

* [AllPlayersSearch](#allplayerssearch) - all players (search)
* [SpecificPlayer](#specificplayer) - specific player

## AllPlayersSearch

all players (search)

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
    res, err := s.Players.AllPlayersSearch(ctx, operations.AllPlayersSearchRequest{
        Search: sdk.String("lebron"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SpecificPlayer

specific player

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
    res, err := s.Players.SpecificPlayer(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
