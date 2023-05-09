# Tags

## Overview

With these endpoints you can manage Tags. Tags are stored under a Product. You can  and add a Tag to a Feature Flag or Setting using the [Update Flag](#operation/update-setting) endpoint.

### Available Operations

* [CreateTag](#createtag) - Create Tag
* [DeleteTag](#deletetag) - Delete Tag
* [GetSettingsByTag](#getsettingsbytag) - List Settings by Tag
* [GetTag](#gettag) - Get Tag
* [GetTags](#gettags) - List Tags
* [UpdateTag](#updatetag) - Update Tag

## CreateTag

This endpoint creates a new Tag in a specified Product 
identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Tags.CreateTag(ctx, operations.CreateTagRequest{
        CreateTagModel: shared.CreateTagModel{
            Color: sdk.String("tempore"),
            Name: "Joel Von",
        },
        ProductID: "3cf789ff-afed-4a53-a5ae-6e0ac184c2b9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagModelHaljson != nil {
        // handle response
    }
}
```

## DeleteTag

This endpoint deletes a Tag identified by the `tagId` parameter. To remove a Tag from a Feature Flag or Setting use the [Update Flag](#operation/update-setting) endpoint.

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Tags.DeleteTag(ctx, operations.DeleteTagRequest{
        TagID: 793568,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSettingsByTag

This endpoint returns the list of the Settings that 
has the specified Tag, identified by the `tagId` parameter.

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Tags.GetSettingsByTag(ctx, operations.GetSettingsByTagRequest{
        TagID: 154389,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SettingModelHaljsons != nil {
        // handle response
    }
}
```

## GetTag

This endpoint returns the metadata of a Tag 
identified by the `tagId`.

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Tags.GetTag(ctx, operations.GetTagRequest{
        TagID: 300651,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagModelHaljson != nil {
        // handle response
    }
}
```

## GetTags

This endpoint returns the list of the Tags in a 
specified Product, identified by the `productId` parameter.

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Tags.GetTags(ctx, operations.GetTagsRequest{
        ProductID: "7c88373a-40e1-4942-b32e-55055756f5d5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagModelHaljsons != nil {
        // handle response
    }
}
```

## UpdateTag

This endpoint updates a Tag identified by the `tagId` parameter.

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Tags.UpdateTag(ctx, operations.UpdateTagRequest{
        UpdateTagModel: shared.UpdateTagModel{
            Color: sdk.String("suscipit"),
            Name: sdk.String("Paul Powlowski MD"),
        },
        TagID: 958146,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagModelHaljson != nil {
        // handle response
    }
}
```
