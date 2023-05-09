# Workspaces

## Overview

A workspace is where you create repositories, collaborate on
your code, and organize different streams of work in your Bitbucket
Cloud account. Workspaces replace the use of teams and users in API
calls.


### Available Operations

* [DeleteWorkspacesWorkspaceHooksUID](#deleteworkspacesworkspacehooksuid) - Delete a webhook for a workspace
* [GetUserPermissionsWorkspaces](#getuserpermissionsworkspaces) - List workspaces for the current user
* [GetWorkspaces](#getworkspaces) - List workspaces for user
* [GetWorkspacesWorkspace](#getworkspacesworkspace) - Get a workspace
* [GetWorkspacesWorkspaceHooks](#getworkspacesworkspacehooks) - List webhooks for a workspace
* [GetWorkspacesWorkspaceHooksUID](#getworkspacesworkspacehooksuid) - Get a webhook for a workspace
* [GetWorkspacesWorkspaceMembers](#getworkspacesworkspacemembers) - List users in a workspace
* [GetWorkspacesWorkspaceMembersMember](#getworkspacesworkspacemembersmember) - Get user membership for a workspace
* [GetWorkspacesWorkspacePermissions](#getworkspacesworkspacepermissions) - List user permissions in a workspace
* [GetWorkspacesWorkspacePermissionsRepositories](#getworkspacesworkspacepermissionsrepositories) - List all repository permissions for a workspace
* [GetWorkspacesWorkspacePermissionsRepositoriesRepoSlug](#getworkspacesworkspacepermissionsrepositoriesreposlug) - List a repository permissions for a workspace
* [GetWorkspacesWorkspaceProjects](#getworkspacesworkspaceprojects) - List projects in a workspace
* [GetWorkspacesWorkspaceProjectsProjectKey](#getworkspacesworkspaceprojectsprojectkey) - Get a project for a workspace
* [PostWorkspacesWorkspaceHooks](#postworkspacesworkspacehooks) - Create a webhook for a workspace
* [PutWorkspacesWorkspaceHooksUID](#putworkspacesworkspacehooksuid) - Update a webhook for a workspace

## DeleteWorkspacesWorkspaceHooksUID

Deletes the specified webhook subscription from the given workspace.

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
    res, err := s.Workspaces.DeleteWorkspacesWorkspaceHooksUID(ctx, operations.DeleteWorkspacesWorkspaceHooksUIDRequest{
        UID: "nulla",
        Workspace: "necessitatibus",
    }, operations.DeleteWorkspacesWorkspaceHooksUIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetUserPermissionsWorkspaces

Returns an object for each workspace the caller is a member of, and
their effective role - the highest level of privilege the caller has.
If a user is a member of multiple groups with distinct roles, only the
highest level is returned.

Permissions can be:

* `owner`
* `collaborator`
* `member`

**The `collaborator` role is being removed from the Bitbucket Cloud API. For more information,
see the [deprecation announcement](/cloud/bitbucket/deprecation-notice-collaborator-role/).**

Example:

```
$ curl https://api.bitbucket.org/2.0/user/permissions/workspaces

{
  "pagelen": 10,
  "page": 1,
  "size": 1,
  "values": [
    {
      "type": "workspace_membership",
      "permission": "owner",
      "last_accessed": "2019-03-07T12:35:02.900024+00:00",
      "added_on": "2018-10-11T17:42:02.961424+00:00",
      "user": {
        "type": "user",
        "uuid": "{470c176d-3574-44ea-bb41-89e8638bcca4}",
        "nickname": "evzijst",
        "display_name": "Erik van Zijst",
      },
      "workspace": {
        "type": "workspace",
        "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
        "slug": "bbworkspace1",
        "name": "Atlassian Bitbucket",
      }
    }
  ]
}
```

Results may be further [filtered or sorted](/cloud/bitbucket/rest/intro/#filtering) by
workspace or permission by adding the following query string parameters:

* `q=workspace.slug="bbworkspace1"` or `q=permission="owner"`
* `sort=workspace.slug`

Note that the query parameter values need to be URL escaped so that `=`
would become `%3D`.

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
    res, err := s.Workspaces.GetUserPermissionsWorkspaces(ctx, operations.GetUserPermissionsWorkspacesRequest{
        Q: sdk.String("ipsa"),
        Sort: sdk.String("tempora"),
    }, operations.GetUserPermissionsWorkspacesSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedWorkspaceMemberships != nil {
        // handle response
    }
}
```

## GetWorkspaces

Returns a list of workspaces accessible by the authenticated user.

Example:

```
$ curl https://api.bitbucket.org/2.0/workspaces

{
  "pagelen": 10,
  "page": 1,
  "size": 1,
  "values": [
    {
        "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
        "links": {
            "owners": {
                "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1/members?q=permission%3D%22owner%22"
            },
            "self": {
                "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1"
            },
            "repositories": {
                "href": "https://api.bitbucket.org/2.0/repositories/bbworkspace1"
            },
            "snippets": {
                "href": "https://api.bitbucket.org/2.0/snippets/bbworkspace1"
            },
            "html": {
                "href": "https://bitbucket.org/bbworkspace1/"
            },
            "avatar": {
                "href": "https://bitbucket.org/workspaces/bbworkspace1/avatar/?ts=1543465801"
            },
            "members": {
                "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1/members"
            },
            "projects": {
                "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1/projects"
            }
        },
        "created_on": "2018-11-14T19:15:05.058566+00:00",
        "type": "workspace",
        "slug": "bbworkspace1",
        "is_private": true,
        "name": "Atlassian Bitbucket"
    }
  ]
}
```

Results may be further [filtered or sorted](/cloud/bitbucket/rest/intro/#filtering) by
workspace or permission by adding the following query string parameters:

* `q=slug="bbworkspace1"` or `q=is_private=true`
* `sort=created_on`

Note that the query parameter values need to be URL escaped so that `=`
would become `%3D`.

**The `collaborator` role is being removed from the Bitbucket Cloud API. For more information,
see the [deprecation announcement](/cloud/bitbucket/deprecation-notice-collaborator-role/).**

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
    res, err := s.Workspaces.GetWorkspaces(ctx, operations.GetWorkspacesRequest{
        Q: sdk.String("nihil"),
        Role: operations.GetWorkspacesRoleEnumCollaborator.ToPointer(),
        Sort: sdk.String("dicta"),
    }, operations.GetWorkspacesSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedWorkspaces != nil {
        // handle response
    }
}
```

## GetWorkspacesWorkspace

Returns the requested workspace.

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
    res, err := s.Workspaces.GetWorkspacesWorkspace(ctx, operations.GetWorkspacesWorkspaceRequest{
        Workspace: "iusto",
    }, operations.GetWorkspacesWorkspaceSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Workspace != nil {
        // handle response
    }
}
```

## GetWorkspacesWorkspaceHooks

Returns a paginated list of webhooks installed on this workspace.

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
    res, err := s.Workspaces.GetWorkspacesWorkspaceHooks(ctx, operations.GetWorkspacesWorkspaceHooksRequest{
        Workspace: "esse",
    }, operations.GetWorkspacesWorkspaceHooksSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedWebhookSubscriptions != nil {
        // handle response
    }
}
```

## GetWorkspacesWorkspaceHooksUID

Returns the webhook with the specified id installed on the given
workspace.

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
    res, err := s.Workspaces.GetWorkspacesWorkspaceHooksUID(ctx, operations.GetWorkspacesWorkspaceHooksUIDRequest{
        UID: "praesentium",
        Workspace: "maiores",
    }, operations.GetWorkspacesWorkspaceHooksUIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookSubscription != nil {
        // handle response
    }
}
```

## GetWorkspacesWorkspaceMembers

Returns all members of the requested workspace.

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
    res, err := s.Workspaces.GetWorkspacesWorkspaceMembers(ctx, operations.GetWorkspacesWorkspaceMembersRequest{
        Workspace: "reiciendis",
    }, operations.GetWorkspacesWorkspaceMembersSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedWorkspaceMemberships != nil {
        // handle response
    }
}
```

## GetWorkspacesWorkspaceMembersMember

Returns the workspace membership, which includes
a `User` object for the member and a `Workspace` object
for the requested workspace.

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
    res, err := s.Workspaces.GetWorkspacesWorkspaceMembersMember(ctx, operations.GetWorkspacesWorkspaceMembersMemberRequest{
        Member: "vel",
        Workspace: "architecto",
    }, operations.GetWorkspacesWorkspaceMembersMemberSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkspaceMembership != nil {
        // handle response
    }
}
```

## GetWorkspacesWorkspacePermissions

Returns the list of members in a workspace
and their permission levels.
Permission can be:
* `owner`
* `collaborator`
* `member`

**The `collaborator` role is being removed from the Bitbucket Cloud API. For more information,
see the [deprecation announcement](/cloud/bitbucket/deprecation-notice-collaborator-role/).**

Example:

```
$ curl -X https://api.bitbucket.org/2.0/workspaces/bbworkspace1/permissions

{
    "pagelen": 10,
    "values": [
        {
            "permission": "owner",
            "type": "workspace_membership",
            "user": {
                "type": "user",
                "uuid": "{470c176d-3574-44ea-bb41-89e8638bcca4}",
                "display_name": "Erik van Zijst",
            },
            "workspace": {
                "type": "workspace",
                "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
                "slug": "bbworkspace1",
                "name": "Atlassian Bitbucket",
            }
        },
        {
            "permission": "member",
            "type": "workspace_membership",
            "user": {
                "type": "user",
                "nickname": "seanaty",
                "display_name": "Sean Conaty",
                "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
            },
            "workspace": {
                "type": "workspace",
                "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
                "slug": "bbworkspace1",
                "name": "Atlassian Bitbucket",
            }
        }
    ],
    "page": 1,
    "size": 2
}
```

Results may be further [filtered](/cloud/bitbucket/rest/intro/#filtering) by
permission by adding the following query string parameters:

* `q=permission="owner"`

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
    res, err := s.Workspaces.GetWorkspacesWorkspacePermissions(ctx, operations.GetWorkspacesWorkspacePermissionsRequest{
        Q: sdk.String("fugiat"),
        Workspace: "doloremque",
    }, operations.GetWorkspacesWorkspacePermissionsSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedWorkspaceMemberships != nil {
        // handle response
    }
}
```

## GetWorkspacesWorkspacePermissionsRepositories

Returns an object for each repository permission for all of a
workspace's repositories.

Permissions returned are effective permissions: the highest level of
permission the user has. This does not distinguish between direct and
indirect (group) privileges.

Only users with admin permission for the team may access this resource.

Permissions can be:

* `admin`
* `write`
* `read`

Example:

```
$ curl https://api.bitbucket.org/2.0/workspaces/atlassian_tutorial/permissions/repositories

{
  "pagelen": 10,
  "values": [
    {
      "type": "repository_permission",
      "user": {
        "type": "user",
        "display_name": "Erik van Zijst",
        "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
      },
      "repository": {
        "type": "repository",
        "name": "geordi",
        "full_name": "atlassian_tutorial/geordi",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
      },
      "permission": "admin"
    },
    {
      "type": "repository_permission",
      "user": {
        "type": "user",
        "display_name": "Sean Conaty",
        "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
      },
      "repository": {
        "type": "repository",
        "name": "geordi",
        "full_name": "atlassian_tutorial/geordi",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
      },
      "permission": "write"
    },
    {
      "type": "repository_permission",
      "user": {
        "type": "user",
        "display_name": "Jeff Zeng",
        "uuid": "{47f92a9a-c3a3-4d0b-bc4e-782a969c5c72}"
      },
      "repository": {
        "type": "repository",
        "name": "whee",
        "full_name": "atlassian_tutorial/whee",
        "uuid": "{30ba25e9-51ff-4555-8dd0-fc7ee2fa0895}"
      },
      "permission": "admin"
    }
  ],
  "page": 1,
  "size": 3
}
```

Results may be further [filtered or sorted](/cloud/bitbucket/rest/intro/#filtering)
by repository, user, or permission by adding the following query string
parameters:

* `q=repository.name="geordi"` or `q=permission>"read"`
* `sort=user.display_name`

Note that the query parameter values need to be URL escaped so that `=`
would become `%3D`.

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
    res, err := s.Workspaces.GetWorkspacesWorkspacePermissionsRepositories(ctx, operations.GetWorkspacesWorkspacePermissionsRepositoriesRequest{
        Q: sdk.String("dicta"),
        Sort: sdk.String("odio"),
        Workspace: "tempora",
    }, operations.GetWorkspacesWorkspacePermissionsRepositoriesSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedRepositoryPermissions != nil {
        // handle response
    }
}
```

## GetWorkspacesWorkspacePermissionsRepositoriesRepoSlug

Returns an object for the repository permission of each user in the
requested repository.

Permissions returned are effective permissions: the highest level of
permission the user has. This does not distinguish between direct and
indirect (group) privileges.

Only users with admin permission for the repository may access this resource.

Permissions can be:

* `admin`
* `write`
* `read`

Example:

```
$ curl https://api.bitbucket.org/2.0/workspaces/atlassian_tutorial/permissions/repositories/geordi

{
  "pagelen": 10,
  "values": [
    {
      "type": "repository_permission",
      "user": {
        "type": "user",
        "display_name": "Erik van Zijst",
        "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
      },
      "repository": {
        "type": "repository",
        "name": "geordi",
        "full_name": "atlassian_tutorial/geordi",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
      },
      "permission": "admin"
    },
    {
      "type": "repository_permission",
      "user": {
        "type": "user",
        "display_name": "Sean Conaty",
        "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
      },
      "repository": {
        "type": "repository",
        "name": "geordi",
        "full_name": "atlassian_tutorial/geordi",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
      },
      "permission": "write"
    }
  ],
  "page": 1,
  "size": 2
}
```

Results may be further [filtered or sorted](/cloud/bitbucket/rest/intro/#filtering)
by user, or permission by adding the following query string parameters:

* `q=permission>"read"`
* `sort=user.display_name`

Note that the query parameter values need to be URL escaped so that `=`
would become `%3D`.

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
    res, err := s.Workspaces.GetWorkspacesWorkspacePermissionsRepositoriesRepoSlug(ctx, operations.GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugRequest{
        Q: sdk.String("esse"),
        RepoSlug: "ex",
        Sort: sdk.String("consectetur"),
        Workspace: "aliquid",
    }, operations.GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedRepositoryPermissions != nil {
        // handle response
    }
}
```

## GetWorkspacesWorkspaceProjects

Returns the list of projects in this workspace.

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
    res, err := s.Workspaces.GetWorkspacesWorkspaceProjects(ctx, operations.GetWorkspacesWorkspaceProjectsRequest{
        Workspace: "ipsa",
    }, operations.GetWorkspacesWorkspaceProjectsSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedProjects != nil {
        // handle response
    }
}
```

## GetWorkspacesWorkspaceProjectsProjectKey

Returns the requested project.

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
    res, err := s.Workspaces.GetWorkspacesWorkspaceProjectsProjectKey(ctx, operations.GetWorkspacesWorkspaceProjectsProjectKeyRequest{
        ProjectKey: "laborum",
        Workspace: "sunt",
    }, operations.GetWorkspacesWorkspaceProjectsProjectKeySecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Project != nil {
        // handle response
    }
}
```

## PostWorkspacesWorkspaceHooks

Creates a new webhook on the specified workspace.

Workspace webhooks are fired for events from all repositories contained
by that workspace.

Example:

```
$ curl -X POST -u credentials -H 'Content-Type: application/json'
  https://api.bitbucket.org/2.0/workspaces/my-workspace/hooks
  -d '
    {
      "description": "Webhook Description",
      "url": "https://example.com/",
      "active": true,
      "events": [
        "repo:push",
        "issue:created",
        "issue:updated"
      ]
    }'
```

This call requires the webhook scope, as well as any scope
that applies to the events that the webhook subscribes to. In the
example above that means: `webhook`, `repository` and `issue`.

The `url` must properly resolve and cannot be an internal, non-routed address.

Only workspace owners can install webhooks on workspaces.

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
    res, err := s.Workspaces.PostWorkspacesWorkspaceHooks(ctx, operations.PostWorkspacesWorkspaceHooksRequest{
        Workspace: "nostrum",
    }, operations.PostWorkspacesWorkspaceHooksSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookSubscription != nil {
        // handle response
    }
}
```

## PutWorkspacesWorkspaceHooksUID

Updates the specified webhook subscription.

The following properties can be mutated:

* `description`
* `url`
* `active`
* `events`

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
    res, err := s.Workspaces.PutWorkspacesWorkspaceHooksUID(ctx, operations.PutWorkspacesWorkspaceHooksUIDRequest{
        UID: "fugiat",
        Workspace: "expedita",
    }, operations.PutWorkspacesWorkspaceHooksUIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookSubscription != nil {
        // handle response
    }
}
```
