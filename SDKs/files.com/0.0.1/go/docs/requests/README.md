# Requests

## Overview

Operations about requests

### Available Operations

* [DeleteRequestsID](#deleterequestsid) - Delete Request
* [GetRequests](#getrequests) - List Requests
* [GetRequestsFoldersPath](#getrequestsfolderspath) - List Requests
* [PostRequests](#postrequests) - Create Request

## DeleteRequestsID

Delete Request

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
    res, err := s.Requests.DeleteRequestsID(ctx, operations.DeleteRequestsIDRequest{
        ID: 96804,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetRequests

List Requests

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
    res, err := s.Requests.GetRequests(ctx, operations.GetRequestsRequest{
        Cursor: sdk.String("animi"),
        Mine: sdk.Bool(false),
        Path: sdk.String("nostrum"),
        PerPage: sdk.Int(652309),
        SortBy: map[string]interface{}{
            "possimus": "animi",
            "ex": "aliquid",
            "accusantium": "repellat",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RequestEntities != nil {
        // handle response
    }
}
```

## GetRequestsFoldersPath

List Requests

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
    res, err := s.Requests.GetRequestsFoldersPath(ctx, operations.GetRequestsFoldersPathRequest{
        Cursor: sdk.String("doloribus"),
        Mine: sdk.Bool(false),
        Path: "ullam",
        PerPage: sdk.Int(448143),
        SortBy: map[string]interface{}{
            "earum": "officia",
            "laborum": "placeat",
            "modi": "voluptatibus",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RequestEntities != nil {
        // handle response
    }
}
```

## PostRequests

Create Request

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
    res, err := s.Requests.PostRequests(ctx, operations.PostRequestsRequestBody{
        Destination: "molestias",
        GroupIds: sdk.String("officiis"),
        Path: "sapiente",
        UserIds: sdk.String("cumque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RequestEntity != nil {
        // handle response
    }
}
```
