# Permissions

## Overview

Operations about permissions

### Available Operations

* [DeletePermissionsID](#deletepermissionsid) - Delete Permission
* [GetPermissions](#getpermissions) - List Permissions
* [PostPermissions](#postpermissions) - Create Permission

## DeletePermissionsID

Delete Permission

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
    res, err := s.Permissions.DeletePermissionsID(ctx, operations.DeletePermissionsIDRequest{
        ID: 919532,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPermissions

List Permissions

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
    res, err := s.Permissions.GetPermissions(ctx, operations.GetPermissionsRequest{
        Cursor: sdk.String("quasi"),
        Filter: map[string]interface{}{
            "reprehenderit": "asperiores",
            "totam": "suscipit",
            "quidem": "maxime",
        },
        FilterPrefix: map[string]interface{}{
            "esse": "amet",
        },
        GroupID: sdk.String("assumenda"),
        IncludeGroups: sdk.Bool(false),
        Path: sdk.String("ea"),
        PerPage: sdk.Int(539118),
        SortBy: map[string]interface{}{
            "officiis": "officiis",
            "accusamus": "natus",
            "minima": "aspernatur",
        },
        UserID: sdk.String("ex"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PermissionEntities != nil {
        // handle response
    }
}
```

## PostPermissions

Create Permission

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
    res, err := s.Permissions.PostPermissions(ctx, operations.PostPermissionsRequestBody{
        GroupID: sdk.Int(980581),
        Path: sdk.String("corrupti"),
        Permission: sdk.String("at"),
        Recursive: sdk.Bool(false),
        UserID: sdk.Int(621693),
        Username: sdk.String("Jo_Hoeger54"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PermissionEntity != nil {
        // handle response
    }
}
```
