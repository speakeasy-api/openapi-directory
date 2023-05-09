# Pipelines

## Overview

Bitbucket Pipelines brings continuous delivery to Bitbucket
Cloud, empowering teams with full branching to deployment
visibility and faster feedback loops.


### Available Operations

* [CreateDeploymentVariable](#createdeploymentvariable) - Create a variable for an environment
* [CreatePipelineForRepository](#createpipelineforrepository) - Run a pipeline
* [~~CreatePipelineVariableForTeam~~](#createpipelinevariableforteam) - Create a variable for a user :warning: **Deprecated**
* [~~CreatePipelineVariableForUser~~](#createpipelinevariableforuser) - Create a variable for a user :warning: **Deprecated**
* [CreatePipelineVariableForWorkspace](#createpipelinevariableforworkspace) - Create a variable for a workspace
* [CreateRepositoryPipelineKnownHost](#createrepositorypipelineknownhost) - Create a known host
* [CreateRepositoryPipelineSchedule](#createrepositorypipelineschedule) - Create a schedule
* [CreateRepositoryPipelineVariable](#createrepositorypipelinevariable) - Create a variable for a repository
* [DeleteDeploymentVariable](#deletedeploymentvariable) - Delete a variable for an environment
* [~~DeletePipelineVariableForTeam~~](#deletepipelinevariableforteam) - Delete a variable for a team :warning: **Deprecated**
* [~~DeletePipelineVariableForUser~~](#deletepipelinevariableforuser) - Delete a variable for a user :warning: **Deprecated**
* [DeletePipelineVariableForWorkspace](#deletepipelinevariableforworkspace) - Delete a variable for a workspace
* [DeleteRepositoryPipelineCache](#deleterepositorypipelinecache) - Delete a cache
* [DeleteRepositoryPipelineCaches](#deleterepositorypipelinecaches) - Delete caches
* [DeleteRepositoryPipelineKeyPair](#deleterepositorypipelinekeypair) - Delete SSH key pair
* [DeleteRepositoryPipelineKnownHost](#deleterepositorypipelineknownhost) - Delete a known host
* [DeleteRepositoryPipelineSchedule](#deleterepositorypipelineschedule) - Delete a schedule
* [DeleteRepositoryPipelineVariable](#deleterepositorypipelinevariable) - Delete a variable for a repository
* [GetDeploymentVariables](#getdeploymentvariables) - List variables for an environment
* [GetOIDCConfiguration](#getoidcconfiguration) - Get OpenID configuration for OIDC in Pipelines
* [GetOIDCKeys](#getoidckeys) - Get keys for OIDC in Pipelines
* [GetPipelineContainerLog](#getpipelinecontainerlog) - Get the logs for the build container or a service container for a given step of a pipeline.
* [GetPipelineForRepository](#getpipelineforrepository) - Get a pipeline
* [GetPipelineStepForRepository](#getpipelinestepforrepository) - Get a step of a pipeline
* [GetPipelineStepLogForRepository](#getpipelinesteplogforrepository) - Get log file for a step
* [GetPipelineStepsForRepository](#getpipelinestepsforrepository) - List steps for a pipeline
* [GetPipelineTestReportTestCaseReasons](#getpipelinetestreporttestcasereasons) - Get test case reasons (output) for a given test case in a step of a pipeline.
* [GetPipelineTestReportTestCases](#getpipelinetestreporttestcases) - Get test cases for a given step of a pipeline.
* [GetPipelineTestReports](#getpipelinetestreports) - Get a summary of test reports for a given step of a pipeline.
* [~~GetPipelineVariableForTeam~~](#getpipelinevariableforteam) - Get a variable for a team :warning: **Deprecated**
* [~~GetPipelineVariableForUser~~](#getpipelinevariableforuser) - Get a variable for a user :warning: **Deprecated**
* [GetPipelineVariableForWorkspace](#getpipelinevariableforworkspace) - Get variable for a workspace
* [~~GetPipelineVariablesForTeam~~](#getpipelinevariablesforteam) - List variables for an account :warning: **Deprecated**
* [~~GetPipelineVariablesForUser~~](#getpipelinevariablesforuser) - List variables for a user :warning: **Deprecated**
* [GetPipelineVariablesForWorkspace](#getpipelinevariablesforworkspace) - List variables for a workspace
* [GetPipelinesForRepository](#getpipelinesforrepository) - List pipelines
* [GetRepositoryPipelineCacheContentURI](#getrepositorypipelinecachecontenturi) - Get cache content URI
* [GetRepositoryPipelineCaches](#getrepositorypipelinecaches) - List caches
* [GetRepositoryPipelineConfig](#getrepositorypipelineconfig) - Get configuration
* [GetRepositoryPipelineKnownHost](#getrepositorypipelineknownhost) - Get a known host
* [GetRepositoryPipelineKnownHosts](#getrepositorypipelineknownhosts) - List known hosts
* [GetRepositoryPipelineSchedule](#getrepositorypipelineschedule) - Get a schedule
* [GetRepositoryPipelineScheduleExecutions](#getrepositorypipelinescheduleexecutions) - List executions of a schedule
* [GetRepositoryPipelineSchedules](#getrepositorypipelineschedules) - List schedules
* [GetRepositoryPipelineSSHKeyPair](#getrepositorypipelinesshkeypair) - Get SSH key pair
* [GetRepositoryPipelineVariable](#getrepositorypipelinevariable) - Get a variable for a repository
* [GetRepositoryPipelineVariables](#getrepositorypipelinevariables) - List variables for a repository
* [StopPipeline](#stoppipeline) - Stop a pipeline
* [UpdateDeploymentVariable](#updatedeploymentvariable) - Update a variable for an environment
* [~~UpdatePipelineVariableForTeam~~](#updatepipelinevariableforteam) - Update a variable for a team :warning: **Deprecated**
* [~~UpdatePipelineVariableForUser~~](#updatepipelinevariableforuser) - Update a variable for a user :warning: **Deprecated**
* [UpdatePipelineVariableForWorkspace](#updatepipelinevariableforworkspace) - Update variable for a workspace
* [UpdateRepositoryBuildNumber](#updaterepositorybuildnumber) - Update the next build number
* [UpdateRepositoryPipelineConfig](#updaterepositorypipelineconfig) - Update configuration
* [UpdateRepositoryPipelineKeyPair](#updaterepositorypipelinekeypair) - Update SSH key pair
* [UpdateRepositoryPipelineKnownHost](#updaterepositorypipelineknownhost) - Update a known host
* [UpdateRepositoryPipelineSchedule](#updaterepositorypipelineschedule) - Update a schedule
* [UpdateRepositoryPipelineVariable](#updaterepositorypipelinevariable) - Update a variable for a repository

## CreateDeploymentVariable

Create a deployment environment level variable.

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
    res, err := s.Pipelines.CreateDeploymentVariable(ctx, operations.CreateDeploymentVariableRequest{
        RequestBody: map[string]interface{}{
            "aliquid": "quam",
            "molestias": "temporibus",
            "qui": "neque",
        },
        EnvironmentUUID: "fugit",
        RepoSlug: "magni",
        Workspace: "odio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeploymentVariable != nil {
        // handle response
    }
}
```

## CreatePipelineForRepository

Endpoint to create and initiate a pipeline.
There are a couple of different options to initiate a pipeline, where the payload of the request will determine which type of pipeline will be instantiated.
# Trigger a Pipeline for a branch
One way to trigger pipelines is by specifying the branch for which you want to trigger a pipeline.
The specified branch will be used to determine which pipeline definition from the `bitbucket-pipelines.yml` file will be applied to initiate the pipeline. The pipeline will then do a clone of the repository and checkout the latest revision of the specified branch.

### Example

```
$ curl -X POST -is -u username:password \
  -H 'Content-Type: application/json' \
 https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \
  -d '
  {
    "target": {
      "ref_type": "branch",
      "type": "pipeline_ref_target",
      "ref_name": "master"
    }
  }'
```
# Trigger a Pipeline for a commit on a branch or tag
You can initiate a pipeline for a specific commit and in the context of a specified reference (e.g. a branch, tag or bookmark).
The specified reference will be used to determine which pipeline definition from the bitbucket-pipelines.yml file will be applied to initiate the pipeline. The pipeline will clone the repository and then do a checkout the specified reference.

The following reference types are supported:

* `branch`
* `named_branch`
* `bookmark`
 * `tag`

### Example

```
$ curl -X POST -is -u username:password \
  -H 'Content-Type: application/json' \
  https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \
  -d '
  {
    "target": {
      "commit": {
        "type": "commit",
        "hash": "ce5b7431602f7cbba007062eeb55225c6e18e956"
      },
      "ref_type": "branch",
      "type": "pipeline_ref_target",
      "ref_name": "master"
    }
  }'
```
# Trigger a specific pipeline definition for a commit
You can trigger a specific pipeline that is defined in your `bitbucket-pipelines.yml` file for a specific commit.
In addition to the commit revision, you specify the type and pattern of the selector that identifies the pipeline definition. The resulting pipeline will then clone the repository and checkout the specified revision.

### Example

```
$ curl -X POST -is -u username:password \
  -H 'Content-Type: application/json' \
 https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \
 -d '
  {
     "target": {
      "commit": {
         "hash":"a3c4e02c9a3755eccdc3764e6ea13facdf30f923",
         "type":"commit"
       },
        "selector": {
           "type":"custom",
              "pattern":"Deploy to production"
          },
        "type":"pipeline_commit_target"
   }
  }'
```
# Trigger a specific pipeline definition for a commit on a branch or tag
You can trigger a specific pipeline that is defined in your `bitbucket-pipelines.yml` file for a specific commit in the context of a specified reference.
In addition to the commit revision, you specify the type and pattern of the selector that identifies the pipeline definition, as well as the reference information. The resulting pipeline will then clone the repository a checkout the specified reference.

### Example

```
$ curl -X POST -is -u username:password \
  -H 'Content-Type: application/json' \
 https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \
 -d '
  {
     "target": {
      "commit": {
         "hash":"a3c4e02c9a3755eccdc3764e6ea13facdf30f923",
         "type":"commit"
       },
       "selector": {
          "type": "custom",
          "pattern": "Deploy to production"
       },
       "type": "pipeline_ref_target",
       "ref_name": "master",
       "ref_type": "branch"
     }
  }'
```


# Trigger a custom pipeline with variables
In addition to triggering a custom pipeline that is defined in your `bitbucket-pipelines.yml` file as shown in the examples above, you can specify variables that will be available for your build. In the request, provide a list of variables, specifying the following for each variable: key, value, and whether it should be secured or not (this field is optional and defaults to not secured).

### Example

```
$ curl -X POST -is -u username:password \
  -H 'Content-Type: application/json' \
 https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines/ \
 -d '
  {
    "target": {
      "type": "pipeline_ref_target",
      "ref_type": "branch",
      "ref_name": "master",
      "selector": {
        "type": "custom",
        "pattern": "Deploy to production"
      }
    },
    "variables": [
      {
        "key": "var1key",
        "value": "var1value",
        "secured": true
      },
      {
        "key": "var2key",
        "value": "var2value"
      }
    ]
  }'
```

# Trigger a pull request pipeline

You can also initiate a pipeline for a specific pull request.

### Example

```
$ curl -X POST -is -u username:password \
  -H 'Content-Type: application/json' \
 https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines/ \
 -d '
  {
	"target": {
      "type": "pipeline_pullrequest_target",
	  "source": "pull-request-branch",
      "destination": "master",
      "destination_commit": {
      	 "hash" : "9f848b7"
      },
      "commit": {
      	"hash" : "1a372fc"
      },
      "pullrequest" : {
      	"id" : "3"
      },
	  "selector": {
        "type": "pull-requests",
        "pattern": "**"
      }
    }
  }'
```


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
    res, err := s.Pipelines.CreatePipelineForRepository(ctx, operations.CreatePipelineForRepositoryRequest{
        RequestBody: map[string]interface{}{
            "ullam": "nam",
        },
        RepoSlug: "hic",
        Workspace: "voluptatem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Pipeline != nil {
        // handle response
    }
}
```

## ~~CreatePipelineVariableForTeam~~

Create an account level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Pipelines.CreatePipelineVariableForTeam(ctx, operations.CreatePipelineVariableForTeamRequest{
        RequestBody: map[string]interface{}{
            "soluta": "nobis",
            "et": "saepe",
            "ipsum": "veritatis",
            "nobis": "quos",
        },
        Username: "Mose96",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PipelineVariable != nil {
        // handle response
    }
}
```

## ~~CreatePipelineVariableForUser~~

Create a user level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Pipelines.CreatePipelineVariableForUser(ctx, operations.CreatePipelineVariableForUserRequest{
        RequestBody: map[string]interface{}{
            "dolore": "labore",
        },
        SelectedUser: "adipisci",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PipelineVariable != nil {
        // handle response
    }
}
```

## CreatePipelineVariableForWorkspace

Create a workspace level variable.

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
    res, err := s.Pipelines.CreatePipelineVariableForWorkspace(ctx, operations.CreatePipelineVariableForWorkspaceRequest{
        RequestBody: map[string]interface{}{
            "architecto": "quae",
            "aut": "quas",
            "itaque": "consequatur",
        },
        Workspace: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PipelineVariable != nil {
        // handle response
    }
}
```

## CreateRepositoryPipelineKnownHost

Create a repository level known host.

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
    res, err := s.Pipelines.CreateRepositoryPipelineKnownHost(ctx, operations.CreateRepositoryPipelineKnownHostRequest{
        RequestBody: map[string]interface{}{
            "porro": "doloribus",
            "ut": "facilis",
            "cupiditate": "qui",
            "quae": "laudantium",
        },
        RepoSlug: "odio",
        Workspace: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PipelineKnownHost != nil {
        // handle response
    }
}
```

## CreateRepositoryPipelineSchedule

Create a schedule for the given repository.

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
    res, err := s.Pipelines.CreateRepositoryPipelineSchedule(ctx, operations.CreateRepositoryPipelineScheduleRequest{
        RequestBody: map[string]interface{}{
            "quisquam": "vero",
            "omnis": "quis",
            "ipsum": "delectus",
            "voluptate": "consectetur",
        },
        RepoSlug: "vero",
        Workspace: "tenetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PipelineSchedule != nil {
        // handle response
    }
}
```

## CreateRepositoryPipelineVariable

Create a repository level variable.

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
    res, err := s.Pipelines.CreateRepositoryPipelineVariable(ctx, operations.CreateRepositoryPipelineVariableRequest{
        RequestBody: map[string]interface{}{
            "hic": "distinctio",
            "quod": "odio",
        },
        RepoSlug: "similique",
        Workspace: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PipelineVariable != nil {
        // handle response
    }
}
```

## DeleteDeploymentVariable

Delete a deployment environment level variable.

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
    res, err := s.Pipelines.DeleteDeploymentVariable(ctx, operations.DeleteDeploymentVariableRequest{
        EnvironmentUUID: "vero",
        RepoSlug: "ducimus",
        VariableUUID: "dolore",
        Workspace: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~DeletePipelineVariableForTeam~~

Delete a team level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Pipelines.DeletePipelineVariableForTeam(ctx, operations.DeletePipelineVariableForTeamRequest{
        Username: "Rosina_Dickinson",
        VariableUUID: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~DeletePipelineVariableForUser~~

Delete an account level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Pipelines.DeletePipelineVariableForUser(ctx, operations.DeletePipelineVariableForUserRequest{
        SelectedUser: "voluptatibus",
        VariableUUID: "exercitationem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeletePipelineVariableForWorkspace

Delete a workspace level variable.

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
    res, err := s.Pipelines.DeletePipelineVariableForWorkspace(ctx, operations.DeletePipelineVariableForWorkspaceRequest{
        VariableUUID: "nulla",
        Workspace: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteRepositoryPipelineCache

Delete a repository cache.

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
    res, err := s.Pipelines.DeleteRepositoryPipelineCache(ctx, operations.DeleteRepositoryPipelineCacheRequest{
        CacheUUID: "porro",
        RepoSlug: "maiores",
        Workspace: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteRepositoryPipelineCaches

Delete repository cache versions by name.

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
    res, err := s.Pipelines.DeleteRepositoryPipelineCaches(ctx, operations.DeleteRepositoryPipelineCachesRequest{
        Name: "Miss Vicky Kuphal",
        RepoSlug: "ipsam",
        Workspace: "ea",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteRepositoryPipelineKeyPair

Delete the repository SSH key pair.

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
    res, err := s.Pipelines.DeleteRepositoryPipelineKeyPair(ctx, operations.DeleteRepositoryPipelineKeyPairRequest{
        RepoSlug: "aspernatur",
        Workspace: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteRepositoryPipelineKnownHost

Delete a repository level known host.

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
    res, err := s.Pipelines.DeleteRepositoryPipelineKnownHost(ctx, operations.DeleteRepositoryPipelineKnownHostRequest{
        KnownHostUUID: "possimus",
        RepoSlug: "magnam",
        Workspace: "ratione",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteRepositoryPipelineSchedule

Delete a schedule.

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
    res, err := s.Pipelines.DeleteRepositoryPipelineSchedule(ctx, operations.DeleteRepositoryPipelineScheduleRequest{
        RepoSlug: "ex",
        ScheduleUUID: "laudantium",
        Workspace: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteRepositoryPipelineVariable

Delete a repository level variable.

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
    res, err := s.Pipelines.DeleteRepositoryPipelineVariable(ctx, operations.DeleteRepositoryPipelineVariableRequest{
        RepoSlug: "dolor",
        VariableUUID: "maiores",
        Workspace: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDeploymentVariables

Find deployment environment level variables.

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
    res, err := s.Pipelines.GetDeploymentVariables(ctx, operations.GetDeploymentVariablesRequest{
        EnvironmentUUID: "ex",
        RepoSlug: "nulla",
        Workspace: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedDeploymentVariable != nil {
        // handle response
    }
}
```

## GetOIDCConfiguration

This is part of OpenID Connect for Pipelines, see https://support.atlassian.com/bitbucket-cloud/docs/integrate-pipelines-with-resource-servers-using-oidc/

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
    res, err := s.Pipelines.GetOIDCConfiguration(ctx, operations.GetOIDCConfigurationRequest{
        Workspace: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOIDCKeys

This is part of OpenID Connect for Pipelines, see https://support.atlassian.com/bitbucket-cloud/docs/integrate-pipelines-with-resource-servers-using-oidc/

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
    res, err := s.Pipelines.GetOIDCKeys(ctx, operations.GetOIDCKeysRequest{
        Workspace: "nostrum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPipelineContainerLog

Retrieve the log file for a build container or service container.

This endpoint supports (and encourages!) the use of [HTTP Range requests](https://tools.ietf.org/html/rfc7233) to deal with potentially very large log files.

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
    res, err := s.Pipelines.GetPipelineContainerLog(ctx, operations.GetPipelineContainerLogRequest{
        LogUUID: "sapiente",
        PipelineUUID: "quisquam",
        RepoSlug: "saepe",
        StepUUID: "ea",
        Workspace: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPipelineForRepository

Retrieve a specified pipeline

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
    res, err := s.Pipelines.GetPipelineForRepository(ctx, operations.GetPipelineForRepositoryRequest{
        PipelineUUID: "corporis",
        RepoSlug: "veniam",
        Workspace: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Pipeline != nil {
        // handle response
    }
}
```

## GetPipelineStepForRepository

Retrieve a given step of a pipeline.

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
    res, err := s.Pipelines.GetPipelineStepForRepository(ctx, operations.GetPipelineStepForRepositoryRequest{
        PipelineUUID: "inventore",
        RepoSlug: "magnam",
        StepUUID: "ea",
        Workspace: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PipelineStep != nil {
        // handle response
    }
}
```

## GetPipelineStepLogForRepository

Retrieve the log file for a given step of a pipeline.

This endpoint supports (and encourages!) the use of [HTTP Range requests](https://tools.ietf.org/html/rfc7233) to deal with potentially very large log files.

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
    res, err := s.Pipelines.GetPipelineStepLogForRepository(ctx, operations.GetPipelineStepLogForRepositoryRequest{
        PipelineUUID: "consectetur",
        RepoSlug: "recusandae",
        StepUUID: "aspernatur",
        Workspace: "minima",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPipelineStepsForRepository

Find steps for the given pipeline.

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
    res, err := s.Pipelines.GetPipelineStepsForRepository(ctx, operations.GetPipelineStepsForRepositoryRequest{
        PipelineUUID: "eaque",
        RepoSlug: "a",
        Workspace: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedPipelineSteps != nil {
        // handle response
    }
}
```

## GetPipelineTestReportTestCaseReasons

Get test case reasons (output) for a given test case in a step of a pipeline.

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
    res, err := s.Pipelines.GetPipelineTestReportTestCaseReasons(ctx, operations.GetPipelineTestReportTestCaseReasonsRequest{
        PipelineUUID: "aut",
        RepoSlug: "aut",
        StepUUID: "deleniti",
        TestCaseUUID: "impedit",
        Workspace: "aliquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPipelineTestReportTestCases

Get test cases for a given step of a pipeline.

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
    res, err := s.Pipelines.GetPipelineTestReportTestCases(ctx, operations.GetPipelineTestReportTestCasesRequest{
        PipelineUUID: "fugit",
        RepoSlug: "accusamus",
        StepUUID: "inventore",
        Workspace: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPipelineTestReports

Get a summary of test reports for a given step of a pipeline.

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
    res, err := s.Pipelines.GetPipelineTestReports(ctx, operations.GetPipelineTestReportsRequest{
        PipelineUUID: "et",
        RepoSlug: "dolorum",
        StepUUID: "laborum",
        Workspace: "placeat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~GetPipelineVariableForTeam~~

Retrieve a team level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Pipelines.GetPipelineVariableForTeam(ctx, operations.GetPipelineVariableForTeamRequest{
        Username: "Dejon_Kemmer",
        VariableUUID: "quas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PipelineVariable != nil {
        // handle response
    }
}
```

## ~~GetPipelineVariableForUser~~

Retrieve a user level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Pipelines.GetPipelineVariableForUser(ctx, operations.GetPipelineVariableForUserRequest{
        SelectedUser: "assumenda",
        VariableUUID: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PipelineVariable != nil {
        // handle response
    }
}
```

## GetPipelineVariableForWorkspace

Retrieve a workspace level variable.

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
    res, err := s.Pipelines.GetPipelineVariableForWorkspace(ctx, operations.GetPipelineVariableForWorkspaceRequest{
        VariableUUID: "voluptas",
        Workspace: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PipelineVariable != nil {
        // handle response
    }
}
```

## ~~GetPipelineVariablesForTeam~~

Find account level variables.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Pipelines.GetPipelineVariablesForTeam(ctx, operations.GetPipelineVariablesForTeamRequest{
        Username: "Ava13",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedPipelineVariables != nil {
        // handle response
    }
}
```

## ~~GetPipelineVariablesForUser~~

Find user level variables.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Pipelines.GetPipelineVariablesForUser(ctx, operations.GetPipelineVariablesForUserRequest{
        SelectedUser: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedPipelineVariables != nil {
        // handle response
    }
}
```

## GetPipelineVariablesForWorkspace

Find workspace level variables.

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
    res, err := s.Pipelines.GetPipelineVariablesForWorkspace(ctx, operations.GetPipelineVariablesForWorkspaceRequest{
        Workspace: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedPipelineVariables != nil {
        // handle response
    }
}
```

## GetPipelinesForRepository

Find pipelines

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
    res, err := s.Pipelines.GetPipelinesForRepository(ctx, operations.GetPipelinesForRepositoryRequest{
        RepoSlug: "molestiae",
        Workspace: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedPipelines != nil {
        // handle response
    }
}
```

## GetRepositoryPipelineCacheContentURI

Retrieve the URI of the content of the specified cache.

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
    res, err := s.Pipelines.GetRepositoryPipelineCacheContentURI(ctx, operations.GetRepositoryPipelineCacheContentURIRequest{
        CacheUUID: "odio",
        RepoSlug: "eius",
        Workspace: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PipelineCacheContentURI != nil {
        // handle response
    }
}
```

## GetRepositoryPipelineCaches

Retrieve the repository pipelines caches.

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
    res, err := s.Pipelines.GetRepositoryPipelineCaches(ctx, operations.GetRepositoryPipelineCachesRequest{
        RepoSlug: "esse",
        Workspace: "rem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedPipelineCaches != nil {
        // handle response
    }
}
```

## GetRepositoryPipelineConfig

Retrieve the repository pipelines configuration.

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
    res, err := s.Pipelines.GetRepositoryPipelineConfig(ctx, operations.GetRepositoryPipelineConfigRequest{
        RepoSlug: "fuga",
        Workspace: "reprehenderit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PipelinesConfig != nil {
        // handle response
    }
}
```

## GetRepositoryPipelineKnownHost

Retrieve a repository level known host.

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
    res, err := s.Pipelines.GetRepositoryPipelineKnownHost(ctx, operations.GetRepositoryPipelineKnownHostRequest{
        KnownHostUUID: "quidem",
        RepoSlug: "fugiat",
        Workspace: "ut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PipelineKnownHost != nil {
        // handle response
    }
}
```

## GetRepositoryPipelineKnownHosts

Find repository level known hosts.

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
    res, err := s.Pipelines.GetRepositoryPipelineKnownHosts(ctx, operations.GetRepositoryPipelineKnownHostsRequest{
        RepoSlug: "eum",
        Workspace: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedPipelineKnownHosts != nil {
        // handle response
    }
}
```

## GetRepositoryPipelineSchedule

Retrieve a schedule by its UUID.

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
    res, err := s.Pipelines.GetRepositoryPipelineSchedule(ctx, operations.GetRepositoryPipelineScheduleRequest{
        RepoSlug: "assumenda",
        ScheduleUUID: "eos",
        Workspace: "praesentium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PipelineSchedule != nil {
        // handle response
    }
}
```

## GetRepositoryPipelineScheduleExecutions

Retrieve the executions of a given schedule.

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
    res, err := s.Pipelines.GetRepositoryPipelineScheduleExecutions(ctx, operations.GetRepositoryPipelineScheduleExecutionsRequest{
        RepoSlug: "quisquam",
        ScheduleUUID: "veritatis",
        Workspace: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedPipelineScheduleExecutions != nil {
        // handle response
    }
}
```

## GetRepositoryPipelineSchedules

Retrieve the configured schedules for the given repository.

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
    res, err := s.Pipelines.GetRepositoryPipelineSchedules(ctx, operations.GetRepositoryPipelineSchedulesRequest{
        RepoSlug: "id",
        Workspace: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedPipelineSchedules != nil {
        // handle response
    }
}
```

## GetRepositoryPipelineSSHKeyPair

Retrieve the repository SSH key pair excluding the SSH private key. The private key is a write only field and will never be exposed in the logs or the REST API.

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
    res, err := s.Pipelines.GetRepositoryPipelineSSHKeyPair(ctx, operations.GetRepositoryPipelineSSHKeyPairRequest{
        RepoSlug: "neque",
        Workspace: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PipelineSSHKeyPair != nil {
        // handle response
    }
}
```

## GetRepositoryPipelineVariable

Retrieve a repository level variable.

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
    res, err := s.Pipelines.GetRepositoryPipelineVariable(ctx, operations.GetRepositoryPipelineVariableRequest{
        RepoSlug: "illum",
        VariableUUID: "quo",
        Workspace: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PipelineVariable != nil {
        // handle response
    }
}
```

## GetRepositoryPipelineVariables

Find repository level variables.

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
    res, err := s.Pipelines.GetRepositoryPipelineVariables(ctx, operations.GetRepositoryPipelineVariablesRequest{
        RepoSlug: "eius",
        Workspace: "eos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedPipelineVariables != nil {
        // handle response
    }
}
```

## StopPipeline

Signal the stop of a pipeline and all of its steps that not have completed yet.

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
    res, err := s.Pipelines.StopPipeline(ctx, operations.StopPipelineRequest{
        PipelineUUID: "voluptas",
        RepoSlug: "ab",
        Workspace: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateDeploymentVariable

Update a deployment environment level variable.

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
    res, err := s.Pipelines.UpdateDeploymentVariable(ctx, operations.UpdateDeploymentVariableRequest{
        RequestBody: map[string]interface{}{
            "tempora": "debitis",
        },
        EnvironmentUUID: "ipsam",
        RepoSlug: "aspernatur",
        VariableUUID: "sequi",
        Workspace: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeploymentVariable != nil {
        // handle response
    }
}
```

## ~~UpdatePipelineVariableForTeam~~

Update a team level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Pipelines.UpdatePipelineVariableForTeam(ctx, operations.UpdatePipelineVariableForTeamRequest{
        RequestBody: map[string]interface{}{
            "recusandae": "aperiam",
            "distinctio": "quod",
        },
        Username: "Jennings_Blick",
        VariableUUID: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PipelineVariable != nil {
        // handle response
    }
}
```

## ~~UpdatePipelineVariableForUser~~

Update a user level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Pipelines.UpdatePipelineVariableForUser(ctx, operations.UpdatePipelineVariableForUserRequest{
        RequestBody: map[string]interface{}{
            "odio": "occaecati",
            "commodi": "sapiente",
        },
        SelectedUser: "dolores",
        VariableUUID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PipelineVariable != nil {
        // handle response
    }
}
```

## UpdatePipelineVariableForWorkspace

Update a workspace level variable.

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
    res, err := s.Pipelines.UpdatePipelineVariableForWorkspace(ctx, operations.UpdatePipelineVariableForWorkspaceRequest{
        RequestBody: map[string]interface{}{
            "accusantium": "porro",
            "eum": "quas",
        },
        VariableUUID: "praesentium",
        Workspace: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PipelineVariable != nil {
        // handle response
    }
}
```

## UpdateRepositoryBuildNumber

Update the next build number that should be assigned to a pipeline. The next build number that will be configured has to be strictly higher than the current latest build number for this repository.

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
    res, err := s.Pipelines.UpdateRepositoryBuildNumber(ctx, operations.UpdateRepositoryBuildNumberRequest{
        RequestBody: map[string]interface{}{
            "fugit": "fuga",
            "mollitia": "incidunt",
            "atque": "explicabo",
        },
        RepoSlug: "minima",
        Workspace: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PipelineBuildNumber != nil {
        // handle response
    }
}
```

## UpdateRepositoryPipelineConfig

Update the pipelines configuration for a repository.

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
    res, err := s.Pipelines.UpdateRepositoryPipelineConfig(ctx, operations.UpdateRepositoryPipelineConfigRequest{
        RequestBody: map[string]interface{}{
            "sapiente": "consequuntur",
        },
        RepoSlug: "ratione",
        Workspace: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PipelinesConfig != nil {
        // handle response
    }
}
```

## UpdateRepositoryPipelineKeyPair

Create or update the repository SSH key pair. The private key will be set as a default SSH identity in your build container.

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
    res, err := s.Pipelines.UpdateRepositoryPipelineKeyPair(ctx, operations.UpdateRepositoryPipelineKeyPairRequest{
        RequestBody: map[string]interface{}{
            "occaecati": "atque",
            "et": "esse",
            "eveniet": "accusamus",
            "veritatis": "esse",
        },
        RepoSlug: "quod",
        Workspace: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PipelineSSHKeyPair != nil {
        // handle response
    }
}
```

## UpdateRepositoryPipelineKnownHost

Update a repository level known host.

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
    res, err := s.Pipelines.UpdateRepositoryPipelineKnownHost(ctx, operations.UpdateRepositoryPipelineKnownHostRequest{
        RequestBody: map[string]interface{}{
            "aliquid": "quasi",
            "saepe": "vel",
            "harum": "molestiae",
            "rerum": "occaecati",
        },
        KnownHostUUID: "minima",
        RepoSlug: "distinctio",
        Workspace: "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PipelineKnownHost != nil {
        // handle response
    }
}
```

## UpdateRepositoryPipelineSchedule

Update a schedule.

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
    res, err := s.Pipelines.UpdateRepositoryPipelineSchedule(ctx, operations.UpdateRepositoryPipelineScheduleRequest{
        RequestBody: map[string]interface{}{
            "culpa": "tempore",
        },
        RepoSlug: "adipisci",
        ScheduleUUID: "cumque",
        Workspace: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PipelineSchedule != nil {
        // handle response
    }
}
```

## UpdateRepositoryPipelineVariable

Update a repository level variable.

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
    res, err := s.Pipelines.UpdateRepositoryPipelineVariable(ctx, operations.UpdateRepositoryPipelineVariableRequest{
        RequestBody: map[string]interface{}{
            "minus": "quaerat",
        },
        RepoSlug: "sapiente",
        VariableUUID: "consectetur",
        Workspace: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PipelineVariable != nil {
        // handle response
    }
}
```
