# workspaces

## Overview

A workspace is where you create repositories, collaborate on
your code, and organize different streams of work in your Bitbucket
Cloud account. Workspaces replace the use of teams and users in API
calls.


### Available Operations

* [deleteWorkspacesWorkspaceHooksUid](#deleteworkspacesworkspacehooksuid) - Delete a webhook for a workspace
* [getUserPermissionsWorkspaces](#getuserpermissionsworkspaces) - List workspaces for the current user
* [getWorkspaces](#getworkspaces) - List workspaces for user
* [getWorkspacesWorkspace](#getworkspacesworkspace) - Get a workspace
* [getWorkspacesWorkspaceHooks](#getworkspacesworkspacehooks) - List webhooks for a workspace
* [getWorkspacesWorkspaceHooksUid](#getworkspacesworkspacehooksuid) - Get a webhook for a workspace
* [getWorkspacesWorkspaceMembers](#getworkspacesworkspacemembers) - List users in a workspace
* [getWorkspacesWorkspaceMembersMember](#getworkspacesworkspacemembersmember) - Get user membership for a workspace
* [getWorkspacesWorkspacePermissions](#getworkspacesworkspacepermissions) - List user permissions in a workspace
* [getWorkspacesWorkspacePermissionsRepositories](#getworkspacesworkspacepermissionsrepositories) - List all repository permissions for a workspace
* [getWorkspacesWorkspacePermissionsRepositoriesRepoSlug](#getworkspacesworkspacepermissionsrepositoriesreposlug) - List a repository permissions for a workspace
* [getWorkspacesWorkspaceProjects](#getworkspacesworkspaceprojects) - List projects in a workspace
* [getWorkspacesWorkspaceProjectsProjectKey](#getworkspacesworkspaceprojectsprojectkey) - Get a project for a workspace
* [postWorkspacesWorkspaceHooks](#postworkspacesworkspacehooks) - Create a webhook for a workspace
* [putWorkspacesWorkspaceHooksUid](#putworkspacesworkspacehooksuid) - Update a webhook for a workspace

## deleteWorkspacesWorkspaceHooksUid

Deletes the specified webhook subscription from the given workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkspacesWorkspaceHooksUidRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkspacesWorkspaceHooksUidSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorkspacesWorkspaceHooksUidRequest();
    $request->uid = 'nulla';
    $request->workspace = 'necessitatibus';

    $requestSecurity = new DeleteWorkspacesWorkspaceHooksUidSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->workspaces->deleteWorkspacesWorkspaceHooksUid($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserPermissionsWorkspaces

Returns an object for each workspace the caller is a member of, and
their effective role - the highest level of privilege the caller has.
If a user is a member of multiple groups with distinct roles, only the
highest level is returned.

Permissions can be:

* `owner`
* `collaborator`
* `member`

**The `collaborator` role is being removed from the Bitbucket Cloud API. For more information,
see the [deprecation announcement](/cloud/bitbucket/deprecation-notice-collaborator-role/).**

Example:

```
$ curl https://api.bitbucket.org/2.0/user/permissions/workspaces

{
  "pagelen": 10,
  "page": 1,
  "size": 1,
  "values": [
    {
      "type": "workspace_membership",
      "permission": "owner",
      "last_accessed": "2019-03-07T12:35:02.900024+00:00",
      "added_on": "2018-10-11T17:42:02.961424+00:00",
      "user": {
        "type": "user",
        "uuid": "{470c176d-3574-44ea-bb41-89e8638bcca4}",
        "nickname": "evzijst",
        "display_name": "Erik van Zijst",
      },
      "workspace": {
        "type": "workspace",
        "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
        "slug": "bbworkspace1",
        "name": "Atlassian Bitbucket",
      }
    }
  ]
}
```

Results may be further [filtered or sorted](/cloud/bitbucket/rest/intro/#filtering) by
workspace or permission by adding the following query string parameters:

* `q=workspace.slug="bbworkspace1"` or `q=permission="owner"`
* `sort=workspace.slug`

Note that the query parameter values need to be URL escaped so that `=`
would become `%3D`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUserPermissionsWorkspacesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUserPermissionsWorkspacesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserPermissionsWorkspacesRequest();
    $request->q = 'ipsa';
    $request->sort = 'tempora';

    $requestSecurity = new GetUserPermissionsWorkspacesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->workspaces->getUserPermissionsWorkspaces($request, $requestSecurity);

    if ($response->paginatedWorkspaceMemberships !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspaces

Returns a list of workspaces accessible by the authenticated user.

Example:

```
$ curl https://api.bitbucket.org/2.0/workspaces

{
  "pagelen": 10,
  "page": 1,
  "size": 1,
  "values": [
    {
        "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
        "links": {
            "owners": {
                "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1/members?q=permission%3D%22owner%22"
            },
            "self": {
                "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1"
            },
            "repositories": {
                "href": "https://api.bitbucket.org/2.0/repositories/bbworkspace1"
            },
            "snippets": {
                "href": "https://api.bitbucket.org/2.0/snippets/bbworkspace1"
            },
            "html": {
                "href": "https://bitbucket.org/bbworkspace1/"
            },
            "avatar": {
                "href": "https://bitbucket.org/workspaces/bbworkspace1/avatar/?ts=1543465801"
            },
            "members": {
                "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1/members"
            },
            "projects": {
                "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1/projects"
            }
        },
        "created_on": "2018-11-14T19:15:05.058566+00:00",
        "type": "workspace",
        "slug": "bbworkspace1",
        "is_private": true,
        "name": "Atlassian Bitbucket"
    }
  ]
}
```

Results may be further [filtered or sorted](/cloud/bitbucket/rest/intro/#filtering) by
workspace or permission by adding the following query string parameters:

* `q=slug="bbworkspace1"` or `q=is_private=true`
* `sort=created_on`

Note that the query parameter values need to be URL escaped so that `=`
would become `%3D`.

**The `collaborator` role is being removed from the Bitbucket Cloud API. For more information,
see the [deprecation announcement](/cloud/bitbucket/deprecation-notice-collaborator-role/).**

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspacesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspacesRoleEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspacesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspacesRequest();
    $request->q = 'nihil';
    $request->role = GetWorkspacesRoleEnum::COLLABORATOR;
    $request->sort = 'dicta';

    $requestSecurity = new GetWorkspacesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->workspaces->getWorkspaces($request, $requestSecurity);

    if ($response->paginatedWorkspaces !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspacesWorkspace

Returns the requested workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspacesWorkspaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspacesWorkspaceSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspacesWorkspaceRequest();
    $request->workspace = 'iusto';

    $requestSecurity = new GetWorkspacesWorkspaceSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->workspaces->getWorkspacesWorkspace($request, $requestSecurity);

    if ($response->workspace !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspacesWorkspaceHooks

Returns a paginated list of webhooks installed on this workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspacesWorkspaceHooksRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspacesWorkspaceHooksSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspacesWorkspaceHooksRequest();
    $request->workspace = 'esse';

    $requestSecurity = new GetWorkspacesWorkspaceHooksSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->workspaces->getWorkspacesWorkspaceHooks($request, $requestSecurity);

    if ($response->paginatedWebhookSubscriptions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspacesWorkspaceHooksUid

Returns the webhook with the specified id installed on the given
workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspacesWorkspaceHooksUidRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspacesWorkspaceHooksUidSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspacesWorkspaceHooksUidRequest();
    $request->uid = 'praesentium';
    $request->workspace = 'maiores';

    $requestSecurity = new GetWorkspacesWorkspaceHooksUidSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->workspaces->getWorkspacesWorkspaceHooksUid($request, $requestSecurity);

    if ($response->webhookSubscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspacesWorkspaceMembers

Returns all members of the requested workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspacesWorkspaceMembersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspacesWorkspaceMembersSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspacesWorkspaceMembersRequest();
    $request->workspace = 'reiciendis';

    $requestSecurity = new GetWorkspacesWorkspaceMembersSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->workspaces->getWorkspacesWorkspaceMembers($request, $requestSecurity);

    if ($response->paginatedWorkspaceMemberships !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspacesWorkspaceMembersMember

Returns the workspace membership, which includes
a `User` object for the member and a `Workspace` object
for the requested workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspacesWorkspaceMembersMemberRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspacesWorkspaceMembersMemberSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspacesWorkspaceMembersMemberRequest();
    $request->member = 'vel';
    $request->workspace = 'architecto';

    $requestSecurity = new GetWorkspacesWorkspaceMembersMemberSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->workspaces->getWorkspacesWorkspaceMembersMember($request, $requestSecurity);

    if ($response->workspaceMembership !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspacesWorkspacePermissions

Returns the list of members in a workspace
and their permission levels.
Permission can be:
* `owner`
* `collaborator`
* `member`

**The `collaborator` role is being removed from the Bitbucket Cloud API. For more information,
see the [deprecation announcement](/cloud/bitbucket/deprecation-notice-collaborator-role/).**

Example:

```
$ curl -X https://api.bitbucket.org/2.0/workspaces/bbworkspace1/permissions

{
    "pagelen": 10,
    "values": [
        {
            "permission": "owner",
            "type": "workspace_membership",
            "user": {
                "type": "user",
                "uuid": "{470c176d-3574-44ea-bb41-89e8638bcca4}",
                "display_name": "Erik van Zijst",
            },
            "workspace": {
                "type": "workspace",
                "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
                "slug": "bbworkspace1",
                "name": "Atlassian Bitbucket",
            }
        },
        {
            "permission": "member",
            "type": "workspace_membership",
            "user": {
                "type": "user",
                "nickname": "seanaty",
                "display_name": "Sean Conaty",
                "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
            },
            "workspace": {
                "type": "workspace",
                "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
                "slug": "bbworkspace1",
                "name": "Atlassian Bitbucket",
            }
        }
    ],
    "page": 1,
    "size": 2
}
```

Results may be further [filtered](/cloud/bitbucket/rest/intro/#filtering) by
permission by adding the following query string parameters:

* `q=permission="owner"`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspacesWorkspacePermissionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspacesWorkspacePermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspacesWorkspacePermissionsRequest();
    $request->q = 'fugiat';
    $request->workspace = 'doloremque';

    $requestSecurity = new GetWorkspacesWorkspacePermissionsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->workspaces->getWorkspacesWorkspacePermissions($request, $requestSecurity);

    if ($response->paginatedWorkspaceMemberships !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspacesWorkspacePermissionsRepositories

Returns an object for each repository permission for all of a
workspace's repositories.

Permissions returned are effective permissions: the highest level of
permission the user has. This does not distinguish between direct and
indirect (group) privileges.

Only users with admin permission for the team may access this resource.

Permissions can be:

* `admin`
* `write`
* `read`

Example:

```
$ curl https://api.bitbucket.org/2.0/workspaces/atlassian_tutorial/permissions/repositories

{
  "pagelen": 10,
  "values": [
    {
      "type": "repository_permission",
      "user": {
        "type": "user",
        "display_name": "Erik van Zijst",
        "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
      },
      "repository": {
        "type": "repository",
        "name": "geordi",
        "full_name": "atlassian_tutorial/geordi",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
      },
      "permission": "admin"
    },
    {
      "type": "repository_permission",
      "user": {
        "type": "user",
        "display_name": "Sean Conaty",
        "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
      },
      "repository": {
        "type": "repository",
        "name": "geordi",
        "full_name": "atlassian_tutorial/geordi",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
      },
      "permission": "write"
    },
    {
      "type": "repository_permission",
      "user": {
        "type": "user",
        "display_name": "Jeff Zeng",
        "uuid": "{47f92a9a-c3a3-4d0b-bc4e-782a969c5c72}"
      },
      "repository": {
        "type": "repository",
        "name": "whee",
        "full_name": "atlassian_tutorial/whee",
        "uuid": "{30ba25e9-51ff-4555-8dd0-fc7ee2fa0895}"
      },
      "permission": "admin"
    }
  ],
  "page": 1,
  "size": 3
}
```

Results may be further [filtered or sorted](/cloud/bitbucket/rest/intro/#filtering)
by repository, user, or permission by adding the following query string
parameters:

* `q=repository.name="geordi"` or `q=permission>"read"`
* `sort=user.display_name`

Note that the query parameter values need to be URL escaped so that `=`
would become `%3D`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspacesWorkspacePermissionsRepositoriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspacesWorkspacePermissionsRepositoriesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspacesWorkspacePermissionsRepositoriesRequest();
    $request->q = 'dicta';
    $request->sort = 'odio';
    $request->workspace = 'tempora';

    $requestSecurity = new GetWorkspacesWorkspacePermissionsRepositoriesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->workspaces->getWorkspacesWorkspacePermissionsRepositories($request, $requestSecurity);

    if ($response->paginatedRepositoryPermissions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspacesWorkspacePermissionsRepositoriesRepoSlug

Returns an object for the repository permission of each user in the
requested repository.

Permissions returned are effective permissions: the highest level of
permission the user has. This does not distinguish between direct and
indirect (group) privileges.

Only users with admin permission for the repository may access this resource.

Permissions can be:

* `admin`
* `write`
* `read`

Example:

```
$ curl https://api.bitbucket.org/2.0/workspaces/atlassian_tutorial/permissions/repositories/geordi

{
  "pagelen": 10,
  "values": [
    {
      "type": "repository_permission",
      "user": {
        "type": "user",
        "display_name": "Erik van Zijst",
        "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
      },
      "repository": {
        "type": "repository",
        "name": "geordi",
        "full_name": "atlassian_tutorial/geordi",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
      },
      "permission": "admin"
    },
    {
      "type": "repository_permission",
      "user": {
        "type": "user",
        "display_name": "Sean Conaty",
        "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
      },
      "repository": {
        "type": "repository",
        "name": "geordi",
        "full_name": "atlassian_tutorial/geordi",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
      },
      "permission": "write"
    }
  ],
  "page": 1,
  "size": 2
}
```

Results may be further [filtered or sorted](/cloud/bitbucket/rest/intro/#filtering)
by user, or permission by adding the following query string parameters:

* `q=permission>"read"`
* `sort=user.display_name`

Note that the query parameter values need to be URL escaped so that `=`
would become `%3D`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugRequest();
    $request->q = 'esse';
    $request->repoSlug = 'ex';
    $request->sort = 'consectetur';
    $request->workspace = 'aliquid';

    $requestSecurity = new GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->workspaces->getWorkspacesWorkspacePermissionsRepositoriesRepoSlug($request, $requestSecurity);

    if ($response->paginatedRepositoryPermissions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspacesWorkspaceProjects

Returns the list of projects in this workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspacesWorkspaceProjectsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspacesWorkspaceProjectsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspacesWorkspaceProjectsRequest();
    $request->workspace = 'ipsa';

    $requestSecurity = new GetWorkspacesWorkspaceProjectsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->workspaces->getWorkspacesWorkspaceProjects($request, $requestSecurity);

    if ($response->paginatedProjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspacesWorkspaceProjectsProjectKey

Returns the requested project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspacesWorkspaceProjectsProjectKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspacesWorkspaceProjectsProjectKeySecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspacesWorkspaceProjectsProjectKeyRequest();
    $request->projectKey = 'laborum';
    $request->workspace = 'sunt';

    $requestSecurity = new GetWorkspacesWorkspaceProjectsProjectKeySecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->workspaces->getWorkspacesWorkspaceProjectsProjectKey($request, $requestSecurity);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postWorkspacesWorkspaceHooks

Creates a new webhook on the specified workspace.

Workspace webhooks are fired for events from all repositories contained
by that workspace.

Example:

```
$ curl -X POST -u credentials -H 'Content-Type: application/json'
  https://api.bitbucket.org/2.0/workspaces/my-workspace/hooks
  -d '
    {
      "description": "Webhook Description",
      "url": "https://example.com/",
      "active": true,
      "events": [
        "repo:push",
        "issue:created",
        "issue:updated"
      ]
    }'
```

This call requires the webhook scope, as well as any scope
that applies to the events that the webhook subscribes to. In the
example above that means: `webhook`, `repository` and `issue`.

The `url` must properly resolve and cannot be an internal, non-routed address.

Only workspace owners can install webhooks on workspaces.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostWorkspacesWorkspaceHooksRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostWorkspacesWorkspaceHooksSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostWorkspacesWorkspaceHooksRequest();
    $request->workspace = 'nostrum';

    $requestSecurity = new PostWorkspacesWorkspaceHooksSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->workspaces->postWorkspacesWorkspaceHooks($request, $requestSecurity);

    if ($response->webhookSubscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putWorkspacesWorkspaceHooksUid

Updates the specified webhook subscription.

The following properties can be mutated:

* `description`
* `url`
* `active`
* `events`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutWorkspacesWorkspaceHooksUidRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutWorkspacesWorkspaceHooksUidSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutWorkspacesWorkspaceHooksUidRequest();
    $request->uid = 'fugiat';
    $request->workspace = 'expedita';

    $requestSecurity = new PutWorkspacesWorkspaceHooksUidSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->workspaces->putWorkspacesWorkspaceHooksUid($request, $requestSecurity);

    if ($response->webhookSubscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
