# social

## Overview

social

### Available Operations

* [socialAcceptFriendRequest](#socialacceptfriendrequest) - Accepts a friend relationship with the target user. The user must be on your incoming friend request list, though no error will occur if they are not.
* [socialDeclineFriendRequest](#socialdeclinefriendrequest) - Declines a friend relationship with the target user. The user must be on your incoming friend request list, though no error will occur if they are not.
* [socialGetFriendList](#socialgetfriendlist) - Returns your Bungie Friend list
* [socialGetFriendRequestList](#socialgetfriendrequestlist) - Returns your friend request queue.
* [socialGetPlatformFriendList](#socialgetplatformfriendlist) - Gets the platform friend of the requested type, with additional information if they have Bungie accounts. Must have a recent login session with said platform.
* [socialIssueFriendRequest](#socialissuefriendrequest) - Requests a friend relationship with the target user. Any of the target user's linked membership ids are valid inputs.
* [socialRemoveFriend](#socialremovefriend) - Remove a friend relationship with the target user. The user must be on your friend list, though no error will occur if they are not.
* [socialRemoveFriendRequest](#socialremovefriendrequest) - Remove a friend relationship with the target user. The user must be on your outgoing request friend list, though no error will occur if they are not.

## socialAcceptFriendRequest

Accepts a friend relationship with the target user. The user must be on your incoming friend request list, though no error will occur if they are not.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SocialAcceptFriendRequestRequest;
use \OpenAPI\OpenAPI\Models\Operations\SocialAcceptFriendRequestSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SocialAcceptFriendRequestRequest();
    $request->membershipId = 'ullam';

    $requestSecurity = new SocialAcceptFriendRequestSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->social->socialAcceptFriendRequest($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## socialDeclineFriendRequest

Declines a friend relationship with the target user. The user must be on your incoming friend request list, though no error will occur if they are not.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SocialDeclineFriendRequestRequest;
use \OpenAPI\OpenAPI\Models\Operations\SocialDeclineFriendRequestSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SocialDeclineFriendRequestRequest();
    $request->membershipId = 'provident';

    $requestSecurity = new SocialDeclineFriendRequestSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->social->socialDeclineFriendRequest($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## socialGetFriendList

Returns your Bungie Friend list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SocialGetFriendListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new SocialGetFriendListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->social->socialGetFriendList($requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## socialGetFriendRequestList

Returns your friend request queue.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SocialGetFriendRequestListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new SocialGetFriendRequestListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->social->socialGetFriendRequestList($requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## socialGetPlatformFriendList

Gets the platform friend of the requested type, with additional information if they have Bungie accounts. Must have a recent login session with said platform.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SocialGetPlatformFriendListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SocialGetPlatformFriendListRequest();
    $request->friendPlatform = 551816;
    $request->page = 'sint';

    $response = $sdk->social->socialGetPlatformFriendList($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## socialIssueFriendRequest

Requests a friend relationship with the target user. Any of the target user's linked membership ids are valid inputs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SocialIssueFriendRequestRequest;
use \OpenAPI\OpenAPI\Models\Operations\SocialIssueFriendRequestSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SocialIssueFriendRequestRequest();
    $request->membershipId = 'accusantium';

    $requestSecurity = new SocialIssueFriendRequestSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->social->socialIssueFriendRequest($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## socialRemoveFriend

Remove a friend relationship with the target user. The user must be on your friend list, though no error will occur if they are not.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SocialRemoveFriendRequest;
use \OpenAPI\OpenAPI\Models\Operations\SocialRemoveFriendSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SocialRemoveFriendRequest();
    $request->membershipId = 'mollitia';

    $requestSecurity = new SocialRemoveFriendSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->social->socialRemoveFriend($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## socialRemoveFriendRequest

Remove a friend relationship with the target user. The user must be on your outgoing request friend list, though no error will occur if they are not.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SocialRemoveFriendRequestRequest;
use \OpenAPI\OpenAPI\Models\Operations\SocialRemoveFriendRequestSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SocialRemoveFriendRequestRequest();
    $request->membershipId = 'reiciendis';

    $requestSecurity = new SocialRemoveFriendRequestSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->social->socialRemoveFriendRequest($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
