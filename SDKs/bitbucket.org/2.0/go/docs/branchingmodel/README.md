# BranchingModel

## Overview

The branching model resource is used to modify the branching model
for a repository.

You can use the branching model to define a branch based workflow
for your repositories. When you map your workflow to branch types,
you can ensure that branches are named consistently by configuring
which branch types to make available.


### Available Operations

* [GetRepositoriesWorkspaceRepoSlugBranchingModel](#getrepositoriesworkspacereposlugbranchingmodel) - Get the branching model for a repository
* [GetRepositoriesWorkspaceRepoSlugBranchingModelSettings](#getrepositoriesworkspacereposlugbranchingmodelsettings) - Get the branching model config for a repository
* [GetRepositoriesWorkspaceRepoSlugEffectiveBranchingModel](#getrepositoriesworkspacereposlugeffectivebranchingmodel) - Get the effective, or currently applied, branching model for a repository
* [GetWorkspacesWorkspaceProjectsProjectKeyBranchingModel](#getworkspacesworkspaceprojectsprojectkeybranchingmodel) - Get the branching model for a project
* [GetWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettings](#getworkspacesworkspaceprojectsprojectkeybranchingmodelsettings) - Get the branching model config for a project
* [PutRepositoriesWorkspaceRepoSlugBranchingModelSettings](#putrepositoriesworkspacereposlugbranchingmodelsettings) - Update the branching model config for a repository
* [PutWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettings](#putworkspacesworkspaceprojectsprojectkeybranchingmodelsettings) - Update the branching model config for a project

## GetRepositoriesWorkspaceRepoSlugBranchingModel

Return the branching model as applied to the repository. This view is
read-only. The branching model settings can be changed using the
[settings](#api-repositories-workspace-repo-slug-branching-model-settings-get) API.

The returned object:

1. Always has a `development` property. `development.branch` contains
   the actual repository branch object that is considered to be the
   `development` branch. `development.branch` will not be present
   if it does not exist.
2. Might have a `production` property. `production` will not
   be present when `production` is disabled.
   `production.branch` contains the actual branch object that is
   considered to be the `production` branch. `production.branch` will
   not be present if it does not exist.
3. Always has a `branch_types` array which contains all enabled branch
   types.

Example body:

```
{
  "development": {
    "name": "master",
    "branch": {
      "type": "branch",
      "name": "master",
      "target": {
        "hash": "16dffcb0de1b22e249db6799532074cf32efe80f"
      }
    },
    "use_mainbranch": true
  },
  "production": {
    "name": "production",
    "branch": {
      "type": "branch",
      "name": "production",
      "target": {
        "hash": "16dffcb0de1b22e249db6799532074cf32efe80f"
      }
    },
    "use_mainbranch": false
  },
  "branch_types": [
    {
      "kind": "release",
      "prefix": "release/"
    },
    {
      "kind": "hotfix",
      "prefix": "hotfix/"
    },
    {
      "kind": "feature",
      "prefix": "feature/"
    },
    {
      "kind": "bugfix",
      "prefix": "bugfix/"
    }
  ],
  "type": "branching_model",
  "links": {
    "self": {
      "href": "https://api.bitbucket.org/.../branching-model"
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
    res, err := s.BranchingModel.GetRepositoriesWorkspaceRepoSlugBranchingModel(ctx, operations.GetRepositoriesWorkspaceRepoSlugBranchingModelRequest{
        RepoSlug: "vitae",
        Workspace: "laborum",
    }, operations.GetRepositoriesWorkspaceRepoSlugBranchingModelSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BranchingModel != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugBranchingModelSettings

Return the branching model configuration for a repository. The returned
object:

1. Always has a `development` property for the development branch.
2. Always a `production` property for the production branch. The
   production branch can be disabled.
3. The `branch_types` contains all the branch types.

This is the raw configuration for the branching model. A client
wishing to see the branching model with its actual current branches may
find the [active model API](/cloud/bitbucket/rest/api-group-branching-model/#api-repositories-workspace-repo-slug-branching-model-get) more useful.

Example body:

```
{
  "development": {
    "is_valid": true,
    "name": null,
    "use_mainbranch": true
  },
  "production": {
    "is_valid": true,
    "name": "production",
    "use_mainbranch": false,
    "enabled": false
  },
  "branch_types": [
    {
      "kind": "release",
      "enabled": true,
      "prefix": "release/"
    },
    {
      "kind": "hotfix",
      "enabled": true,
      "prefix": "hotfix/"
    },
    {
      "kind": "feature",
      "enabled": true,
      "prefix": "feature/"
    },
    {
      "kind": "bugfix",
      "enabled": false,
      "prefix": "bugfix/"
    }
  ],
  "type": "branching_model_settings",
  "links": {
    "self": {
      "href": "https://api.bitbucket.org/.../branching-model/settings"
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
    res, err := s.BranchingModel.GetRepositoriesWorkspaceRepoSlugBranchingModelSettings(ctx, operations.GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsRequest{
        RepoSlug: "animi",
        Workspace: "enim",
    }, operations.GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BranchingModelSettings != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugEffectiveBranchingModel

Get the effective, or currently applied, branching model for a repository

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
    res, err := s.BranchingModel.GetRepositoriesWorkspaceRepoSlugEffectiveBranchingModel(ctx, operations.GetRepositoriesWorkspaceRepoSlugEffectiveBranchingModelRequest{
        RepoSlug: "odit",
        Workspace: "quo",
    }, operations.GetRepositoriesWorkspaceRepoSlugEffectiveBranchingModelSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EffectiveRepoBranchingModel != nil {
        // handle response
    }
}
```

## GetWorkspacesWorkspaceProjectsProjectKeyBranchingModel

Return the branching model set at the project level. This view is
read-only. The branching model settings can be changed using the
[settings](#api-workspaces-workspace-projects-project-key-branching-model-settings-get)
API.

The returned object:

1. Always has a `development` property. `development.name` is
   the user-specified branch that can be inherited by an individual repository's
   branching model.
2. Might have a `production` property. `production` will not
   be present when `production` is disabled.
   `production.name` is the user-specified branch that can be
   inherited by an individual repository's branching model.
3. Always has a `branch_types` array which contains all enabled branch
   types.

Example body:

```
{
  "development": {
    "name": "master",
    "use_mainbranch": true
  },
  "production": {
    "name": "production",
    "use_mainbranch": false
  },
  "branch_types": [
    {
      "kind": "release",
      "prefix": "release/"
    },
    {
      "kind": "hotfix",
      "prefix": "hotfix/"
    },
    {
      "kind": "feature",
      "prefix": "feature/"
    },
    {
      "kind": "bugfix",
      "prefix": "bugfix/"
    }
  ],
  "type": "project_branching_model",
  "links": {
    "self": {
      "href": "https://api.bitbucket.org/.../branching-model"
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
    res, err := s.BranchingModel.GetWorkspacesWorkspaceProjectsProjectKeyBranchingModel(ctx, operations.GetWorkspacesWorkspaceProjectsProjectKeyBranchingModelRequest{
        ProjectKey: "sequi",
        Workspace: "tenetur",
    }, operations.GetWorkspacesWorkspaceProjectsProjectKeyBranchingModelSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectBranchingModel != nil {
        // handle response
    }
}
```

## GetWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettings

Return the branching model configuration for a project. The returned
object:

1. Always has a `development` property for the development branch.
2. Always a `production` property for the production branch. The
   production branch can be disabled.
3. The `branch_types` contains all the branch types.


This is the raw configuration for the branching model. A client
wishing to see the branching model with its actual current branches may find the
[active model API](#api-workspaces-workspace-projects-project-key-branching-model-get)
more useful.

Example body:

```
{
  "development": {
    "name": null,
    "use_mainbranch": true
  },
  "production": {
    "name": "production",
    "use_mainbranch": false,
    "enabled": false
  },
  "branch_types": [
    {
      "kind": "release",
      "enabled": true,
      "prefix": "release/"
    },
    {
      "kind": "hotfix",
      "enabled": true,
      "prefix": "hotfix/"
    },
    {
      "kind": "feature",
      "enabled": true,
      "prefix": "feature/"
    },
    {
      "kind": "bugfix",
      "enabled": false,
      "prefix": "bugfix/"
    }
  ],
  "type": "branching_model_settings",
  "links": {
    "self": {
      "href": "https://api.bitbucket.org/.../branching-model/settings"
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
    res, err := s.BranchingModel.GetWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettings(ctx, operations.GetWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsRequest{
        ProjectKey: "ipsam",
        Workspace: "id",
    }, operations.GetWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BranchingModelSettings != nil {
        // handle response
    }
}
```

## PutRepositoriesWorkspaceRepoSlugBranchingModelSettings

Update the branching model configuration for a repository.

The `development` branch can be configured to a specific branch or to
track the main branch. When set to a specific branch it must
currently exist. Only the passed properties will be updated. The
properties not passed will be left unchanged. A request without a
`development` property will leave the development branch unchanged.

It is possible for the `development` branch to be invalid. This
happens when it points at a specific branch that has been
deleted. This is indicated in the `is_valid` field for the branch. It is
not possible to update the settings for `development` if that
would leave the branch in an invalid state. Such a request will be
rejected.

The `production` branch can be a specific branch, the main
branch or disabled. When set to a specific branch it must currently
exist. The `enabled` property can be used to enable (`true`) or
disable (`false`) it. Only the passed properties will be updated. The
properties not passed will be left unchanged. A request without a
`production` property will leave the production branch unchanged.

It is possible for the `production` branch to be invalid. This
happens when it points at a specific branch that has been
deleted. This is indicated in the `is_valid` field for the branch. A
request that would leave `production` enabled and invalid will be
rejected. It is possible to update `production` and make it invalid if
it would also be left disabled.

The `branch_types` property contains the branch types to be updated.
Only the branch types passed will be updated. All updates will be
rejected if it would leave the branching model in an invalid state.
For branch types this means that:

1. The prefixes for all enabled branch types are valid. For example,
   it is not possible to use '*' inside a Git prefix.
2. A prefix of an enabled branch type must not be a prefix of another
   enabled branch type. This is to ensure that a branch can be easily
   classified by its prefix unambiguously.

It is possible to store an invalid prefix if that branch type would be
left disabled. Only the passed properties will be updated. The
properties not passed will be left unchanged. Each branch type must
have a `kind` property to identify it.

Example Body:

```
    {
      "development": {
        "use_mainbranch": true
      },
      "production": {
        "enabled": true,
        "use_mainbranch": false,
        "name": "production"
      },
      "branch_types": [
        {
          "kind": "bugfix",
          "enabled": true,
          "prefix": "bugfix/"
        },
        {
          "kind": "feature",
          "enabled": true,
          "prefix": "feature/"
        },
        {
          "kind": "hotfix",
          "prefix": "hotfix/"
        },
        {
          "kind": "release",
          "enabled": false,
        }
      ]
    }
```

There is currently a side effect when using this API endpoint. If the
repository is inheriting branching model settings from its project,
updating the branching model for this repository will disable the
project setting inheritance.


We have deprecated this side effect and will remove it on 1 August 2022.

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
    res, err := s.BranchingModel.PutRepositoriesWorkspaceRepoSlugBranchingModelSettings(ctx, operations.PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsRequest{
        RepoSlug: "possimus",
        Workspace: "aut",
    }, operations.PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BranchingModelSettings != nil {
        // handle response
    }
}
```

## PutWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettings

Update the branching model configuration for a project.

The `development` branch can be configured to a specific branch or to
track the main branch. Any branch name can be supplied, but will only
successfully be applied to a repository via inheritance if that branch
exists for that repository. Only the passed properties will be updated. The
properties not passed will be left unchanged. A request without a
`development` property will leave the development branch unchanged.

The `production` branch can be a specific branch, the main
branch or disabled. Any branch name can be supplied, but will only
successfully be applied to a repository via inheritance if that branch
exists for that repository. The `enabled` property can be used to enable (`true`)
or disable (`false`) it. Only the passed properties will be updated. The
properties not passed will be left unchanged. A request without a
`production` property will leave the production branch unchanged.

The `branch_types` property contains the branch types to be updated.
Only the branch types passed will be updated. All updates will be
rejected if it would leave the branching model in an invalid state.
For branch types this means that:

1. The prefixes for all enabled branch types are valid. For example,
   it is not possible to use '*' inside a Git prefix.
2. A prefix of an enabled branch type must not be a prefix of another
   enabled branch type. This is to ensure that a branch can be easily
   classified by its prefix unambiguously.

It is possible to store an invalid prefix if that branch type would be
left disabled. Only the passed properties will be updated. The
properties not passed will be left unchanged. Each branch type must
have a `kind` property to identify it.

Example Body:

```
    {
      "development": {
        "use_mainbranch": true
      },
      "production": {
        "enabled": true,
        "use_mainbranch": false,
        "name": "production"
      },
      "branch_types": [
        {
          "kind": "bugfix",
          "enabled": true,
          "prefix": "bugfix/"
        },
        {
          "kind": "feature",
          "enabled": true,
          "prefix": "feature/"
        },
        {
          "kind": "hotfix",
          "prefix": "hotfix/"
        },
        {
          "kind": "release",
          "enabled": false,
        }
      ]
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
    res, err := s.BranchingModel.PutWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettings(ctx, operations.PutWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsRequest{
        ProjectKey: "quasi",
        Workspace: "error",
    }, operations.PutWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BranchingModelSettings != nil {
        // handle response
    }
}
```
