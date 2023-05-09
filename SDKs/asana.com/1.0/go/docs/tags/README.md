# Tags

## Overview

A tag is a label that can be attached to any task in Asana. It exists in a single workspace or organization.

Tags have some metadata associated with them, but it is possible that we will simplify them in the future so it is not encouraged to rely too heavily on it. Unlike projects, tags do not provide any ordering on the tasks they are associated with.

### Available Operations

* [CreateTag](#createtag) - Create a tag
* [CreateTagForWorkspace](#createtagforworkspace) - Create a tag in a workspace
* [DeleteTag](#deletetag) - Delete a tag
* [GetTag](#gettag) - Get a tag
* [GetTags](#gettags) - Get multiple tags
* [GetTagsForTask](#gettagsfortask) - Get a task's tags
* [GetTagsForWorkspace](#gettagsforworkspace) - Get tags in a workspace
* [UpdateTag](#updatetag) - Update a tag

## CreateTag

Creates a new tag in a workspace or organization.

Every tag is required to be created in a specific workspace or
organization, and this cannot be changed once set. Note that you can use
the workspace parameter regardless of whether or not it is an
organization.

Returns the full record of the newly created tag.

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
    res, err := s.Tags.CreateTag(ctx, operations.CreateTagRequest{
        RequestBody: operations.CreateTagRequestBodyInput{
            Data: &shared.TagRequestInput{
                Color: shared.TagRequestColorEnumLightGreen.ToPointer(),
                Followers: []string{
                    "velit",
                    "eum",
                    "autem",
                    "nobis",
                },
                Name: sdk.String("Stuff to buy"),
                Notes: sdk.String("Mittens really likes the stuff from Humboldt."),
                Workspace: sdk.String("12345"),
            },
        },
        OptFields: []string{
            "assumenda",
            "nulla",
            "voluptas",
        },
        OptPretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTag201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateTagForWorkspace

Creates a new tag in a workspace or organization.

Every tag is required to be created in a specific workspace or
organization, and this cannot be changed once set. Note that you can use
the workspace parameter regardless of whether or not it is an
organization.

Returns the full record of the newly created tag.

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
    res, err := s.Tags.CreateTagForWorkspace(ctx, operations.CreateTagForWorkspaceRequest{
        RequestBody: operations.CreateTagForWorkspaceRequestBodyInput{
            Data: &shared.TagResponseInput{
                Color: shared.TagResponseColorEnumLightGreen.ToPointer(),
                Name: sdk.String("Stuff to buy"),
                Notes: sdk.String("Mittens really likes the stuff from Humboldt."),
                Workspace: &shared.WorkspaceCompactInput{
                    Name: sdk.String("My Company Workspace"),
                },
            },
        },
        OptFields: []string{
            "quasi",
            "tempora",
            "numquam",
        },
        OptPretty: sdk.Bool(false),
        WorkspaceGid: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTagForWorkspace201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteTag

A specific, existing tag can be deleted by making a DELETE request on
the URL for that tag.

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
    res, err := s.Tags.DeleteTag(ctx, operations.DeleteTagRequest{
        Limit: sdk.Int64(591935),
        Offset: sdk.String("ipsa"),
        OptFields: []string{
            "magnam",
            "odio",
        },
        OptPretty: sdk.Bool(false),
        TagGid: "eius",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTag200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetTag

Returns the complete tag record for a single tag.

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
    res, err := s.Tags.GetTag(ctx, operations.GetTagRequest{
        Limit: sdk.Int64(458515),
        Offset: sdk.String("esse"),
        OptFields: []string{
            "fuga",
            "reprehenderit",
            "quidem",
        },
        OptPretty: sdk.Bool(false),
        TagGid: "fugiat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTag200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetTags

Returns the compact tag records for some filtered set of tags. Use one or more of the parameters provided to filter the tags returned.

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
    res, err := s.Tags.GetTags(ctx, operations.GetTagsRequest{
        Limit: sdk.Int64(283519),
        Offset: sdk.String("eum"),
        OptFields: []string{
            "assumenda",
            "eos",
        },
        OptPretty: sdk.Bool(false),
        Workspace: sdk.String("praesentium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTags200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetTagsForTask

Get a compact representation of all of the tags the task has.

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
    res, err := s.Tags.GetTagsForTask(ctx, operations.GetTagsForTaskRequest{
        Limit: sdk.Int64(788546),
        Offset: sdk.String("veritatis"),
        OptFields: []string{
            "id",
        },
        OptPretty: sdk.Bool(false),
        TaskGid: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTagsForTask200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetTagsForWorkspace

Returns the compact tag records for some filtered set of tags. Use one or more of the parameters provided to filter the tags returned.

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
    res, err := s.Tags.GetTagsForWorkspace(ctx, operations.GetTagsForWorkspaceRequest{
        Limit: sdk.Int64(206594),
        Offset: sdk.String("quo"),
        OptFields: []string{
            "quo",
            "fuga",
            "eius",
            "eos",
        },
        OptPretty: sdk.Bool(false),
        WorkspaceGid: "voluptas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTagsForWorkspace200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateTag

Updates the properties of a tag. Only the fields provided in the `data`
block will be updated; any unspecified fields will remain unchanged.

When using this method, it is best to specify only those fields you wish
to change, or else you may overwrite changes made by another user since
you last retrieved the tag.

Returns the complete updated tag record.

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
    res, err := s.Tags.UpdateTag(ctx, operations.UpdateTagRequest{
        Limit: sdk.Int64(69859),
        Offset: sdk.String("cupiditate"),
        OptFields: []string{
            "tempora",
        },
        OptPretty: sdk.Bool(false),
        TagGid: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTag200ApplicationJSONObject != nil {
        // handle response
    }
}
```
