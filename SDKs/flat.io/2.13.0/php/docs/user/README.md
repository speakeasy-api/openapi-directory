# user

## Overview

Flat users

### Available Operations

* [gerUserLikes](#geruserlikes) - List liked scores
* [getUser](#getuser) - Get a public user profile
* [getUserScores](#getuserscores) - List user's scores

## gerUserLikes

List liked scores

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GerUserLikesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GerUserLikesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GerUserLikesRequest();
    $request->ids = false;
    $request->user = 'nesciunt';

    $requestSecurity = new GerUserLikesSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->user->gerUserLikes($request, $requestSecurity);

    if ($response->scoreDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUser

Get a public profile of a Flat User.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserRequest();
    $request->user = 'eos';

    $requestSecurity = new GetUserSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->user->getUser($request, $requestSecurity);

    if ($response->userPublic !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserScores

Get the list of public scores owned by a User.

**DEPRECATED**: Please note that the current behavior will be deprecrated on **2019-01-01**.
This method will no longer list private and shared scores, but only public scores of a Flat account.
If you want to access to private scores, please use the [Collections API](#tag/Collection) instead.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUserScoresRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUserScoresSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserScoresRequest();
    $request->parent = 'perferendis';
    $request->user = 'dolores';

    $requestSecurity = new GetUserScoresSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->user->getUserScores($request, $requestSecurity);

    if ($response->scoreDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
