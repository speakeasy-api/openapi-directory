# accountMerchantLevel

### Available Operations

* [getMerchants](#getmerchants) - Get a list of merchant accounts
* [getMerchantsMerchantId](#getmerchantsmerchantid) - Get a merchant account
* [postMerchants](#postmerchants) - Create a merchant account
* [postMerchantsMerchantIdActivate](#postmerchantsmerchantidactivate) - Request to activate a merchant account

## getMerchants

Returns the list of merchant accounts that your API credential has access to. The list is grouped into pages as defined by the query parameters. 

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Account read

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMerchantsRequest();
    $request->pageNumber = 617636;
    $request->pageSize = 149675;

    $requestSecurity = new GetMerchantsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->accountMerchantLevel->getMerchants($request, $requestSecurity);

    if ($response->listMerchantResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMerchantsMerchantId

Returns the merchant account specified in the path. Your API credential must have access to the merchant account.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Account read

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMerchantsMerchantIdRequest();
    $request->merchantId = 'iste';

    $requestSecurity = new GetMerchantsMerchantIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->accountMerchantLevel->getMerchantsMerchantId($request, $requestSecurity);

    if ($response->merchant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postMerchants

Creates a merchant account for the company account specified in the request.

Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Accounts read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateMerchantRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostMerchantsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMerchantRequest();
    $request->businessLineId = 'dolor';
    $request->companyId = 'natus';
    $request->description = 'laboriosam';
    $request->legalEntityId = 'hic';
    $request->pricingPlan = 'saepe';
    $request->reference = 'fuga';
    $request->salesChannels = [
        'corporis',
        'iste',
    ];

    $requestSecurity = new PostMerchantsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->accountMerchantLevel->postMerchants($request, $requestSecurity);

    if ($response->createMerchantResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postMerchantsMerchantIdActivate

Sends a request to activate the merchant account identified in the path.

You get the result of the activation asychronously through a [`merchant.updated`](https://docs.adyen.com/api-explorer/ManagementNotification/latest/post/merchant.updated) webhook. Once the merchant account is activated, you can start using it to accept payments and payouts.

Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Accounts read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostMerchantsMerchantIdActivateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostMerchantsMerchantIdActivateSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostMerchantsMerchantIdActivateRequest();
    $request->merchantId = 'iure';

    $requestSecurity = new PostMerchantsMerchantIdActivateSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->accountMerchantLevel->postMerchantsMerchantIdActivate($request, $requestSecurity);

    if ($response->requestActivationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
