# commitStatuses

## Overview

Commit statuses provide a way to tag commits with meta data,
like automated build results.


### Available Operations

* [getRepositoriesWorkspaceRepoSlugCommitCommitStatuses](#getrepositoriesworkspacereposlugcommitcommitstatuses) - List commit statuses for a commit
* [getRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey](#getrepositoriesworkspacereposlugcommitcommitstatusesbuildkey) - Get a build status for a commit
* [getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatuses](#getrepositoriesworkspacereposlugpullrequestspullrequestidstatuses) - List commit statuses for a pull request
* [postRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuild](#postrepositoriesworkspacereposlugcommitcommitstatusesbuild) - Create a build status for a commit
* [putRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey](#putrepositoriesworkspacereposlugcommitcommitstatusesbuildkey) - Update a build status for a commit

## getRepositoriesWorkspaceRepoSlugCommitCommitStatuses

Returns all statuses (e.g. build results) for a specific commit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesRequest();
    $request->commit = 'temporibus';
    $request->q = 'laborum';
    $request->repoSlug = 'quasi';
    $request->sort = 'reiciendis';
    $request->workspace = 'voluptatibus';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->commitStatuses->getRepositoriesWorkspaceRepoSlugCommitCommitStatuses($request, $requestSecurity);

    if ($response->paginatedCommitstatuses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey

Returns the specified build status for a commit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest();
    $request->commit = 'vero';
    $request->key = 'nihil';
    $request->repoSlug = 'praesentium';
    $request->workspace = 'voluptatibus';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->commitStatuses->getRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey($request, $requestSecurity);

    if ($response->commitstatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatuses

Returns all statuses (e.g. build results) for the given pull
request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRequest();
    $request->pullRequestId = 55714;
    $request->q = 'omnis';
    $request->repoSlug = 'voluptate';
    $request->sort = 'cum';
    $request->workspace = 'perferendis';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->commitStatuses->getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatuses($request, $requestSecurity);

    if ($response->paginatedCommitstatuses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuild

Creates a new build status against the specified commit.

If the specified key already exists, the existing status object will
be overwritten.

Example:

```
curl https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo/commit/e10dae226959c2194f2b07b077c07762d93821cf/statuses/build/           -X POST -u jdoe -H 'Content-Type: application/json'           -d '{
    "key": "MY-BUILD",
    "state": "SUCCESSFUL",
    "description": "42 tests passed",
    "url": "https://www.example.org/my-build-result"
  }'
```

When creating a new commit status, you can use a URI template for the URL.
Templates are URLs that contain variable names that Bitbucket will
evaluate at runtime whenever the URL is displayed anywhere similar to
parameter substitution in
[Bitbucket Connect](https://developer.atlassian.com/bitbucket/concepts/context-parameters.html).
For example, one could use `https://foo.com/builds/{repository.full_name}`
which Bitbucket will turn into `https://foo.com/builds/foo/bar` at render time.
The context variables available are `repository` and `commit`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildRequest();
    $request->requestBody = [
        'reprehenderit' => 'ut',
    ];
    $request->commit = 'maiores';
    $request->repoSlug = 'dicta';
    $request->workspace = 'corporis';

    $requestSecurity = new PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->commitStatuses->postRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuild($request, $requestSecurity);

    if ($response->commitstatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey

Used to update the current status of a build status object on the
specific commit.

This operation can also be used to change other properties of the
build status:

* `state`
* `name`
* `description`
* `url`
* `refname`

The `key` cannot be changed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest();
    $request->requestBody = [
        'iusto' => 'dicta',
        'harum' => 'enim',
    ];
    $request->commit = 'accusamus';
    $request->key = 'commodi';
    $request->repoSlug = 'repudiandae';
    $request->workspace = 'quae';

    $requestSecurity = new PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->commitStatuses->putRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey($request, $requestSecurity);

    if ($response->commitstatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
