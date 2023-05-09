# branchingModel

## Overview

The branching model resource is used to modify the branching model
for a repository.

You can use the branching model to define a branch based workflow
for your repositories. When you map your workflow to branch types,
you can ensure that branches are named consistently by configuring
which branch types to make available.


### Available Operations

* [getRepositoriesWorkspaceRepoSlugBranchingModel](#getrepositoriesworkspacereposlugbranchingmodel) - Get the branching model for a repository
* [getRepositoriesWorkspaceRepoSlugBranchingModelSettings](#getrepositoriesworkspacereposlugbranchingmodelsettings) - Get the branching model config for a repository
* [getRepositoriesWorkspaceRepoSlugEffectiveBranchingModel](#getrepositoriesworkspacereposlugeffectivebranchingmodel) - Get the effective, or currently applied, branching model for a repository
* [getWorkspacesWorkspaceProjectsProjectKeyBranchingModel](#getworkspacesworkspaceprojectsprojectkeybranchingmodel) - Get the branching model for a project
* [getWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettings](#getworkspacesworkspaceprojectsprojectkeybranchingmodelsettings) - Get the branching model config for a project
* [putRepositoriesWorkspaceRepoSlugBranchingModelSettings](#putrepositoriesworkspacereposlugbranchingmodelsettings) - Update the branching model config for a repository
* [putWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettings](#putworkspacesworkspaceprojectsprojectkeybranchingmodelsettings) - Update the branching model config for a project

## getRepositoriesWorkspaceRepoSlugBranchingModel

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugBranchingModelRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugBranchingModelResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugBranchingModelSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugBranchingModelRequest req = new GetRepositoriesWorkspaceRepoSlugBranchingModelRequest("at", "at");            

            GetRepositoriesWorkspaceRepoSlugBranchingModelResponse res = sdk.branchingModel.getRepositoriesWorkspaceRepoSlugBranchingModel(req, new GetRepositoriesWorkspaceRepoSlugBranchingModelSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.branchingModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoriesWorkspaceRepoSlugBranchingModelSettings

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsRequest req = new GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsRequest("maiores", "molestiae");            

            GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse res = sdk.branchingModel.getRepositoriesWorkspaceRepoSlugBranchingModelSettings(req, new GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.branchingModelSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoriesWorkspaceRepoSlugEffectiveBranchingModel

Get the effective, or currently applied, branching model for a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugEffectiveBranchingModelRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugEffectiveBranchingModelResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugEffectiveBranchingModelSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugEffectiveBranchingModelRequest req = new GetRepositoriesWorkspaceRepoSlugEffectiveBranchingModelRequest("quod", "quod");            

            GetRepositoriesWorkspaceRepoSlugEffectiveBranchingModelResponse res = sdk.branchingModel.getRepositoriesWorkspaceRepoSlugEffectiveBranchingModel(req, new GetRepositoriesWorkspaceRepoSlugEffectiveBranchingModelSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.effectiveRepoBranchingModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkspacesWorkspaceProjectsProjectKeyBranchingModel

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceProjectsProjectKeyBranchingModelRequest;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceProjectsProjectKeyBranchingModelResponse;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceProjectsProjectKeyBranchingModelSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkspacesWorkspaceProjectsProjectKeyBranchingModelRequest req = new GetWorkspacesWorkspaceProjectsProjectKeyBranchingModelRequest("esse", "totam");            

            GetWorkspacesWorkspaceProjectsProjectKeyBranchingModelResponse res = sdk.branchingModel.getWorkspacesWorkspaceProjectsProjectKeyBranchingModel(req, new GetWorkspacesWorkspaceProjectsProjectKeyBranchingModelSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.projectBranchingModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettings

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsRequest;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsResponse;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsRequest req = new GetWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsRequest("porro", "dolorum");            

            GetWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsResponse res = sdk.branchingModel.getWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettings(req, new GetWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.branchingModelSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putRepositoriesWorkspaceRepoSlugBranchingModelSettings

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsRequest;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsRequest req = new PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsRequest("dicta", "nam");            

            PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse res = sdk.branchingModel.putRepositoriesWorkspaceRepoSlugBranchingModelSettings(req, new PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.branchingModelSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettings

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsRequest;
import org.openapis.openapi.models.operations.PutWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsResponse;
import org.openapis.openapi.models.operations.PutWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsRequest req = new PutWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsRequest("officia", "occaecati");            

            PutWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsResponse res = sdk.branchingModel.putWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettings(req, new PutWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.branchingModelSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
