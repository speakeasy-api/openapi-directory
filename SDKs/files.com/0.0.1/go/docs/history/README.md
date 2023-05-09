# History

## Overview

Operations about histories

### Available Operations

* [HistoryList](#historylist) - List site full action history.
* [HistoryListForFile](#historylistforfile) - List history for specific file.
* [HistoryListForFolder](#historylistforfolder) - List history for specific folder.
* [HistoryListForUser](#historylistforuser) - List history for specific user.
* [HistoryListLogins](#historylistlogins) - List site login history.

## HistoryList

List site full action history.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.History.HistoryList(ctx, operations.HistoryListRequest{
        Cursor: sdk.String("porro"),
        Display: sdk.String("quod"),
        EndAt: types.MustTimeFromString("2022-12-06T06:52:56.510Z"),
        Filter: map[string]interface{}{
            "fuga": "id",
        },
        FilterPrefix: map[string]interface{}{
            "velit": "culpa",
            "est": "recusandae",
        },
        PerPage: sdk.Int(517309),
        SortBy: map[string]interface{}{
            "vel": "ducimus",
            "quos": "vel",
            "labore": "possimus",
            "facilis": "cum",
        },
        StartAt: types.MustTimeFromString("2022-07-21T19:01:11.341Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionEntities != nil {
        // handle response
    }
}
```

## HistoryListForFile

List history for specific file.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.History.HistoryListForFile(ctx, operations.HistoryListForFileRequest{
        Cursor: sdk.String("corporis"),
        Display: sdk.String("reiciendis"),
        EndAt: types.MustTimeFromString("2021-11-29T08:07:19.623Z"),
        Path: "recusandae",
        PerPage: sdk.Int(397533),
        SortBy: map[string]interface{}{
            "cum": "consectetur",
        },
        StartAt: types.MustTimeFromString("2022-08-26T18:58:12.703Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionEntities != nil {
        // handle response
    }
}
```

## HistoryListForFolder

List history for specific folder.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.History.HistoryListForFolder(ctx, operations.HistoryListForFolderRequest{
        Cursor: sdk.String("earum"),
        Display: sdk.String("facere"),
        EndAt: types.MustTimeFromString("2022-01-06T07:05:42.236Z"),
        Path: "suscipit",
        PerPage: sdk.Int(968972),
        SortBy: map[string]interface{}{
            "saepe": "necessitatibus",
            "dolore": "sunt",
            "asperiores": "adipisci",
        },
        StartAt: types.MustTimeFromString("2022-10-09T16:24:37.905Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionEntities != nil {
        // handle response
    }
}
```

## HistoryListForUser

List history for specific user.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.History.HistoryListForUser(ctx, operations.HistoryListForUserRequest{
        Cursor: sdk.String("beatae"),
        Display: sdk.String("dignissimos"),
        EndAt: types.MustTimeFromString("2020-04-29T18:47:01.945Z"),
        PerPage: sdk.Int(233420),
        SortBy: map[string]interface{}{
            "harum": "laboriosam",
            "ipsa": "voluptates",
        },
        StartAt: types.MustTimeFromString("2022-10-09T21:55:56.048Z"),
        UserID: 881721,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionEntities != nil {
        // handle response
    }
}
```

## HistoryListLogins

List site login history.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.History.HistoryListLogins(ctx, operations.HistoryListLoginsRequest{
        Cursor: sdk.String("similique"),
        Display: sdk.String("tempora"),
        EndAt: types.MustTimeFromString("2022-08-15T15:27:41.112Z"),
        PerPage: sdk.Int(374244),
        SortBy: map[string]interface{}{
            "minima": "nobis",
            "dolorum": "adipisci",
        },
        StartAt: types.MustTimeFromString("2022-06-26T19:42:01.136Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionEntities != nil {
        // handle response
    }
}
```
