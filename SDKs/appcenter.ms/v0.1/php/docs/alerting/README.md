# alerting

### Available Operations

* [bugTrackerGetRepoIssueFromCrash](#bugtrackergetrepoissuefromcrash) - Get project issue related to a crash group
* [bugtrackerGetSettings](#bugtrackergetsettings) - Get bug tracker settings for a particular app
* [notificationsGetAppEmailSettings](#notificationsgetappemailsettings) - Get Email notification settings of user for a particular app
* [notificationsGetUserEmailSettings](#notificationsgetuseremailsettings) - Get Default email notification settings for the user
* [webhooksList](#webhookslist) - Get web hooks configured for a particular app

## bugTrackerGetRepoIssueFromCrash

Get project issue related to a crash group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BugTrackerGetRepoIssueFromCrashRequest;
use \OpenAPI\OpenAPI\Models\Operations\BugTrackerGetRepoIssueFromCrashSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BugTrackerGetRepoIssueFromCrashRequest();
    $request->appName = 'vel';
    $request->crashGroupId = 'libero';
    $request->ownerName = 'voluptas';

    $requestSecurity = new BugTrackerGetRepoIssueFromCrashSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->alerting->bugTrackerGetRepoIssueFromCrash($request, $requestSecurity);

    if ($response->bugTrackerGetRepoIssueFromCrash200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bugtrackerGetSettings

Get bug tracker settings for a particular app

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BugtrackerGetSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\BugtrackerGetSettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BugtrackerGetSettingsRequest();
    $request->appName = 'deserunt';
    $request->ownerName = 'quam';

    $requestSecurity = new BugtrackerGetSettingsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->alerting->bugtrackerGetSettings($request, $requestSecurity);

    if ($response->bugtrackerGetSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notificationsGetAppEmailSettings

Get Email notification settings of user for a particular app

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotificationsGetAppEmailSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\NotificationsGetAppEmailSettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotificationsGetAppEmailSettingsRequest();
    $request->appName = 'ipsum';
    $request->ownerName = 'incidunt';

    $requestSecurity = new NotificationsGetAppEmailSettingsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->alerting->notificationsGetAppEmailSettings($request, $requestSecurity);

    if ($response->notificationsGetAppEmailSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notificationsGetUserEmailSettings

Get Default email notification settings for the user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotificationsGetUserEmailSettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new NotificationsGetUserEmailSettingsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->alerting->notificationsGetUserEmailSettings($requestSecurity);

    if ($response->notificationsGetUserEmailSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## webhooksList

Get web hooks configured for a particular app

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WebhooksListRequest;
use \OpenAPI\OpenAPI\Models\Operations\WebhooksListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebhooksListRequest();
    $request->appName = 'qui';
    $request->ownerName = 'cupiditate';

    $requestSecurity = new WebhooksListSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->alerting->webhooksList($request, $requestSecurity);

    if ($response->webhooksList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
