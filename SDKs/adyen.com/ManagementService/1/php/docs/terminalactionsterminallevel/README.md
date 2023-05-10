# terminalActionsTerminalLevel

### Available Operations

* [postTerminalsScheduleActions](#postterminalsscheduleactions) - Create a terminal action

## postTerminalsScheduleActions

Schedules a [terminal action](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api) by specifying the action and the terminals that the action must be applied to. 

The following restrictions apply:
* You can schedule only one action at a time. For example, to install a new app version and remove an old app version, you have to make two API requests. 
* The maximum number of terminals in a request is **100**. For example, to apply an action to 250 terminals, you have to divide the terminals over three API requests. 
* If there is an error with one or more terminal IDs in the request, the action is scheduled for none of the terminals. You need to fix the error and try again. 

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal actions read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ScheduleTerminalActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostTerminalsScheduleActionsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScheduleTerminalActionsRequest();
    $request->actionDetails = new UninstallAndroidAppDetails();
    $request->actionDetails->appId = 'dolorum';
    $request->actionDetails->type = UninstallAndroidAppDetailsTypeEnum::UNINSTALL_ANDROID_APP;
    $request->scheduledAt = 'iusto';
    $request->storeId = 'voluptate';
    $request->terminalIds = [
        'deleniti',
        'omnis',
        'necessitatibus',
    ];

    $requestSecurity = new PostTerminalsScheduleActionsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalActionsTerminalLevel->postTerminalsScheduleActions($request, $requestSecurity);

    if ($response->scheduleTerminalActionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
