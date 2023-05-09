# SDK

## Overview

JSON storage API

### Available Operations

* [DeleteBinID](#deletebinid) - Delete a json bin
* [GetBinID](#getbinid) - Return a json bin
* [PatchBinID](#patchbinid) - Partially update a json bin with JSON Merge Patch
* [PostBin](#postbin) - Create a json bin
* [PutBinID](#putbinid) - Update a json bin

## DeleteBinID

Delete a json bin

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
    res, err := s.SDK.DeleteBinID(ctx, operations.DeleteBinIDRequest{
        ID: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteStatus != nil {
        // handle response
    }
}
```

## GetBinID

Return a json bin

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
    res, err := s.SDK.GetBinID(ctx, operations.GetBinIDRequest{
        ID: "cb739205-9293-496f-aa75-96eb10faaa23",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBinID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PatchBinID

Partially update a json bin with JSON Merge Patch

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
    res, err := s.SDK.PatchBinID(ctx, operations.PatchBinIDRequest{
        ID: "52c59559-07af-4f1a-ba2f-a9467739251a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateStatus != nil {
        // handle response
    }
}
```

## PostBin

Create a json bin

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
    res, err := s.SDK.PostBin(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateStatus != nil {
        // handle response
    }
}
```

## PutBinID

Update a json bin

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
    res, err := s.SDK.PutBinID(ctx, operations.PutBinIDRequest{
        ID: "a52c3f5a-d019-4da1-bfe7-8f097b0074f1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateStatus != nil {
        // handle response
    }
}
```
