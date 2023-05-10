# webhooks

## Overview

Webhooks provide a way to configure Bitbucket Cloud to make requests to
your server (or another external service) whenever certain events occur in
Bitbucket Cloud.

A webhook consists of:

* A subject -- The resource that generates the events. Currently, this resource
is the repository, user account, or team where you create the webhook.
* One or more event -- The default event is a repository push, but you can
select multiple events that can trigger the webhook.
* A URL -- The endpoint where you want Bitbucket to send the event payloads
when a matching event happens.

There are two parts to getting a webhook to work: creating the webhook and
triggering the webhook. After you create a webhook for an event, every time
that event occurs, Bitbucket sends a payload request that describes the event
to the specified URL. Thus, you can think of webhooks as a kind of
notification system.

Use webhooks to integrate applications with Bitbucket Cloud. The following
use cases provides examples of when you would want to use webhooks:

* Every time a user pushes commits in a repository, you may want to notify
your CI server to start a build.
* Every time a user pushes commits or creates a pull request, you may want to
display a notification in your application.


### Available Operations

* [deleteRepositoriesWorkspaceRepoSlugHooksUid](#deleterepositoriesworkspacereposlughooksuid) - Delete a webhook for a repository
* [deleteWorkspacesWorkspaceHooksUid](#deleteworkspacesworkspacehooksuid) - Delete a webhook for a workspace
* [getHookEvents](#gethookevents) - Get a webhook resource
* [getHookEventsSubjectType](#gethookeventssubjecttype) - List subscribable webhook types
* [getRepositoriesWorkspaceRepoSlugHooks](#getrepositoriesworkspacereposlughooks) - List webhooks for a repository
* [getRepositoriesWorkspaceRepoSlugHooksUid](#getrepositoriesworkspacereposlughooksuid) - Get a webhook for a repository
* [getWorkspacesWorkspaceHooks](#getworkspacesworkspacehooks) - List webhooks for a workspace
* [getWorkspacesWorkspaceHooksUid](#getworkspacesworkspacehooksuid) - Get a webhook for a workspace
* [postRepositoriesWorkspaceRepoSlugHooks](#postrepositoriesworkspacereposlughooks) - Create a webhook for a repository
* [postWorkspacesWorkspaceHooks](#postworkspacesworkspacehooks) - Create a webhook for a workspace
* [putRepositoriesWorkspaceRepoSlugHooksUid](#putrepositoriesworkspacereposlughooksuid) - Update a webhook for a repository
* [putWorkspacesWorkspaceHooksUid](#putworkspacesworkspacehooksuid) - Update a webhook for a workspace

## deleteRepositoriesWorkspaceRepoSlugHooksUid

Deletes the specified webhook subscription from the given
repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugHooksUidRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugHooksUidSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRepositoriesWorkspaceRepoSlugHooksUidRequest();
    $request->repoSlug = 'aliquid';
    $request->uid = 'porro';
    $request->workspace = 'suscipit';

    $requestSecurity = new DeleteRepositoriesWorkspaceRepoSlugHooksUidSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->webhooks->deleteRepositoriesWorkspaceRepoSlugHooksUid($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->uid = 'dolorem';
    $request->workspace = 'fugit';

    $requestSecurity = new DeleteWorkspacesWorkspaceHooksUidSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->webhooks->deleteWorkspacesWorkspaceHooksUid($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHookEvents

Returns the webhook resource or subject types on which webhooks can
be registered.

Each resource/subject type contains an `events` link that returns the
paginated list of specific events each individual subject type can
emit.

This endpoint is publicly accessible and does not require
authentication or scopes.

Example:

```
$ curl https://api.bitbucket.org/2.0/hook_events

{
    "repository": {
        "links": {
            "events": {
                "href": "https://api.bitbucket.org/2.0/hook_events/repository"
            }
        }
    },
    "workspace": {
        "links": {
            "events": {
                "href": "https://api.bitbucket.org/2.0/hook_events/workspace"
            }
        }
    }
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetHookEventsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetHookEventsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->webhooks->getHookEvents($requestSecurity);

    if ($response->subjectTypes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHookEventsSubjectType

Returns a paginated list of all valid webhook events for the
specified entity.
**The team and user webhooks are deprecated, and you should use workspace instead.
For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**

This is public data that does not require any scopes or authentication.

Example:

NOTE: The following example is a truncated response object for the `workspace` `subject_type`.
We return the same structure for the other `subject_type` objects.

```
$ curl https://api.bitbucket.org/2.0/hook_events/workspace
{
    "page": 1,
    "pagelen": 30,
    "size": 21,
    "values": [
        {
            "category": "Repository",
            "description": "Whenever a repository push occurs",
            "event": "repo:push",
            "label": "Push"
        },
        {
            "category": "Repository",
            "description": "Whenever a repository fork occurs",
            "event": "repo:fork",
            "label": "Fork"
        },
        {
            "category": "Repository",
            "description": "Whenever a repository import occurs",
            "event": "repo:imported",
            "label": "Import"
        },
        ...
        {
            "category":"Pull Request",
            "label":"Approved",
            "description":"When someone has approved a pull request",
            "event":"pullrequest:approved"
        },
    ]
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetHookEventsSubjectTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetHookEventsSubjectTypeSubjectTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetHookEventsSubjectTypeSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHookEventsSubjectTypeRequest();
    $request->subjectType = GetHookEventsSubjectTypeSubjectTypeEnum::WORKSPACE;

    $requestSecurity = new GetHookEventsSubjectTypeSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->webhooks->getHookEventsSubjectType($request, $requestSecurity);

    if ($response->paginatedHookEvents !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugHooks

Returns a paginated list of webhooks installed on this repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugHooksRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugHooksSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugHooksRequest();
    $request->repoSlug = 'fuga';
    $request->workspace = 'ratione';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugHooksSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->webhooks->getRepositoriesWorkspaceRepoSlugHooks($request, $requestSecurity);

    if ($response->paginatedWebhookSubscriptions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugHooksUid

Returns the webhook with the specified id installed on the specified
repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugHooksUidRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugHooksUidSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugHooksUidRequest();
    $request->repoSlug = 'animi';
    $request->uid = 'necessitatibus';
    $request->workspace = 'nulla';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugHooksUidSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->webhooks->getRepositoriesWorkspaceRepoSlugHooksUid($request, $requestSecurity);

    if ($response->webhookSubscription !== null) {
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
    $request->workspace = 'consequatur';

    $requestSecurity = new GetWorkspacesWorkspaceHooksSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->webhooks->getWorkspacesWorkspaceHooks($request, $requestSecurity);

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
    $request->uid = 'quasi';
    $request->workspace = 'et';

    $requestSecurity = new GetWorkspacesWorkspaceHooksUidSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->webhooks->getWorkspacesWorkspaceHooksUid($request, $requestSecurity);

    if ($response->webhookSubscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRepositoriesWorkspaceRepoSlugHooks

Creates a new webhook on the specified repository.

Example:

```
$ curl -X POST -u credentials -H 'Content-Type: application/json'
  https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo-slug/hooks
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

Note that this call requires the webhook scope, as well as any scope
that applies to the events that the webhook subscribes to. In the
example above that means: `webhook`, `repository` and `issue`.

Also note that the `url` must properly resolve and cannot be an
internal, non-routed address.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugHooksRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugHooksSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRepositoriesWorkspaceRepoSlugHooksRequest();
    $request->repoSlug = 'ducimus';
    $request->workspace = 'natus';

    $requestSecurity = new PostRepositoriesWorkspaceRepoSlugHooksSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->webhooks->postRepositoriesWorkspaceRepoSlugHooks($request, $requestSecurity);

    if ($response->webhookSubscription !== null) {
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
    $request->workspace = 'occaecati';

    $requestSecurity = new PostWorkspacesWorkspaceHooksSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->webhooks->postWorkspacesWorkspaceHooks($request, $requestSecurity);

    if ($response->webhookSubscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putRepositoriesWorkspaceRepoSlugHooksUid

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
use \OpenAPI\OpenAPI\Models\Operations\PutRepositoriesWorkspaceRepoSlugHooksUidRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutRepositoriesWorkspaceRepoSlugHooksUidSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutRepositoriesWorkspaceRepoSlugHooksUidRequest();
    $request->repoSlug = 'suscipit';
    $request->uid = 'adipisci';
    $request->workspace = 'quasi';

    $requestSecurity = new PutRepositoriesWorkspaceRepoSlugHooksUidSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->webhooks->putRepositoriesWorkspaceRepoSlugHooksUid($request, $requestSecurity);

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
    $request->uid = 'magni';
    $request->workspace = 'doloribus';

    $requestSecurity = new PutWorkspacesWorkspaceHooksUidSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->webhooks->putWorkspacesWorkspaceHooksUid($request, $requestSecurity);

    if ($response->webhookSubscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
