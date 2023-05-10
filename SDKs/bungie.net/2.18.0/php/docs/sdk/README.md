# SDK

## Overview

These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.

Our Wiki page about OAuth through Bungie.net.
<https://github.com/Bungie-net/api/wiki/OAuth-Documentation>
### Available Operations

* [dotGetAvailableLocales](#dotgetavailablelocales) - List of available localization cultures
* [dotGetCommonSettings](#dotgetcommonsettings) - Get the common settings used by the Bungie.Net environment.
* [dotGetGlobalAlerts](#dotgetglobalalerts) - Gets any active global alert for display in the forum banners, help pages, etc. Usually used for DOC alerts.
* [dotGetUserSystemOverrides](#dotgetusersystemoverrides) - Get the user-specific system overrides that should be respected alongside common systems.

## dotGetAvailableLocales

List of available localization cultures

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->dotGetAvailableLocales();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dotGetCommonSettings

Get the common settings used by the Bungie.Net environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->dotGetCommonSettings();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dotGetGlobalAlerts

Gets any active global alert for display in the forum banners, help pages, etc. Usually used for DOC alerts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DotGetGlobalAlertsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DotGetGlobalAlertsRequest();
    $request->includestreaming = false;

    $response = $sdk->sdk->dotGetGlobalAlerts($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dotGetUserSystemOverrides

Get the user-specific system overrides that should be respected alongside common systems.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->dotGetUserSystemOverrides();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
