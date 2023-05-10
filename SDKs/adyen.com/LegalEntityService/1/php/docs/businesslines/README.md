# businessLines

### Available Operations

* [deleteBusinessLinesId](#deletebusinesslinesid) - Delete a business line
* [getBusinessLinesId](#getbusinesslinesid) - Get a business line
* [postBusinessLines](#postbusinesslines) - Create a business line

## deleteBusinessLinesId

Deletes a business line.

 >If you delete a business line linked to a [payment method](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api), it can affect your merchant account's ability to use the [payment method](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/_merchantId_/paymentMethodSettings). The business line is removed from all linked merchant accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBusinessLinesIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBusinessLinesIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBusinessLinesIdRequest();
    $request->id = 'a05dfc2d-df7c-4c78-8a1b-a928fc816742';

    $requestSecurity = new DeleteBusinessLinesIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->businessLines->deleteBusinessLinesId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBusinessLinesId

Returns the detail of a business line.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBusinessLinesIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBusinessLinesIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBusinessLinesIdRequest();
    $request->id = 'cb739205-9293-496f-aa75-96eb10faaa23';

    $requestSecurity = new GetBusinessLinesIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->businessLines->getBusinessLinesId($request, $requestSecurity);

    if ($response->businessLine !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postBusinessLines

Creates a business line. 

This resource contains information about your user's line of business, including their industry and their source of funds. Adyen uses this information to verify your users as required by payment industry regulations. Adyen informs you of the verification results through webhooks or API responses.>If you are using hosted onboarding, [only use v2](https://docs.adyen.com/release-notes/platforms-and-financial-products#releaseNote=2023-05-01-legal-entity-management-api-3) for your API requests.



### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BusinessLineInfoInput;
use \OpenAPI\OpenAPI\Models\Shared\SourceOfFunds;
use \OpenAPI\OpenAPI\Models\Shared\SourceOfFundsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\WebDataInput;
use \OpenAPI\OpenAPI\Models\Shared\WebDataExemption;
use \OpenAPI\OpenAPI\Models\Shared\WebDataExemptionReasonEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostBusinessLinesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BusinessLineInfoInput();
    $request->capability = 'corporis';
    $request->industryCode = 'explicabo';
    $request->legalEntityId = 'nobis';
    $request->salesChannels = [
        'omnis',
        'nemo',
    ];
    $request->sourceOfFunds = new SourceOfFunds();
    $request->sourceOfFunds->acquiringBusinessLineId = 'minima';
    $request->sourceOfFunds->adyenProcessedFunds = false;
    $request->sourceOfFunds->description = 'excepturi';
    $request->sourceOfFunds->type = SourceOfFundsTypeEnum::BUSINESS;
    $request->webData = [
        new WebDataInput(),
    ];
    $request->webDataExemption = new WebDataExemption();
    $request->webDataExemption->reason = WebDataExemptionReasonEnum::NO_ONLINE_PRESENCE;

    $requestSecurity = new PostBusinessLinesSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->businessLines->postBusinessLines($request, $requestSecurity);

    if ($response->businessLine !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
