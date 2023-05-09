# Projects

## Overview

Bitbucket Cloud projects make it easier for teams to focus on
a goal, product, or process by organizing their repositories.


### Available Operations

* [DeleteWorkspacesWorkspaceProjectsProjectKey](#deleteworkspacesworkspaceprojectsprojectkey) - Delete a project for a workspace
* [DeleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser](#deleteworkspacesworkspaceprojectsprojectkeydefaultreviewersselecteduser) - Remove the specific user from the project's default reviewers
* [GetWorkspacesWorkspaceProjectsProjectKey](#getworkspacesworkspaceprojectsprojectkey) - Get a project for a workspace
* [GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewers](#getworkspacesworkspaceprojectsprojectkeydefaultreviewers) - List the default reviewers in a project
* [GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser](#getworkspacesworkspaceprojectsprojectkeydefaultreviewersselecteduser) - Get a default reviewer
* [PostWorkspacesWorkspaceProjects](#postworkspacesworkspaceprojects) - Create a project in a workspace
* [PutWorkspacesWorkspaceProjectsProjectKey](#putworkspacesworkspaceprojectsprojectkey) - Update a project for a workspace
* [PutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser](#putworkspacesworkspaceprojectsprojectkeydefaultreviewersselecteduser) - Add the specific user as a default reviewer for the project

## DeleteWorkspacesWorkspaceProjectsProjectKey

Deletes this project. This is an irreversible operation.

You cannot delete a project that still contains repositories.
To delete the project, [delete](/cloud/bitbucket/rest/api-group-repositories/#api-repositories-workspace-repo-slug-delete)
or transfer the repositories first.

Example:
```
$ curl -X DELETE https://api.bitbucket.org/2.0/bbworkspace1/PROJ
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
    res, err := s.Projects.DeleteWorkspacesWorkspaceProjectsProjectKey(ctx, operations.DeleteWorkspacesWorkspaceProjectsProjectKeyRequest{
        ProjectKey: "blanditiis",
        Workspace: "provident",
    }, operations.DeleteWorkspacesWorkspaceProjectsProjectKeySecurity{
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

## DeleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser

Removes a default reviewer from the project.

Example:
```
$ curl https://api.bitbucket.org/2.0/.../default-reviewers/%7Bf0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6%7D

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
    res, err := s.Projects.DeleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser(ctx, operations.DeleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRequest{
        ProjectKey: "a",
        SelectedUser: "nulla",
        Workspace: "quas",
    }, operations.DeleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserSecurity{
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
    res, err := s.Projects.GetWorkspacesWorkspaceProjectsProjectKey(ctx, operations.GetWorkspacesWorkspaceProjectsProjectKeyRequest{
        ProjectKey: "esse",
        Workspace: "quasi",
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

## GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewers

Return a list of all default reviewers for a project. This is a list of users that will be added as default
reviewers to pull requests for any repository within the project.

Example:
```
$ curl https://api.bitbucket.org/2.0/.../projects/.../default-reviewers | jq .
{
    "pagelen": 10,
    "values": [
        {
            "user": {
                "display_name": "Davis Lee",
                "uuid": "{f0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6}"
            },
            "reviewer_type": "project",
            "type": "default_reviewer"
        },
        {
            "user": {
                "display_name": "Jorge Rodriguez",
                "uuid": "{1aa43376-260d-4a0b-9660-f62672b9655d}"
            },
            "reviewer_type": "project",
            "type": "default_reviewer"
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
    res, err := s.Projects.GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewers(ctx, operations.GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersRequest{
        ProjectKey: "a",
        Workspace: "error",
    }, operations.GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedDefaultReviewerAndType != nil {
        // handle response
    }
}
```

## GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser

Returns the specified default reviewer.

Example:
```
$ curl https://api.bitbucket.org/2.0/.../default-reviewers/%7Bf0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6%7D
{
    "display_name": "Davis Lee",
    "type": "user",
    "uuid": "{f0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6}"
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
    res, err := s.Projects.GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser(ctx, operations.GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRequest{
        ProjectKey: "sint",
        SelectedUser: "pariatur",
        Workspace: "possimus",
    }, operations.GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## PostWorkspacesWorkspaceProjects

Creates a new project.

Note that the avatar has to be embedded as either a data-url
or a URL to an external image as shown in the examples below:

```
$ body=$(cat << EOF
{
    "name": "Mars Project",
    "key": "MARS",
    "description": "Software for colonizing mars.",
    "links": {
        "avatar": {
            "href": "data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/..."
        }
    },
    "is_private": false
}
EOF
)
$ curl -H "Content-Type: application/json" \
       -X POST \
       -d "$body" \
       https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq .
{
  // Serialized project document
}
```

or even:

```
$ body=$(cat << EOF
{
    "name": "Mars Project",
    "key": "MARS",
    "description": "Software for colonizing mars.",
    "links": {
        "avatar": {
            "href": "http://i.imgur.com/72tRx4w.gif"
        }
    },
    "is_private": false
}
EOF
)
$ curl -H "Content-Type: application/json" \
       -X POST \
       -d "$body" \
       https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq .
{
  // Serialized project document
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
    res, err := s.Projects.PostWorkspacesWorkspaceProjects(ctx, operations.PostWorkspacesWorkspaceProjectsRequest{
        RequestBody: map[string]interface{}{
            "eveniet": "asperiores",
        },
        Workspace: "facere",
    }, operations.PostWorkspacesWorkspaceProjectsSecurity{
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

## PutWorkspacesWorkspaceProjectsProjectKey

Since this endpoint can be used to both update and to create a
project, the request body depends on the intent.

#### Creation

See the POST documentation for the project collection for an
example of the request body.

Note: The `key` should not be specified in the body of request
(since it is already present in the URL). The `name` is required,
everything else is optional.

#### Update

See the POST documentation for the project collection for an
example of the request body.

Note: The key is not required in the body (since it is already in
the URL). The key may be specified in the body, if the intent is
to change the key itself. In such a scenario, the location of the
project is changed and is returned in the `Location` header of the
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
    res, err := s.Projects.PutWorkspacesWorkspaceProjectsProjectKey(ctx, operations.PutWorkspacesWorkspaceProjectsProjectKeyRequest{
        RequestBody: map[string]interface{}{
            "consequuntur": "quasi",
        },
        ProjectKey: "similique",
        Workspace: "culpa",
    }, operations.PutWorkspacesWorkspaceProjectsProjectKeySecurity{
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

## PutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser

Adds the specified user to the project's list of default reviewers. The method is
idempotent. Accepts an optional body containing the `uuid` of the user to be added.

Example:
```
$ curl -XPUT https://api.bitbucket.org/2.0/.../default-reviewers/%7Bf0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6%7D
-d { 'uuid': '{f0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6}' }

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
    res, err := s.Projects.PutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser(ctx, operations.PutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRequest{
        ProjectKey: "aliquid",
        SelectedUser: "tenetur",
        Workspace: "quae",
    }, operations.PutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```
