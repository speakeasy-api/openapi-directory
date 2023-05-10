# branchRestrictions

## Overview

Repository owners and administrators can set branch management
rules on a repository that control what can be pushed by whom.
Through these rules, you can enforce a project or team
workflow. For example, owners or administrators can:

* Limit push powers
* Prevent branch deletion
* Prevent history re-writes (Git only)


### Available Operations

* [deleteRepositoriesWorkspaceRepoSlugBranchRestrictionsId](#deleterepositoriesworkspacereposlugbranchrestrictionsid) - Delete a branch restriction rule
* [getRepositoriesWorkspaceRepoSlugBranchRestrictions](#getrepositoriesworkspacereposlugbranchrestrictions) - List branch restrictions
* [getRepositoriesWorkspaceRepoSlugBranchRestrictionsId](#getrepositoriesworkspacereposlugbranchrestrictionsid) - Get a branch restriction rule
* [postRepositoriesWorkspaceRepoSlugBranchRestrictions](#postrepositoriesworkspacereposlugbranchrestrictions) - Create a branch restriction rule
* [putRepositoriesWorkspaceRepoSlugBranchRestrictionsId](#putrepositoriesworkspacereposlugbranchrestrictionsid) - Update a branch restriction rule

## deleteRepositoriesWorkspaceRepoSlugBranchRestrictionsId

Deletes an existing branch restriction rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest();
    $request->id = '9a674e0f-467c-4c87-96ed-151a05dfc2dd';
    $request->repoSlug = 'maiores';
    $request->workspace = 'molestiae';

    $requestSecurity = new DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->branchRestrictions->deleteRepositoriesWorkspaceRepoSlugBranchRestrictionsId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugBranchRestrictions

Returns a paginated list of all branch restrictions on the
repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest();
    $request->kind = 'quod';
    $request->pattern = 'quod';
    $request->repoSlug = 'esse';
    $request->workspace = 'totam';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->branchRestrictions->getRepositoriesWorkspaceRepoSlugBranchRestrictions($request, $requestSecurity);

    if ($response->paginatedBranchrestrictions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugBranchRestrictionsId

Returns a specific branch restriction rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest();
    $request->id = 'ca1ba928-fc81-4674-acb7-39205929396f';
    $request->repoSlug = 'saepe';
    $request->workspace = 'fuga';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->branchRestrictions->getRepositoriesWorkspaceRepoSlugBranchRestrictionsId($request, $requestSecurity);

    if ($response->branchrestriction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRepositoriesWorkspaceRepoSlugBranchRestrictions

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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest();
    $request->requestBody = [
        'corporis' => 'iste',
        'iure' => 'saepe',
    ];
    $request->repoSlug = 'quidem';
    $request->workspace = 'architecto';

    $requestSecurity = new PostRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->branchRestrictions->postRepositoriesWorkspaceRepoSlugBranchRestrictions($request, $requestSecurity);

    if ($response->branchrestriction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putRepositoriesWorkspaceRepoSlugBranchRestrictionsId

Updates an existing branch restriction rule.

Fields not present in the request body are ignored.

See [`POST`](/cloud/bitbucket/rest/api-group-branch-restrictions/#api-repositories-workspace-repo-slug-branch-restrictions-post) for details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest();
    $request->requestBody = [
        'reiciendis' => 'est',
    ];
    $request->id = 'aa2352c5-9559-407a-bf1a-3a2fa9467739';
    $request->repoSlug = 'quia';
    $request->workspace = 'quis';

    $requestSecurity = new PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->branchRestrictions->putRepositoriesWorkspaceRepoSlugBranchRestrictionsId($request, $requestSecurity);

    if ($response->branchrestriction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
