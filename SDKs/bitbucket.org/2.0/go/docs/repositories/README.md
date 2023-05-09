# Repositories

## Overview

A Git repository is a virtual storage of your project. It
allows you to save versions of your code, which you can access
when needed. The repo resource allows you to access public repos,
or repos that belong to a specific workspace.


### Available Operations

* [DeleteRepositoriesWorkspaceRepoSlug](#deleterepositoriesworkspacereposlug) - Delete a repository
* [DeleteRepositoriesWorkspaceRepoSlugHooksUID](#deleterepositoriesworkspacereposlughooksuid) - Delete a webhook for a repository
* [DeleteRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlug](#deleterepositoriesworkspacereposlugpermissionsconfiggroupsgroupslug) - Delete an explicit group permission for a repository
* [DeleteRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserID](#deleterepositoriesworkspacereposlugpermissionsconfigusersselecteduserid) - Delete an explicit user permission for a repository
* [GetRepositories](#getrepositories) - List public repositories
* [GetRepositoriesWorkspace](#getrepositoriesworkspace) - List repositories in a workspace
* [GetRepositoriesWorkspaceRepoSlug](#getrepositoriesworkspacereposlug) - Get a repository
* [GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPath](#getrepositoriesworkspacereposlugfilehistorycommitpath) - List commits that modified a file
* [GetRepositoriesWorkspaceRepoSlugForks](#getrepositoriesworkspacereposlugforks) - List repository forks
* [GetRepositoriesWorkspaceRepoSlugHooks](#getrepositoriesworkspacereposlughooks) - List webhooks for a repository
* [GetRepositoriesWorkspaceRepoSlugHooksUID](#getrepositoriesworkspacereposlughooksuid) - Get a webhook for a repository
* [GetRepositoriesWorkspaceRepoSlugOverrideSettings](#getrepositoriesworkspacereposlugoverridesettings) - Retrieve the inheritance state for repository settings
* [GetRepositoriesWorkspaceRepoSlugPermissionsConfigGroups](#getrepositoriesworkspacereposlugpermissionsconfiggroups) - List explicit group permissions for a repository
* [GetRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlug](#getrepositoriesworkspacereposlugpermissionsconfiggroupsgroupslug) - Get an explicit group permission for a repository
* [GetRepositoriesWorkspaceRepoSlugPermissionsConfigUsers](#getrepositoriesworkspacereposlugpermissionsconfigusers) - List explicit user permissions for a repository
* [GetRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserID](#getrepositoriesworkspacereposlugpermissionsconfigusersselecteduserid) - Get an explicit user permission for a repository
* [GetRepositoriesWorkspaceRepoSlugSrc](#getrepositoriesworkspacereposlugsrc) - Get the root directory of the main branch
* [GetRepositoriesWorkspaceRepoSlugSrcCommitPath](#getrepositoriesworkspacereposlugsrccommitpath) - Get file or directory contents
* [GetRepositoriesWorkspaceRepoSlugWatchers](#getrepositoriesworkspacereposlugwatchers) - List repositories watchers
* [GetUserPermissionsRepositories](#getuserpermissionsrepositories) - List repository permissions for a user
* [PostRepositoriesWorkspaceRepoSlug](#postrepositoriesworkspacereposlug) - Create a repository
* [PostRepositoriesWorkspaceRepoSlugForks](#postrepositoriesworkspacereposlugforks) - Fork a repository
* [PostRepositoriesWorkspaceRepoSlugHooks](#postrepositoriesworkspacereposlughooks) - Create a webhook for a repository
* [PostRepositoriesWorkspaceRepoSlugSrc](#postrepositoriesworkspacereposlugsrc) - Create a commit by uploading a file
* [PutRepositoriesWorkspaceRepoSlug](#putrepositoriesworkspacereposlug) - Update a repository
* [PutRepositoriesWorkspaceRepoSlugHooksUID](#putrepositoriesworkspacereposlughooksuid) - Update a webhook for a repository
* [PutRepositoriesWorkspaceRepoSlugOverrideSettings](#putrepositoriesworkspacereposlugoverridesettings) - Set the inheritance state for repository settings
                
* [PutRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlug](#putrepositoriesworkspacereposlugpermissionsconfiggroupsgroupslug) - Update an explicit group permission for a repository
* [PutRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserID](#putrepositoriesworkspacereposlugpermissionsconfigusersselecteduserid) - Update an explicit user permission for a repository

## DeleteRepositoriesWorkspaceRepoSlug

Deletes the repository. This is an irreversible operation.

This does not affect its forks.

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
    res, err := s.Repositories.DeleteRepositoriesWorkspaceRepoSlug(ctx, operations.DeleteRepositoriesWorkspaceRepoSlugRequest{
        RedirectTo: sdk.String("cum"),
        RepoSlug: "laboriosam",
        Workspace: "dolorum",
    }, operations.DeleteRepositoriesWorkspaceRepoSlugSecurity{
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

## DeleteRepositoriesWorkspaceRepoSlugHooksUID

Deletes the specified webhook subscription from the given
repository.

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
    res, err := s.Repositories.DeleteRepositoriesWorkspaceRepoSlugHooksUID(ctx, operations.DeleteRepositoriesWorkspaceRepoSlugHooksUIDRequest{
        RepoSlug: "voluptatum",
        UID: "error",
        Workspace: "hic",
    }, operations.DeleteRepositoriesWorkspaceRepoSlugHooksUIDSecurity{
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

## DeleteRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlug

Deletes the repository group permission between the requested repository and group, if one exists.

Only users with admin permission for the repository may access this resource.

Example:

$ curl -X DELETE https://api.bitbucket.org/2.0/repositories/atlassian_tutorial
/geordi/permissions-config/groups/developers


HTTP/1.1 204

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
    res, err := s.Repositories.DeleteRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlug(ctx, operations.DeleteRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugRequest{
        GroupSlug: "expedita",
        RepoSlug: "debitis",
        Workspace: "neque",
    }, operations.DeleteRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugSecurity{
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

## DeleteRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserID

Deletes the repository user permission between the requested repository and user, if one exists.

Only users with admin permission for the repository may access this resource.

The only authentication method for this endpoint is via app passwords.

```
$ curl -X DELETE https://api.bitbucket.org/2.0/repositories/atlassian_tutorial/geordi/
permissions-config/users/557058:ba8948b2-49da-43a9-9e8b-e7249b8e324a


HTTP/1.1 204
```

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
    res, err := s.Repositories.DeleteRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserID(ctx, operations.DeleteRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIDRequest{
        RepoSlug: "dolorum",
        SelectedUserID: "nostrum",
        Workspace: "officia",
    }, operations.DeleteRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIDSecurity{
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

## GetRepositories

Returns a paginated list of all public repositories.

This endpoint also supports filtering and sorting of the results. See
[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) for more details.

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
    res, err := s.Repositories.GetRepositories(ctx, operations.GetRepositoriesRequest{
        After: sdk.String("dolorum"),
        Q: sdk.String("corrupti"),
        Role: operations.GetRepositoriesRoleEnumOwner.ToPointer(),
        Sort: sdk.String("tempora"),
    }, operations.GetRepositoriesSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedRepositories != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspace

Returns a paginated list of all repositories owned by the specified
workspace.

The result can be narrowed down based on the authenticated user's role.

E.g. with `?role=contributor`, only those repositories that the
authenticated user has write access to are returned (this includes any
repo the user is an admin on, as that implies write access).

This endpoint also supports filtering and sorting of the results. See
[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) for more details.

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
    res, err := s.Repositories.GetRepositoriesWorkspace(ctx, operations.GetRepositoriesWorkspaceRequest{
        Q: sdk.String("atque"),
        Role: operations.GetRepositoriesWorkspaceRoleEnumAdmin.ToPointer(),
        Sort: sdk.String("ut"),
        Workspace: "fugiat",
    }, operations.GetRepositoriesWorkspaceSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedRepositories != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlug

Returns the object describing this repository.

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
    res, err := s.Repositories.GetRepositoriesWorkspaceRepoSlug(ctx, operations.GetRepositoriesWorkspaceRepoSlugRequest{
        RepoSlug: "voluptatem",
        Workspace: "culpa",
    }, operations.GetRepositoriesWorkspaceRepoSlugSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Repository != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPath

Returns a paginated list of commits that modified the specified file.

Commits are returned in reverse chronological order. This is roughly
equivalent to the following commands:

    $ git log --follow --date-order <sha> <path>

By default, Bitbucket will follow renames and the path name in the
returned entries reflects that. This can be turned off using the
`?renames=false` query parameter.

Results are returned in descending chronological order by default, and
like most endpoints you can
[filter and sort](/cloud/bitbucket/rest/intro/#filtering) the response to
only provide exactly the data you want.

For example, if you wanted to find commits made before 2011-05-18
against a file named `README.rst`, but you only wanted the path and
date, your query would look like this:

```
$ curl 'https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/filehistory/master/README.rst'\
  '?fields=values.next,values.path,values.commit.date&q=commit.date<=2011-05-18'
{
  "values": [
    {
      "commit": {
        "date": "2011-05-17T07:32:09+00:00"
      },
      "path": "README.rst"
    },
    {
      "commit": {
        "date": "2011-05-16T06:33:28+00:00"
      },
      "path": "README.txt"
    },
    {
      "commit": {
        "date": "2011-05-16T06:15:39+00:00"
      },
      "path": "README.txt"
    }
  ]
}
```

In the response you can see that the file was renamed to `README.rst`
by the commit made on 2011-05-16, and was previously named `README.txt`.

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
    res, err := s.Repositories.GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPath(ctx, operations.GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathRequest{
        Commit: "expedita",
        Path: "magnam",
        Q: sdk.String("consequatur"),
        Renames: sdk.String("esse"),
        RepoSlug: "ipsam",
        Sort: sdk.String("sit"),
        Workspace: "voluptatum",
    }, operations.GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedFiles != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugForks

Returns a paginated list of all the forks of the specified
repository.

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
    res, err := s.Repositories.GetRepositoriesWorkspaceRepoSlugForks(ctx, operations.GetRepositoriesWorkspaceRepoSlugForksRequest{
        Q: sdk.String("quas"),
        RepoSlug: "repudiandae",
        Role: operations.GetRepositoriesWorkspaceRepoSlugForksRoleEnumContributor.ToPointer(),
        Sort: sdk.String("et"),
        Workspace: "blanditiis",
    }, operations.GetRepositoriesWorkspaceRepoSlugForksSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedRepositories != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugHooks

Returns a paginated list of webhooks installed on this repository.

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
    res, err := s.Repositories.GetRepositoriesWorkspaceRepoSlugHooks(ctx, operations.GetRepositoriesWorkspaceRepoSlugHooksRequest{
        RepoSlug: "ex",
        Workspace: "sed",
    }, operations.GetRepositoriesWorkspaceRepoSlugHooksSecurity{
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

## GetRepositoriesWorkspaceRepoSlugHooksUID

Returns the webhook with the specified id installed on the specified
repository.

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
    res, err := s.Repositories.GetRepositoriesWorkspaceRepoSlugHooksUID(ctx, operations.GetRepositoriesWorkspaceRepoSlugHooksUIDRequest{
        RepoSlug: "sit",
        UID: "vel",
        Workspace: "nostrum",
    }, operations.GetRepositoriesWorkspaceRepoSlugHooksUIDSecurity{
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

## GetRepositoriesWorkspaceRepoSlugOverrideSettings

Retrieve the inheritance state for repository settings

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
    res, err := s.Repositories.GetRepositoriesWorkspaceRepoSlugOverrideSettings(ctx, operations.GetRepositoriesWorkspaceRepoSlugOverrideSettingsRequest{
        RepoSlug: "saepe",
        Workspace: "error",
    }, operations.GetRepositoriesWorkspaceRepoSlugOverrideSettingsSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepositoryInheritanceState != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugPermissionsConfigGroups

Returns a paginated list of explicit group permissions for the given repository.
This endpoint does not support BBQL features.

Example:

```
$ curl https://api.bitbucket.org/2.0/repositories/atlassian_tutorial/geordi/permissions-config/groups

HTTP/1.1 200
Location: https://api.bitbucket.org/2.0/repositories/atlassian_tutorial/geordi/permissions-config/groups

{
  "pagelen": 10,
  "values": [
    {
      "type": "repository_group_permission",
      "group": {
        "type": "group",
        "name": "Administrators",
        "slug": "administrators"
      },
      "permission": "admin",
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0/repositories/atlassian_tutorial/
                   geordi/permissions-config/groups/administrators"
        }
      }
    },
    {
      "type": "repository_group_permission",
      "group": {
        "type": "group",
        "name": "Developers",
        "slug": "developers"
      },
      "permission": "read",
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0/repositories/atlassian_tutorial/
                   geordi/permissions-config/groups/developers"
        }
      }
    }
  ],
  "page": 1,
  "size": 2
}
```

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
    res, err := s.Repositories.GetRepositoriesWorkspaceRepoSlugPermissionsConfigGroups(ctx, operations.GetRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsRequest{
        RepoSlug: "consequatur",
        Workspace: "incidunt",
    }, operations.GetRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedRepositoryGroupPermissions != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlug

Returns the group permission for a given group slug and repository

Only users with admin permission for the repository may access this resource.

Permissions can be:

* `admin`
* `write`
* `read`
* `none`

Example:

```
$ curl https://api.bitbucket.org/2.0/repositories/atlassian_tutorial/geordi/permissions-config/groups/developers

HTTP/1.1 200
Location:
https://api.bitbucket.org/2.0/repositories/atlassian_tutorial/geordi/permissions-config/groups/developers

{
    "type": "repository_group_permission",
    "group": {
        "type": "group",
        "name": "Developers",
        "slug": "developers"
    },
    "repository": {
        "type": "repository",
        "name": "geordi",
        "full_name": "atlassian_tutorial/geordi",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
    },
    "permission": "read",
    "links": {
      "self": {
        "href":
        "https://api.bitbucket.org/2.0/repositories/atlassian_tutorial/geordi/permissions-config/groups/developers"
      }
    }
}
```

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
    res, err := s.Repositories.GetRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlug(ctx, operations.GetRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugRequest{
        GroupSlug: "reiciendis",
        RepoSlug: "dolorem",
        Workspace: "harum",
    }, operations.GetRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepositoryGroupPermission != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugPermissionsConfigUsers

Returns a paginated list of explicit user permissions for the given repository.
This endpoint does not support BBQL features.

Example:

```
$ curl https://api.bitbucket.org/2.0/repositories/atlassian_tutorial/geordi/permissions-config/users

{
  "pagelen": 10,
  "values": [
    {
        "type": "repository_user_permission",
        "user": {
            "type": "user",
            "display_name": "Colin Cameron",
            "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}",
            "account_id": "557058:ba8948b2-49da-43a9-9e8b-e7249b8e324a"
        },
        "permission": "admin",
        "links": {
          "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/atlassian_tutorial/geordi/
                     permissions-config/users/557058:ba8948b2-49da-43a9-9e8b-e7249b8e324a"
          }
        }
    },
    {
      "type": "repository_user_permission",
      "user": {
        "type": "user",
        "display_name": "Sean Conaty",
        "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}",
        "account_id": "557058:ba8948b2-49da-43a9-9e8b-e7249b8e324c"
      },
      "permission": "write",
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0//repositories/atlassian_tutorial/geordi/
                   permissions-config/users/557058:ba8948b2-49da-43a9-9e8b-e7249b8e324c"
        }
      }
    }
  ],
  "page": 1,
  "size": 2
}
```

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
    res, err := s.Repositories.GetRepositoriesWorkspaceRepoSlugPermissionsConfigUsers(ctx, operations.GetRepositoriesWorkspaceRepoSlugPermissionsConfigUsersRequest{
        RepoSlug: "dicta",
        Workspace: "architecto",
    }, operations.GetRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedRepositoryUserPermissions != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserID

Returns the explicit user permission for a given user and repository.

Only users with admin permission for the repository may access this resource.

Permissions can be:

* `admin`
* `write`
* `read`
* `none`

Example:

```
$ curl 'https://api.bitbucket.org/2.0/repositories/atlassian_tutorial/geordi/
        permissions-config/users/557058:ba8948b2-49da-43a9-9e8b-e7249b8e324a'

HTTP/1.1 200
Location: 'https://api.bitbucket.org/2.0/repositories/atlassian_tutorial/geordi/
           permissions-config/users/557058:ba8948b2-49da-43a9-9e8b-e7249b8e324a'

{
    "type": "repository_user_permission",
    "user": {
        "type": "user",
        "display_name": "Colin Cameron",
        "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}",
        "account_id": "557058:ba8948b2-49da-43a9-9e8b-e7249b8e324a"
    },
    "repository": {
        "type": "repository",
        "name": "geordi",
        "full_name": "atlassian_tutorial/geordi",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
    },
    "permission": "admin",
    "links": {
        "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/atlassian_tutorial/geordi/
                     permissions-config/users/557058:ba8948b2-49da-43a9-9e8b-e7249b8e324a"
        }
    }
}
```

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
    res, err := s.Repositories.GetRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserID(ctx, operations.GetRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIDRequest{
        RepoSlug: "occaecati",
        SelectedUserID: "labore",
        Workspace: "quidem",
    }, operations.GetRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepositoryUserPermission != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugSrc

This endpoint redirects the client to the directory listing of the
root directory on the main branch.

This is equivalent to directly hitting
[/2.0/repositories/{username}/{repo_slug}/src/{commit}/{path}](src/%7Bcommit%7D/%7Bpath%7D)
without having to know the name or SHA1 of the repo's main branch.

To create new commits, [POST to this endpoint](#post)

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
    res, err := s.Repositories.GetRepositoriesWorkspaceRepoSlugSrc(ctx, operations.GetRepositoriesWorkspaceRepoSlugSrcRequest{
        Format: operations.GetRepositoriesWorkspaceRepoSlugSrcFormatEnumMeta.ToPointer(),
        RepoSlug: "atque",
        Workspace: "laborum",
    }, operations.GetRepositoriesWorkspaceRepoSlugSrcSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedTreeentries != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugSrcCommitPath

This endpoints is used to retrieve the contents of a single file,
or the contents of a directory at a specified revision.

#### Raw file contents

When `path` points to a file, this endpoint returns the raw contents.
The response's Content-Type is derived from the filename
extension (not from the contents). The file contents are not processed
and no character encoding/recoding is performed and as a result no
character encoding is included as part of the Content-Type.

The `Content-Disposition` header will be "attachment" to prevent
browsers from running executable files.

If the file is managed by LFS, then a 301 redirect pointing to
Atlassian's media services platform is returned.

The response includes an ETag that is based on the contents of the file
and its attributes. This means that an empty `__init__.py` always
returns the same ETag, regardless on the directory it lives in, or the
commit it is on.

#### File meta data

When the request for a file path includes the query parameter
`?format=meta`, instead of returning the file's raw contents, Bitbucket
instead returns the JSON object describing the file's properties:

```javascript
$ curl https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef/tests/__init__.py?format=meta
{
  "links": {
    "self": {
      "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/__init__.py"
    },
    "meta": {
      "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/__init__.py?format=meta"
    }
  },
  "path": "tests/__init__.py",
  "commit": {
    "type": "commit",
    "hash": "eefd5ef5d3df01aed629f650959d6706d54cd335",
    "links": {
      "self": {
        "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/commit/eefd5ef5d3df01aed629f650959d6706d54cd335"
      },
      "html": {
        "href": "https://bitbucket.org/atlassian/bbql/commits/eefd5ef5d3df01aed629f650959d6706d54cd335"
      }
    }
  },
  "attributes": [],
  "type": "commit_file",
  "size": 0
}
```

File objects contain an `attributes` element that contains a list of
possible modifiers. Currently defined values are:

* `link` -- indicates that the entry is a symbolic link. The contents
    of the file represent the path the link points to.
* `executable` -- indicates that the file has the executable bit set.
* `subrepository` -- indicates that the entry points to a submodule or
    subrepo. The contents of the file is the SHA1 of the repository
    pointed to.
* `binary` -- indicates whether Bitbucket thinks the file is binary.

This endpoint can provide an alternative to how a HEAD request can be
used to check for the existence of a file, or a file's size without
incurring the overhead of receiving its full contents.


#### Directory listings

When `path` points to a directory instead of a file, the response is a
paginated list of directory and file objects in the same order as the
underlying SCM system would return them.

For example:

```javascript
$ curl https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef/tests
{
  "pagelen": 10,
  "values": [
    {
      "path": "tests/test_project",
      "type": "commit_directory",
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/test_project/"
        },
        "meta": {
          "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/test_project/?format=meta"
        }
      },
      "commit": {
        "type": "commit",
        "hash": "eefd5ef5d3df01aed629f650959d6706d54cd335",
        "links": {
          "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/commit/eefd5ef5d3df01aed629f650959d6706d54cd335"
          },
          "html": {
            "href": "https://bitbucket.org/atlassian/bbql/commits/eefd5ef5d3df01aed629f650959d6706d54cd335"
          }
        }
      }
    },
    {
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/__init__.py"
        },
        "meta": {
          "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/__init__.py?format=meta"
        }
      },
      "path": "tests/__init__.py",
      "commit": {
        "type": "commit",
        "hash": "eefd5ef5d3df01aed629f650959d6706d54cd335",
        "links": {
          "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/commit/eefd5ef5d3df01aed629f650959d6706d54cd335"
          },
          "html": {
            "href": "https://bitbucket.org/atlassian/bbql/commits/eefd5ef5d3df01aed629f650959d6706d54cd335"
          }
        }
      },
      "attributes": [],
      "type": "commit_file",
      "size": 0
    }
  ],
  "page": 1,
  "size": 2
}
```

When listing the contents of the repo's root directory, the use of a
trailing slash at the end of the URL is required.

The response by default is not recursive, meaning that only the direct contents of
a path are returned. The response does not recurse down into
subdirectories. In order to "walk" the entire directory tree, the
client can either parse each response and follow the `self` links of each
`commit_directory` object, or can specify a `max_depth` to recurse to.

The max_depth parameter will do a breadth-first search to return the contents of the subdirectories
up to the depth specified. Breadth-first search was chosen as it leads to the least amount of
file system operations for git. If the `max_depth` parameter is specified to be too
large, the call will time out and return a 555.

Each returned object is either a `commit_file`, or a `commit_directory`,
both of which contain a `path` element. This path is the absolute path
from the root of the repository. Each object also contains a `commit`
object which embeds the commit the file is on. Note that this is merely
the commit that was used in the URL. It is *not* the commit that last
modified the file.

Directory objects have 2 representations. Their `self` link returns the
paginated contents of the directory. The `meta` link on the other hand
returns the actual `directory` object itself, e.g.:

```javascript
{
  "path": "tests/test_project",
  "type": "commit_directory",
  "links": {
    "self": {
      "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/test_project/"
    },
    "meta": {
      "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/test_project/?format=meta"
    }
  },
  "commit": { ... }
}
```

#### Querying, filtering and sorting

Like most API endpoints, this API supports the Bitbucket
querying/filtering syntax and so you could filter a directory listing
to only include entries that match certain criteria. For instance, to
list all binary files over 1kb use the expression:

`size > 1024 and attributes = "binary"`

which after urlencoding yields the query string:

`?q=size%3E1024+and+attributes%3D%22binary%22`

To change the ordering of the response, use the `?sort` parameter:

`.../src/eefd5ef/?sort=-size`

See [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) for more
details.

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
    res, err := s.Repositories.GetRepositoriesWorkspaceRepoSlugSrcCommitPath(ctx, operations.GetRepositoriesWorkspaceRepoSlugSrcCommitPathRequest{
        Commit: "nam",
        Format: operations.GetRepositoriesWorkspaceRepoSlugSrcCommitPathFormatEnumRendered.ToPointer(),
        MaxDepth: sdk.Int64(388867),
        Path: "alias",
        Q: sdk.String("amet"),
        RepoSlug: "deserunt",
        Sort: sdk.String("voluptate"),
        Workspace: "unde",
    }, operations.GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedTreeentries != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugWatchers

Returns a paginated list of all the watchers on the specified
repository.

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
    res, err := s.Repositories.GetRepositoriesWorkspaceRepoSlugWatchers(ctx, operations.GetRepositoriesWorkspaceRepoSlugWatchersRequest{
        RepoSlug: "reiciendis",
        Workspace: "provident",
    }, operations.GetRepositoriesWorkspaceRepoSlugWatchersSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedAccounts != nil {
        // handle response
    }
}
```

## GetUserPermissionsRepositories

Returns an object for each repository the caller has explicit access
to and their effective permission — the highest level of permission the
caller has. This does not return public repositories that the user was
not granted any specific permission in, and does not distinguish between
explicit and implicit privileges.

Permissions can be:

* `admin`
* `write`
* `read`

Example:

```
$ curl https://api.bitbucket.org/2.0/user/permissions/repositories

{
  "pagelen": 10,
  "values": [
    {
      "type": "repository_permission",
      "user": {
        "type": "user",
        "nickname": "evzijst",
        "display_name": "Erik van Zijst",
        "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
      },
      "repository": {
        "type": "repository",
        "name": "geordi",
        "full_name": "bitbucket/geordi",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
      },
      "permission": "admin"
    }
  ],
  "page": 1,
  "size": 1
}
```

Results may be further [filtered or sorted](/cloud/bitbucket/rest/intro/#filtering) by
repository or permission by adding the following query string
parameters:

* `q=repository.name="geordi"` or `q=permission>"read"`
* `sort=repository.name`

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
    res, err := s.Repositories.GetUserPermissionsRepositories(ctx, operations.GetUserPermissionsRepositoriesRequest{
        Q: sdk.String("repellendus"),
        Sort: sdk.String("delectus"),
    }, operations.GetUserPermissionsRepositoriesSecurity{
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

## PostRepositoriesWorkspaceRepoSlug

Creates a new repository.

Note: In order to set the project for the newly created repository,
pass in either the project key or the project UUID as part of the
request body as shown in the examples below:

```
$ curl -X POST -H "Content-Type: application/json" -d '{
    "scm": "git",
    "project": {
        "key": "MARS"
    }
}' https://api.bitbucket.org/2.0/repositories/teamsinspace/hablanding
```

or

```
$ curl -X POST -H "Content-Type: application/json" -d '{
    "scm": "git",
    "project": {
        "key": "{ba516952-992a-4c2d-acbd-17d502922f96}"
    }
}' https://api.bitbucket.org/2.0/repositories/teamsinspace/hablanding
```

The project must be assigned for all repositories. If the project is not provided,
the repository is automatically assigned to the oldest project in the workspace.

Note: In the examples above, the workspace ID `teamsinspace`,
and/or the repository name `hablanding` can be replaced by UUIDs.

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
    res, err := s.Repositories.PostRepositoriesWorkspaceRepoSlug(ctx, operations.PostRepositoriesWorkspaceRepoSlugRequest{
        RequestBody: map[string]interface{}{
            "perferendis": "est",
            "quidem": "reprehenderit",
            "facere": "fuga",
            "praesentium": "mollitia",
        },
        RepoSlug: "veniam",
        Workspace: "voluptatem",
    }, operations.PostRepositoriesWorkspaceRepoSlugSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Repository != nil {
        // handle response
    }
}
```

## PostRepositoriesWorkspaceRepoSlugForks

Creates a new fork of the specified repository.

#### Forking a repository

To create a fork, specify the workspace explicitly as part of the
request body:

```
$ curl -X POST -u jdoe https://api.bitbucket.org/2.0/repositories/atlassian/bbql/forks \
  -H 'Content-Type: application/json' -d '{
    "name": "bbql_fork",
    "workspace": {
      "slug": "atlassian"
    }
}'
```

To fork a repository into the same workspace, also specify a new `name`.

When you specify a value for `name`, it will also affect the `slug`.
The `slug` is reflected in the repository URL of the new fork. It is
derived from `name` by substituting non-ASCII characters, removes
whitespace, and changes characters to lower case. For example,
`My repo` would turn into `my_repo`.

You need contributor access to create new forks within a workspace.


#### Change the properties of a new fork

By default the fork inherits most of its properties from the parent.
However, since the optional POST body document follows the normal
`repository` JSON schema and you can override the new fork's
properties.

Properties that can be overridden include:

* description
* fork_policy
* language
* mainbranch
* is_private (note that a private repo's fork_policy might prohibit
  the creation of public forks, in which `is_private=False` would fail)
* has_issues (to initialize or disable the new repo's issue tracker --
  note that the actual contents of the parent repository's issue
  tracker are not copied during forking)
* has_wiki (to initialize or disable the new repo's wiki --
  note that the actual contents of the parent repository's wiki are not
  copied during forking)
* project (when forking into a private project, the fork's `is_private`
  must be `true`)

Properties that cannot be modified include:

* scm
* parent
* full_name

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
    res, err := s.Repositories.PostRepositoriesWorkspaceRepoSlugForks(ctx, operations.PostRepositoriesWorkspaceRepoSlugForksRequest{
        RequestBody: map[string]interface{}{
            "repudiandae": "quasi",
            "atque": "reprehenderit",
            "asperiores": "totam",
            "suscipit": "quidem",
        },
        RepoSlug: "maxime",
        Workspace: "et",
    }, operations.PostRepositoriesWorkspaceRepoSlugForksSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Repository != nil {
        // handle response
    }
}
```

## PostRepositoriesWorkspaceRepoSlugHooks

Creates a new webhook on the specified repository.

Example:

```
$ curl -X POST -u credentials -H 'Content-Type: application/json'
  https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo-slug/hooks
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

Note that this call requires the webhook scope, as well as any scope
that applies to the events that the webhook subscribes to. In the
example above that means: `webhook`, `repository` and `issue`.

Also note that the `url` must properly resolve and cannot be an
internal, non-routed address.

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
    res, err := s.Repositories.PostRepositoriesWorkspaceRepoSlugHooks(ctx, operations.PostRepositoriesWorkspaceRepoSlugHooksRequest{
        RepoSlug: "esse",
        Workspace: "amet",
    }, operations.PostRepositoriesWorkspaceRepoSlugHooksSecurity{
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

## PostRepositoriesWorkspaceRepoSlugSrc

This endpoint is used to create new commits in the repository by
uploading files.

To add a new file to a repository:

```
$ curl https://api.bitbucket.org/2.0/repositories/username/slug/src \
  -F /repo/path/to/image.png=@image.png
```

This will create a new commit on top of the main branch, inheriting the
contents of the main branch, but adding (or overwriting) the
`image.png` file to the repository in the `/repo/path/to` directory.

To create a commit that deletes files, use the `files` parameter:

```
$ curl https://api.bitbucket.org/2.0/repositories/username/slug/src \
  -F files=/file/to/delete/1.txt \
  -F files=/file/to/delete/2.txt
```

You can add/modify/delete multiple files in a request. Rename/move a
file by deleting the old path and adding the content at the new path.

This endpoint accepts `multipart/form-data` (as in the examples above),
as well as `application/x-www-form-urlencoded`.

#### multipart/form-data

A `multipart/form-data` post contains a series of "form fields" that
identify both the individual files that are being uploaded, as well as
additional, optional meta data.

Files are uploaded in file form fields (those that have a
`Content-Disposition` parameter) whose field names point to the remote
path in the repository where the file should be stored. Path field
names are always interpreted to be absolute from the root of the
repository, regardless whether the client uses a leading slash (as the
above `curl` example did).

File contents are treated as bytes and are not decoded as text.

The commit message, as well as other non-file meta data for the
request, is sent along as normal form field elements. Meta data fields
share the same namespace as the file objects. For `multipart/form-data`
bodies that should not lead to any ambiguity, as the
`Content-Disposition` header will contain the `filename` parameter to
distinguish between a file named "message" and the commit message field.

#### application/x-www-form-urlencoded

It is also possible to upload new files using a simple
`application/x-www-form-urlencoded` POST. This can be convenient when
uploading pure text files:

```
$ curl https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src \
  --data-urlencode "/path/to/me.txt=Lorem ipsum." \
  --data-urlencode "message=Initial commit" \
  --data-urlencode "author=Erik van Zijst <erik.van.zijst@gmail.com>"
```

There could be a field name clash if a client were to upload a file
named "message", as this filename clashes with the meta data property
for the commit message. To avoid this and to upload files whose names
clash with the meta data properties, use a leading slash for the files,
e.g. `curl --data-urlencode "/message=file contents"`.

When an explicit slash is omitted for a file whose path matches that of
a meta data parameter, then it is interpreted as meta data, not as a
file.

#### Executables and links

While this API aims to facilitate the most common use cases, it is
possible to perform some more advanced operations like creating a new
symlink in the repository, or creating an executable file.

Files can be supplied with a `x-attributes` value in the
`Content-Disposition` header. For example, to upload an executable
file, as well as create a symlink from `README.txt` to `README`:

```
--===============1438169132528273974==
Content-Type: text/plain; charset="us-ascii"
MIME-Version: 1.0
Content-Transfer-Encoding: 7bit
Content-ID: "bin/shutdown.sh"
Content-Disposition: attachment; filename="shutdown.sh"; x-attributes:"executable"

#!/bin/sh
halt

--===============1438169132528273974==
Content-Type: text/plain; charset="us-ascii"
MIME-Version: 1.0
Content-Transfer-Encoding: 7bit
Content-ID: "/README.txt"
Content-Disposition: attachment; filename="README.txt"; x-attributes:"link"

README
--===============1438169132528273974==--
```

Links are files that contain the target path and have
`x-attributes:"link"` set.

When overwriting links with files, or vice versa, the newly uploaded
file determines both the new contents, as well as the attributes. That
means uploading a file without specifying `x-attributes="link"` will
create a regular file, even if the parent commit hosted a symlink at
the same path.

The same applies to executables. When modifying an existing executable
file, the form-data file element must include
`x-attributes="executable"` in order to preserve the executable status
of the file.

Note that this API does not support the creation or manipulation of
subrepos / submodules.

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
    res, err := s.Repositories.PostRepositoriesWorkspaceRepoSlugSrc(ctx, operations.PostRepositoriesWorkspaceRepoSlugSrcRequest{
        Author: sdk.String("assumenda"),
        Branch: sdk.String("ea"),
        Files: sdk.String("atque"),
        Message: sdk.String("error"),
        Parents: sdk.String("officiis"),
        RepoSlug: "officiis",
        Workspace: "accusamus",
    }, operations.PostRepositoriesWorkspaceRepoSlugSrcSecurity{
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

## PutRepositoriesWorkspaceRepoSlug

Since this endpoint can be used to both update and to create a
repository, the request body depends on the intent.

#### Creation

See the POST documentation for the repository endpoint for an example
of the request body.

#### Update

Note: Changing the `name` of the repository will cause the location to
be changed. This is because the URL of the repo is derived from the
name (a process called slugification). In such a scenario, it is
possible for the request to fail if the newly created slug conflicts
with an existing repository's slug. But if there is no conflict,
the new location will be returned in the `Location` header of the
response.

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
    res, err := s.Repositories.PutRepositoriesWorkspaceRepoSlug(ctx, operations.PutRepositoriesWorkspaceRepoSlugRequest{
        RequestBody: map[string]interface{}{
            "minima": "aspernatur",
            "ex": "maiores",
            "corrupti": "at",
        },
        RepoSlug: "error",
        Workspace: "blanditiis",
    }, operations.PutRepositoriesWorkspaceRepoSlugSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Repository != nil {
        // handle response
    }
}
```

## PutRepositoriesWorkspaceRepoSlugHooksUID

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
    res, err := s.Repositories.PutRepositoriesWorkspaceRepoSlugHooksUID(ctx, operations.PutRepositoriesWorkspaceRepoSlugHooksUIDRequest{
        RepoSlug: "suscipit",
        UID: "repudiandae",
        Workspace: "atque",
    }, operations.PutRepositoriesWorkspaceRepoSlugHooksUIDSecurity{
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

## PutRepositoriesWorkspaceRepoSlugOverrideSettings

Set the inheritance state for repository settings
                

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
    res, err := s.Repositories.PutRepositoriesWorkspaceRepoSlugOverrideSettings(ctx, operations.PutRepositoriesWorkspaceRepoSlugOverrideSettingsRequest{
        RepoSlug: "atque",
        Workspace: "sunt",
    }, operations.PutRepositoriesWorkspaceRepoSlugOverrideSettingsSecurity{
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

## PutRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlug

Updates the group permission if it exists.

Only users with admin permission for the repository may access this resource.

The only authentication method supported for this endpoint is via app passwords.

Permissions can be:

* `admin`
* `write`
* `read`

Example:
```
$ curl -X PUT -H "Content-Type: application/json"
https://api.bitbucket.org/2.0/repositories/atlassian_tutorial/geordi/permissions-config/groups/developers
-d
'{
    "permission": "write"
}'

HTTP/1.1 200
Location:
https://api.bitbucket.org/2.0/repositories/atlassian_tutorial/geordi/permissions-config/groups/developers

{
    "type": "repository_group_permission",
    "group": {
        "type": "group",
        "name": "Developers",
        "slug": "developers"
    },
    "repository": {
        "type": "repository",
        "name": "geordi",
        "full_name": "atlassian_tutorial/geordi",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
    },
    "permission": "write",
    "links": {
      "self": {
        "href":
        "https://api.bitbucket.org/2.0/repositories/atlassian_tutorial/geordi/permissions-config/groups/developers"
      }
    }
}
```

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
    res, err := s.Repositories.PutRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlug(ctx, operations.PutRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugRequest{
        GroupSlug: "recusandae",
        RepoSlug: "dolorum",
        Workspace: "repellendus",
    }, operations.PutRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepositoryGroupPermission != nil {
        // handle response
    }
}
```

## PutRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserID

Updates the explicit user permission for a given user and repository. The selected user must be a member of
the workspace, and cannot be the workspace owner.
Only users with admin permission for the repository may access this resource.

The only authentication method for this endpoint is via app passwords.

Permissions can be:

* `admin`
* `write`
* `read`

Example:

```
$ curl -X PUT -H "Content-Type: application/json" 'https://api.bitbucket.org/2.0/repositories/
atlassian_tutorial/geordi/permissions-config/users/557058:ba8948b2-49da-43a9-9e8b-e7249b8e324a'
-d         '{
    "permission": "write"
}'

HTTP/1.1 200
Location: 'https://api.bitbucket.org/2.0/repositories/atlassian_tutorial/geordi/
permissions-config/users/557058:ba8948b2-49da-43a9-9e8b-e7249b8e324a'


{
    "type": "repository_user_permission",
    "user": {
        "type": "user",
        "display_name": "Colin Cameron",
        "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}",
        "account_id": "557058:ba8948b2-49da-43a9-9e8b-e7249b8e324a"
    },
    "repository": {
        "type": "repository",
        "name": "geordi",
        "full_name": "atlassian_tutorial/geordi",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
    },
    "permission": "write",
    "links": {
        "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/atlassian_tutorial/geordi/
                     permissions-config/users/557058:ba8948b2-49da-43a9-9e8b-e7249b8e324a"
        }
    }
}
```

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
    res, err := s.Repositories.PutRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserID(ctx, operations.PutRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIDRequest{
        RepoSlug: "labore",
        SelectedUserID: "reiciendis",
        Workspace: "doloremque",
    }, operations.PutRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepositoryUserPermission != nil {
        // handle response
    }
}
```
