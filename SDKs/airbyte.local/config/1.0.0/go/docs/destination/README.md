# Destination

## Overview

Destination related resources.

### Available Operations

* [CheckConnectionToDestination](#checkconnectiontodestination) - Check connection to the destination
* [CheckConnectionToDestinationForUpdate](#checkconnectiontodestinationforupdate) - Check connection for a proposed update to a destination
* [CloneDestination](#clonedestination) - Clone destination
* [CreateDestination](#createdestination) - Create a destination
* [DeleteDestination](#deletedestination) - Delete the destination
* [GetDestination](#getdestination) - Get configured destination
* [ListDestinationsForWorkspace](#listdestinationsforworkspace) - List configured destinations for a workspace
* [SearchDestinations](#searchdestinations) - Search destinations
* [UpdateDestination](#updatedestination) - Update a destination

## CheckConnectionToDestination

Check connection to the destination

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destination.CheckConnectionToDestination(ctx, shared.DestinationIDRequestBody{
        DestinationID: "6312fde0-4771-4778-bf61-d017476360a1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckConnectionRead != nil {
        // handle response
    }
}
```

## CheckConnectionToDestinationForUpdate

Check connection for a proposed update to a destination

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destination.CheckConnectionToDestinationForUpdate(ctx, shared.DestinationUpdate{
        ConnectionConfiguration: "nostrum",
        DestinationID: "db6a6606-59a1-4ade-aab5-851d6c645b08",
        Name: "Gene Brekke",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckConnectionRead != nil {
        // handle response
    }
}
```

## CloneDestination

Clone destination

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destination.CloneDestination(ctx, shared.DestinationCloneRequestBody{
        DestinationCloneID: "1baa0fe1-ade0-408e-af8c-5f350d8cdb5a",
        DestinationConfiguration: &shared.DestinationCloneConfiguration{
            ConnectionConfiguration: sdk.String("dolor"),
            Name: sdk.String("Mrs. Stephanie Lind"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DestinationRead != nil {
        // handle response
    }
}
```

## CreateDestination

Create a destination

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destination.CreateDestination(ctx, shared.DestinationCreate{
        ConnectionConfiguration: "consequatur",
        DestinationDefinitionID: "10421813-d520-48ec-a7e2-53b668451c6c",
        Name: "Mrs. Kate Cronin",
        WorkspaceID: "16deab3f-ec95-478a-a458-4273a8418d16",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DestinationRead != nil {
        // handle response
    }
}
```

## DeleteDestination

Delete the destination

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destination.DeleteDestination(ctx, shared.DestinationIDRequestBody{
        DestinationID: "2309fb09-2992-41ae-bb9f-58c4d86e68e4",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDestination

Get configured destination

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destination.GetDestination(ctx, shared.DestinationIDRequestBody{
        DestinationID: "be056013-f59d-4a75-ba59-ecfef66ef1ca",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DestinationRead != nil {
        // handle response
    }
}
```

## ListDestinationsForWorkspace

List configured destinations for a workspace

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destination.ListDestinationsForWorkspace(ctx, shared.WorkspaceIDRequestBody{
        WorkspaceID: "a3383c2b-eb47-4737-bc8d-72f64d1db1f2",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DestinationReadList != nil {
        // handle response
    }
}
```

## SearchDestinations

Search destinations

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destination.SearchDestinations(ctx, shared.DestinationSearch{
        ConnectionConfiguration: sdk.String("porro"),
        DestinationDefinitionID: sdk.String("4310661e-9634-49e1-8f9e-06e3a437000a"),
        DestinationID: sdk.String("e6b6bc9b-8f75-49ea-855a-9741d3113529"),
        DestinationName: sdk.String("ex"),
        Name: sdk.String("Patty Reinger"),
        WorkspaceID: sdk.String("72026114-35e1-439d-bc22-59b1abda8c07"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DestinationReadList != nil {
        // handle response
    }
}
```

## UpdateDestination

Update a destination

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destination.UpdateDestination(ctx, shared.DestinationUpdate{
        ConnectionConfiguration: "ipsa",
        DestinationID: "e1084cb0-672d-41ad-879e-eb9665b85efb",
        Name: "Robert Crona",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DestinationRead != nil {
        // handle response
    }
}
```
