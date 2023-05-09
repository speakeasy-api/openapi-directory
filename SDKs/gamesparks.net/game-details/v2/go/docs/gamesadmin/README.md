# GamesAdmin

## Overview

Games Admin Restv 2 Controller

### Available Operations

* [GETGamesEndpointsUsingGET](#getgamesendpointsusingget) - getGamesEndpoints
* [ListDeletedUsingGET](#listdeletedusingget) - listDeleted
* [ListUsingGET](#listusingget) - list
* [RestoreDeletedGameUsingPOST](#restoredeletedgameusingpost) - restoreDeletedGame

## GETGamesEndpointsUsingGET

getGamesEndpoints

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
    res, err := s.GamesAdmin.GETGamesEndpointsUsingGET(ctx, operations.GETGamesEndpointsUsingGETRequest{
        APIKey: "animi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GameEndpointsModel != nil {
        // handle response
    }
}
```

## ListDeletedUsingGET

listDeleted

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
    res, err := s.GamesAdmin.ListDeletedUsingGET(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletedGameModels != nil {
        // handle response
    }
}
```

## ListUsingGET

list

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
    res, err := s.GamesAdmin.ListUsingGET(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GameModels != nil {
        // handle response
    }
}
```

## RestoreDeletedGameUsingPOST

restoreDeletedGame

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
    res, err := s.GamesAdmin.RestoreDeletedGameUsingPOST(ctx, operations.RestoreDeletedGameUsingPOSTRequest{
        APIKey: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessageModel != nil {
        // handle response
    }
}
```
