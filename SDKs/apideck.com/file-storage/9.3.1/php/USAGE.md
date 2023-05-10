<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DriveGroupsAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\DriveGroupInput;
use \OpenAPI\OpenAPI\Models\Operations\DriveGroupsAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveGroupsAddRequest();
    $request->driveGroupInput = new DriveGroupInput();
    $request->driveGroupInput->description = 'A description';
    $request->driveGroupInput->displayName = 'accounting';
    $request->driveGroupInput->name = 'accounting';
    $request->raw = false;
    $request->xApideckAppId = 'corrupti';
    $request->xApideckConsumerId = 'provident';
    $request->xApideckServiceId = 'distinctio';

    $requestSecurity = new DriveGroupsAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->driveGroups->driveGroupsAdd($request, $requestSecurity);

    if ($response->createDriveGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->