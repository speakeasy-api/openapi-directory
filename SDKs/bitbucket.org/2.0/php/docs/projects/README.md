# projects

## Overview

Bitbucket Cloud projects make it easier for teams to focus on
a goal, product, or process by organizing their repositories.


### Available Operations

* [deleteWorkspacesWorkspaceProjectsProjectKey](#deleteworkspacesworkspaceprojectsprojectkey) - Delete a project for a workspace
* [deleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser](#deleteworkspacesworkspaceprojectsprojectkeydefaultreviewersselecteduser) - Remove the specific user from the project's default reviewers
* [getWorkspacesWorkspaceProjectsProjectKey](#getworkspacesworkspaceprojectsprojectkey) - Get a project for a workspace
* [getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewers](#getworkspacesworkspaceprojectsprojectkeydefaultreviewers) - List the default reviewers in a project
* [getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser](#getworkspacesworkspaceprojectsprojectkeydefaultreviewersselecteduser) - Get a default reviewer
* [postWorkspacesWorkspaceProjects](#postworkspacesworkspaceprojects) - Create a project in a workspace
* [putWorkspacesWorkspaceProjectsProjectKey](#putworkspacesworkspaceprojectsprojectkey) - Update a project for a workspace
* [putWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser](#putworkspacesworkspaceprojectsprojectkeydefaultreviewersselecteduser) - Add the specific user as a default reviewer for the project

## deleteWorkspacesWorkspaceProjectsProjectKey

Deletes this project. This is an irreversible operation.

You cannot delete a project that still contains repositories.
To delete the project, [delete](/cloud/bitbucket/rest/api-group-repositories/#api-repositories-workspace-repo-slug-delete)
or transfer the repositories first.

Example:
```
$ curl -X DELETE https://api.bitbucket.org/2.0/bbworkspace1/PROJ
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkspacesWorkspaceProjectsProjectKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkspacesWorkspaceProjectsProjectKeySecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorkspacesWorkspaceProjectsProjectKeyRequest();
    $request->projectKey = 'blanditiis';
    $request->workspace = 'provident';

    $requestSecurity = new DeleteWorkspacesWorkspaceProjectsProjectKeySecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->projects->deleteWorkspacesWorkspaceProjectsProjectKey($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser

Removes a default reviewer from the project.

Example:
```
$ curl https://api.bitbucket.org/2.0/.../default-reviewers/%7Bf0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6%7D

HTTP/1.1 204
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRequest();
    $request->projectKey = 'a';
    $request->selectedUser = 'nulla';
    $request->workspace = 'quas';

    $requestSecurity = new DeleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->projects->deleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser($request, $requestSecurity);

    if ($response->statusCode === 200) {
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
    $request->projectKey = 'esse';
    $request->workspace = 'quasi';

    $requestSecurity = new GetWorkspacesWorkspaceProjectsProjectKeySecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->projects->getWorkspacesWorkspaceProjectsProjectKey($request, $requestSecurity);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewers

Return a list of all default reviewers for a project. This is a list of users that will be added as default
reviewers to pull requests for any repository within the project.

Example:
```
$ curl https://api.bitbucket.org/2.0/.../projects/.../default-reviewers | jq .
{
    "pagelen": 10,
    "values": [
        {
            "user": {
                "display_name": "Davis Lee",
                "uuid": "{f0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6}"
            },
            "reviewer_type": "project",
            "type": "default_reviewer"
        },
        {
            "user": {
                "display_name": "Jorge Rodriguez",
                "uuid": "{1aa43376-260d-4a0b-9660-f62672b9655d}"
            },
            "reviewer_type": "project",
            "type": "default_reviewer"
        }
    ],
    "page": 1,
    "size": 2
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersRequest();
    $request->projectKey = 'a';
    $request->workspace = 'error';

    $requestSecurity = new GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->projects->getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewers($request, $requestSecurity);

    if ($response->paginatedDefaultReviewerAndType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser

Returns the specified default reviewer.

Example:
```
$ curl https://api.bitbucket.org/2.0/.../default-reviewers/%7Bf0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6%7D
{
    "display_name": "Davis Lee",
    "type": "user",
    "uuid": "{f0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6}"
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRequest();
    $request->projectKey = 'sint';
    $request->selectedUser = 'pariatur';
    $request->workspace = 'possimus';

    $requestSecurity = new GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->projects->getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postWorkspacesWorkspaceProjects

Creates a new project.

Note that the avatar has to be embedded as either a data-url
or a URL to an external image as shown in the examples below:

```
$ body=$(cat << EOF
{
    "name": "Mars Project",
    "key": "MARS",
    "description": "Software for colonizing mars.",
    "links": {
        "avatar": {
            "href": "data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/..."
        }
    },
    "is_private": false
}
EOF
)
$ curl -H "Content-Type: application/json" \
       -X POST \
       -d "$body" \
       https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq .
{
  // Serialized project document
}
```

or even:

```
$ body=$(cat << EOF
{
    "name": "Mars Project",
    "key": "MARS",
    "description": "Software for colonizing mars.",
    "links": {
        "avatar": {
            "href": "http://i.imgur.com/72tRx4w.gif"
        }
    },
    "is_private": false
}
EOF
)
$ curl -H "Content-Type: application/json" \
       -X POST \
       -d "$body" \
       https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq .
{
  // Serialized project document
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostWorkspacesWorkspaceProjectsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostWorkspacesWorkspaceProjectsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostWorkspacesWorkspaceProjectsRequest();
    $request->requestBody = [
        'eveniet' => 'asperiores',
    ];
    $request->workspace = 'facere';

    $requestSecurity = new PostWorkspacesWorkspaceProjectsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->projects->postWorkspacesWorkspaceProjects($request, $requestSecurity);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putWorkspacesWorkspaceProjectsProjectKey

Since this endpoint can be used to both update and to create a
project, the request body depends on the intent.

#### Creation

See the POST documentation for the project collection for an
example of the request body.

Note: The `key` should not be specified in the body of request
(since it is already present in the URL). The `name` is required,
everything else is optional.

#### Update

See the POST documentation for the project collection for an
example of the request body.

Note: The key is not required in the body (since it is already in
the URL). The key may be specified in the body, if the intent is
to change the key itself. In such a scenario, the location of the
project is changed and is returned in the `Location` header of the
response.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutWorkspacesWorkspaceProjectsProjectKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutWorkspacesWorkspaceProjectsProjectKeySecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutWorkspacesWorkspaceProjectsProjectKeyRequest();
    $request->requestBody = [
        'consequuntur' => 'quasi',
    ];
    $request->projectKey = 'similique';
    $request->workspace = 'culpa';

    $requestSecurity = new PutWorkspacesWorkspaceProjectsProjectKeySecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->projects->putWorkspacesWorkspaceProjectsProjectKey($request, $requestSecurity);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser

Adds the specified user to the project's list of default reviewers. The method is
idempotent. Accepts an optional body containing the `uuid` of the user to be added.

Example:
```
$ curl -XPUT https://api.bitbucket.org/2.0/.../default-reviewers/%7Bf0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6%7D
-d { 'uuid': '{f0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6}' }

HTTP/1.1 204
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRequest();
    $request->projectKey = 'aliquid';
    $request->selectedUser = 'tenetur';
    $request->workspace = 'quae';

    $requestSecurity = new PutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->projects->putWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
