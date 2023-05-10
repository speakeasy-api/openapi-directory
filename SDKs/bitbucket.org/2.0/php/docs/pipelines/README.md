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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeploymentVariableRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeploymentVariableRequest();
    $request->requestBody = [
        'aliquid' => 'quam',
        'molestias' => 'temporibus',
        'qui' => 'neque',
    ];
    $request->environmentUuid = 'fugit';
    $request->repoSlug = 'magni';
    $request->workspace = 'odio';

    $response = $sdk->pipelines->createDeploymentVariable($request);

    if ($response->deploymentVariable !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreatePipelineForRepositoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePipelineForRepositoryRequest();
    $request->requestBody = [
        'ullam' => 'nam',
    ];
    $request->repoSlug = 'hic';
    $request->workspace = 'voluptatem';

    $response = $sdk->pipelines->createPipelineForRepository($request);

    if ($response->pipeline !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~createPipelineVariableForTeam~~

Create an account level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreatePipelineVariableForTeamRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePipelineVariableForTeamRequest();
    $request->requestBody = [
        'soluta' => 'nobis',
        'et' => 'saepe',
        'ipsum' => 'veritatis',
        'nobis' => 'quos',
    ];
    $request->username = 'Mose96';

    $response = $sdk->pipelines->createPipelineVariableForTeam($request);

    if ($response->pipelineVariable !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~createPipelineVariableForUser~~

Create a user level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreatePipelineVariableForUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePipelineVariableForUserRequest();
    $request->requestBody = [
        'dolore' => 'labore',
    ];
    $request->selectedUser = 'adipisci';

    $response = $sdk->pipelines->createPipelineVariableForUser($request);

    if ($response->pipelineVariable !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPipelineVariableForWorkspace

Create a workspace level variable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreatePipelineVariableForWorkspaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePipelineVariableForWorkspaceRequest();
    $request->requestBody = [
        'architecto' => 'quae',
        'aut' => 'quas',
        'itaque' => 'consequatur',
    ];
    $request->workspace = 'est';

    $response = $sdk->pipelines->createPipelineVariableForWorkspace($request);

    if ($response->pipelineVariable !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRepositoryPipelineKnownHost

Create a repository level known host.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateRepositoryPipelineKnownHostRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRepositoryPipelineKnownHostRequest();
    $request->requestBody = [
        'porro' => 'doloribus',
        'ut' => 'facilis',
        'cupiditate' => 'qui',
        'quae' => 'laudantium',
    ];
    $request->repoSlug = 'odio';
    $request->workspace = 'occaecati';

    $response = $sdk->pipelines->createRepositoryPipelineKnownHost($request);

    if ($response->pipelineKnownHost !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRepositoryPipelineSchedule

Create a schedule for the given repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateRepositoryPipelineScheduleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRepositoryPipelineScheduleRequest();
    $request->requestBody = [
        'quisquam' => 'vero',
        'omnis' => 'quis',
        'ipsum' => 'delectus',
        'voluptate' => 'consectetur',
    ];
    $request->repoSlug = 'vero';
    $request->workspace = 'tenetur';

    $response = $sdk->pipelines->createRepositoryPipelineSchedule($request);

    if ($response->pipelineSchedule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRepositoryPipelineVariable

Create a repository level variable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateRepositoryPipelineVariableRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRepositoryPipelineVariableRequest();
    $request->requestBody = [
        'hic' => 'distinctio',
        'quod' => 'odio',
    ];
    $request->repoSlug = 'similique';
    $request->workspace = 'facilis';

    $response = $sdk->pipelines->createRepositoryPipelineVariable($request);

    if ($response->pipelineVariable !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDeploymentVariable

Delete a deployment environment level variable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDeploymentVariableRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDeploymentVariableRequest();
    $request->environmentUuid = 'vero';
    $request->repoSlug = 'ducimus';
    $request->variableUuid = 'dolore';
    $request->workspace = 'quibusdam';

    $response = $sdk->pipelines->deleteDeploymentVariable($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~deletePipelineVariableForTeam~~

Delete a team level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeletePipelineVariableForTeamRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePipelineVariableForTeamRequest();
    $request->username = 'Rosina_Dickinson';
    $request->variableUuid = 'aut';

    $response = $sdk->pipelines->deletePipelineVariableForTeam($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~deletePipelineVariableForUser~~

Delete an account level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeletePipelineVariableForUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePipelineVariableForUserRequest();
    $request->selectedUser = 'voluptatibus';
    $request->variableUuid = 'exercitationem';

    $response = $sdk->pipelines->deletePipelineVariableForUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePipelineVariableForWorkspace

Delete a workspace level variable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeletePipelineVariableForWorkspaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePipelineVariableForWorkspaceRequest();
    $request->variableUuid = 'nulla';
    $request->workspace = 'fugit';

    $response = $sdk->pipelines->deletePipelineVariableForWorkspace($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRepositoryPipelineCache

Delete a repository cache.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoryPipelineCacheRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRepositoryPipelineCacheRequest();
    $request->cacheUuid = 'porro';
    $request->repoSlug = 'maiores';
    $request->workspace = 'doloribus';

    $response = $sdk->pipelines->deleteRepositoryPipelineCache($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRepositoryPipelineCaches

Delete repository cache versions by name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoryPipelineCachesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRepositoryPipelineCachesRequest();
    $request->name = 'Miss Vicky Kuphal';
    $request->repoSlug = 'ipsam';
    $request->workspace = 'ea';

    $response = $sdk->pipelines->deleteRepositoryPipelineCaches($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRepositoryPipelineKeyPair

Delete the repository SSH key pair.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoryPipelineKeyPairRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRepositoryPipelineKeyPairRequest();
    $request->repoSlug = 'aspernatur';
    $request->workspace = 'vel';

    $response = $sdk->pipelines->deleteRepositoryPipelineKeyPair($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRepositoryPipelineKnownHost

Delete a repository level known host.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoryPipelineKnownHostRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRepositoryPipelineKnownHostRequest();
    $request->knownHostUuid = 'possimus';
    $request->repoSlug = 'magnam';
    $request->workspace = 'ratione';

    $response = $sdk->pipelines->deleteRepositoryPipelineKnownHost($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRepositoryPipelineSchedule

Delete a schedule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoryPipelineScheduleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRepositoryPipelineScheduleRequest();
    $request->repoSlug = 'ex';
    $request->scheduleUuid = 'laudantium';
    $request->workspace = 'dicta';

    $response = $sdk->pipelines->deleteRepositoryPipelineSchedule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRepositoryPipelineVariable

Delete a repository level variable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoryPipelineVariableRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRepositoryPipelineVariableRequest();
    $request->repoSlug = 'dolor';
    $request->variableUuid = 'maiores';
    $request->workspace = 'quasi';

    $response = $sdk->pipelines->deleteRepositoryPipelineVariable($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeploymentVariables

Find deployment environment level variables.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDeploymentVariablesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeploymentVariablesRequest();
    $request->environmentUuid = 'ex';
    $request->repoSlug = 'nulla';
    $request->workspace = 'excepturi';

    $response = $sdk->pipelines->getDeploymentVariables($request);

    if ($response->paginatedDeploymentVariable !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOIDCConfiguration

This is part of OpenID Connect for Pipelines, see https://support.atlassian.com/bitbucket-cloud/docs/integrate-pipelines-with-resource-servers-using-oidc/

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOIDCConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOIDCConfigurationRequest();
    $request->workspace = 'voluptatibus';

    $response = $sdk->pipelines->getOIDCConfiguration($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOIDCKeys

This is part of OpenID Connect for Pipelines, see https://support.atlassian.com/bitbucket-cloud/docs/integrate-pipelines-with-resource-servers-using-oidc/

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOIDCKeysRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOIDCKeysRequest();
    $request->workspace = 'nostrum';

    $response = $sdk->pipelines->getOIDCKeys($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPipelineContainerLog

Retrieve the log file for a build container or service container.

This endpoint supports (and encourages!) the use of [HTTP Range requests](https://tools.ietf.org/html/rfc7233) to deal with potentially very large log files.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPipelineContainerLogRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPipelineContainerLogRequest();
    $request->logUuid = 'sapiente';
    $request->pipelineUuid = 'quisquam';
    $request->repoSlug = 'saepe';
    $request->stepUuid = 'ea';
    $request->workspace = 'impedit';

    $response = $sdk->pipelines->getPipelineContainerLog($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPipelineForRepository

Retrieve a specified pipeline

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPipelineForRepositoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPipelineForRepositoryRequest();
    $request->pipelineUuid = 'corporis';
    $request->repoSlug = 'veniam';
    $request->workspace = 'aliquid';

    $response = $sdk->pipelines->getPipelineForRepository($request);

    if ($response->pipeline !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPipelineStepForRepository

Retrieve a given step of a pipeline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPipelineStepForRepositoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPipelineStepForRepositoryRequest();
    $request->pipelineUuid = 'inventore';
    $request->repoSlug = 'magnam';
    $request->stepUuid = 'ea';
    $request->workspace = 'quo';

    $response = $sdk->pipelines->getPipelineStepForRepository($request);

    if ($response->pipelineStep !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPipelineStepLogForRepository

Retrieve the log file for a given step of a pipeline.

This endpoint supports (and encourages!) the use of [HTTP Range requests](https://tools.ietf.org/html/rfc7233) to deal with potentially very large log files.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPipelineStepLogForRepositoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPipelineStepLogForRepositoryRequest();
    $request->pipelineUuid = 'consectetur';
    $request->repoSlug = 'recusandae';
    $request->stepUuid = 'aspernatur';
    $request->workspace = 'minima';

    $response = $sdk->pipelines->getPipelineStepLogForRepository($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPipelineStepsForRepository

Find steps for the given pipeline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPipelineStepsForRepositoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPipelineStepsForRepositoryRequest();
    $request->pipelineUuid = 'eaque';
    $request->repoSlug = 'a';
    $request->workspace = 'libero';

    $response = $sdk->pipelines->getPipelineStepsForRepository($request);

    if ($response->paginatedPipelineSteps !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPipelineTestReportTestCaseReasons

Get test case reasons (output) for a given test case in a step of a pipeline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPipelineTestReportTestCaseReasonsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPipelineTestReportTestCaseReasonsRequest();
    $request->pipelineUuid = 'aut';
    $request->repoSlug = 'aut';
    $request->stepUuid = 'deleniti';
    $request->testCaseUuid = 'impedit';
    $request->workspace = 'aliquam';

    $response = $sdk->pipelines->getPipelineTestReportTestCaseReasons($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPipelineTestReportTestCases

Get test cases for a given step of a pipeline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPipelineTestReportTestCasesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPipelineTestReportTestCasesRequest();
    $request->pipelineUuid = 'fugit';
    $request->repoSlug = 'accusamus';
    $request->stepUuid = 'inventore';
    $request->workspace = 'non';

    $response = $sdk->pipelines->getPipelineTestReportTestCases($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPipelineTestReports

Get a summary of test reports for a given step of a pipeline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPipelineTestReportsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPipelineTestReportsRequest();
    $request->pipelineUuid = 'et';
    $request->repoSlug = 'dolorum';
    $request->stepUuid = 'laborum';
    $request->workspace = 'placeat';

    $response = $sdk->pipelines->getPipelineTestReports($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getPipelineVariableForTeam~~

Retrieve a team level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPipelineVariableForTeamRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPipelineVariableForTeamRequest();
    $request->username = 'Dejon_Kemmer';
    $request->variableUuid = 'quas';

    $response = $sdk->pipelines->getPipelineVariableForTeam($request);

    if ($response->pipelineVariable !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getPipelineVariableForUser~~

Retrieve a user level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPipelineVariableForUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPipelineVariableForUserRequest();
    $request->selectedUser = 'assumenda';
    $request->variableUuid = 'nulla';

    $response = $sdk->pipelines->getPipelineVariableForUser($request);

    if ($response->pipelineVariable !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPipelineVariableForWorkspace

Retrieve a workspace level variable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPipelineVariableForWorkspaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPipelineVariableForWorkspaceRequest();
    $request->variableUuid = 'voluptas';
    $request->workspace = 'libero';

    $response = $sdk->pipelines->getPipelineVariableForWorkspace($request);

    if ($response->pipelineVariable !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getPipelineVariablesForTeam~~

Find account level variables.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPipelineVariablesForTeamRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPipelineVariablesForTeamRequest();
    $request->username = 'Ava13';

    $response = $sdk->pipelines->getPipelineVariablesForTeam($request);

    if ($response->paginatedPipelineVariables !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getPipelineVariablesForUser~~

Find user level variables.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPipelineVariablesForUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPipelineVariablesForUserRequest();
    $request->selectedUser = 'provident';

    $response = $sdk->pipelines->getPipelineVariablesForUser($request);

    if ($response->paginatedPipelineVariables !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPipelineVariablesForWorkspace

Find workspace level variables.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPipelineVariablesForWorkspaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPipelineVariablesForWorkspaceRequest();
    $request->workspace = 'ipsa';

    $response = $sdk->pipelines->getPipelineVariablesForWorkspace($request);

    if ($response->paginatedPipelineVariables !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPipelinesForRepository

Find pipelines

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPipelinesForRepositoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPipelinesForRepositoryRequest();
    $request->repoSlug = 'molestiae';
    $request->workspace = 'magnam';

    $response = $sdk->pipelines->getPipelinesForRepository($request);

    if ($response->paginatedPipelines !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoryPipelineCacheContentURI

Retrieve the URI of the content of the specified cache.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoryPipelineCacheContentURIRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoryPipelineCacheContentURIRequest();
    $request->cacheUuid = 'odio';
    $request->repoSlug = 'eius';
    $request->workspace = 'esse';

    $response = $sdk->pipelines->getRepositoryPipelineCacheContentURI($request);

    if ($response->pipelineCacheContentUri !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoryPipelineCaches

Retrieve the repository pipelines caches.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoryPipelineCachesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoryPipelineCachesRequest();
    $request->repoSlug = 'esse';
    $request->workspace = 'rem';

    $response = $sdk->pipelines->getRepositoryPipelineCaches($request);

    if ($response->paginatedPipelineCaches !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoryPipelineConfig

Retrieve the repository pipelines configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoryPipelineConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoryPipelineConfigRequest();
    $request->repoSlug = 'fuga';
    $request->workspace = 'reprehenderit';

    $response = $sdk->pipelines->getRepositoryPipelineConfig($request);

    if ($response->pipelinesConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoryPipelineKnownHost

Retrieve a repository level known host.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoryPipelineKnownHostRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoryPipelineKnownHostRequest();
    $request->knownHostUuid = 'quidem';
    $request->repoSlug = 'fugiat';
    $request->workspace = 'ut';

    $response = $sdk->pipelines->getRepositoryPipelineKnownHost($request);

    if ($response->pipelineKnownHost !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoryPipelineKnownHosts

Find repository level known hosts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoryPipelineKnownHostsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoryPipelineKnownHostsRequest();
    $request->repoSlug = 'eum';
    $request->workspace = 'suscipit';

    $response = $sdk->pipelines->getRepositoryPipelineKnownHosts($request);

    if ($response->paginatedPipelineKnownHosts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoryPipelineSchedule

Retrieve a schedule by its UUID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoryPipelineScheduleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoryPipelineScheduleRequest();
    $request->repoSlug = 'assumenda';
    $request->scheduleUuid = 'eos';
    $request->workspace = 'praesentium';

    $response = $sdk->pipelines->getRepositoryPipelineSchedule($request);

    if ($response->pipelineSchedule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoryPipelineScheduleExecutions

Retrieve the executions of a given schedule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoryPipelineScheduleExecutionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoryPipelineScheduleExecutionsRequest();
    $request->repoSlug = 'quisquam';
    $request->scheduleUuid = 'veritatis';
    $request->workspace = 'ipsa';

    $response = $sdk->pipelines->getRepositoryPipelineScheduleExecutions($request);

    if ($response->paginatedPipelineScheduleExecutions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoryPipelineSchedules

Retrieve the configured schedules for the given repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoryPipelineSchedulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoryPipelineSchedulesRequest();
    $request->repoSlug = 'id';
    $request->workspace = 'quidem';

    $response = $sdk->pipelines->getRepositoryPipelineSchedules($request);

    if ($response->paginatedPipelineSchedules !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoryPipelineSshKeyPair

Retrieve the repository SSH key pair excluding the SSH private key. The private key is a write only field and will never be exposed in the logs or the REST API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoryPipelineSshKeyPairRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoryPipelineSshKeyPairRequest();
    $request->repoSlug = 'neque';
    $request->workspace = 'quo';

    $response = $sdk->pipelines->getRepositoryPipelineSshKeyPair($request);

    if ($response->pipelineSshKeyPair !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoryPipelineVariable

Retrieve a repository level variable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoryPipelineVariableRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoryPipelineVariableRequest();
    $request->repoSlug = 'illum';
    $request->variableUuid = 'quo';
    $request->workspace = 'fuga';

    $response = $sdk->pipelines->getRepositoryPipelineVariable($request);

    if ($response->pipelineVariable !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoryPipelineVariables

Find repository level variables.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoryPipelineVariablesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoryPipelineVariablesRequest();
    $request->repoSlug = 'eius';
    $request->workspace = 'eos';

    $response = $sdk->pipelines->getRepositoryPipelineVariables($request);

    if ($response->paginatedPipelineVariables !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopPipeline

Signal the stop of a pipeline and all of its steps that not have completed yet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StopPipelineRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopPipelineRequest();
    $request->pipelineUuid = 'voluptas';
    $request->repoSlug = 'ab';
    $request->workspace = 'cupiditate';

    $response = $sdk->pipelines->stopPipeline($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeploymentVariable

Update a deployment environment level variable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeploymentVariableRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeploymentVariableRequest();
    $request->requestBody = [
        'tempora' => 'debitis',
    ];
    $request->environmentUuid = 'ipsam';
    $request->repoSlug = 'aspernatur';
    $request->variableUuid = 'sequi';
    $request->workspace = 'quo';

    $response = $sdk->pipelines->updateDeploymentVariable($request);

    if ($response->deploymentVariable !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~updatePipelineVariableForTeam~~

Update a team level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePipelineVariableForTeamRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePipelineVariableForTeamRequest();
    $request->requestBody = [
        'recusandae' => 'aperiam',
        'distinctio' => 'quod',
    ];
    $request->username = 'Jennings_Blick';
    $request->variableUuid = 'accusamus';

    $response = $sdk->pipelines->updatePipelineVariableForTeam($request);

    if ($response->pipelineVariable !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~updatePipelineVariableForUser~~

Update a user level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePipelineVariableForUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePipelineVariableForUserRequest();
    $request->requestBody = [
        'odio' => 'occaecati',
        'commodi' => 'sapiente',
    ];
    $request->selectedUser = 'dolores';
    $request->variableUuid = 'deserunt';

    $response = $sdk->pipelines->updatePipelineVariableForUser($request);

    if ($response->pipelineVariable !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePipelineVariableForWorkspace

Update a workspace level variable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePipelineVariableForWorkspaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePipelineVariableForWorkspaceRequest();
    $request->requestBody = [
        'accusantium' => 'porro',
        'eum' => 'quas',
    ];
    $request->variableUuid = 'praesentium';
    $request->workspace = 'consequuntur';

    $response = $sdk->pipelines->updatePipelineVariableForWorkspace($request);

    if ($response->pipelineVariable !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRepositoryBuildNumber

Update the next build number that should be assigned to a pipeline. The next build number that will be configured has to be strictly higher than the current latest build number for this repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRepositoryBuildNumberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRepositoryBuildNumberRequest();
    $request->requestBody = [
        'fugit' => 'fuga',
        'mollitia' => 'incidunt',
        'atque' => 'explicabo',
    ];
    $request->repoSlug = 'minima';
    $request->workspace = 'nisi';

    $response = $sdk->pipelines->updateRepositoryBuildNumber($request);

    if ($response->pipelineBuildNumber !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRepositoryPipelineConfig

Update the pipelines configuration for a repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRepositoryPipelineConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRepositoryPipelineConfigRequest();
    $request->requestBody = [
        'sapiente' => 'consequuntur',
    ];
    $request->repoSlug = 'ratione';
    $request->workspace = 'explicabo';

    $response = $sdk->pipelines->updateRepositoryPipelineConfig($request);

    if ($response->pipelinesConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRepositoryPipelineKeyPair

Create or update the repository SSH key pair. The private key will be set as a default SSH identity in your build container.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRepositoryPipelineKeyPairRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRepositoryPipelineKeyPairRequest();
    $request->requestBody = [
        'occaecati' => 'atque',
        'et' => 'esse',
        'eveniet' => 'accusamus',
        'veritatis' => 'esse',
    ];
    $request->repoSlug = 'quod';
    $request->workspace = 'nam';

    $response = $sdk->pipelines->updateRepositoryPipelineKeyPair($request);

    if ($response->pipelineSshKeyPair !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRepositoryPipelineKnownHost

Update a repository level known host.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRepositoryPipelineKnownHostRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRepositoryPipelineKnownHostRequest();
    $request->requestBody = [
        'aliquid' => 'quasi',
        'saepe' => 'vel',
        'harum' => 'molestiae',
        'rerum' => 'occaecati',
    ];
    $request->knownHostUuid = 'minima';
    $request->repoSlug = 'distinctio';
    $request->workspace = 'eligendi';

    $response = $sdk->pipelines->updateRepositoryPipelineKnownHost($request);

    if ($response->pipelineKnownHost !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRepositoryPipelineSchedule

Update a schedule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRepositoryPipelineScheduleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRepositoryPipelineScheduleRequest();
    $request->requestBody = [
        'culpa' => 'tempore',
    ];
    $request->repoSlug = 'adipisci';
    $request->scheduleUuid = 'cumque';
    $request->workspace = 'consequuntur';

    $response = $sdk->pipelines->updateRepositoryPipelineSchedule($request);

    if ($response->pipelineSchedule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRepositoryPipelineVariable

Update a repository level variable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRepositoryPipelineVariableRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRepositoryPipelineVariableRequest();
    $request->requestBody = [
        'minus' => 'quaerat',
    ];
    $request->repoSlug = 'sapiente';
    $request->variableUuid = 'consectetur';
    $request->workspace = 'esse';

    $response = $sdk->pipelines->updateRepositoryPipelineVariable($request);

    if ($response->pipelineVariable !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
