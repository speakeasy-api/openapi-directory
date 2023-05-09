# Games

### Available Operations

* [AllGamesExampleParameters](#allgamesexampleparameters) - all games (example parameters)
* [SpecificGame](#specificgame) - specific game

## AllGamesExampleParameters

all games (example parameters)

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
    res, err := s.Games.AllGamesExampleParameters(ctx, operations.AllGamesExampleParametersRequest{
        Seasons: sdk.String("2018"),
        TeamIds: sdk.String("1"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SpecificGame

specific game

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
    res, err := s.Games.SpecificGame(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
