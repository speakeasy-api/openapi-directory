<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSettingsOrganizationsOrganizationNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSettingsOrganizationsOrganizationNameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSettingsOrganizationsOrganizationNameRequest();
    $request->organizationName = 'corrupti';

    $requestSecurity = new DeleteSettingsOrganizationsOrganizationNameSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->deleteSettingsOrganizationsOrganizationName($request, $requestSecurity);

    if ($response->organization !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->