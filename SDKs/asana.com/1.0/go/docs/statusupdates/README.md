# StatusUpdates

## Overview

A status update is an update on the progress of a particular object,
and is sent out to all followers when created. These updates
include both text describing the update and a `status_type` intended to
represent the overall state of the project. These include: `on_track` for projects that
are on track, `at_risk` for projects at risk, `off_track` for projects that
are behind, and `on_hold` for projects on hold.

Status updates can be created and deleted, but not modified.

### Available Operations

* [CreateStatusForObject](#createstatusforobject) - Create a status update
* [DeleteStatus](#deletestatus) - Delete a status update
* [GetStatus](#getstatus) - Get a status update
* [GetStatusesForObject](#getstatusesforobject) - Get status updates from an object

## CreateStatusForObject

Creates a new status update on an object.
Returns the full record of the newly created status update.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.StatusUpdates.CreateStatusForObject(ctx, operations.CreateStatusForObjectRequest{
        RequestBody: operations.CreateStatusForObjectRequestBodyInput{
            Data: &shared.StatusUpdateRequestInput{
                HTMLText: sdk.String("<body>The project <strong>is</strong> moving forward according to plan...</body>"),
                Parent: "ipsam",
                StatusType: shared.StatusUpdateRequestStatusTypeEnumOnHold,
                Text: "The project is moving forward according to plan...",
                Title: sdk.String("Status Update - Jun 15"),
            },
        },
        Limit: sdk.Int64(136900),
        Offset: sdk.String("vel"),
        OptFields: []string{
            "magnam",
            "ratione",
            "ex",
            "laudantium",
        },
        OptPretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateStatusForObject201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteStatus

Deletes a specific, existing status update.

Returns an empty data record.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.StatusUpdates.DeleteStatus(ctx, operations.DeleteStatusRequest{
        OptFields: []string{
            "dolor",
        },
        OptPretty: sdk.Bool(false),
        StatusGid: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteStatus200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetStatus

Returns the complete record for a single status update.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.StatusUpdates.GetStatus(ctx, operations.GetStatusRequest{
        OptFields: []string{
            "ex",
        },
        OptPretty: sdk.Bool(false),
        StatusGid: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetStatus200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetStatusesForObject

Returns the compact status update records for all updates on the object.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.StatusUpdates.GetStatusesForObject(ctx, operations.GetStatusesForObjectRequest{
        CreatedSince: types.MustTimeFromString("2021-01-20T18:27:01.887Z"),
        Limit: sdk.Int64(343605),
        Offset: sdk.String("sapiente"),
        OptFields: []string{
            "saepe",
            "ea",
            "impedit",
            "corporis",
        },
        OptPretty: sdk.Bool(false),
        Parent: "veniam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetStatusesForObject200ApplicationJSONObject != nil {
        // handle response
    }
}
```
