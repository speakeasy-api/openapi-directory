# DriveGroups

## Overview

Drive Groups resource represents the groups of drives in the cloud storage service. It provides methods for managing and accessing the drive groups, such as creating, deleting, and listing drive groups. A drive group is a logical grouping of drives, which can be used to manage the drives in the cloud storage service.

### Available Operations

* [DriveGroupsAdd](#drivegroupsadd) - Create DriveGroup
* [DriveGroupsAll](#drivegroupsall) - List DriveGroups
* [DriveGroupsDelete](#drivegroupsdelete) - Delete DriveGroup
* [DriveGroupsOne](#drivegroupsone) - Get DriveGroup
* [DriveGroupsUpdate](#drivegroupsupdate) - Update DriveGroup

## DriveGroupsAdd

Create DriveGroup

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DriveGroups.DriveGroupsAdd(ctx, operations.DriveGroupsAddRequest{
        DriveGroupInput: shared.DriveGroupInput{
            Description: sdk.String("A description"),
            DisplayName: sdk.String("accounting"),
            Name: "accounting",
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "quibusdam",
        XApideckConsumerID: "unde",
        XApideckServiceID: sdk.String("nulla"),
    }, operations.DriveGroupsAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDriveGroupResponse != nil {
        // handle response
    }
}
```

## DriveGroupsAll

List DriveGroups

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DriveGroups.DriveGroupsAll(ctx, operations.DriveGroupsAllRequest{
        Cursor: sdk.String("corrupti"),
        Fields: sdk.String("illum"),
        Filter: &shared.DriveGroupsFilter{
            ParentGroupID: sdk.String("1234"),
        },
        Limit: sdk.Int64(423655),
        Raw: sdk.Bool(false),
        XApideckAppID: "error",
        XApideckConsumerID: "deserunt",
        XApideckServiceID: sdk.String("suscipit"),
    }, operations.DriveGroupsAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDriveGroupsResponse != nil {
        // handle response
    }
}
```

## DriveGroupsDelete

Delete DriveGroup

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
    res, err := s.DriveGroups.DriveGroupsDelete(ctx, operations.DriveGroupsDeleteRequest{
        ID: "74e0f467-cc87-496e-9151-a05dfc2ddf7c",
        Raw: sdk.Bool(false),
        XApideckAppID: "quod",
        XApideckConsumerID: "esse",
        XApideckServiceID: sdk.String("totam"),
    }, operations.DriveGroupsDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDriveGroupResponse != nil {
        // handle response
    }
}
```

## DriveGroupsOne

Get DriveGroup

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
    res, err := s.DriveGroups.DriveGroupsOne(ctx, operations.DriveGroupsOneRequest{
        Fields: sdk.String("porro"),
        ID: "a1ba928f-c816-4742-8b73-9205929396fe",
        Raw: sdk.Bool(false),
        XApideckAppID: "fuga",
        XApideckConsumerID: "in",
        XApideckServiceID: sdk.String("corporis"),
    }, operations.DriveGroupsOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDriveGroupResponse != nil {
        // handle response
    }
}
```

## DriveGroupsUpdate

Update DriveGroup

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DriveGroups.DriveGroupsUpdate(ctx, operations.DriveGroupsUpdateRequest{
        DriveGroupInput: shared.DriveGroupInput{
            Description: sdk.String("A description"),
            DisplayName: sdk.String("accounting"),
            Name: "accounting",
        },
        ID: "96eb10fa-aa23-452c-9955-907aff1a3a2f",
        Raw: sdk.Bool(false),
        XApideckAppID: "mollitia",
        XApideckConsumerID: "occaecati",
        XApideckServiceID: sdk.String("numquam"),
    }, operations.DriveGroupsUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDriveGroupResponse != nil {
        // handle response
    }
}
```
