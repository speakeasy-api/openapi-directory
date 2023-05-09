# HistoryExports

## Overview

Operations about history_exports

### Available Operations

* [GetHistoryExportsID](#gethistoryexportsid) - Show History Export
* [PostHistoryExports](#posthistoryexports) - Create History Export

## GetHistoryExportsID

Show History Export

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
    res, err := s.HistoryExports.GetHistoryExportsID(ctx, operations.GetHistoryExportsIDRequest{
        ID: 885963,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HistoryExportEntity != nil {
        // handle response
    }
}
```

## PostHistoryExports

Create History Export

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
    res, err := s.HistoryExports.PostHistoryExports(ctx, operations.PostHistoryExportsRequestBody{
        EndAt: types.MustTimeFromString("2000-01-01T01:00:00Z"),
        QueryAction: sdk.String("read"),
        QueryDestination: sdk.String("DestFolder"),
        QueryFailureType: sdk.String("bad_password"),
        QueryFileID: sdk.String("1"),
        QueryFolder: sdk.String("Folder"),
        QueryInterface: sdk.String("ftp"),
        QueryIP: sdk.String("127.0.0.1"),
        QueryParentID: sdk.String("1"),
        QueryPath: sdk.String("MyFile.txt"),
        QuerySrc: sdk.String("SrcFolder"),
        QueryTargetID: sdk.String("1"),
        QueryTargetName: sdk.String("full"),
        QueryTargetPermission: sdk.String("full"),
        QueryTargetPermissionSet: sdk.String("desktop_app"),
        QueryTargetPlatform: sdk.String("windows"),
        QueryTargetUserID: sdk.String("1"),
        QueryTargetUsername: sdk.String("jerry"),
        QueryUserID: sdk.String("1"),
        QueryUsername: sdk.String("jerry"),
        StartAt: types.MustTimeFromString("2000-01-01T01:00:00Z"),
        UserID: sdk.Int(839189),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HistoryExportEntity != nil {
        // handle response
    }
}
```
