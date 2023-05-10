# terminalActionsCompanyLevel

### Available Operations

* [getCompaniesCompanyIdAndroidApps](#getcompaniescompanyidandroidapps) - Get a list of Android apps
* [getCompaniesCompanyIdAndroidCertificates](#getcompaniescompanyidandroidcertificates) - Get a list of Android certificates
* [getCompaniesCompanyIdTerminalActions](#getcompaniescompanyidterminalactions) - Get a list of terminal actions
* [getCompaniesCompanyIdTerminalActionsActionId](#getcompaniescompanyidterminalactionsactionid) - Get terminal action

## getCompaniesCompanyIdAndroidApps

Returns a list of the Android apps that are available for the company identified in the path. 
These apps have been uploaded to Adyen and can be installed or uninstalled on Android payment terminals through [terminal actions](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api).

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal actions read
* Management API—Terminal actions read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdAndroidAppsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdAndroidAppsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompaniesCompanyIdAndroidAppsRequest();
    $request->companyId = 'iure';
    $request->pageNumber = 487838;
    $request->pageSize = 311796;

    $requestSecurity = new GetCompaniesCompanyIdAndroidAppsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalActionsCompanyLevel->getCompaniesCompanyIdAndroidApps($request, $requestSecurity);

    if ($response->androidAppsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCompaniesCompanyIdAndroidCertificates

Returns a list of the Android certificates that are available for the company identified in the path.
Typically, these certificates enable running apps on Android payment terminals. The certifcates in the list have been uploaded to Adyen and can be installed or uninstalled on Android terminals through [terminal actions](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api).

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal actions read
* Management API—Terminal actions read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdAndroidCertificatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdAndroidCertificatesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompaniesCompanyIdAndroidCertificatesRequest();
    $request->companyId = 'accusamus';
    $request->pageNumber = 696344;
    $request->pageSize = 976405;

    $requestSecurity = new GetCompaniesCompanyIdAndroidCertificatesSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalActionsCompanyLevel->getCompaniesCompanyIdAndroidCertificates($request, $requestSecurity);

    if ($response->androidCertificatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCompaniesCompanyIdTerminalActions

Returns the [terminal actions](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api) that have been scheduled for the company identified in the path.The response doesn't include actions that are scheduled by Adyen.
To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal actions read
* Management API—Terminal actions read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdTerminalActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdTerminalActionsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompaniesCompanyIdTerminalActionsRequest();
    $request->companyId = 'voluptas';
    $request->pageNumber = 617658;
    $request->pageSize = 179603;
    $request->status = 'atque';
    $request->type = 'sit';

    $requestSecurity = new GetCompaniesCompanyIdTerminalActionsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalActionsCompanyLevel->getCompaniesCompanyIdTerminalActions($request, $requestSecurity);

    if ($response->listExternalTerminalActionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCompaniesCompanyIdTerminalActionsActionId

Returns the details of the [terminal action](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api) identified in the path.
To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal actions read
* Management API—Terminal actions read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdTerminalActionsActionIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdTerminalActionsActionIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompaniesCompanyIdTerminalActionsActionIdRequest();
    $request->actionId = 'fugiat';
    $request->companyId = 'ab';

    $requestSecurity = new GetCompaniesCompanyIdTerminalActionsActionIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalActionsCompanyLevel->getCompaniesCompanyIdTerminalActionsActionId($request, $requestSecurity);

    if ($response->externalTerminalAction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
