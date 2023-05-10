# SDK

## Overview

The CircleCI API is a RESTful, fully-featured API that allows you to do almost anything in CircleCI.
You can access all information and trigger all actions.
The only thing we don’t provide access to is billing functions, which must be done from the CircleCI web UI.


### Available Operations

* [deleteProjectUsernameProjectBuildCache](#deleteprojectusernameprojectbuildcache) - Clears the cache for a project.

* [deleteProjectUsernameProjectCheckoutKeyFingerprint](#deleteprojectusernameprojectcheckoutkeyfingerprint) - Delete a checkout key.

* [deleteProjectUsernameProjectEnvvarName](#deleteprojectusernameprojectenvvarname) - Deletes the environment variable named ':name'

* [getMe](#getme) - Provides information about the signed in user.

* [getProjectUsernameProject](#getprojectusernameproject) - Build summary for each of the last 30 builds for a single git repo.

* [getProjectUsernameProjectCheckoutKey](#getprojectusernameprojectcheckoutkey) - Lists checkout keys.

* [getProjectUsernameProjectCheckoutKeyFingerprint](#getprojectusernameprojectcheckoutkeyfingerprint) - Get a checkout key.

* [getProjectUsernameProjectEnvvar](#getprojectusernameprojectenvvar) - Lists the environment variables for :project

* [getProjectUsernameProjectEnvvarName](#getprojectusernameprojectenvvarname) - Gets the hidden value of environment variable :name

* [getProjectUsernameProjectBuildNum](#getprojectusernameprojectbuildnum) - Full details for a single build. The response includes all of the fields from the build summary.
This is also the payload for the [notification webhooks](/docs/configuration/#notify), in which case this object is the value to a key named 'payload'.

* [getProjectUsernameProjectBuildNumArtifacts](#getprojectusernameprojectbuildnumartifacts) - List the artifacts produced by a given build.

* [getProjectUsernameProjectBuildNumTests](#getprojectusernameprojectbuildnumtests) - Provides test metadata for a build
Note: [Learn how to set up your builds to collect test metadata](https://circleci.com/docs/test-metadata/)

* [getProjects](#getprojects) - List of all the projects you're following on CircleCI, with build information organized by branch.

* [getRecentBuilds](#getrecentbuilds) - Build summary for each of the last 30 recent builds, ordered by build_num.

* [postProjectUsernameProject](#postprojectusernameproject) - Triggers a new build, returns a summary of the build.

* [postProjectUsernameProjectCheckoutKey](#postprojectusernameprojectcheckoutkey) - Creates a new checkout key.
Only usable with a user API token.

* [postProjectUsernameProjectEnvvar](#postprojectusernameprojectenvvar) - Creates a new environment variable

* [postProjectUsernameProjectSshKey](#postprojectusernameprojectsshkey) - Create an ssh key used to access external systems that require SSH key-based authentication

* [postProjectUsernameProjectTreeBranch](#postprojectusernameprojecttreebranch) - Triggers a new build, returns a summary of the build.
Optional build parameters can be set using an experimental API.

Note: For more about build parameters, read about [using parameterized builds](https://circleci.com/docs/parameterized-builds/)

* [postProjectUsernameProjectBuildNumCancel](#postprojectusernameprojectbuildnumcancel) - Cancels the build, returns a summary of the build.

* [postProjectUsernameProjectBuildNumRetry](#postprojectusernameprojectbuildnumretry) - Retries the build, returns a summary of the new build.

* [postUserHerokuKey](#postuserherokukey) - Adds your Heroku API key to CircleCI, takes apikey as form param name.


## deleteProjectUsernameProjectBuildCache

Clears the cache for a project.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProjectUsernameProjectBuildCacheRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProjectUsernameProjectBuildCacheRequest();
    $request->project = 'corrupti';
    $request->username = 'Roselyn_Kassulke';

    $response = $sdk->sdk->deleteProjectUsernameProjectBuildCache($request);

    if ($response->deleteProjectUsernameProjectBuildCache200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProjectUsernameProjectCheckoutKeyFingerprint

Delete a checkout key.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProjectUsernameProjectCheckoutKeyFingerprintRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProjectUsernameProjectCheckoutKeyFingerprintRequest();
    $request->fingerprint = 'suscipit';
    $request->project = 'iure';
    $request->username = 'Eli96';

    $response = $sdk->sdk->deleteProjectUsernameProjectCheckoutKeyFingerprint($request);

    if ($response->deleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProjectUsernameProjectEnvvarName

Deletes the environment variable named ':name'


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProjectUsernameProjectEnvvarNameRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProjectUsernameProjectEnvvarNameRequest();
    $request->name = 'Laurie Kreiger';
    $request->project = 'voluptatum';
    $request->username = 'Jaycee_Mante';

    $response = $sdk->sdk->deleteProjectUsernameProjectEnvvarName($request);

    if ($response->deleteProjectUsernameProjectEnvvarName200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMe

Provides information about the signed in user.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->getMe();

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjectUsernameProject

Build summary for each of the last 30 builds for a single git repo.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectUsernameProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\FilterEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectUsernameProjectRequest();
    $request->filter = FilterEnum::RUNNING;
    $request->limit = 71036;
    $request->offset = 337396;
    $request->project = 'veritatis';
    $request->username = 'Lydia_Aufderhar';

    $response = $sdk->sdk->getProjectUsernameProject($request);

    if ($response->builds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjectUsernameProjectCheckoutKey

Lists checkout keys.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectUsernameProjectCheckoutKeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectUsernameProjectCheckoutKeyRequest();
    $request->project = 'sapiente';
    $request->username = 'Orlando_Connelly97';

    $response = $sdk->sdk->getProjectUsernameProjectCheckoutKey($request);

    if ($response->keys !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjectUsernameProjectCheckoutKeyFingerprint

Get a checkout key.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectUsernameProjectCheckoutKeyFingerprintRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectUsernameProjectCheckoutKeyFingerprintRequest();
    $request->fingerprint = 'molestiae';
    $request->project = 'quod';
    $request->username = 'Presley_Koepp';

    $response = $sdk->sdk->getProjectUsernameProjectCheckoutKeyFingerprint($request);

    if ($response->key !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjectUsernameProjectEnvvar

Lists the environment variables for :project


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectUsernameProjectEnvvarRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectUsernameProjectEnvvarRequest();
    $request->project = 'dolorum';
    $request->username = 'Billy_Reichel';

    $response = $sdk->sdk->getProjectUsernameProjectEnvvar($request);

    if ($response->envvars !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjectUsernameProjectEnvvarName

Gets the hidden value of environment variable :name


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectUsernameProjectEnvvarNameRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectUsernameProjectEnvvarNameRequest();
    $request->name = 'Cassandra Welch';
    $request->project = 'beatae';
    $request->username = 'Haskell18';

    $response = $sdk->sdk->getProjectUsernameProjectEnvvarName($request);

    if ($response->envvar !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjectUsernameProjectBuildNum

Full details for a single build. The response includes all of the fields from the build summary.
This is also the payload for the [notification webhooks](/docs/configuration/#notify), in which case this object is the value to a key named 'payload'.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectUsernameProjectBuildNumRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectUsernameProjectBuildNumRequest();
    $request->buildNum = 774234;
    $request->project = 'cum';
    $request->username = 'Jacky.Emmerich';

    $response = $sdk->sdk->getProjectUsernameProjectBuildNum($request);

    if ($response->buildDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjectUsernameProjectBuildNumArtifacts

List the artifacts produced by a given build.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectUsernameProjectBuildNumArtifactsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectUsernameProjectBuildNumArtifactsRequest();
    $request->buildNum = 18789;
    $request->project = 'ad';
    $request->username = 'Lia.Cormier';

    $response = $sdk->sdk->getProjectUsernameProjectBuildNumArtifacts($request);

    if ($response->artifacts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjectUsernameProjectBuildNumTests

Provides test metadata for a build
Note: [Learn how to set up your builds to collect test metadata](https://circleci.com/docs/test-metadata/)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectUsernameProjectBuildNumTestsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectUsernameProjectBuildNumTestsRequest();
    $request->buildNum = 616934;
    $request->project = 'laboriosam';
    $request->username = 'Tyra.Turcotte35';

    $response = $sdk->sdk->getProjectUsernameProjectBuildNumTests($request);

    if ($response->tests !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjects

List of all the projects you're following on CircleCI, with build information organized by branch.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->getProjects();

    if ($response->projects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRecentBuilds

Build summary for each of the last 30 recent builds, ordered by build_num.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRecentBuildsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRecentBuildsRequest();
    $request->limit = 613064;
    $request->offset = 437032;

    $response = $sdk->sdk->getRecentBuilds($request);

    if ($response->builds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postProjectUsernameProject

Triggers a new build, returns a summary of the build.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostProjectUsernameProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostProjectUsernameProjectRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostProjectUsernameProjectRequest();
    $request->requestBody = new PostProjectUsernameProjectRequestBody();
    $request->requestBody->buildParameters = [
        'quidem' => 'architecto',
        'ipsa' => 'reiciendis',
        'est' => 'mollitia',
        'laborum' => 'dolores',
    ];
    $request->requestBody->parallel = 'dolorem';
    $request->requestBody->revision = 'corporis';
    $request->requestBody->tag = 'explicabo';
    $request->project = 'nobis';
    $request->username = 'Emerald.Mohr';

    $response = $sdk->sdk->postProjectUsernameProject($request);

    if ($response->buildSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postProjectUsernameProjectCheckoutKey

Creates a new checkout key.
Only usable with a user API token.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostProjectUsernameProjectCheckoutKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostProjectUsernameProjectCheckoutKeyRequestBodyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostProjectUsernameProjectCheckoutKeyRequest();
    $request->requestBody = PostProjectUsernameProjectCheckoutKeyRequestBodyEnum::GITHUB_USER_KEY;
    $request->project = 'accusantium';
    $request->username = 'Ibrahim_Nicolas10';

    $response = $sdk->sdk->postProjectUsernameProjectCheckoutKey($request);

    if ($response->key !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postProjectUsernameProjectEnvvar

Creates a new environment variable


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostProjectUsernameProjectEnvvarRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostProjectUsernameProjectEnvvarRequest();
    $request->project = 'mollitia';
    $request->username = 'Cordie99';

    $response = $sdk->sdk->postProjectUsernameProjectEnvvar($request);

    if ($response->envvar !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postProjectUsernameProjectSshKey

Create an ssh key used to access external systems that require SSH key-based authentication


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostProjectUsernameProjectSshKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostProjectUsernameProjectSshKeyContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostProjectUsernameProjectSshKeyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostProjectUsernameProjectSshKeyRequest();
    $request->contentType = PostProjectUsernameProjectSshKeyContentTypeEnum::APPLICATION_JSON;
    $request->requestBody = new PostProjectUsernameProjectSshKeyRequestBody();
    $request->requestBody->hostname = 'prize-mud.biz';
    $request->requestBody->privateKey = 'commodi';
    $request->project = 'quam';
    $request->username = 'Jarred.Frami';

    $response = $sdk->sdk->postProjectUsernameProjectSshKey($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postProjectUsernameProjectTreeBranch

Triggers a new build, returns a summary of the build.
Optional build parameters can be set using an experimental API.

Note: For more about build parameters, read about [using parameterized builds](https://circleci.com/docs/parameterized-builds/)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostProjectUsernameProjectTreeBranchRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostProjectUsernameProjectTreeBranchRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostProjectUsernameProjectTreeBranchRequest();
    $request->requestBody = new PostProjectUsernameProjectTreeBranchRequestBody();
    $request->requestBody->buildParameters = [
        'vitae' => 'laborum',
        'animi' => 'enim',
    ];
    $request->requestBody->parallel = 'odit';
    $request->requestBody->revision = 'quo';
    $request->branch = 'sequi';
    $request->project = 'tenetur';
    $request->username = 'Freida.Ondricka9';

    $response = $sdk->sdk->postProjectUsernameProjectTreeBranch($request);

    if ($response->build !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postProjectUsernameProjectBuildNumCancel

Cancels the build, returns a summary of the build.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostProjectUsernameProjectBuildNumCancelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostProjectUsernameProjectBuildNumCancelRequest();
    $request->buildNum = 622846;
    $request->project = 'temporibus';
    $request->username = 'Margie_Boyer87';

    $response = $sdk->sdk->postProjectUsernameProjectBuildNumCancel($request);

    if ($response->build !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postProjectUsernameProjectBuildNumRetry

Retries the build, returns a summary of the new build.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostProjectUsernameProjectBuildNumRetryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostProjectUsernameProjectBuildNumRetryRequest();
    $request->buildNum = 468651;
    $request->project = 'praesentium';
    $request->username = 'Whitney.Bednar';

    $response = $sdk->sdk->postProjectUsernameProjectBuildNumRetry($request);

    if ($response->build !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUserHerokuKey

Adds your Heroku API key to CircleCI, takes apikey as form param name.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->postUserHerokuKey();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
