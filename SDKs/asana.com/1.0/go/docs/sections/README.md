# Sections

## Overview

A section is a subdivision of a project that groups tasks together. It can either be a header above a list of tasks in a list view or a column in a board view of a project.

Sections are largely a shared idiom in Asana’s API for both list and board views of a project regardless of the project’s layout.

The ‘memberships’ property when [getting a task](/docs/get-a-task) will return the information for the section or the column under ‘section’ in the response.

### Available Operations

* [AddTaskForSection](#addtaskforsection) - Add task to section
* [CreateSectionForProject](#createsectionforproject) - Create a section in a project
* [DeleteSection](#deletesection) - Delete a section
* [GetSection](#getsection) - Get a section
* [GetSectionsForProject](#getsectionsforproject) - Get sections in a project
* [InsertSectionForProject](#insertsectionforproject) - Move or Insert sections
* [UpdateSection](#updatesection) - Update a section

## AddTaskForSection

Add a task to a specific, existing section. This will remove the task from other sections of the project.

The task will be inserted at the top of a section unless an insert_before or insert_after parameter is declared.

This does not work for separators (tasks with the resource_subtype of section).

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
    res, err := s.Sections.AddTaskForSection(ctx, operations.AddTaskForSectionRequest{
        RequestBody: operations.AddTaskForSectionRequestBody{
            Data: &shared.SectionTaskInsertRequest{
                InsertAfter: sdk.String("987654"),
                InsertBefore: sdk.String("86420"),
                Task: "123456",
            },
        },
        OptFields: []string{
            "vero",
        },
        OptPretty: sdk.Bool(false),
        SectionGid: "tenetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddTaskForSection200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateSectionForProject

Creates a new section in a project.
Returns the full record of the newly created section.

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
    res, err := s.Sections.CreateSectionForProject(ctx, operations.CreateSectionForProjectRequest{
        RequestBody: operations.CreateSectionForProjectRequestBody{
            Data: &shared.SectionRequest{
                InsertAfter: sdk.String("987654"),
                InsertBefore: sdk.String("86420"),
                Name: "Next Actions",
            },
        },
        OptFields: []string{
            "hic",
            "distinctio",
        },
        OptPretty: sdk.Bool(false),
        ProjectGid: "quod",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSectionForProject201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteSection

A specific, existing section can be deleted by making a DELETE request on
the URL for that section.

Note that sections must be empty to be deleted.

The last remaining section cannot be deleted.

Returns an empty data block.

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
    res, err := s.Sections.DeleteSection(ctx, operations.DeleteSectionRequest{
        OptFields: []string{
            "similique",
            "facilis",
        },
        OptPretty: sdk.Bool(false),
        SectionGid: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSection200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSection

Returns the complete record for a single section.

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
    res, err := s.Sections.GetSection(ctx, operations.GetSectionRequest{
        OptFields: []string{
            "dolore",
            "quibusdam",
        },
        OptPretty: sdk.Bool(false),
        SectionGid: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSection200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSectionsForProject

Returns the compact records for all sections in the specified project.

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
    res, err := s.Sections.GetSectionsForProject(ctx, operations.GetSectionsForProjectRequest{
        Limit: sdk.Int64(194342),
        Offset: sdk.String("natus"),
        OptFields: []string{
            "aut",
            "voluptatibus",
            "exercitationem",
            "nulla",
        },
        OptPretty: sdk.Bool(false),
        ProjectGid: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSectionsForProject200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## InsertSectionForProject

Move sections relative to each other. One of
`before_section` or `after_section` is required.

Sections cannot be moved between projects.

Returns an empty data block.

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
    res, err := s.Sections.InsertSectionForProject(ctx, operations.InsertSectionForProjectRequest{
        RequestBody: operations.InsertSectionForProjectRequestBody{
            Data: &shared.ProjectSectionInsertRequest{
                AfterSection: sdk.String("987654"),
                BeforeSection: sdk.String("86420"),
                Project: "123456",
                Section: "321654",
            },
        },
        OptFields: []string{
            "maiores",
            "doloribus",
            "iusto",
            "eligendi",
        },
        OptPretty: sdk.Bool(false),
        ProjectGid: "ducimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InsertSectionForProject200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateSection

A specific, existing section can be updated by making a PUT request on
the URL for that project. Only the fields provided in the `data` block
will be updated; any unspecified fields will remain unchanged. (note that
at this time, the only field that can be updated is the `name` field.)

When using this method, it is best to specify only those fields you wish
to change, or else you may overwrite changes made by another user since
you last retrieved the task.

Returns the complete updated section record.

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
    res, err := s.Sections.UpdateSection(ctx, operations.UpdateSectionRequest{
        RequestBody: operations.UpdateSectionRequestBody{
            Data: &shared.SectionRequest{
                InsertAfter: sdk.String("987654"),
                InsertBefore: sdk.String("86420"),
                Name: "Next Actions",
            },
        },
        OptFields: []string{
            "officia",
        },
        OptPretty: sdk.Bool(false),
        SectionGid: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSection200ApplicationJSONObject != nil {
        // handle response
    }
}
```
