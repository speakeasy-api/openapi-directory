# deployments

## Overview

Teams are deploying code faster than ever, thanks to continuous
delivery practices and tools like Bitbucket Pipelines. Bitbucket
Deployments gives teams visibility into their deployment
environments and helps teams to track how far changes have
progressed in their deployment pipeline.


### Available Operations

* [createEnvironment](#createenvironment) - Create an environment
* [deleteEnvironmentForRepository](#deleteenvironmentforrepository) - Delete an environment
* [deleteRepositoriesWorkspaceRepoSlugDeployKeysKeyId](#deleterepositoriesworkspacereposlugdeploykeyskeyid) - Delete a repository deploy key
* [deleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyId](#deleteworkspacesworkspaceprojectsprojectkeydeploykeyskeyid) - Delete a deploy key from a project
* [getDeploymentForRepository](#getdeploymentforrepository) - Get a deployment
* [getDeploymentsForRepository](#getdeploymentsforrepository) - List deployments
* [getEnvironmentForRepository](#getenvironmentforrepository) - Get an environment
* [getEnvironmentsForRepository](#getenvironmentsforrepository) - List environments
* [getRepositoriesWorkspaceRepoSlugDeployKeys](#getrepositoriesworkspacereposlugdeploykeys) - List repository deploy keys
* [getRepositoriesWorkspaceRepoSlugDeployKeysKeyId](#getrepositoriesworkspacereposlugdeploykeyskeyid) - Get a repository deploy key
* [getWorkspacesWorkspaceProjectsProjectKeyDeployKeys](#getworkspacesworkspaceprojectsprojectkeydeploykeys) - List project deploy keys
* [getWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyId](#getworkspacesworkspaceprojectsprojectkeydeploykeyskeyid) - Get a project deploy key
* [postRepositoriesWorkspaceRepoSlugDeployKeys](#postrepositoriesworkspacereposlugdeploykeys) - Add a repository deploy key
* [postWorkspacesWorkspaceProjectsProjectKeyDeployKeys](#postworkspacesworkspaceprojectsprojectkeydeploykeys) - Create a project deploy key
* [putRepositoriesWorkspaceRepoSlugDeployKeysKeyId](#putrepositoriesworkspacereposlugdeploykeyskeyid) - Update a repository deploy key
* [updateEnvironmentForRepository](#updateenvironmentforrepository) - Update an environment

## createEnvironment

Create an environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEnvironmentRequest();
    $request->requestBody = [
        'repudiandae' => 'ullam',
    ];
    $request->repoSlug = 'expedita';
    $request->workspace = 'nihil';

    $response = $sdk->deployments->createEnvironment($request);

    if ($response->deploymentEnvironment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEnvironmentForRepository

Delete an environment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEnvironmentForRepositoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEnvironmentForRepositoryRequest();
    $request->environmentUuid = 'repellat';
    $request->repoSlug = 'quibusdam';
    $request->workspace = 'sed';

    $response = $sdk->deployments->deleteEnvironmentForRepository($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRepositoriesWorkspaceRepoSlugDeployKeysKeyId

This deletes a deploy key from a repository.

Example:
```
$ curl -XDELETE \
-H "Authorization <auth header>" \
https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest();
    $request->keyId = 'saepe';
    $request->repoSlug = 'pariatur';
    $request->workspace = 'accusantium';

    $requestSecurity = new DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->deployments->deleteRepositoriesWorkspaceRepoSlugDeployKeysKeyId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyId

This deletes a deploy key from a project.

Example:
```
$ curl -XDELETE \
-H "Authorization <auth header>" \
https://api.bitbucket.org/2.0/workspaces/jzeng/projects/JZ/deploy-keys/1234
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdRequest();
    $request->keyId = 'consequuntur';
    $request->projectKey = 'praesentium';
    $request->workspace = 'natus';

    $requestSecurity = new DeleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->deployments->deleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeploymentForRepository

Retrieve a deployment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDeploymentForRepositoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeploymentForRepositoryRequest();
    $request->deploymentUuid = 'magni';
    $request->repoSlug = 'sunt';
    $request->workspace = 'quo';

    $response = $sdk->deployments->getDeploymentForRepository($request);

    if ($response->deployment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeploymentsForRepository

Find deployments

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDeploymentsForRepositoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeploymentsForRepositoryRequest();
    $request->repoSlug = 'illum';
    $request->workspace = 'pariatur';

    $response = $sdk->deployments->getDeploymentsForRepository($request);

    if ($response->paginatedDeployments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEnvironmentForRepository

Retrieve an environment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEnvironmentForRepositoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEnvironmentForRepositoryRequest();
    $request->environmentUuid = 'maxime';
    $request->repoSlug = 'ea';
    $request->workspace = 'excepturi';

    $response = $sdk->deployments->getEnvironmentForRepository($request);

    if ($response->deploymentEnvironment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEnvironmentsForRepository

Find environments

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEnvironmentsForRepositoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEnvironmentsForRepositoryRequest();
    $request->repoSlug = 'odit';
    $request->workspace = 'ea';

    $response = $sdk->deployments->getEnvironmentsForRepository($request);

    if ($response->paginatedEnvironments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugDeployKeys

Returns all deploy-keys belonging to a repository.

Example:
```
$ curl -H "Authorization <auth header>" \
https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys

Output:
{
    "pagelen": 10,
    "values": [
        {
            "id": 123,
            "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
            "label": "mykey",
            "type": "deploy_key",
            "created_on": "2018-08-15T23:50:59.993890+00:00",
            "repository": {
                "full_name": "mleu/test",
                "name": "test",
                "type": "repository",
                "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
            },
            "links":{
                "self":{
                    "href": "https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/123"
                }
            }
            "last_used": null,
            "comment": "mleu@C02W454JHTD8"
        }
    ],
    "page": 1,
    "size": 1
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugDeployKeysRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugDeployKeysSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugDeployKeysRequest();
    $request->repoSlug = 'accusantium';
    $request->workspace = 'ab';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugDeployKeysSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->deployments->getRepositoriesWorkspaceRepoSlugDeployKeys($request, $requestSecurity);

    if ($response->paginatedDeployKeys !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugDeployKeysKeyId

Returns the deploy key belonging to a specific key.

Example:
```
$ curl -H "Authorization <auth header>" \
https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-key/1234

Output:
{
    "comment": "mleu@C02W454JHTD8",
    "last_used": null,
    "links": {
        "self": {
            "href": https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-key/1234"
        }
    },
    "repository": {
        "full_name": "mleu/test",
        "name": "test",
        "type": "repository",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
    },
    "label": "mykey",
    "created_on": "2018-08-15T23:50:59.993890+00:00",
    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
    "id": 1234,
    "type": "deploy_key"
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest();
    $request->keyId = 'maiores';
    $request->repoSlug = 'quidem';
    $request->workspace = 'ipsam';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->deployments->getRepositoriesWorkspaceRepoSlugDeployKeysKeyId($request, $requestSecurity);

    if ($response->deployKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspacesWorkspaceProjectsProjectKeyDeployKeys

Returns all deploy keys belonging to a project.

Example:
```
$ curl -H "Authorization <auth header>" \
https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT/deploy-keys

Output:
{
    "pagelen":10,
    "values":[
        {
            "comment":"thakseth@C02W454JHTD8",
            "last_used":null,
            "links":{
                "self":{
                    "href":"https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT/deploy-keys/1234"
                }
            },
            "label":"test",
            "project":{
                "links":{
                    "self":{
                        "href":"https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT"
                    }
                },
                "type":"project",
                "name":"cooperative standard",
                "key":"TEST_PROJECT",
                "uuid":"{3b3e510b-7f2b-414d-a2b7-76c4e405c1c0}"
            },
            "created_on":"2021-07-28T21:20:19.491721+00:00",
            "key":"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDX5yfMOEw6HG9jKTYTisbmDTJ4MCUTSVGr5e4OWvY3UuI2A6F8SdzQqa2f5BABA/4g5Sk5awJrYHlNu3EzV1V2I44tR3A4fnZAG71ZKyDPi1wvdO7UYmFgxV/Vd18H9QZFFjICGDM7W0PT2mI0kON/jN3qNWi+GiB/xgaeQKSqynysdysDp8lnnI/8Sh3ikURP9UP83ShRCpAXszOUNaa+UUlcYQYBDLIGowsg51c4PCkC3DNhAMxppkNRKoSOWwyl+oRVXHSDylkiJSBHW3HH4Q6WHieD54kGrjbhWBKdnnxKX7QAAZBDseY+t01N36m6/ljvXSUEcBWtHxBYye0r",
            "type":"project_deploy_key",
            "id":1234
        }
    ],
    "page":1,
    "size":1
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysRequest();
    $request->projectKey = 'voluptate';
    $request->workspace = 'autem';

    $requestSecurity = new GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->deployments->getWorkspacesWorkspaceProjectsProjectKeyDeployKeys($request, $requestSecurity);

    if ($response->paginatedProjectDeployKeys !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyId

Returns the deploy key belonging to a specific key ID.

Example:
```
$ curl -H "Authorization <auth header>" \
https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT/deploy-keys/1234

Output:
{
    "pagelen":10,
    "values":[
        {
            "comment":"thakseth@C02W454JHTD8",
            "last_used":null,
            "links":{
                "self":{
                    "href":"https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT/deploy-keys/1234"
                }
            },
            "label":"test",
            "project":{
                "links":{
                    "self":{
                        "href":"https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT"
                    }
                },
                "type":"project",
                "name":"cooperative standard",
                "key":"TEST_PROJECT",
                "uuid":"{3b3e510b-7f2b-414d-a2b7-76c4e405c1c0}"
            },
            "created_on":"2021-07-28T21:20:19.491721+00:00",
            "key":"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDX5yfMOEw6HG9jKTYTisbmDTJ4MCUTSVGr5e4OWvY3UuI2A6F8SdzQqa2f5BABA/4g5Sk5awJrYHlNu3EzV1V2I44tR3A4fnZAG71ZKyDPi1wvdO7UYmFgxV/Vd18H9QZFFjICGDM7W0PT2mI0kON/jN3qNWi+GiB/xgaeQKSqynysdysDp8lnnI/8Sh3ikURP9UP83ShRCpAXszOUNaa+UUlcYQYBDLIGowsg51c4PCkC3DNhAMxppkNRKoSOWwyl+oRVXHSDylkiJSBHW3HH4Q6WHieD54kGrjbhWBKdnnxKX7QAAZBDseY+t01N36m6/ljvXSUEcBWtHxBYye0r",
            "type":"project_deploy_key",
            "id":1234
        }
    ],
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdRequest();
    $request->keyId = 'nam';
    $request->projectKey = 'eaque';
    $request->workspace = 'pariatur';

    $requestSecurity = new GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->deployments->getWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyId($request, $requestSecurity);

    if ($response->projectDeployKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRepositoriesWorkspaceRepoSlugDeployKeys

Create a new deploy key in a repository. Note: If authenticating a deploy key
with an OAuth consumer, any changes to the OAuth consumer will subsequently
invalidate the deploy key.


Example:
```
$ curl -XPOST \
-H "Authorization <auth header>" \
-H "Content-type: application/json" \
https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys -d \
'{
    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 mleu@C02W454JHTD8",
    "label": "mydeploykey"
}'

Output:
{
    "id": 123,
    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
    "label": "mydeploykey",
    "type": "deploy_key",
    "created_on": "2018-08-15T23:50:59.993890+00:00",
    "repository": {
        "full_name": "mleu/test",
        "name": "test",
        "type": "repository",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
    },
    "links":{
        "self":{
            "href": "https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/123"
        }
    }
    "last_used": null,
    "comment": "mleu@C02W454JHTD8"
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugDeployKeysRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugDeployKeysSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRepositoriesWorkspaceRepoSlugDeployKeysRequest();
    $request->repoSlug = 'nemo';
    $request->workspace = 'voluptatibus';

    $requestSecurity = new PostRepositoriesWorkspaceRepoSlugDeployKeysSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->deployments->postRepositoriesWorkspaceRepoSlugDeployKeys($request, $requestSecurity);

    if ($response->deployKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postWorkspacesWorkspaceProjectsProjectKeyDeployKeys

Create a new deploy key in a project.

Example:
```
$ curl -XPOST \
-H "Authorization <auth header>" \
-H "Content-type: application/json" \
https://api.bitbucket.org/2.0/workspaces/jzeng/projects/JZ/deploy-keys/ -d \
'{
    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 mleu@C02W454JHTD8",
    "label": "mydeploykey"
}'

Output:
{
    "comment": "mleu@C02W454JHTD8",
    "last_used": null,
    "links": {
        "self": {
            "href": "https://api.bitbucket.org/2.0/workspaces/testadfsa/projects/ASDF/deploy-keys/5/"
        }
    },
    "label": "myprojectkey",
    "project": {
        ...
    },
    "created_on": "2021-08-10T05:28:00.570859+00:00",
    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
    "type": "project_deploy_key",
    "id": 5
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostWorkspacesWorkspaceProjectsProjectKeyDeployKeysRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostWorkspacesWorkspaceProjectsProjectKeyDeployKeysSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostWorkspacesWorkspaceProjectsProjectKeyDeployKeysRequest();
    $request->projectKey = 'perferendis';
    $request->workspace = 'fugiat';

    $requestSecurity = new PostWorkspacesWorkspaceProjectsProjectKeyDeployKeysSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->deployments->postWorkspacesWorkspaceProjectsProjectKeyDeployKeys($request, $requestSecurity);

    if ($response->projectDeployKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putRepositoriesWorkspaceRepoSlugDeployKeysKeyId

Create a new deploy key in a repository.

The same key needs to be passed in but the comment and label can change.

Example:
```
$ curl -XPUT \
-H "Authorization <auth header>" \
-H "Content-type: application/json" \
https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234 -d \
'{
    "label": "newlabel",
    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 newcomment",
}'

Output:
{
    "comment": "newcomment",
    "last_used": null,
    "links": {
        "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234"
        }
    },
    "repository": {
        "full_name": "mleu/test",
        "name": "test",
        "type": "repository",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
    },
    "label": "newlabel",
    "created_on": "2018-08-15T23:50:59.993890+00:00",
    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
    "id": 1234,
    "type": "deploy_key"
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest();
    $request->keyId = 'amet';
    $request->repoSlug = 'aut';
    $request->workspace = 'cumque';

    $requestSecurity = new PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->deployments->putRepositoriesWorkspaceRepoSlugDeployKeysKeyId($request, $requestSecurity);

    if ($response->deployKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEnvironmentForRepository

Update an environment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEnvironmentForRepositoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEnvironmentForRepositoryRequest();
    $request->environmentUuid = 'corporis';
    $request->repoSlug = 'hic';
    $request->workspace = 'libero';

    $response = $sdk->deployments->updateEnvironmentForRepository($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
