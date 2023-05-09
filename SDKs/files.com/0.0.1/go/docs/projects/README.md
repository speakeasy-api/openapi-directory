# Projects

## Overview

Operations about projects

### Available Operations

* [DeleteProjectsID](#deleteprojectsid) - Delete Project
* [GetProjects](#getprojects) - List Projects
* [GetProjectsID](#getprojectsid) - Show Project
* [PatchProjectsID](#patchprojectsid) - Update Project
* [PostProjects](#postprojects) - Create Project

## DeleteProjectsID

Delete Project

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
    res, err := s.Projects.DeleteProjectsID(ctx, operations.DeleteProjectsIDRequest{
        ID: 829898,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetProjects

List Projects

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
    res, err := s.Projects.GetProjects(ctx, operations.GetProjectsRequest{
        Cursor: sdk.String("labore"),
        PerPage: sdk.Int(968287),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectEntities != nil {
        // handle response
    }
}
```

## GetProjectsID

Show Project

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
    res, err := s.Projects.GetProjectsID(ctx, operations.GetProjectsIDRequest{
        ID: 42976,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectEntity != nil {
        // handle response
    }
}
```

## PatchProjectsID

Update Project

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
    res, err := s.Projects.PatchProjectsID(ctx, operations.PatchProjectsIDRequest{
        RequestBody: operations.PatchProjectsIDRequestBody{
            GlobalAccess: "repudiandae",
        },
        ID: 116098,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectEntity != nil {
        // handle response
    }
}
```

## PostProjects

Create Project

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
    res, err := s.Projects.PostProjects(ctx, operations.PostProjectsRequestBody{
        GlobalAccess: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectEntity != nil {
        // handle response
    }
}
```
