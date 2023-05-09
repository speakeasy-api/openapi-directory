# Drives

## Overview

Drives resource represents logical containers for storing folders and files in the cloud storage service. It provides methods for managing and accessing the drives, such as creating, deleting, and listing drives.

### Available Operations

* [DrivesAdd](#drivesadd) - Create Drive
* [DrivesAll](#drivesall) - List Drives
* [DrivesDelete](#drivesdelete) - Delete Drive
* [DrivesOne](#drivesone) - Get Drive
* [DrivesUpdate](#drivesupdate) - Update Drive

## DrivesAdd

Create Drive

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
    res, err := s.Drives.DrivesAdd(ctx, operations.DrivesAddRequest{
        DriveInput: shared.DriveInput{
            Description: sdk.String("A description"),
            Name: "Project Resources",
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "commodi",
        XApideckConsumerID: "quam",
        XApideckServiceID: sdk.String("molestiae"),
    }, operations.DrivesAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDriveResponse != nil {
        // handle response
    }
}
```

## DrivesAll

List Drives

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
    res, err := s.Drives.DrivesAll(ctx, operations.DrivesAllRequest{
        Cursor: sdk.String("velit"),
        Fields: sdk.String("error"),
        Filter: &shared.DrivesFilter{
            GroupID: sdk.String("1234"),
        },
        Limit: sdk.Int64(158969),
        Raw: sdk.Bool(false),
        XApideckAppID: "quis",
        XApideckConsumerID: "vitae",
        XApideckServiceID: sdk.String("laborum"),
    }, operations.DrivesAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDrivesResponse != nil {
        // handle response
    }
}
```

## DrivesDelete

Delete Drive

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
    res, err := s.Drives.DrivesDelete(ctx, operations.DrivesDeleteRequest{
        ID: "a52c3f5a-d019-4da1-bfe7-8f097b0074f1",
        Raw: sdk.Bool(false),
        XApideckAppID: "corporis",
        XApideckConsumerID: "dolore",
        XApideckServiceID: sdk.String("iusto"),
    }, operations.DrivesDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDriveResponse != nil {
        // handle response
    }
}
```

## DrivesOne

Get Drive

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
    res, err := s.Drives.DrivesOne(ctx, operations.DrivesOneRequest{
        Fields: sdk.String("dicta"),
        ID: "b5e6e13b-99d4-488e-9e91-e450ad2abd44",
        Raw: sdk.Bool(false),
        XApideckAppID: "qui",
        XApideckConsumerID: "aliquid",
        XApideckServiceID: sdk.String("cupiditate"),
    }, operations.DrivesOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDriveResponse != nil {
        // handle response
    }
}
```

## DrivesUpdate

Update Drive

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
    res, err := s.Drives.DrivesUpdate(ctx, operations.DrivesUpdateRequest{
        DriveInput: shared.DriveInput{
            Description: sdk.String("A description"),
            Name: "Project Resources",
        },
        ID: "802d502a-94bb-44f6-bc96-9e9a3efa77df",
        Raw: sdk.Bool(false),
        XApideckAppID: "rerum",
        XApideckConsumerID: "dicta",
        XApideckServiceID: sdk.String("magnam"),
    }, operations.DrivesUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDriveResponse != nil {
        // handle response
    }
}
```
