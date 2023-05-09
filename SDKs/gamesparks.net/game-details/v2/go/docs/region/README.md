# Region

## Overview

Region Restv 2 Controller

### Available Operations

* [GETGameRegionOptionsUsingGET](#getgameregionoptionsusingget) - getGameRegionOptions
* [GETRegionOptionsUsingGET](#getregionoptionsusingget) - getRegionOptions
* [SetGameRegionUsingPOST](#setgameregionusingpost) - setGameRegion

## GETGameRegionOptionsUsingGET

getGameRegionOptions

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
    res, err := s.Region.GETGameRegionOptionsUsingGET(ctx, operations.GETGameRegionOptionsUsingGETRequest{
        GameAPIKey: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GameRegionOptionsDTO != nil {
        // handle response
    }
}
```

## GETRegionOptionsUsingGET

getRegionOptions

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
    res, err := s.Region.GETRegionOptionsUsingGET(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GameRegionOptionsDTO != nil {
        // handle response
    }
}
```

## SetGameRegionUsingPOST

setGameRegion

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
    res, err := s.Region.SetGameRegionUsingPOST(ctx, operations.SetGameRegionUsingPOSTRequest{
        GameAPIKey: "architecto",
        RegionCode: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegionResult != nil {
        // handle response
    }
}
```
