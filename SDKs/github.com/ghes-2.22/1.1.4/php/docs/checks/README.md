# checks

## Overview

Rich interactions with checks run by your integrations.

### Available Operations

* [checksCreate](#checkscreate) - Create a check run
* [checksCreateSuite](#checkscreatesuite) - Create a check suite
* [checksGet](#checksget) - Get a check run
* [checksGetSuite](#checksgetsuite) - Get a check suite
* [checksListAnnotations](#checkslistannotations) - List check run annotations
* [checksListForRef](#checkslistforref) - List check runs for a Git reference
* [checksListForSuite](#checkslistforsuite) - List check runs in a check suite
* [checksListSuitesForRef](#checkslistsuitesforref) - List check suites for a Git reference
* [checksRerequestSuite](#checksrerequestsuite) - Rerequest a check suite
* [checksSetSuitesPreferences](#checkssetsuitespreferences) - Update repository preferences for check suites
* [checksUpdate](#checksupdate) - Update a check run

## checksCreate

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

Creates a new check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to create check runs.

In a check suite, GitHub limits the number of check runs with the same name to 1000. Once these check runs exceed 1000, GitHub will start to automatically delete older check runs.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/checks#create-a-check-run>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChecksCreateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChecksCreateRequest();
    $request->requestBody = [
        'ad' => 'saepe',
        'suscipit' => 'deserunt',
        'provident' => 'minima',
        'repellendus' => 'totam',
    ];
    $request->owner = 'similique';
    $request->repo = 'alias';

    $response = $sdk->checks->checksCreate($request);

    if ($response->checkRun !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## checksCreateSuite

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.

By default, check suites are automatically created when you create a [check run](https://docs.github.com/enterprise-server@2.22/rest/reference/checks#check-runs). You only need to use this endpoint for manually creating check suites when you've disabled automatic creation using "[Update repository preferences for check suites](https://docs.github.com/enterprise-server@2.22/rest/reference/checks#update-repository-preferences-for-check-suites)". Your GitHub App must have the `checks:write` permission to create check suites.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/checks#create-a-check-suite>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChecksCreateSuiteRequest;
use \OpenAPI\OpenAPI\Models\Operations\ChecksCreateSuiteRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChecksCreateSuiteRequest();
    $request->requestBody = new ChecksCreateSuiteRequestBody();
    $request->requestBody->headSha = 'at';
    $request->owner = 'quaerat';
    $request->repo = 'tempora';

    $response = $sdk->checks->checksCreateSuite($request);

    if ($response->checkSuite !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## checksGet

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

Gets a single check run using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/checks#get-a-check-run>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChecksGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChecksGetRequest();
    $request->checkRunId = 425451;
    $request->owner = 'quod';
    $request->repo = 'officiis';

    $response = $sdk->checks->checksGet($request);

    if ($response->checkRun !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## checksGetSuite

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.

Gets a single check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/checks#get-a-check-suite>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChecksGetSuiteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChecksGetSuiteRequest();
    $request->checkSuiteId = 185636;
    $request->owner = 'dolorum';
    $request->repo = 'a';

    $response = $sdk->checks->checksGetSuite($request);

    if ($response->checkSuite !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## checksListAnnotations

Lists annotations for a check run using the annotation `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get annotations for a check run. OAuth Apps and authenticated users must have the `repo` scope to get annotations for a check run in a private repository.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/checks#list-check-run-annotations>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChecksListAnnotationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChecksListAnnotationsRequest();
    $request->checkRunId = 456130;
    $request->owner = 'harum';
    $request->page = 483409;
    $request->perPage = 215507;
    $request->repo = 'quisquam';

    $response = $sdk->checks->checksListAnnotations($request);

    if ($response->checkAnnotations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## checksListForRef

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

Lists check runs for a commit ref. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/checks#list-check-runs-for-a-git-reference>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChecksListForRefRequest;
use \OpenAPI\OpenAPI\Models\Operations\ChecksListForRefFilterEnum;
use \OpenAPI\OpenAPI\Models\Shared\StatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChecksListForRefRequest();
    $request->appId = 947371;
    $request->checkName = 'amet';
    $request->filter = ChecksListForRefFilterEnum::ALL;
    $request->owner = 'accusamus';
    $request->page = 253941;
    $request->perPage = 313692;
    $request->ref = 'dolorem';
    $request->repo = 'sapiente';
    $request->status = StatusEnum::IN_PROGRESS;

    $response = $sdk->checks->checksListForRef($request);

    if ($response->checksListForRef200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## checksListForSuite

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

Lists check runs for a check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/checks#list-check-runs-in-a-check-suite>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChecksListForSuiteRequest;
use \OpenAPI\OpenAPI\Models\Operations\ChecksListForSuiteFilterEnum;
use \OpenAPI\OpenAPI\Models\Shared\StatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChecksListForSuiteRequest();
    $request->checkName = 'nihil';
    $request->checkSuiteId = 25662;
    $request->filter = ChecksListForSuiteFilterEnum::ALL;
    $request->owner = 'neque';
    $request->page = 153694;
    $request->perPage = 424685;
    $request->repo = 'libero';
    $request->status = StatusEnum::IN_PROGRESS;

    $response = $sdk->checks->checksListForSuite($request);

    if ($response->checksListForSuite200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## checksListSuitesForRef

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.

Lists check suites for a commit `ref`. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to list check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/checks#list-check-suites-for-a-git-reference>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChecksListSuitesForRefRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChecksListSuitesForRefRequest();
    $request->appId = 646265;
    $request->checkName = 'quam';
    $request->owner = 'ipsum';
    $request->page = 277628;
    $request->perPage = 186458;
    $request->ref = 'cupiditate';
    $request->repo = 'maxime';

    $response = $sdk->checks->checksListSuitesForRef($request);

    if ($response->checksListSuitesForRef200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## checksRerequestSuite

Triggers GitHub to rerequest an existing check suite, without pushing new code to a repository. This endpoint will trigger the [`check_suite` webhook](https://docs.github.com/enterprise-server@2.22/webhooks/event-payloads/#check_suite) event with the action `rerequested`. When a check suite is `rerequested`, its `status` is reset to `queued` and the `conclusion` is cleared.

To rerequest a check suite, your GitHub App must have the `checks:read` permission on a private repository or pull access to a public repository.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/checks#rerequest-a-check-suite>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChecksRerequestSuiteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChecksRerequestSuiteRequest();
    $request->checkSuiteId = 863856;
    $request->owner = 'soluta';
    $request->repo = 'dicta';

    $response = $sdk->checks->checksRerequestSuite($request);

    if ($response->checksRerequestSuite201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## checksSetSuitesPreferences

Changes the default automatic flow when creating check suites. By default, a check suite is automatically created each time code is pushed to a repository. When you disable the automatic creation of check suites, you can manually [Create a check suite](https://docs.github.com/enterprise-server@2.22/rest/reference/checks#create-a-check-suite). You must have admin permissions in the repository to set preferences for check suites.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/checks#update-repository-preferences-for-check-suites>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChecksSetSuitesPreferencesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ChecksSetSuitesPreferencesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChecksSetSuitesPreferencesRequest();
    $request->requestBody = new ChecksSetSuitesPreferencesRequestBody();
    $request->requestBody->autoTriggerChecks = [
        new ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks(),
        new ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks(),
        new ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks(),
    ];
    $request->owner = 'totam';
    $request->repo = 'incidunt';

    $response = $sdk->checks->checksSetSuitesPreferences($request);

    if ($response->checkSuitePreference !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## checksUpdate

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

Updates a check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to edit check runs.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/checks#update-a-check-run>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChecksUpdateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChecksUpdateRequest();
    $request->requestBody = [
        'distinctio' => 'facilis',
    ];
    $request->checkRunId = 396060;
    $request->owner = 'quam';
    $request->repo = 'molestias';

    $response = $sdk->checks->checksUpdate($request);

    if ($response->checkRun !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
