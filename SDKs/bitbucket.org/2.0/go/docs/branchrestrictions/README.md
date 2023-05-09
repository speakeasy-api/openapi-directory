# BranchRestrictions

## Overview

Repository owners and administrators can set branch management
rules on a repository that control what can be pushed by whom.
Through these rules, you can enforce a project or team
workflow. For example, owners or administrators can:

* Limit push powers
* Prevent branch deletion
* Prevent history re-writes (Git only)


### Available Operations

* [DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsID](#deleterepositoriesworkspacereposlugbranchrestrictionsid) - Delete a branch restriction rule
* [GetRepositoriesWorkspaceRepoSlugBranchRestrictions](#getrepositoriesworkspacereposlugbranchrestrictions) - List branch restrictions
* [GetRepositoriesWorkspaceRepoSlugBranchRestrictionsID](#getrepositoriesworkspacereposlugbranchrestrictionsid) - Get a branch restriction rule
* [PostRepositoriesWorkspaceRepoSlugBranchRestrictions](#postrepositoriesworkspacereposlugbranchrestrictions) - Create a branch restriction rule
* [PutRepositoriesWorkspaceRepoSlugBranchRestrictionsID](#putrepositoriesworkspacereposlugbranchrestrictionsid) - Update a branch restriction rule

## DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsID

Deletes an existing branch restriction rule.

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
    res, err := s.BranchRestrictions.DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsID(ctx, operations.DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIDRequest{
        ID: "9a674e0f-467c-4c87-96ed-151a05dfc2dd",
        RepoSlug: "maiores",
        Workspace: "molestiae",
    }, operations.DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIDSecurity{
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

## GetRepositoriesWorkspaceRepoSlugBranchRestrictions

Returns a paginated list of all branch restrictions on the
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
    res, err := s.BranchRestrictions.GetRepositoriesWorkspaceRepoSlugBranchRestrictions(ctx, operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest{
        Kind: sdk.String("quod"),
        Pattern: sdk.String("quod"),
        RepoSlug: "esse",
        Workspace: "totam",
    }, operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedBranchrestrictions != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugBranchRestrictionsID

Returns a specific branch restriction rule.

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
    res, err := s.BranchRestrictions.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsID(ctx, operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIDRequest{
        ID: "ca1ba928-fc81-4674-acb7-39205929396f",
        RepoSlug: "saepe",
        Workspace: "fuga",
    }, operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Branchrestriction != nil {
        // handle response
    }
}
```

## PostRepositoriesWorkspaceRepoSlugBranchRestrictions

Creates a new branch restriction rule for a repository.

`kind` describes what will be restricted. Allowed values include:
`push`, `force`, `delete` and `restrict_merges`.

Different kinds of branch restrictions have different requirements:

* `push` and `restrict_merges` require `users` and `groups` to be
  specified. Empty lists are allowed, in which case permission is
  denied for everybody.

The restriction applies to all branches that match. There are
two ways to match a branch. It is configured in `branch_match_kind`:

1. `glob`: Matches a branch against the `pattern`. A `'*'` in
   `pattern` will expand to match zero or more characters, and every
   other character matches itself. For example, `'foo*'` will match
   `'foo'` and `'foobar'`, but not `'barfoo'`. `'*'` will match all
   branches.
2. `branching_model`: Matches a branch against the repository's
   branching model. The `branch_type` controls the type of branch
   to match. Allowed values include: `production`, `development`,
   `bugfix`, `release`, `feature` and `hotfix`.

The combination of `kind` and match must be unique. This means that
two `glob` restrictions in a repository cannot have the same `kind` and
`pattern`. Additionally, two `branching_model` restrictions in a
repository cannot have the same `kind` and `branch_type`.

`users` and `groups` are lists of users and groups that are except from
the restriction. They can only be configured in `push` and
`restrict_merges` restrictions. The `push` restriction stops a user
pushing to matching branches unless that user is in `users` or is a
member of a group in `groups`. The `restrict_merges` stops a user
merging pull requests to matching branches unless that user is in
`users` or is a member of a group in `groups`. Adding new users or
groups to an existing restriction should be done via `PUT`.

Note that branch restrictions with overlapping matchers is allowed,
but the resulting behavior may be surprising.

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
    res, err := s.BranchRestrictions.PostRepositoriesWorkspaceRepoSlugBranchRestrictions(ctx, operations.PostRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest{
        RequestBody: map[string]interface{}{
            "corporis": "iste",
            "iure": "saepe",
        },
        RepoSlug: "quidem",
        Workspace: "architecto",
    }, operations.PostRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Branchrestriction != nil {
        // handle response
    }
}
```

## PutRepositoriesWorkspaceRepoSlugBranchRestrictionsID

Updates an existing branch restriction rule.

Fields not present in the request body are ignored.

See [`POST`](/cloud/bitbucket/rest/api-group-branch-restrictions/#api-repositories-workspace-repo-slug-branch-restrictions-post) for details.

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
    res, err := s.BranchRestrictions.PutRepositoriesWorkspaceRepoSlugBranchRestrictionsID(ctx, operations.PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIDRequest{
        RequestBody: map[string]interface{}{
            "reiciendis": "est",
        },
        ID: "aa2352c5-9559-407a-bf1a-3a2fa9467739",
        RepoSlug: "quia",
        Workspace: "quis",
    }, operations.PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Branchrestriction != nil {
        // handle response
    }
}
```
