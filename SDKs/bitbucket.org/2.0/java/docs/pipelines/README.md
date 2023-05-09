# pipelines

## Overview

Bitbucket Pipelines brings continuous delivery to Bitbucket
Cloud, empowering teams with full branching to deployment
visibility and faster feedback loops.


### Available Operations

* [createDeploymentVariable](#createdeploymentvariable) - Create a variable for an environment
* [createPipelineForRepository](#createpipelineforrepository) - Run a pipeline
* [~~createPipelineVariableForTeam~~](#createpipelinevariableforteam) - Create a variable for a user :warning: **Deprecated**
* [~~createPipelineVariableForUser~~](#createpipelinevariableforuser) - Create a variable for a user :warning: **Deprecated**
* [createPipelineVariableForWorkspace](#createpipelinevariableforworkspace) - Create a variable for a workspace
* [createRepositoryPipelineKnownHost](#createrepositorypipelineknownhost) - Create a known host
* [createRepositoryPipelineSchedule](#createrepositorypipelineschedule) - Create a schedule
* [createRepositoryPipelineVariable](#createrepositorypipelinevariable) - Create a variable for a repository
* [deleteDeploymentVariable](#deletedeploymentvariable) - Delete a variable for an environment
* [~~deletePipelineVariableForTeam~~](#deletepipelinevariableforteam) - Delete a variable for a team :warning: **Deprecated**
* [~~deletePipelineVariableForUser~~](#deletepipelinevariableforuser) - Delete a variable for a user :warning: **Deprecated**
* [deletePipelineVariableForWorkspace](#deletepipelinevariableforworkspace) - Delete a variable for a workspace
* [deleteRepositoryPipelineCache](#deleterepositorypipelinecache) - Delete a cache
* [deleteRepositoryPipelineCaches](#deleterepositorypipelinecaches) - Delete caches
* [deleteRepositoryPipelineKeyPair](#deleterepositorypipelinekeypair) - Delete SSH key pair
* [deleteRepositoryPipelineKnownHost](#deleterepositorypipelineknownhost) - Delete a known host
* [deleteRepositoryPipelineSchedule](#deleterepositorypipelineschedule) - Delete a schedule
* [deleteRepositoryPipelineVariable](#deleterepositorypipelinevariable) - Delete a variable for a repository
* [getDeploymentVariables](#getdeploymentvariables) - List variables for an environment
* [getOIDCConfiguration](#getoidcconfiguration) - Get OpenID configuration for OIDC in Pipelines
* [getOIDCKeys](#getoidckeys) - Get keys for OIDC in Pipelines
* [getPipelineContainerLog](#getpipelinecontainerlog) - Get the logs for the build container or a service container for a given step of a pipeline.
* [getPipelineForRepository](#getpipelineforrepository) - Get a pipeline
* [getPipelineStepForRepository](#getpipelinestepforrepository) - Get a step of a pipeline
* [getPipelineStepLogForRepository](#getpipelinesteplogforrepository) - Get log file for a step
* [getPipelineStepsForRepository](#getpipelinestepsforrepository) - List steps for a pipeline
* [getPipelineTestReportTestCaseReasons](#getpipelinetestreporttestcasereasons) - Get test case reasons (output) for a given test case in a step of a pipeline.
* [getPipelineTestReportTestCases](#getpipelinetestreporttestcases) - Get test cases for a given step of a pipeline.
* [getPipelineTestReports](#getpipelinetestreports) - Get a summary of test reports for a given step of a pipeline.
* [~~getPipelineVariableForTeam~~](#getpipelinevariableforteam) - Get a variable for a team :warning: **Deprecated**
* [~~getPipelineVariableForUser~~](#getpipelinevariableforuser) - Get a variable for a user :warning: **Deprecated**
* [getPipelineVariableForWorkspace](#getpipelinevariableforworkspace) - Get variable for a workspace
* [~~getPipelineVariablesForTeam~~](#getpipelinevariablesforteam) - List variables for an account :warning: **Deprecated**
* [~~getPipelineVariablesForUser~~](#getpipelinevariablesforuser) - List variables for a user :warning: **Deprecated**
* [getPipelineVariablesForWorkspace](#getpipelinevariablesforworkspace) - List variables for a workspace
* [getPipelinesForRepository](#getpipelinesforrepository) - List pipelines
* [getRepositoryPipelineCacheContentURI](#getrepositorypipelinecachecontenturi) - Get cache content URI
* [getRepositoryPipelineCaches](#getrepositorypipelinecaches) - List caches
* [getRepositoryPipelineConfig](#getrepositorypipelineconfig) - Get configuration
* [getRepositoryPipelineKnownHost](#getrepositorypipelineknownhost) - Get a known host
* [getRepositoryPipelineKnownHosts](#getrepositorypipelineknownhosts) - List known hosts
* [getRepositoryPipelineSchedule](#getrepositorypipelineschedule) - Get a schedule
* [getRepositoryPipelineScheduleExecutions](#getrepositorypipelinescheduleexecutions) - List executions of a schedule
* [getRepositoryPipelineSchedules](#getrepositorypipelineschedules) - List schedules
* [getRepositoryPipelineSshKeyPair](#getrepositorypipelinesshkeypair) - Get SSH key pair
* [getRepositoryPipelineVariable](#getrepositorypipelinevariable) - Get a variable for a repository
* [getRepositoryPipelineVariables](#getrepositorypipelinevariables) - List variables for a repository
* [stopPipeline](#stoppipeline) - Stop a pipeline
* [updateDeploymentVariable](#updatedeploymentvariable) - Update a variable for an environment
* [~~updatePipelineVariableForTeam~~](#updatepipelinevariableforteam) - Update a variable for a team :warning: **Deprecated**
* [~~updatePipelineVariableForUser~~](#updatepipelinevariableforuser) - Update a variable for a user :warning: **Deprecated**
* [updatePipelineVariableForWorkspace](#updatepipelinevariableforworkspace) - Update variable for a workspace
* [updateRepositoryBuildNumber](#updaterepositorybuildnumber) - Update the next build number
* [updateRepositoryPipelineConfig](#updaterepositorypipelineconfig) - Update configuration
* [updateRepositoryPipelineKeyPair](#updaterepositorypipelinekeypair) - Update SSH key pair
* [updateRepositoryPipelineKnownHost](#updaterepositorypipelineknownhost) - Update a known host
* [updateRepositoryPipelineSchedule](#updaterepositorypipelineschedule) - Update a schedule
* [updateRepositoryPipelineVariable](#updaterepositorypipelinevariable) - Update a variable for a repository

## createDeploymentVariable

Create a deployment environment level variable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeploymentVariableRequest;
import org.openapis.openapi.models.operations.CreateDeploymentVariableResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDeploymentVariableRequest req = new CreateDeploymentVariableRequest(                new java.util.HashMap<String, Object>() {{
                                put("numquam", "veritatis");
                                put("ipsa", "ipsa");
                                put("iure", "odio");
                            }}, "quaerat", "accusamus", "quidem");            

            CreateDeploymentVariableResponse res = sdk.pipelines.createDeploymentVariable(req);

            if (res.deploymentVariable != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPipelineForRepository

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePipelineForRepositoryRequest;
import org.openapis.openapi.models.operations.CreatePipelineForRepositoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreatePipelineForRepositoryRequest req = new CreatePipelineForRepositoryRequest(                new java.util.HashMap<String, Object>() {{
                                put("voluptas", "natus");
                                put("eos", "atque");
                                put("sit", "fugiat");
                                put("ab", "soluta");
                            }}, "dolorum", "iusto");            

            CreatePipelineForRepositoryResponse res = sdk.pipelines.createPipelineForRepository(req);

            if (res.pipeline != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~createPipelineVariableForTeam~~

Create an account level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePipelineVariableForTeamRequest;
import org.openapis.openapi.models.operations.CreatePipelineVariableForTeamResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreatePipelineVariableForTeamRequest req = new CreatePipelineVariableForTeamRequest("voluptate") {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("deleniti", "omnis");
                    put("necessitatibus", "distinctio");
                    put("asperiores", "nihil");
                }};
            }};            

            CreatePipelineVariableForTeamResponse res = sdk.pipelines.createPipelineVariableForTeam(req);

            if (res.pipelineVariable != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~createPipelineVariableForUser~~

Create a user level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePipelineVariableForUserRequest;
import org.openapis.openapi.models.operations.CreatePipelineVariableForUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreatePipelineVariableForUserRequest req = new CreatePipelineVariableForUserRequest("ipsum") {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("id", "saepe");
                    put("eius", "aspernatur");
                }};
            }};            

            CreatePipelineVariableForUserResponse res = sdk.pipelines.createPipelineVariableForUser(req);

            if (res.pipelineVariable != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPipelineVariableForWorkspace

Create a workspace level variable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePipelineVariableForWorkspaceRequest;
import org.openapis.openapi.models.operations.CreatePipelineVariableForWorkspaceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreatePipelineVariableForWorkspaceRequest req = new CreatePipelineVariableForWorkspaceRequest("perferendis") {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("optio", "accusamus");
                }};
            }};            

            CreatePipelineVariableForWorkspaceResponse res = sdk.pipelines.createPipelineVariableForWorkspace(req);

            if (res.pipelineVariable != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRepositoryPipelineKnownHost

Create a repository level known host.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRepositoryPipelineKnownHostRequest;
import org.openapis.openapi.models.operations.CreateRepositoryPipelineKnownHostResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateRepositoryPipelineKnownHostRequest req = new CreateRepositoryPipelineKnownHostRequest(                new java.util.HashMap<String, Object>() {{
                                put("saepe", "suscipit");
                                put("deserunt", "provident");
                            }}, "minima", "repellendus");            

            CreateRepositoryPipelineKnownHostResponse res = sdk.pipelines.createRepositoryPipelineKnownHost(req);

            if (res.pipelineKnownHost != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRepositoryPipelineSchedule

Create a schedule for the given repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRepositoryPipelineScheduleRequest;
import org.openapis.openapi.models.operations.CreateRepositoryPipelineScheduleResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateRepositoryPipelineScheduleRequest req = new CreateRepositoryPipelineScheduleRequest(                new java.util.HashMap<String, Object>() {{
                                put("similique", "alias");
                                put("at", "quaerat");
                                put("tempora", "vel");
                            }}, "quod", "officiis");            

            CreateRepositoryPipelineScheduleResponse res = sdk.pipelines.createRepositoryPipelineSchedule(req);

            if (res.pipelineSchedule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRepositoryPipelineVariable

Create a repository level variable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRepositoryPipelineVariableRequest;
import org.openapis.openapi.models.operations.CreateRepositoryPipelineVariableResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateRepositoryPipelineVariableRequest req = new CreateRepositoryPipelineVariableRequest(                new java.util.HashMap<String, Object>() {{
                                put("dolorum", "a");
                            }}, "esse", "harum");            

            CreateRepositoryPipelineVariableResponse res = sdk.pipelines.createRepositoryPipelineVariable(req);

            if (res.pipelineVariable != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDeploymentVariable

Delete a deployment environment level variable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDeploymentVariableRequest;
import org.openapis.openapi.models.operations.DeleteDeploymentVariableResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteDeploymentVariableRequest req = new DeleteDeploymentVariableRequest("iusto", "ipsum", "quisquam", "tenetur");            

            DeleteDeploymentVariableResponse res = sdk.pipelines.deleteDeploymentVariable(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~deletePipelineVariableForTeam~~

Delete a team level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePipelineVariableForTeamRequest;
import org.openapis.openapi.models.operations.DeletePipelineVariableForTeamResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeletePipelineVariableForTeamRequest req = new DeletePipelineVariableForTeamRequest("amet", "tempore");            

            DeletePipelineVariableForTeamResponse res = sdk.pipelines.deletePipelineVariableForTeam(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~deletePipelineVariableForUser~~

Delete an account level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePipelineVariableForUserRequest;
import org.openapis.openapi.models.operations.DeletePipelineVariableForUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeletePipelineVariableForUserRequest req = new DeletePipelineVariableForUserRequest("accusamus", "numquam");            

            DeletePipelineVariableForUserResponse res = sdk.pipelines.deletePipelineVariableForUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePipelineVariableForWorkspace

Delete a workspace level variable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePipelineVariableForWorkspaceRequest;
import org.openapis.openapi.models.operations.DeletePipelineVariableForWorkspaceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeletePipelineVariableForWorkspaceRequest req = new DeletePipelineVariableForWorkspaceRequest("enim", "dolorem");            

            DeletePipelineVariableForWorkspaceResponse res = sdk.pipelines.deletePipelineVariableForWorkspace(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRepositoryPipelineCache

Delete a repository cache.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRepositoryPipelineCacheRequest;
import org.openapis.openapi.models.operations.DeleteRepositoryPipelineCacheResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRepositoryPipelineCacheRequest req = new DeleteRepositoryPipelineCacheRequest("sapiente", "totam", "nihil");            

            DeleteRepositoryPipelineCacheResponse res = sdk.pipelines.deleteRepositoryPipelineCache(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRepositoryPipelineCaches

Delete repository cache versions by name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRepositoryPipelineCachesRequest;
import org.openapis.openapi.models.operations.DeleteRepositoryPipelineCachesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRepositoryPipelineCachesRequest req = new DeleteRepositoryPipelineCachesRequest("sit", "expedita", "neque");            

            DeleteRepositoryPipelineCachesResponse res = sdk.pipelines.deleteRepositoryPipelineCaches(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRepositoryPipelineKeyPair

Delete the repository SSH key pair.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRepositoryPipelineKeyPairRequest;
import org.openapis.openapi.models.operations.DeleteRepositoryPipelineKeyPairResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRepositoryPipelineKeyPairRequest req = new DeleteRepositoryPipelineKeyPairRequest("sed", "vel");            

            DeleteRepositoryPipelineKeyPairResponse res = sdk.pipelines.deleteRepositoryPipelineKeyPair(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRepositoryPipelineKnownHost

Delete a repository level known host.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRepositoryPipelineKnownHostRequest;
import org.openapis.openapi.models.operations.DeleteRepositoryPipelineKnownHostResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRepositoryPipelineKnownHostRequest req = new DeleteRepositoryPipelineKnownHostRequest("libero", "voluptas", "deserunt");            

            DeleteRepositoryPipelineKnownHostResponse res = sdk.pipelines.deleteRepositoryPipelineKnownHost(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRepositoryPipelineSchedule

Delete a schedule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRepositoryPipelineScheduleRequest;
import org.openapis.openapi.models.operations.DeleteRepositoryPipelineScheduleResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRepositoryPipelineScheduleRequest req = new DeleteRepositoryPipelineScheduleRequest("quam", "ipsum", "incidunt");            

            DeleteRepositoryPipelineScheduleResponse res = sdk.pipelines.deleteRepositoryPipelineSchedule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRepositoryPipelineVariable

Delete a repository level variable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRepositoryPipelineVariableRequest;
import org.openapis.openapi.models.operations.DeleteRepositoryPipelineVariableResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRepositoryPipelineVariableRequest req = new DeleteRepositoryPipelineVariableRequest("qui", "cupiditate", "maxime");            

            DeleteRepositoryPipelineVariableResponse res = sdk.pipelines.deleteRepositoryPipelineVariable(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeploymentVariables

Find deployment environment level variables.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeploymentVariablesRequest;
import org.openapis.openapi.models.operations.GetDeploymentVariablesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDeploymentVariablesRequest req = new GetDeploymentVariablesRequest("pariatur", "soluta", "dicta");            

            GetDeploymentVariablesResponse res = sdk.pipelines.getDeploymentVariables(req);

            if (res.paginatedDeploymentVariable != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOIDCConfiguration

This is part of OpenID Connect for Pipelines, see https://support.atlassian.com/bitbucket-cloud/docs/integrate-pipelines-with-resource-servers-using-oidc/

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOIDCConfigurationRequest;
import org.openapis.openapi.models.operations.GetOIDCConfigurationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOIDCConfigurationRequest req = new GetOIDCConfigurationRequest("laborum");            

            GetOIDCConfigurationResponse res = sdk.pipelines.getOIDCConfiguration(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOIDCKeys

This is part of OpenID Connect for Pipelines, see https://support.atlassian.com/bitbucket-cloud/docs/integrate-pipelines-with-resource-servers-using-oidc/

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOIDCKeysRequest;
import org.openapis.openapi.models.operations.GetOIDCKeysResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOIDCKeysRequest req = new GetOIDCKeysRequest("totam");            

            GetOIDCKeysResponse res = sdk.pipelines.getOIDCKeys(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPipelineContainerLog

Retrieve the log file for a build container or service container.

This endpoint supports (and encourages!) the use of [HTTP Range requests](https://tools.ietf.org/html/rfc7233) to deal with potentially very large log files.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPipelineContainerLogRequest;
import org.openapis.openapi.models.operations.GetPipelineContainerLogResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPipelineContainerLogRequest req = new GetPipelineContainerLogRequest("incidunt", "aspernatur", "dolores", "distinctio", "facilis");            

            GetPipelineContainerLogResponse res = sdk.pipelines.getPipelineContainerLog(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPipelineForRepository

Retrieve a specified pipeline

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPipelineForRepositoryRequest;
import org.openapis.openapi.models.operations.GetPipelineForRepositoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPipelineForRepositoryRequest req = new GetPipelineForRepositoryRequest("aliquid", "quam", "molestias");            

            GetPipelineForRepositoryResponse res = sdk.pipelines.getPipelineForRepository(req);

            if (res.pipeline != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPipelineStepForRepository

Retrieve a given step of a pipeline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPipelineStepForRepositoryRequest;
import org.openapis.openapi.models.operations.GetPipelineStepForRepositoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPipelineStepForRepositoryRequest req = new GetPipelineStepForRepositoryRequest("temporibus", "qui", "neque", "fugit");            

            GetPipelineStepForRepositoryResponse res = sdk.pipelines.getPipelineStepForRepository(req);

            if (res.pipelineStep != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPipelineStepLogForRepository

Retrieve the log file for a given step of a pipeline.

This endpoint supports (and encourages!) the use of [HTTP Range requests](https://tools.ietf.org/html/rfc7233) to deal with potentially very large log files.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPipelineStepLogForRepositoryRequest;
import org.openapis.openapi.models.operations.GetPipelineStepLogForRepositoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPipelineStepLogForRepositoryRequest req = new GetPipelineStepLogForRepositoryRequest("magni", "odio", "sunt", "ullam");            

            GetPipelineStepLogForRepositoryResponse res = sdk.pipelines.getPipelineStepLogForRepository(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPipelineStepsForRepository

Find steps for the given pipeline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPipelineStepsForRepositoryRequest;
import org.openapis.openapi.models.operations.GetPipelineStepsForRepositoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPipelineStepsForRepositoryRequest req = new GetPipelineStepsForRepositoryRequest("nam", "hic", "voluptatem");            

            GetPipelineStepsForRepositoryResponse res = sdk.pipelines.getPipelineStepsForRepository(req);

            if (res.paginatedPipelineSteps != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPipelineTestReportTestCaseReasons

Get test case reasons (output) for a given test case in a step of a pipeline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPipelineTestReportTestCaseReasonsRequest;
import org.openapis.openapi.models.operations.GetPipelineTestReportTestCaseReasonsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPipelineTestReportTestCaseReasonsRequest req = new GetPipelineTestReportTestCaseReasonsRequest("cumque", "soluta", "nobis", "et", "saepe");            

            GetPipelineTestReportTestCaseReasonsResponse res = sdk.pipelines.getPipelineTestReportTestCaseReasons(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPipelineTestReportTestCases

Get test cases for a given step of a pipeline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPipelineTestReportTestCasesRequest;
import org.openapis.openapi.models.operations.GetPipelineTestReportTestCasesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPipelineTestReportTestCasesRequest req = new GetPipelineTestReportTestCasesRequest("ipsum", "veritatis", "nobis", "quos");            

            GetPipelineTestReportTestCasesResponse res = sdk.pipelines.getPipelineTestReportTestCases(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPipelineTestReports

Get a summary of test reports for a given step of a pipeline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPipelineTestReportsRequest;
import org.openapis.openapi.models.operations.GetPipelineTestReportsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPipelineTestReportsRequest req = new GetPipelineTestReportsRequest("tempore", "cupiditate", "aperiam", "delectus");            

            GetPipelineTestReportsResponse res = sdk.pipelines.getPipelineTestReports(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getPipelineVariableForTeam~~

Retrieve a team level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPipelineVariableForTeamRequest;
import org.openapis.openapi.models.operations.GetPipelineVariableForTeamResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPipelineVariableForTeamRequest req = new GetPipelineVariableForTeamRequest("dolorem", "dolore");            

            GetPipelineVariableForTeamResponse res = sdk.pipelines.getPipelineVariableForTeam(req);

            if (res.pipelineVariable != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getPipelineVariableForUser~~

Retrieve a user level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPipelineVariableForUserRequest;
import org.openapis.openapi.models.operations.GetPipelineVariableForUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPipelineVariableForUserRequest req = new GetPipelineVariableForUserRequest("labore", "adipisci");            

            GetPipelineVariableForUserResponse res = sdk.pipelines.getPipelineVariableForUser(req);

            if (res.pipelineVariable != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPipelineVariableForWorkspace

Retrieve a workspace level variable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPipelineVariableForWorkspaceRequest;
import org.openapis.openapi.models.operations.GetPipelineVariableForWorkspaceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPipelineVariableForWorkspaceRequest req = new GetPipelineVariableForWorkspaceRequest("dolorum", "architecto");            

            GetPipelineVariableForWorkspaceResponse res = sdk.pipelines.getPipelineVariableForWorkspace(req);

            if (res.pipelineVariable != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getPipelineVariablesForTeam~~

Find account level variables.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPipelineVariablesForTeamRequest;
import org.openapis.openapi.models.operations.GetPipelineVariablesForTeamResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPipelineVariablesForTeamRequest req = new GetPipelineVariablesForTeamRequest("quae");            

            GetPipelineVariablesForTeamResponse res = sdk.pipelines.getPipelineVariablesForTeam(req);

            if (res.paginatedPipelineVariables != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getPipelineVariablesForUser~~

Find user level variables.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPipelineVariablesForUserRequest;
import org.openapis.openapi.models.operations.GetPipelineVariablesForUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPipelineVariablesForUserRequest req = new GetPipelineVariablesForUserRequest("aut");            

            GetPipelineVariablesForUserResponse res = sdk.pipelines.getPipelineVariablesForUser(req);

            if (res.paginatedPipelineVariables != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPipelineVariablesForWorkspace

Find workspace level variables.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPipelineVariablesForWorkspaceRequest;
import org.openapis.openapi.models.operations.GetPipelineVariablesForWorkspaceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPipelineVariablesForWorkspaceRequest req = new GetPipelineVariablesForWorkspaceRequest("quas");            

            GetPipelineVariablesForWorkspaceResponse res = sdk.pipelines.getPipelineVariablesForWorkspace(req);

            if (res.paginatedPipelineVariables != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPipelinesForRepository

Find pipelines

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPipelinesForRepositoryRequest;
import org.openapis.openapi.models.operations.GetPipelinesForRepositoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPipelinesForRepositoryRequest req = new GetPipelinesForRepositoryRequest("itaque", "consequatur");            

            GetPipelinesForRepositoryResponse res = sdk.pipelines.getPipelinesForRepository(req);

            if (res.paginatedPipelines != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoryPipelineCacheContentURI

Retrieve the URI of the content of the specified cache.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoryPipelineCacheContentURIRequest;
import org.openapis.openapi.models.operations.GetRepositoryPipelineCacheContentURIResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoryPipelineCacheContentURIRequest req = new GetRepositoryPipelineCacheContentURIRequest("est", "repellendus", "porro");            

            GetRepositoryPipelineCacheContentURIResponse res = sdk.pipelines.getRepositoryPipelineCacheContentURI(req);

            if (res.pipelineCacheContentUri != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoryPipelineCaches

Retrieve the repository pipelines caches.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoryPipelineCachesRequest;
import org.openapis.openapi.models.operations.GetRepositoryPipelineCachesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoryPipelineCachesRequest req = new GetRepositoryPipelineCachesRequest("doloribus", "ut");            

            GetRepositoryPipelineCachesResponse res = sdk.pipelines.getRepositoryPipelineCaches(req);

            if (res.paginatedPipelineCaches != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoryPipelineConfig

Retrieve the repository pipelines configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoryPipelineConfigRequest;
import org.openapis.openapi.models.operations.GetRepositoryPipelineConfigResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoryPipelineConfigRequest req = new GetRepositoryPipelineConfigRequest("facilis", "cupiditate");            

            GetRepositoryPipelineConfigResponse res = sdk.pipelines.getRepositoryPipelineConfig(req);

            if (res.pipelinesConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoryPipelineKnownHost

Retrieve a repository level known host.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoryPipelineKnownHostRequest;
import org.openapis.openapi.models.operations.GetRepositoryPipelineKnownHostResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoryPipelineKnownHostRequest req = new GetRepositoryPipelineKnownHostRequest("qui", "quae", "laudantium");            

            GetRepositoryPipelineKnownHostResponse res = sdk.pipelines.getRepositoryPipelineKnownHost(req);

            if (res.pipelineKnownHost != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoryPipelineKnownHosts

Find repository level known hosts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoryPipelineKnownHostsRequest;
import org.openapis.openapi.models.operations.GetRepositoryPipelineKnownHostsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoryPipelineKnownHostsRequest req = new GetRepositoryPipelineKnownHostsRequest("odio", "occaecati");            

            GetRepositoryPipelineKnownHostsResponse res = sdk.pipelines.getRepositoryPipelineKnownHosts(req);

            if (res.paginatedPipelineKnownHosts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoryPipelineSchedule

Retrieve a schedule by its UUID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoryPipelineScheduleRequest;
import org.openapis.openapi.models.operations.GetRepositoryPipelineScheduleResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoryPipelineScheduleRequest req = new GetRepositoryPipelineScheduleRequest("voluptatibus", "quisquam", "vero");            

            GetRepositoryPipelineScheduleResponse res = sdk.pipelines.getRepositoryPipelineSchedule(req);

            if (res.pipelineSchedule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoryPipelineScheduleExecutions

Retrieve the executions of a given schedule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoryPipelineScheduleExecutionsRequest;
import org.openapis.openapi.models.operations.GetRepositoryPipelineScheduleExecutionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoryPipelineScheduleExecutionsRequest req = new GetRepositoryPipelineScheduleExecutionsRequest("omnis", "quis", "ipsum");            

            GetRepositoryPipelineScheduleExecutionsResponse res = sdk.pipelines.getRepositoryPipelineScheduleExecutions(req);

            if (res.paginatedPipelineScheduleExecutions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoryPipelineSchedules

Retrieve the configured schedules for the given repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoryPipelineSchedulesRequest;
import org.openapis.openapi.models.operations.GetRepositoryPipelineSchedulesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoryPipelineSchedulesRequest req = new GetRepositoryPipelineSchedulesRequest("delectus", "voluptate");            

            GetRepositoryPipelineSchedulesResponse res = sdk.pipelines.getRepositoryPipelineSchedules(req);

            if (res.paginatedPipelineSchedules != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoryPipelineSshKeyPair

Retrieve the repository SSH key pair excluding the SSH private key. The private key is a write only field and will never be exposed in the logs or the REST API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoryPipelineSshKeyPairRequest;
import org.openapis.openapi.models.operations.GetRepositoryPipelineSshKeyPairResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoryPipelineSshKeyPairRequest req = new GetRepositoryPipelineSshKeyPairRequest("consectetur", "vero");            

            GetRepositoryPipelineSshKeyPairResponse res = sdk.pipelines.getRepositoryPipelineSshKeyPair(req);

            if (res.pipelineSshKeyPair != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoryPipelineVariable

Retrieve a repository level variable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoryPipelineVariableRequest;
import org.openapis.openapi.models.operations.GetRepositoryPipelineVariableResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoryPipelineVariableRequest req = new GetRepositoryPipelineVariableRequest("tenetur", "dignissimos", "hic");            

            GetRepositoryPipelineVariableResponse res = sdk.pipelines.getRepositoryPipelineVariable(req);

            if (res.pipelineVariable != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoryPipelineVariables

Find repository level variables.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoryPipelineVariablesRequest;
import org.openapis.openapi.models.operations.GetRepositoryPipelineVariablesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoryPipelineVariablesRequest req = new GetRepositoryPipelineVariablesRequest("distinctio", "quod");            

            GetRepositoryPipelineVariablesResponse res = sdk.pipelines.getRepositoryPipelineVariables(req);

            if (res.paginatedPipelineVariables != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopPipeline

Signal the stop of a pipeline and all of its steps that not have completed yet.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopPipelineRequest;
import org.openapis.openapi.models.operations.StopPipelineResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StopPipelineRequest req = new StopPipelineRequest("odio", "similique", "facilis");            

            StopPipelineResponse res = sdk.pipelines.stopPipeline(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeploymentVariable

Update a deployment environment level variable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeploymentVariableRequest;
import org.openapis.openapi.models.operations.UpdateDeploymentVariableResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateDeploymentVariableRequest req = new UpdateDeploymentVariableRequest(                new java.util.HashMap<String, Object>() {{
                                put("ducimus", "dolore");
                                put("quibusdam", "illum");
                                put("sequi", "natus");
                                put("impedit", "aut");
                            }}, "voluptatibus", "exercitationem", "nulla", "fugit");            

            UpdateDeploymentVariableResponse res = sdk.pipelines.updateDeploymentVariable(req);

            if (res.deploymentVariable != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~updatePipelineVariableForTeam~~

Update a team level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePipelineVariableForTeamRequest;
import org.openapis.openapi.models.operations.UpdatePipelineVariableForTeamResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdatePipelineVariableForTeamRequest req = new UpdatePipelineVariableForTeamRequest(                new java.util.HashMap<String, Object>() {{
                                put("maiores", "doloribus");
                                put("iusto", "eligendi");
                                put("ducimus", "alias");
                                put("officia", "tempora");
                            }}, "ipsam", "ea");            

            UpdatePipelineVariableForTeamResponse res = sdk.pipelines.updatePipelineVariableForTeam(req);

            if (res.pipelineVariable != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~updatePipelineVariableForUser~~

Update a user level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePipelineVariableForUserRequest;
import org.openapis.openapi.models.operations.UpdatePipelineVariableForUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdatePipelineVariableForUserRequest req = new UpdatePipelineVariableForUserRequest(                new java.util.HashMap<String, Object>() {{
                                put("vel", "possimus");
                            }}, "magnam", "ratione");            

            UpdatePipelineVariableForUserResponse res = sdk.pipelines.updatePipelineVariableForUser(req);

            if (res.pipelineVariable != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePipelineVariableForWorkspace

Update a workspace level variable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePipelineVariableForWorkspaceRequest;
import org.openapis.openapi.models.operations.UpdatePipelineVariableForWorkspaceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdatePipelineVariableForWorkspaceRequest req = new UpdatePipelineVariableForWorkspaceRequest(                new java.util.HashMap<String, Object>() {{
                                put("laudantium", "dicta");
                                put("dolor", "maiores");
                            }}, "quasi", "ex");            

            UpdatePipelineVariableForWorkspaceResponse res = sdk.pipelines.updatePipelineVariableForWorkspace(req);

            if (res.pipelineVariable != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRepositoryBuildNumber

Update the next build number that should be assigned to a pipeline. The next build number that will be configured has to be strictly higher than the current latest build number for this repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRepositoryBuildNumberRequest;
import org.openapis.openapi.models.operations.UpdateRepositoryBuildNumberResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateRepositoryBuildNumberRequest req = new UpdateRepositoryBuildNumberRequest(                new java.util.HashMap<String, Object>() {{
                                put("excepturi", "voluptatibus");
                                put("nostrum", "sapiente");
                                put("quisquam", "saepe");
                                put("ea", "impedit");
                            }}, "corporis", "veniam");            

            UpdateRepositoryBuildNumberResponse res = sdk.pipelines.updateRepositoryBuildNumber(req);

            if (res.pipelineBuildNumber != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRepositoryPipelineConfig

Update the pipelines configuration for a repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRepositoryPipelineConfigRequest;
import org.openapis.openapi.models.operations.UpdateRepositoryPipelineConfigResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateRepositoryPipelineConfigRequest req = new UpdateRepositoryPipelineConfigRequest(                new java.util.HashMap<String, Object>() {{
                                put("inventore", "magnam");
                                put("ea", "quo");
                            }}, "consectetur", "recusandae");            

            UpdateRepositoryPipelineConfigResponse res = sdk.pipelines.updateRepositoryPipelineConfig(req);

            if (res.pipelinesConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRepositoryPipelineKeyPair

Create or update the repository SSH key pair. The private key will be set as a default SSH identity in your build container.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRepositoryPipelineKeyPairRequest;
import org.openapis.openapi.models.operations.UpdateRepositoryPipelineKeyPairResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateRepositoryPipelineKeyPairRequest req = new UpdateRepositoryPipelineKeyPairRequest(                new java.util.HashMap<String, Object>() {{
                                put("minima", "eaque");
                            }}, "a", "libero");            

            UpdateRepositoryPipelineKeyPairResponse res = sdk.pipelines.updateRepositoryPipelineKeyPair(req);

            if (res.pipelineSshKeyPair != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRepositoryPipelineKnownHost

Update a repository level known host.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRepositoryPipelineKnownHostRequest;
import org.openapis.openapi.models.operations.UpdateRepositoryPipelineKnownHostResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateRepositoryPipelineKnownHostRequest req = new UpdateRepositoryPipelineKnownHostRequest(                new java.util.HashMap<String, Object>() {{
                                put("aut", "deleniti");
                            }}, "impedit", "aliquam", "fugit");            

            UpdateRepositoryPipelineKnownHostResponse res = sdk.pipelines.updateRepositoryPipelineKnownHost(req);

            if (res.pipelineKnownHost != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRepositoryPipelineSchedule

Update a schedule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRepositoryPipelineScheduleRequest;
import org.openapis.openapi.models.operations.UpdateRepositoryPipelineScheduleResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateRepositoryPipelineScheduleRequest req = new UpdateRepositoryPipelineScheduleRequest(                new java.util.HashMap<String, Object>() {{
                                put("inventore", "non");
                                put("et", "dolorum");
                                put("laborum", "placeat");
                                put("velit", "eum");
                            }}, "autem", "nobis", "quas");            

            UpdateRepositoryPipelineScheduleResponse res = sdk.pipelines.updateRepositoryPipelineSchedule(req);

            if (res.pipelineSchedule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRepositoryPipelineVariable

Update a repository level variable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRepositoryPipelineVariableRequest;
import org.openapis.openapi.models.operations.UpdateRepositoryPipelineVariableResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateRepositoryPipelineVariableRequest req = new UpdateRepositoryPipelineVariableRequest(                new java.util.HashMap<String, Object>() {{
                                put("nulla", "voluptas");
                                put("libero", "quasi");
                                put("tempora", "numquam");
                                put("explicabo", "provident");
                            }}, "ipsa", "molestiae", "magnam");            

            UpdateRepositoryPipelineVariableResponse res = sdk.pipelines.updateRepositoryPipelineVariable(req);

            if (res.pipelineVariable != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
