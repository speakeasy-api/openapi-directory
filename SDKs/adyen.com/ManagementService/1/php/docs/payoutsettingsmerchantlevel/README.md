# payoutSettingsMerchantLevel

### Available Operations

* [deleteMerchantsMerchantIdPayoutSettingsPayoutSettingsId](#deletemerchantsmerchantidpayoutsettingspayoutsettingsid) - Delete a payout setting
* [getMerchantsMerchantIdPayoutSettings](#getmerchantsmerchantidpayoutsettings) - Get a list of payout settings
* [getMerchantsMerchantIdPayoutSettingsPayoutSettingsId](#getmerchantsmerchantidpayoutsettingspayoutsettingsid) - Get a payout setting
* [patchMerchantsMerchantIdPayoutSettingsPayoutSettingsId](#patchmerchantsmerchantidpayoutsettingspayoutsettingsid) - Update a payout setting
* [postMerchantsMerchantIdPayoutSettings](#postmerchantsmerchantidpayoutsettings) - Add a payout setting

## deleteMerchantsMerchantIdPayoutSettingsPayoutSettingsId

Deletes the payout setting identified in the path.

Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Payout account settings read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest();
    $request->merchantId = 'cum';
    $request->payoutSettingsId = 'voluptate';

    $requestSecurity = new DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->payoutSettingsMerchantLevel->deleteMerchantsMerchantIdPayoutSettingsPayoutSettingsId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMerchantsMerchantIdPayoutSettings

Returns the list of payout settings for the merchant account identified in the path.

Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Payout account settings read

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdPayoutSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdPayoutSettingsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMerchantsMerchantIdPayoutSettingsRequest();
    $request->merchantId = 'dignissimos';

    $requestSecurity = new GetMerchantsMerchantIdPayoutSettingsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->payoutSettingsMerchantLevel->getMerchantsMerchantIdPayoutSettings($request, $requestSecurity);

    if ($response->payoutSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMerchantsMerchantIdPayoutSettingsPayoutSettingsId

Returns the payout setting identified in the path.

Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Payout account settings read

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest();
    $request->merchantId = 'reiciendis';
    $request->payoutSettingsId = 'amet';

    $requestSecurity = new GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->payoutSettingsMerchantLevel->getMerchantsMerchantIdPayoutSettingsPayoutSettingsId($request, $requestSecurity);

    if ($response->payoutSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchMerchantsMerchantIdPayoutSettingsPayoutSettingsId

Updates the payout setting identified in the path. You can enable or disable the payout setting.

Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Payout account settings read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePayoutSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest();
    $request->updatePayoutSettingsRequest = new UpdatePayoutSettingsRequest();
    $request->updatePayoutSettingsRequest->enabled = false;
    $request->merchantId = 'dolorum';
    $request->payoutSettingsId = 'numquam';

    $requestSecurity = new PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->payoutSettingsMerchantLevel->patchMerchantsMerchantIdPayoutSettingsPayoutSettingsId($request, $requestSecurity);

    if ($response->payoutSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postMerchantsMerchantIdPayoutSettings

Sends a request to add a payout setting for the merchant account specified in the path. A payout setting links the merchant account to the [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments) that contains the details of the payout bank account. Adyen verifies the bank account before allowing and enabling the payout setting.

If you're accepting payments in multiple currencies, you may add multiple payout settings for the merchant account.

Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Payout account settings read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostMerchantsMerchantIdPayoutSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PayoutSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostMerchantsMerchantIdPayoutSettingsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostMerchantsMerchantIdPayoutSettingsRequest();
    $request->payoutSettingsRequest = new PayoutSettingsRequest();
    $request->payoutSettingsRequest->enabled = false;
    $request->payoutSettingsRequest->enabledFromDate = 'veritatis';
    $request->payoutSettingsRequest->transferInstrumentId = 'ipsa';
    $request->merchantId = 'ipsa';

    $requestSecurity = new PostMerchantsMerchantIdPayoutSettingsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->payoutSettingsMerchantLevel->postMerchantsMerchantIdPayoutSettings($request, $requestSecurity);

    if ($response->payoutSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
