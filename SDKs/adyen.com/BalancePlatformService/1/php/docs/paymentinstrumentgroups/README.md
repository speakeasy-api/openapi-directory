# paymentInstrumentGroups

### Available Operations

* [getPaymentInstrumentGroupsId](#getpaymentinstrumentgroupsid) - Get a payment instrument group
* [getPaymentInstrumentGroupsIdTransactionRules](#getpaymentinstrumentgroupsidtransactionrules) - Get all transaction rules for a payment instrument group
* [postPaymentInstrumentGroups](#postpaymentinstrumentgroups) - Create a payment instrument group

## getPaymentInstrumentGroupsId

Returns the details of a payment instrument group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentInstrumentGroupsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentInstrumentGroupsIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentInstrumentGroupsIdRequest();
    $request->id = 'e674bdb0-4f15-4756-882d-68ea19f1d170';

    $requestSecurity = new GetPaymentInstrumentGroupsIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->paymentInstrumentGroups->getPaymentInstrumentGroupsId($request, $requestSecurity);

    if ($response->paymentInstrumentGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPaymentInstrumentGroupsIdTransactionRules

Returns a list of all the transaction rules associated with a payment instrument group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentInstrumentGroupsIdTransactionRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentInstrumentGroupsIdTransactionRulesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentInstrumentGroupsIdTransactionRulesRequest();
    $request->id = '51339d08-086a-4184-8394-c26071f93f5f';

    $requestSecurity = new GetPaymentInstrumentGroupsIdTransactionRulesSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->paymentInstrumentGroups->getPaymentInstrumentGroupsIdTransactionRules($request, $requestSecurity);

    if ($response->transactionRulesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPaymentInstrumentGroups

Creates a payment instrument group to associate and group payment instrument resources together. You can apply a transaction rule to a payment instrument group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\PaymentInstrumentGroupInfo;
use \OpenAPI\OpenAPI\Models\Operations\PostPaymentInstrumentGroupsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentInstrumentGroupInfo();
    $request->balancePlatform = 'aperiam';
    $request->description = 'ea';
    $request->properties = [
        'consequuntur' => 'repellendus',
        'officia' => 'maxime',
    ];
    $request->reference = 'dignissimos';
    $request->txVariant = 'officia';

    $requestSecurity = new PostPaymentInstrumentGroupsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->paymentInstrumentGroups->postPaymentInstrumentGroups($request, $requestSecurity);

    if ($response->paymentInstrumentGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
