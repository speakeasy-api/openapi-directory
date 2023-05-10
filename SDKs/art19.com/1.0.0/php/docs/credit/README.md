# credit

### Available Operations

* [getCredits](#getcredits) - Get a list of credits
* [getCreditsId](#getcreditsid) - Get a specific credit

## getCredits

Get a list of credits

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCreditsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCreditsCreditableTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCreditsSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCreditsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCreditsRequest();
    $request->creditableId = 'f69280d1-ba77-4a89-abf7-37ae4203ce5e';
    $request->creditableType = GetCreditsCreditableTypeEnum::SEASON;
    $request->ids = [
        '95d8a0d4-46ce-42af-ba73-cf3be453f870',
        'b326b5a7-3429-4cdb-9a84-22bb679d2322',
        '715bf0cb-b1e3-41b8-b90f-3443a1108e0a',
    ];
    $request->pageNumber = 833038;
    $request->pageSize = 785153;
    $request->sort = [
        GetCreditsSortEnum::CREATED_AT,
        GetCreditsSortEnum::UPDATED_AT,
        GetCreditsSortEnum::POSITION,
        GetCreditsSortEnum::CREATED_AT,
    ];

    $requestSecurity = new GetCreditsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->credit->getCredits($request, $requestSecurity);

    if ($response->getCredits200ApplicationVndApiPlusJsonObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCreditsId

Get a specific credit

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCreditsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCreditsIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCreditsIdRequest();
    $request->id = '1879fce9-53f7-43ef-bfbc-7abd74dd39c0';

    $requestSecurity = new GetCreditsIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->credit->getCreditsId($request, $requestSecurity);

    if ($response->getCreditsId200ApplicationVndApiPlusJsonObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
