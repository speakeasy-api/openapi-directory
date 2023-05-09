# Locks

## Overview

Operations about locks

### Available Operations

* [DeleteLocksPath](#deletelockspath) - Delete Lock
* [LockListForPath](#locklistforpath) - List Locks by path
* [PostLocksPath](#postlockspath) - Create Lock

## DeleteLocksPath

Delete Lock

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
    res, err := s.Locks.DeleteLocksPath(ctx, operations.DeleteLocksPathRequest{
        Path: "officiis",
        Token: "praesentium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## LockListForPath

List Locks by path

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
    res, err := s.Locks.LockListForPath(ctx, operations.LockListForPathRequest{
        Cursor: sdk.String("facilis"),
        IncludeChildren: sdk.Bool(false),
        Path: "quaerat",
        PerPage: sdk.Int(277773),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LockEntities != nil {
        // handle response
    }
}
```

## PostLocksPath

Create Lock

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
    res, err := s.Locks.PostLocksPath(ctx, operations.PostLocksPathRequest{
        RequestBody: &operations.PostLocksPathRequestBody{
            AllowAccessByAnyUser: sdk.Bool(false),
            Exclusive: sdk.Bool(false),
            Recursive: sdk.String("ipsam"),
            Timeout: sdk.Int(894864),
        },
        Path: "rem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LockEntity != nil {
        // handle response
    }
}
```
