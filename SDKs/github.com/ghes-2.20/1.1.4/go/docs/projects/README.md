# Projects

## Overview

Interact with GitHub Projects.

### Available Operations

* [ProjectsAddCollaborator](#projectsaddcollaborator) - Add project collaborator
* [ProjectsCreateCard](#projectscreatecard) - Create a project card
* [ProjectsCreateColumn](#projectscreatecolumn) - Create a project column
* [ProjectsCreateForAuthenticatedUser](#projectscreateforauthenticateduser) - Create a user project
* [ProjectsCreateForOrg](#projectscreatefororg) - Create an organization project
* [ProjectsCreateForRepo](#projectscreateforrepo) - Create a repository project
* [ProjectsDelete](#projectsdelete) - Delete a project
* [ProjectsDeleteCard](#projectsdeletecard) - Delete a project card
* [ProjectsDeleteColumn](#projectsdeletecolumn) - Delete a project column
* [ProjectsGet](#projectsget) - Get a project
* [ProjectsGetCard](#projectsgetcard) - Get a project card
* [ProjectsGetColumn](#projectsgetcolumn) - Get a project column
* [ProjectsGetPermissionForUser](#projectsgetpermissionforuser) - Get project permission for a user
* [ProjectsListCards](#projectslistcards) - List project cards
* [ProjectsListCollaborators](#projectslistcollaborators) - List project collaborators
* [ProjectsListColumns](#projectslistcolumns) - List project columns
* [ProjectsListForOrg](#projectslistfororg) - List organization projects
* [ProjectsListForRepo](#projectslistforrepo) - List repository projects
* [ProjectsListForUser](#projectslistforuser) - List user projects
* [ProjectsMoveCard](#projectsmovecard) - Move a project card
* [ProjectsMoveColumn](#projectsmovecolumn) - Move a project column
* [ProjectsRemoveCollaborator](#projectsremovecollaborator) - Remove user as a collaborator
* [ProjectsUpdate](#projectsupdate) - Update a project
* [ProjectsUpdateCard](#projectsupdatecard) - Update an existing project card
* [ProjectsUpdateColumn](#projectsupdatecolumn) - Update an existing project column

## ProjectsAddCollaborator

Adds a collaborator to an organization project and sets their permission level. You must be an organization owner or a project `admin` to add a collaborator.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/projects#add-project-collaborator>

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
    res, err := s.Projects.ProjectsAddCollaborator(ctx, operations.ProjectsAddCollaboratorRequest{
        RequestBody: &operations.ProjectsAddCollaboratorRequestBody{
            Permission: operations.ProjectsAddCollaboratorRequestBodyPermissionEnumWrite.ToPointer(),
        },
        ProjectID: 906172,
        Username: "Lily96",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ProjectsCreateCard

Create a project card

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/projects#create-a-project-card>

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
    res, err := s.Projects.ProjectsCreateCard(ctx, operations.ProjectsCreateCardRequest{
        RequestBody: operations.ProjectsCreateCardRequestBody{},
        ColumnID: 209750,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectCard != nil {
        // handle response
    }
}
```

## ProjectsCreateColumn

Create a project column

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/projects#create-a-project-column>

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
    res, err := s.Projects.ProjectsCreateColumn(ctx, operations.ProjectsCreateColumnRequest{
        RequestBody: operations.ProjectsCreateColumnRequestBody{
            Name: "Remaining tasks",
        },
        ProjectID: 690894,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectColumn != nil {
        // handle response
    }
}
```

## ProjectsCreateForAuthenticatedUser

Create a user project

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/projects#create-a-user-project>

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
    res, err := s.Projects.ProjectsCreateForAuthenticatedUser(ctx, operations.ProjectsCreateForAuthenticatedUserRequestBody{
        Body: sdk.String("This project represents the sprint of the first week in January"),
        Name: "Week One Sprint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Project != nil {
        // handle response
    }
}
```

## ProjectsCreateForOrg

Creates an organization project board. Returns a `404 Not Found` status if projects are disabled in the organization. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/projects#create-an-organization-project>

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
    res, err := s.Projects.ProjectsCreateForOrg(ctx, operations.ProjectsCreateForOrgRequest{
        RequestBody: operations.ProjectsCreateForOrgRequestBody{
            Body: sdk.String("dicta"),
            Name: "Violet Greenfelder",
        },
        Org: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Project != nil {
        // handle response
    }
}
```

## ProjectsCreateForRepo

Creates a repository project board. Returns a `404 Not Found` status if projects are disabled in the repository. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/projects#create-a-repository-project>

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
    res, err := s.Projects.ProjectsCreateForRepo(ctx, operations.ProjectsCreateForRepoRequest{
        RequestBody: operations.ProjectsCreateForRepoRequestBody{
            Body: sdk.String("nam"),
            Name: "Brent Abernathy",
        },
        Owner: "voluptate",
        Repo: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Project != nil {
        // handle response
    }
}
```

## ProjectsDelete

Deletes a project board. Returns a `404 Not Found` status if projects are disabled.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/projects#delete-a-project>

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
    res, err := s.Projects.ProjectsDelete(ctx, operations.ProjectsDeleteRequest{
        ProjectID: 972083,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ProjectsDeleteCard

Delete a project card

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/projects#delete-a-project-card>

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
    res, err := s.Projects.ProjectsDeleteCard(ctx, operations.ProjectsDeleteCardRequest{
        CardID: 588740,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ProjectsDeleteColumn

Delete a project column

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/projects#delete-a-project-column>

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
    res, err := s.Projects.ProjectsDeleteColumn(ctx, operations.ProjectsDeleteColumnRequest{
        ColumnID: 833819,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ProjectsGet

Gets a project by its `id`. Returns a `404 Not Found` status if projects are disabled. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/projects#get-a-project>

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
    res, err := s.Projects.ProjectsGet(ctx, operations.ProjectsGetRequest{
        ProjectID: 962771,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Project != nil {
        // handle response
    }
}
```

## ProjectsGetCard

Get a project card

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/projects#get-a-project-card>

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
    res, err := s.Projects.ProjectsGetCard(ctx, operations.ProjectsGetCardRequest{
        CardID: 914791,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectCard != nil {
        // handle response
    }
}
```

## ProjectsGetColumn

Get a project column

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/projects#get-a-project-column>

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
    res, err := s.Projects.ProjectsGetColumn(ctx, operations.ProjectsGetColumnRequest{
        ColumnID: 16871,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectColumn != nil {
        // handle response
    }
}
```

## ProjectsGetPermissionForUser

Returns the collaborator's permission level for an organization project. Possible values for the `permission` key: `admin`, `write`, `read`, `none`. You must be an organization owner or a project `admin` to review a user's permission level.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/projects#get-project-permission-for-a-user>

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
    res, err := s.Projects.ProjectsGetPermissionForUser(ctx, operations.ProjectsGetPermissionForUserRequest{
        ProjectID: 667285,
        Username: "Maurine_Kiehn50",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepositoryCollaboratorPermission != nil {
        // handle response
    }
}
```

## ProjectsListCards

List project cards

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/projects#list-project-cards>

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
    res, err := s.Projects.ProjectsListCards(ctx, operations.ProjectsListCardsRequest{
        ArchivedState: operations.ProjectsListCardsArchivedStateEnumArchived.ToPointer(),
        ColumnID: 333965,
        Page: sdk.Int64(29100),
        PerPage: sdk.Int64(790840),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectCards != nil {
        // handle response
    }
}
```

## ProjectsListCollaborators

Lists the collaborators for an organization project. For a project, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners. You must be an organization owner or a project `admin` to list collaborators.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/projects#list-project-collaborators>

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
    res, err := s.Projects.ProjectsListCollaborators(ctx, operations.ProjectsListCollaboratorsRequest{
        Affiliation: operations.ProjectsListCollaboratorsAffiliationEnumAll.ToPointer(),
        Page: sdk.Int64(97243),
        PerPage: sdk.Int64(542457),
        ProjectID: 442036,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## ProjectsListColumns

List project columns

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/projects#list-project-columns>

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
    res, err := s.Projects.ProjectsListColumns(ctx, operations.ProjectsListColumnsRequest{
        Page: sdk.Int64(991142),
        PerPage: sdk.Int64(519952),
        ProjectID: 383103,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectColumns != nil {
        // handle response
    }
}
```

## ProjectsListForOrg

Lists the projects in an organization. Returns a `404 Not Found` status if projects are disabled in the organization. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/projects#list-organization-projects>

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
    res, err := s.Projects.ProjectsListForOrg(ctx, operations.ProjectsListForOrgRequest{
        Org: "quidem",
        Page: sdk.Int64(806670),
        PerPage: sdk.Int64(90885),
        State: operations.ProjectsListForOrgStateEnumClosed.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Projects != nil {
        // handle response
    }
}
```

## ProjectsListForRepo

Lists the projects in a repository. Returns a `404 Not Found` status if projects are disabled in the repository. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/projects#list-repository-projects>

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
    res, err := s.Projects.ProjectsListForRepo(ctx, operations.ProjectsListForRepoRequest{
        Owner: "amet",
        Page: sdk.Int64(826825),
        PerPage: sdk.Int64(410301),
        Repo: "atque",
        State: operations.ProjectsListForRepoStateEnumClosed.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Projects != nil {
        // handle response
    }
}
```

## ProjectsListForUser

List user projects

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/projects#list-user-projects>

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
    res, err := s.Projects.ProjectsListForUser(ctx, operations.ProjectsListForUserRequest{
        Page: sdk.Int64(887265),
        PerPage: sdk.Int64(886961),
        State: operations.ProjectsListForUserStateEnumAll.ToPointer(),
        Username: "Libby40",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Projects != nil {
        // handle response
    }
}
```

## ProjectsMoveCard

Move a project card

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/projects#move-a-project-card>

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
    res, err := s.Projects.ProjectsMoveCard(ctx, operations.ProjectsMoveCardRequest{
        RequestBody: operations.ProjectsMoveCardRequestBody{
            ColumnID: sdk.Int64(42),
            Position: "bottom",
        },
        CardID: 980581,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectsMoveCard201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProjectsMoveColumn

Move a project column

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/projects#move-a-project-column>

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
    res, err := s.Projects.ProjectsMoveColumn(ctx, operations.ProjectsMoveColumnRequest{
        RequestBody: operations.ProjectsMoveColumnRequestBody{
            Position: "last",
        },
        ColumnID: 544647,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectsMoveColumn201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProjectsRemoveCollaborator

Removes a collaborator from an organization project. You must be an organization owner or a project `admin` to remove a collaborator.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/projects#remove-project-collaborator>

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
    res, err := s.Projects.ProjectsRemoveCollaborator(ctx, operations.ProjectsRemoveCollaboratorRequest{
        ProjectID: 871786,
        Username: "Lilly_Kuvalis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ProjectsUpdate

Updates a project board's information. Returns a `404 Not Found` status if projects are disabled. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/projects#update-a-project>

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
    res, err := s.Projects.ProjectsUpdate(ctx, operations.ProjectsUpdateRequest{
        RequestBody: &operations.ProjectsUpdateRequestBody{
            Body: sdk.String("This project represents the sprint of the first week in January"),
            Name: sdk.String("Week One Sprint"),
            OrganizationPermission: operations.ProjectsUpdateRequestBodyOrganizationPermissionEnumAdmin.ToPointer(),
            Private: sdk.Bool(false),
            State: sdk.String("open"),
        },
        ProjectID: 541381,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Project != nil {
        // handle response
    }
}
```

## ProjectsUpdateCard

Update an existing project card

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/projects#update-a-project-card>

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
    res, err := s.Projects.ProjectsUpdateCard(ctx, operations.ProjectsUpdateCardRequest{
        RequestBody: &operations.ProjectsUpdateCardRequestBody{
            Archived: sdk.Bool(false),
            Note: sdk.String("Update all gems"),
        },
        CardID: 120919,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectCard != nil {
        // handle response
    }
}
```

## ProjectsUpdateColumn

Update an existing project column

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/projects#update-a-project-column>

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
    res, err := s.Projects.ProjectsUpdateColumn(ctx, operations.ProjectsUpdateColumnRequest{
        RequestBody: operations.ProjectsUpdateColumnRequestBody{
            Name: "Remaining tasks",
        },
        ColumnID: 923306,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectColumn != nil {
        // handle response
    }
}
```
