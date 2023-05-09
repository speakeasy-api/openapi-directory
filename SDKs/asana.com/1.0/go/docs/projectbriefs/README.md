# ProjectBriefs

## Overview

A project brief object represents a rich text document that describes a project.

Please note that this API is in *preview*, and is expected to change. This API is to be used for development and testing only as an advance view into the upcoming rich text format experience in the task description. For more information, see [this post](https://forum.asana.com/t/project-brief-api-now-available-as-a-preview/150885) in the developer forum.

### Available Operations

* [CreateProjectBrief](#createprojectbrief) - Create a project brief
* [DeleteProjectBrief](#deleteprojectbrief) - Delete a project brief
* [GetProjectBrief](#getprojectbrief) - Get a project brief
* [UpdateProjectBrief](#updateprojectbrief) - Update a project brief

## CreateProjectBrief

Creates a new project brief.

Returns the full record of the newly created project brief.

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
    res, err := s.ProjectBriefs.CreateProjectBrief(ctx, operations.CreateProjectBriefRequest{
        RequestBody: operations.CreateProjectBriefRequestBodyInput{
            Data: &shared.ProjectBriefRequestInput{
                HTMLText: sdk.String("<body>This is a <strong>project brief</strong>.</body>"),
                Text: sdk.String("This is a project brief."),
                Title: sdk.String("Stuff to buy — Project Brief"),
            },
        },
        OptFields: []string{
            "omnis",
            "facilis",
            "perspiciatis",
            "voluptatem",
        },
        OptPretty: sdk.Bool(false),
        ProjectGid: "porro",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateProjectBrief201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteProjectBrief

Deletes a specific, existing project brief.

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
    res, err := s.ProjectBriefs.DeleteProjectBrief(ctx, operations.DeleteProjectBriefRequest{
        OptFields: []string{
            "blanditiis",
        },
        OptPretty: sdk.Bool(false),
        ProjectBriefGid: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProjectBrief200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetProjectBrief

Get the full record for a project brief.

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
    res, err := s.ProjectBriefs.GetProjectBrief(ctx, operations.GetProjectBriefRequest{
        OptFields: []string{
            "occaecati",
        },
        OptPretty: sdk.Bool(false),
        ProjectBriefGid: "rerum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProjectBrief200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateProjectBrief

An existing project brief can be updated by making a PUT request on the URL for
that project brief. Only the fields provided in the `data` block will be updated;
any unspecified fields will remain unchanged.

Returns the complete updated project brief record.

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
    res, err := s.ProjectBriefs.UpdateProjectBrief(ctx, operations.UpdateProjectBriefRequest{
        RequestBody: operations.UpdateProjectBriefRequestBodyInput{
            Data: &shared.ProjectBriefRequestInput{
                HTMLText: sdk.String("<body>This is a <strong>project brief</strong>.</body>"),
                Text: sdk.String("This is a project brief."),
                Title: sdk.String("Stuff to buy — Project Brief"),
            },
        },
        OptFields: []string{
            "asperiores",
        },
        OptPretty: sdk.Bool(false),
        ProjectBriefGid: "earum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateProjectBrief200ApplicationJSONObject != nil {
        // handle response
    }
}
```
