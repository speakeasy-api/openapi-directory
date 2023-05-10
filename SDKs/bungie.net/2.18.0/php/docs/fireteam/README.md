# fireteam

## Overview

fireteam

### Available Operations

* [fireteamGetActivePrivateClanFireteamCount](#fireteamgetactiveprivateclanfireteamcount) - Gets a count of all active non-public fireteams for the specified clan. Maximum value returned is 25.
* [fireteamGetAvailableClanFireteams](#fireteamgetavailableclanfireteams) - Gets a listing of all of this clan's fireteams that are have available slots. Caller is not checked for join criteria so caching is maximized.
* [fireteamGetClanFireteam](#fireteamgetclanfireteam) - Gets a specific fireteam.
* [fireteamGetMyClanFireteams](#fireteamgetmyclanfireteams) - Gets a listing of all fireteams that caller is an applicant, a member, or an alternate of.
* [fireteamSearchPublicAvailableClanFireteams](#fireteamsearchpublicavailableclanfireteams) - Gets a listing of all public fireteams starting now with open slots. Caller is not checked for join criteria so caching is maximized.

## fireteamGetActivePrivateClanFireteamCount

Gets a count of all active non-public fireteams for the specified clan. Maximum value returned is 25.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FireteamGetActivePrivateClanFireteamCountRequest;
use \OpenAPI\OpenAPI\Models\Operations\FireteamGetActivePrivateClanFireteamCountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FireteamGetActivePrivateClanFireteamCountRequest();
    $request->groupId = 820994;

    $requestSecurity = new FireteamGetActivePrivateClanFireteamCountSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->fireteam->fireteamGetActivePrivateClanFireteamCount($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fireteamGetAvailableClanFireteams

Gets a listing of all of this clan's fireteams that are have available slots. Caller is not checked for join criteria so caching is maximized.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FireteamGetAvailableClanFireteamsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FireteamGetAvailableClanFireteamsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FireteamGetAvailableClanFireteamsRequest();
    $request->activityType = 13571;
    $request->dateRange = 97101;
    $request->excludeImmediate = false;
    $request->groupId = 622846;
    $request->langFilter = 'temporibus';
    $request->page = 673660;
    $request->platform = 96098;
    $request->publicOnly = 971945;
    $request->slotFilter = 976460;

    $requestSecurity = new FireteamGetAvailableClanFireteamsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->fireteam->fireteamGetAvailableClanFireteams($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fireteamGetClanFireteam

Gets a specific fireteam.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FireteamGetClanFireteamRequest;
use \OpenAPI\OpenAPI\Models\Operations\FireteamGetClanFireteamSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FireteamGetClanFireteamRequest();
    $request->fireteamId = 878194;
    $request->groupId = 468651;

    $requestSecurity = new FireteamGetClanFireteamSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->fireteam->fireteamGetClanFireteam($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fireteamGetMyClanFireteams

Gets a listing of all fireteams that caller is an applicant, a member, or an alternate of.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FireteamGetMyClanFireteamsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FireteamGetMyClanFireteamsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FireteamGetMyClanFireteamsRequest();
    $request->groupFilter = false;
    $request->groupId = 509624;
    $request->includeClosed = false;
    $request->langFilter = 'voluptatibus';
    $request->page = 55714;
    $request->platform = 604846;

    $requestSecurity = new FireteamGetMyClanFireteamsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->fireteam->fireteamGetMyClanFireteams($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fireteamSearchPublicAvailableClanFireteams

Gets a listing of all public fireteams starting now with open slots. Caller is not checked for join criteria so caching is maximized.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FireteamSearchPublicAvailableClanFireteamsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FireteamSearchPublicAvailableClanFireteamsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FireteamSearchPublicAvailableClanFireteamsRequest();
    $request->activityType = 451159;
    $request->dateRange = 739264;
    $request->excludeImmediate = false;
    $request->langFilter = 'perferendis';
    $request->page = 39187;
    $request->platform = 441711;
    $request->slotFilter = 282807;

    $requestSecurity = new FireteamSearchPublicAvailableClanFireteamsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->fireteam->fireteamSearchPublicAvailableClanFireteams($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
