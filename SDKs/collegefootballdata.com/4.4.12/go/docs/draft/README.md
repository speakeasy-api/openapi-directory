# Draft

## Overview

NFL Draft data

### Available Operations

* [GetDraftPicks](#getdraftpicks) - List of NFL Draft picks
* [GetNFLPositions](#getnflpositions) - List of NFL positions
* [GetNFLTeams](#getnflteams) - List of NFL teams

## GetDraftPicks

List of NFL Draft picks

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
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Draft.GetDraftPicks(ctx, operations.GetDraftPicksRequest{
        College: sdk.String("voluptatum"),
        Conference: sdk.String("iusto"),
        NflTeam: sdk.String("excepturi"),
        Position: sdk.String("nisi"),
        Year: sdk.Int64(925597),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DraftPicks != nil {
        // handle response
    }
}
```

## GetNFLPositions

List of NFL positions

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Draft.GetNFLPositions(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.DraftPositions != nil {
        // handle response
    }
}
```

## GetNFLTeams

List of NFL teams

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Draft.GetNFLTeams(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.DraftTeams != nil {
        // handle response
    }
}
```
