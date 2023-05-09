# Tags

### Available Operations

* [CreateTagGroup](#createtaggroup) - Creates a tag group
* [GetTag](#gettag) - Get a specific tag
* [GetTagGroup](#gettaggroup) - Get a single tag group
* [ListTagGroups](#listtaggroups) - Get a list of tag groups
* [ListTags](#listtags) - Get a list of tags
* [UpdateTagGroup](#updatetaggroup) - Update tag group

## CreateTagGroup

Creates a tag group

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
    res, err := s.Tags.CreateTagGroup(ctx, operations.CreateTagGroupRequestBody{
        Name: "James Swaniawski",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTagGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetTag

Get a specific tag

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
    res, err := s.Tags.GetTag(ctx, operations.GetTagRequest{
        Name: "Bernadette Torp",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTag200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetTagGroup

Get a single tag group

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
    res, err := s.Tags.GetTagGroup(ctx, operations.GetTagGroupRequest{
        ID: "f7a73cf3-be45-43f8-b0b3-26b5a73429cd",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTagGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListTagGroups

Get a list of tag groups

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
    res, err := s.Tags.ListTagGroups(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagGroups200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListTags

Get a list of tags

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
    res, err := s.Tags.ListTags(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTags200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateTagGroup

Update tag group

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
    res, err := s.Tags.UpdateTagGroup(ctx, operations.UpdateTagGroupRequest{
        RequestBody: &operations.UpdateTagGroupRequestBody{
            Name: sdk.String("Keith Padberg"),
        },
        ID: "22bb679d-2322-4715-bf0c-bb1e31b8b90f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTagGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```
