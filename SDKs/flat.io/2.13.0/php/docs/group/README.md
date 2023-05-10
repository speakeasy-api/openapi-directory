# group

## Overview

Flat Groups

### Available Operations

* [getGroupDetails](#getgroupdetails) - Get group information
* [getGroupScores](#getgroupscores) - List group's scores
* [listGroupUsers](#listgroupusers) - List group's users

## getGroupDetails

Get group information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupDetailsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGroupDetailsRequest();
    $request->group = 'laborum';

    $requestSecurity = new GetGroupDetailsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->group->getGroupDetails($request, $requestSecurity);

    if ($response->groupDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGroupScores

Get the list of scores shared with a group.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupScoresRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupScoresSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGroupScoresRequest();
    $request->group = 'quasi';
    $request->parent = 'reiciendis';

    $requestSecurity = new GetGroupScoresSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->group->getGroupScores($request, $requestSecurity);

    if ($response->scoreDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listGroupUsers

List group's users

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListGroupUsersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListGroupUsersSourceEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListGroupUsersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListGroupUsersRequest();
    $request->group = 'voluptatibus';
    $request->source = ListGroupUsersSourceEnum::CLEVER;

    $requestSecurity = new ListGroupUsersSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->group->listGroupUsers($request, $requestSecurity);

    if ($response->userPublics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
