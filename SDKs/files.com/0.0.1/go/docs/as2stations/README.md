# As2Stations

## Overview

Operations about as2_stations

### Available Operations

* [DeleteAs2StationsID](#deleteas2stationsid) - Delete As2 Station
* [GetAs2Stations](#getas2stations) - List As2 Stations
* [GetAs2StationsID](#getas2stationsid) - Show As2 Station
* [PatchAs2StationsID](#patchas2stationsid) - Update As2 Station
* [PostAs2Stations](#postas2stations) - Create As2 Station

## DeleteAs2StationsID

Delete As2 Station

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
    res, err := s.As2Stations.DeleteAs2StationsID(ctx, operations.DeleteAs2StationsIDRequest{
        ID: 575947,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAs2Stations

List As2 Stations

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
    res, err := s.As2Stations.GetAs2Stations(ctx, operations.GetAs2StationsRequest{
        Cursor: sdk.String("veritatis"),
        PerPage: sdk.Int(929297),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.As2StationEntities != nil {
        // handle response
    }
}
```

## GetAs2StationsID

Show As2 Station

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
    res, err := s.As2Stations.GetAs2StationsID(ctx, operations.GetAs2StationsIDRequest{
        ID: 277718,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.As2StationEntity != nil {
        // handle response
    }
}
```

## PatchAs2StationsID

Update As2 Station

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
    res, err := s.As2Stations.PatchAs2StationsID(ctx, operations.PatchAs2StationsIDRequest{
        RequestBody: &operations.PatchAs2StationsIDRequestBody{
            Name: sdk.String("Elizabeth Orn"),
            PrivateKey: sdk.String("deserunt"),
            PrivateKeyPassword: sdk.String("distinctio"),
            PublicCertificate: sdk.String("quibusdam"),
        },
        ID: 289406,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.As2StationEntity != nil {
        // handle response
    }
}
```

## PostAs2Stations

Create As2 Station

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
    res, err := s.As2Stations.PostAs2Stations(ctx, operations.PostAs2StationsRequestBody{
        Name: "Tina Jacobi",
        PrivateKey: "perferendis",
        PrivateKeyPassword: sdk.String("magni"),
        PublicCertificate: "assumenda",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.As2StationEntity != nil {
        // handle response
    }
}
```
