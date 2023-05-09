# Groups

## Overview

Registry artifacts can be collected together using groups. This section includes all of the primary operations related to groups.

### Available Operations

* [CreateGroup](#creategroup) - Create a new group
* [DeleteGroupByID](#deletegroupbyid) - Delete a group by the specified ID.
* [GetGroupByID](#getgroupbyid) - Get a group by the specified ID.
* [ListGroups](#listgroups) - List groups

## CreateGroup

Creates a new group.

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)
* The group already exist (HTTP error `409`)


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Groups.CreateGroup(ctx, shared.CreateGroupMetaData{
        Description: sdk.String("quia"),
        ID: "51aa52c3-f5ad-4019-9a1f-fe78f097b007",
        Properties: map[string]string{
            "maiores": "dicta",
            "corporis": "dolore",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupMetaData != nil {
        // handle response
    }
}
```

## DeleteGroupByID

Deletes a group by identifier.

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)
* The group does not exist (HTTP error `404`)


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
    res, err := s.Groups.DeleteGroupByID(ctx, operations.DeleteGroupByIDRequest{
        GroupID: ""my-group"",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetGroupByID

Returns a group using the specified id.

This operation can fail for the following reasons:

* No group exists with the specified ID (HTTP error `404`)
* A server error occurred (HTTP error `500`)

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
    res, err := s.Groups.GetGroupByID(ctx, operations.GetGroupByIDRequest{
        GroupID: ""my-group"",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupMetaData != nil {
        // handle response
    }
}
```

## ListGroups

Returns a list of all groups.  This list is paged.

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
    res, err := s.Groups.ListGroups(ctx, operations.ListGroupsRequest{
        Limit: sdk.Int64(480894),
        Offset: sdk.Int64(118727),
        Order: shared.SortOrderEnumDesc.ToPointer(),
        Orderby: shared.SortByEnumName.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupSearchResults != nil {
        // handle response
    }
}
```
