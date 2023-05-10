# app

## Overview

application

### Available Operations

* [appGetApplicationApiUsage](#appgetapplicationapiusage) - Get API usage by application for time frame specified. You can go as far back as 30 days ago, and can ask for up to a 48 hour window of time in a single request. You must be authenticated with at least the ReadUserData permission to access this endpoint.
* [appGetBungieApplications](#appgetbungieapplications) - Get list of applications created by Bungie.

## appGetApplicationApiUsage

Get API usage by application for time frame specified. You can go as far back as 30 days ago, and can ask for up to a 48 hour window of time in a single request. You must be authenticated with at least the ReadUserData permission to access this endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppGetApplicationApiUsageRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppGetApplicationApiUsageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppGetApplicationApiUsageRequest();
    $request->applicationId = 548814;
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-27T21:52:56.087Z');
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-11T23:22:42.658Z');

    $requestSecurity = new AppGetApplicationApiUsageSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->app->appGetApplicationApiUsage($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appGetBungieApplications

Get list of applications created by Bungie.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->app->appGetBungieApplications();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
