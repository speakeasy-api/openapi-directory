# activity

## Overview

Activity APIs provide access to notifications, subscriptions, and timelines.

### Available Operations

* [activityCheckRepoIsStarredByAuthenticatedUser](#activitycheckrepoisstarredbyauthenticateduser) - Check if a repository is starred by the authenticated user
* [activityDeleteRepoSubscription](#activitydeletereposubscription) - Delete a repository subscription
* [activityDeleteThreadSubscription](#activitydeletethreadsubscription) - Delete a thread subscription
* [activityGetFeeds](#activitygetfeeds) - Get feeds
* [activityGetRepoSubscription](#activitygetreposubscription) - Get a repository subscription
* [activityGetThread](#activitygetthread) - Get a thread
* [activityGetThreadSubscriptionForAuthenticatedUser](#activitygetthreadsubscriptionforauthenticateduser) - Get a thread subscription for the authenticated user
* [activityListEventsForAuthenticatedUser](#activitylisteventsforauthenticateduser) - List events for the authenticated user
* [activityListNotificationsForAuthenticatedUser](#activitylistnotificationsforauthenticateduser) - List notifications for the authenticated user
* [activityListOrgEventsForAuthenticatedUser](#activitylistorgeventsforauthenticateduser) - List organization events for the authenticated user
* [activityListPublicEvents](#activitylistpublicevents) - List public events
* [activityListPublicEventsForRepoNetwork](#activitylistpubliceventsforreponetwork) - List public events for a network of repositories
* [activityListPublicEventsForUser](#activitylistpubliceventsforuser) - List public events for a user
* [activityListPublicOrgEvents](#activitylistpublicorgevents) - List public organization events
* [activityListReceivedEventsForUser](#activitylistreceivedeventsforuser) - List events received by the authenticated user
* [activityListReceivedPublicEventsForUser](#activitylistreceivedpubliceventsforuser) - List public events received by a user
* [activityListRepoEvents](#activitylistrepoevents) - List repository events
* [activityListRepoNotificationsForAuthenticatedUser](#activitylistreponotificationsforauthenticateduser) - List repository notifications for the authenticated user
* [activityListReposStarredByAuthenticatedUser](#activitylistreposstarredbyauthenticateduser) - List repositories starred by the authenticated user
* [activityListReposStarredByUser](#activitylistreposstarredbyuser) - List repositories starred by a user
* [activityListReposWatchedByUser](#activitylistreposwatchedbyuser) - List repositories watched by a user
* [activityListStargazersForRepo](#activityliststargazersforrepo) - List stargazers
* [activityListWatchedReposForAuthenticatedUser](#activitylistwatchedreposforauthenticateduser) - List repositories watched by the authenticated user
* [activityListWatchersForRepo](#activitylistwatchersforrepo) - List watchers
* [activityMarkNotificationsAsRead](#activitymarknotificationsasread) - Mark notifications as read
* [activityMarkRepoNotificationsAsRead](#activitymarkreponotificationsasread) - Mark repository notifications as read
* [activityMarkThreadAsRead](#activitymarkthreadasread) - Mark a thread as read
* [activitySetRepoSubscription](#activitysetreposubscription) - Set a repository subscription
* [activitySetThreadSubscription](#activitysetthreadsubscription) - Set a thread subscription
* [activityStarRepoForAuthenticatedUser](#activitystarrepoforauthenticateduser) - Star a repository for the authenticated user
* [activityUnstarRepoForAuthenticatedUser](#activityunstarrepoforauthenticateduser) - Unstar a repository for the authenticated user

## activityCheckRepoIsStarredByAuthenticatedUser

Check if a repository is starred by the authenticated user

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/activity#check-if-a-repository-is-starred-by-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityCheckRepoIsStarredByAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityCheckRepoIsStarredByAuthenticatedUserRequest();
    $request->owner = 'distinctio';
    $request->repo = 'quibusdam';

    $response = $sdk->activity->activityCheckRepoIsStarredByAuthenticatedUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityDeleteRepoSubscription

This endpoint should only be used to stop watching a repository. To control whether or not you wish to receive notifications from a repository, [set the repository's subscription manually](https://docs.github.com/enterprise-server@2.21/rest/reference/activity#set-a-repository-subscription).

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/activity#delete-a-repository-subscription>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityDeleteRepoSubscriptionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityDeleteRepoSubscriptionRequest();
    $request->owner = 'unde';
    $request->repo = 'nulla';

    $response = $sdk->activity->activityDeleteRepoSubscription($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityDeleteThreadSubscription

Mutes all future notifications for a conversation until you comment on the thread or get an **@mention**. If you are watching the repository of the thread, you will still receive notifications. To ignore future notifications for a repository you are watching, use the [Set a thread subscription](https://docs.github.com/enterprise-server@2.21/rest/reference/activity#set-a-thread-subscription) endpoint and set `ignore` to `true`.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/activity#delete-a-thread-subscription>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityDeleteThreadSubscriptionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityDeleteThreadSubscriptionRequest();
    $request->threadId = 544883;

    $response = $sdk->activity->activityDeleteThreadSubscription($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityGetFeeds

GitHub Enterprise Server provides several timeline resources in [Atom](http://en.wikipedia.org/wiki/Atom_(standard)) format. The Feeds API lists all the feeds available to the authenticated user:

*   **Timeline**: The GitHub Enterprise Server global public timeline
*   **User**: The public timeline for any user, using [URI template](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#hypermedia)
*   **Current user public**: The public timeline for the authenticated user
*   **Current user**: The private timeline for the authenticated user
*   **Current user actor**: The private timeline for activity created by the authenticated user
*   **Current user organizations**: The private timeline for the organizations the authenticated user is a member of.
*   **Security advisories**: A collection of public announcements that provide information about security-related vulnerabilities in software on GitHub Enterprise Server.

**Note**: Private feeds are only returned when [authenticating via Basic Auth](https://docs.github.com/enterprise-server@2.21/rest/overview/other-authentication-methods#basic-authentication) since current feed URIs use the older, non revocable auth tokens.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/activity#get-feeds>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->activity->activityGetFeeds();

    if ($response->feed !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityGetRepoSubscription

Get a repository subscription

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/activity#get-a-repository-subscription>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityGetRepoSubscriptionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityGetRepoSubscriptionRequest();
    $request->owner = 'illum';
    $request->repo = 'vel';

    $response = $sdk->activity->activityGetRepoSubscription($request);

    if ($response->repositorySubscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityGetThread

Get a thread

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/activity#get-a-thread>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityGetThreadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityGetThreadRequest();
    $request->threadId = 623564;

    $response = $sdk->activity->activityGetThread($request);

    if ($response->thread !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityGetThreadSubscriptionForAuthenticatedUser

This checks to see if the current user is subscribed to a thread. You can also [get a repository subscription](https://docs.github.com/enterprise-server@2.21/rest/reference/activity#get-a-repository-subscription).

Note that subscriptions are only generated if a user is participating in a conversation--for example, they've replied to the thread, were **@mentioned**, or manually subscribe to a thread.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/activity#get-a-thread-subscription-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityGetThreadSubscriptionForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityGetThreadSubscriptionForAuthenticatedUserRequest();
    $request->threadId = 645894;

    $response = $sdk->activity->activityGetThreadSubscriptionForAuthenticatedUser($request);

    if ($response->threadSubscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityListEventsForAuthenticatedUser

If you are authenticated as the given user, you will see your private events. Otherwise, you'll only see public events.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-events-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityListEventsForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityListEventsForAuthenticatedUserRequest();
    $request->page = 384382;
    $request->perPage = 437587;
    $request->username = 'Eli96';

    $response = $sdk->activity->activityListEventsForAuthenticatedUser($request);

    if ($response->events !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityListNotificationsForAuthenticatedUser

List all notifications for the current user, sorted by most recently updated.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-notifications-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityListNotificationsForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityListNotificationsForAuthenticatedUserRequest();
    $request->all = false;
    $request->before = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-14T01:03:07.567Z');
    $request->page = 477665;
    $request->participating = false;
    $request->perPage = 791725;
    $request->since = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-31T20:38:28.793Z');

    $response = $sdk->activity->activityListNotificationsForAuthenticatedUser($request);

    if ($response->threads !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityListOrgEventsForAuthenticatedUser

This is the user's organization dashboard. You must be authenticated as the user to view this.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-organization-events-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityListOrgEventsForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityListOrgEventsForAuthenticatedUserRequest();
    $request->org = 'iusto';
    $request->page = 568045;
    $request->perPage = 392785;
    $request->username = 'Tianna33';

    $response = $sdk->activity->activityListOrgEventsForAuthenticatedUser($request);

    if ($response->events !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityListPublicEvents

We delay the public events feed by five minutes, which means the most recent event returned by the public events API actually occurred at least five minutes ago.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-public-events>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityListPublicEventsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityListPublicEventsRequest();
    $request->page = 87129;
    $request->perPage = 648172;

    $response = $sdk->activity->activityListPublicEvents($request);

    if ($response->events !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityListPublicEventsForRepoNetwork

List public events for a network of repositories

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-public-events-for-a-network-of-repositories>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityListPublicEventsForRepoNetworkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityListPublicEventsForRepoNetworkRequest();
    $request->owner = 'perferendis';
    $request->page = 368241;
    $request->perPage = 832620;
    $request->repo = 'sapiente';

    $response = $sdk->activity->activityListPublicEventsForRepoNetwork($request);

    if ($response->events !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityListPublicEventsForUser

List public events for a user

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-public-events-for-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityListPublicEventsForUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityListPublicEventsForUserRequest();
    $request->page = 778157;
    $request->perPage = 140350;
    $request->username = 'Sarah.Strosin79';

    $response = $sdk->activity->activityListPublicEventsForUser($request);

    if ($response->events !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityListPublicOrgEvents

List public organization events

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-public-organization-events>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityListPublicOrgEventsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityListPublicOrgEventsRequest();
    $request->org = 'quod';
    $request->page = 461479;
    $request->perPage = 520478;

    $response = $sdk->activity->activityListPublicOrgEvents($request);

    if ($response->events !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityListReceivedEventsForUser

These are events that you've received by watching repos and following users. If you are authenticated as the given user, you will see private events. Otherwise, you'll only see public events.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-events-received-by-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityListReceivedEventsForUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityListReceivedEventsForUserRequest();
    $request->page = 780529;
    $request->perPage = 678880;
    $request->username = 'Billy_Reichel';

    $response = $sdk->activity->activityListReceivedEventsForUser($request);

    if ($response->events !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityListReceivedPublicEventsForUser

List public events received by a user

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-public-events-received-by-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityListReceivedPublicEventsForUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityListReceivedPublicEventsForUserRequest();
    $request->page = 143353;
    $request->perPage = 537373;
    $request->username = 'Tyrel.Rosenbaum';

    $response = $sdk->activity->activityListReceivedPublicEventsForUser($request);

    if ($response->events !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityListRepoEvents

List repository events

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-repository-events>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityListRepoEventsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityListRepoEventsRequest();
    $request->owner = 'commodi';
    $request->page = 473600;
    $request->perPage = 264555;
    $request->repo = 'qui';

    $response = $sdk->activity->activityListRepoEvents($request);

    if ($response->events !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityListRepoNotificationsForAuthenticatedUser

List all notifications for the current user.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-repository-notifications-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityListRepoNotificationsForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityListRepoNotificationsForAuthenticatedUserRequest();
    $request->all = false;
    $request->before = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-10-16T01:47:24.760Z');
    $request->owner = 'esse';
    $request->page = 216550;
    $request->participating = false;
    $request->perPage = 568434;
    $request->repo = 'aspernatur';
    $request->since = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-04T16:31:28.618Z');

    $response = $sdk->activity->activityListRepoNotificationsForAuthenticatedUser($request);

    if ($response->threads !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityListReposStarredByAuthenticatedUser

Lists repositories the authenticated user has starred.

You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/enterprise-server@2.21/rest/overview/media-types/) via the `Accept` header:

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-repositories-starred-by-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityListReposStarredByAuthenticatedUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\DirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityListReposStarredByAuthenticatedUserRequest();
    $request->direction = DirectionEnum::DESC;
    $request->page = 149675;
    $request->perPage = 612096;
    $request->sort = SortEnum::CREATED;

    $response = $sdk->activity->activityListReposStarredByAuthenticatedUser($request);

    if ($response->repositories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityListReposStarredByUser

Lists repositories a user has starred.

You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/enterprise-server@2.21/rest/overview/media-types/) via the `Accept` header:

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-repositories-starred-by-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityListReposStarredByUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\DirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityListReposStarredByUserRequest();
    $request->direction = DirectionEnum::DESC;
    $request->page = 386489;
    $request->perPage = 943749;
    $request->sort = SortEnum::UPDATED;
    $request->username = 'Marisa_Kirlin';

    $response = $sdk->activity->activityListReposStarredByUser($request);

    if ($response->activityListReposStarredByUser200ApplicationJSONAnyOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityListReposWatchedByUser

Lists repositories a user is watching.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-repositories-watched-by-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityListReposWatchedByUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityListReposWatchedByUserRequest();
    $request->page = 437032;
    $request->perPage = 902349;
    $request->username = 'Maxie96';

    $response = $sdk->activity->activityListReposWatchedByUser($request);

    if ($response->minimalRepositories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityListStargazersForRepo

Lists the people that have starred the repository.

You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/enterprise-server@2.21/rest/overview/media-types/) via the `Accept` header:

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-stargazers>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityListStargazersForRepoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityListStargazersForRepoRequest();
    $request->owner = 'est';
    $request->page = 653140;
    $request->perPage = 670638;
    $request->repo = 'dolores';

    $response = $sdk->activity->activityListStargazersForRepo($request);

    if ($response->activityListStargazersForRepo200ApplicationJSONAnyOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityListWatchedReposForAuthenticatedUser

Lists repositories the authenticated user is watching.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-repositories-watched-by-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityListWatchedReposForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityListWatchedReposForAuthenticatedUserRequest();
    $request->page = 210382;
    $request->perPage = 358152;

    $response = $sdk->activity->activityListWatchedReposForAuthenticatedUser($request);

    if ($response->minimalRepositories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityListWatchersForRepo

Lists the people watching the specified repository.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-watchers>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityListWatchersForRepoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityListWatchersForRepoRequest();
    $request->owner = 'explicabo';
    $request->page = 750686;
    $request->perPage = 315428;
    $request->repo = 'omnis';

    $response = $sdk->activity->activityListWatchersForRepo($request);

    if ($response->simpleUsers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityMarkNotificationsAsRead

Marks all notifications as "read" removes it from the [default view on GitHub Enterprise Server](https://github.com/notifications). If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub Enterprise Server will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List notifications for the authenticated user](https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/activity#mark-notifications-as-read>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityMarkNotificationsAsReadRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityMarkNotificationsAsReadRequestBody();
    $request->lastReadAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-04T08:35:09.957Z');
    $request->read = false;

    $response = $sdk->activity->activityMarkNotificationsAsRead($request);

    if ($response->activityMarkNotificationsAsRead202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityMarkRepoNotificationsAsRead

Marks all notifications in a repository as "read" removes them from the [default view on GitHub Enterprise Server](https://github.com/notifications). If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub Enterprise Server will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List repository notifications for the authenticated user](https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-repository-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/activity#mark-repository-notifications-as-read>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityMarkRepoNotificationsAsReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActivityMarkRepoNotificationsAsReadRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityMarkRepoNotificationsAsReadRequest();
    $request->requestBody = new ActivityMarkRepoNotificationsAsReadRequestBody();
    $request->requestBody->lastReadAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-03T22:47:10.600Z');
    $request->owner = 'iure';
    $request->repo = 'culpa';

    $response = $sdk->activity->activityMarkRepoNotificationsAsRead($request);

    if ($response->activityMarkRepoNotificationsAsRead202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityMarkThreadAsRead

Mark a thread as read

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/activity#mark-a-thread-as-read>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityMarkThreadAsReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityMarkThreadAsReadRequest();
    $request->threadId = 988374;

    $response = $sdk->activity->activityMarkThreadAsRead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activitySetRepoSubscription

If you would like to watch a repository, set `subscribed` to `true`. If you would like to ignore notifications made within a repository, set `ignored` to `true`. If you would like to stop watching a repository, [delete the repository's subscription](https://docs.github.com/enterprise-server@2.21/rest/reference/activity#delete-a-repository-subscription) completely.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/activity#set-a-repository-subscription>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivitySetRepoSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActivitySetRepoSubscriptionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivitySetRepoSubscriptionRequest();
    $request->requestBody = new ActivitySetRepoSubscriptionRequestBody();
    $request->requestBody->ignored = false;
    $request->requestBody->subscribed = false;
    $request->owner = 'sapiente';
    $request->repo = 'architecto';

    $response = $sdk->activity->activitySetRepoSubscription($request);

    if ($response->repositorySubscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activitySetThreadSubscription

If you are watching a repository, you receive notifications for all threads by default. Use this endpoint to ignore future notifications for threads until you comment on the thread or get an **@mention**.

You can also use this endpoint to subscribe to threads that you are currently not receiving notifications for or to subscribed to threads that you have previously ignored.

Unsubscribing from a conversation in a repository that you are not watching is functionally equivalent to the [Delete a thread subscription](https://docs.github.com/enterprise-server@2.21/rest/reference/activity#delete-a-thread-subscription) endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/activity#set-a-thread-subscription>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivitySetThreadSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActivitySetThreadSubscriptionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivitySetThreadSubscriptionRequest();
    $request->requestBody = new ActivitySetThreadSubscriptionRequestBody();
    $request->requestBody->ignored = false;
    $request->threadId = 652790;

    $response = $sdk->activity->activitySetThreadSubscription($request);

    if ($response->threadSubscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityStarRepoForAuthenticatedUser

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/activity#star-a-repository-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityStarRepoForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityStarRepoForAuthenticatedUserRequest();
    $request->owner = 'dolorem';
    $request->repo = 'culpa';

    $response = $sdk->activity->activityStarRepoForAuthenticatedUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activityUnstarRepoForAuthenticatedUser

Unstar a repository for the authenticated user

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/activity#unstar-a-repository-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivityUnstarRepoForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivityUnstarRepoForAuthenticatedUserRequest();
    $request->owner = 'consequuntur';
    $request->repo = 'repellat';

    $response = $sdk->activity->activityUnstarRepoForAuthenticatedUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
