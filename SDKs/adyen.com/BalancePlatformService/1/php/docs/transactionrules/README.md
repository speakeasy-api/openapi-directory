# transactionRules

### Available Operations

* [deleteTransactionRulesTransactionRuleId](#deletetransactionrulestransactionruleid) - Delete a transaction rule
* [getTransactionRulesTransactionRuleId](#gettransactionrulestransactionruleid) - Get a transaction rule
* [patchTransactionRulesTransactionRuleId](#patchtransactionrulestransactionruleid) - Update a transaction rule
* [postTransactionRules](#posttransactionrules) - Create a transaction rule

## deleteTransactionRulesTransactionRuleId

Deletes a transaction rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTransactionRulesTransactionRuleIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTransactionRulesTransactionRuleIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTransactionRulesTransactionRuleIdRequest();
    $request->transactionRuleId = 'velit';

    $requestSecurity = new DeleteTransactionRulesTransactionRuleIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->transactionRules->deleteTransactionRulesTransactionRuleId($request, $requestSecurity);

    if ($response->transactionRule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTransactionRulesTransactionRuleId

Returns the details of a transaction rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionRulesTransactionRuleIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionRulesTransactionRuleIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransactionRulesTransactionRuleIdRequest();
    $request->transactionRuleId = 'aspernatur';

    $requestSecurity = new GetTransactionRulesTransactionRuleIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->transactionRules->getTransactionRulesTransactionRuleId($request, $requestSecurity);

    if ($response->transactionRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchTransactionRulesTransactionRuleId

Updates a transaction rule. 

* To update only the status of a transaction rule, send only the `status` parameter. All other parameters not provided in the request are left unchanged.

* When updating any other parameter, you need to send all existing resource parameters. If you omit a parameter in the request, that parameter is removed from the resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchTransactionRulesTransactionRuleIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\TransactionRuleInfo;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Shared\TransactionRuleInfoEntryModesEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransactionRuleInterval;
use \OpenAPI\OpenAPI\Models\Shared\TransactionRuleIntervalTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransactionRuleInfoProcessingTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransactionRuleInfoStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransactionRuleInfoTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchTransactionRulesTransactionRuleIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchTransactionRulesTransactionRuleIdRequest();
    $request->transactionRuleInfo = new TransactionRuleInfo();
    $request->transactionRuleInfo->amount = new Amount();
    $request->transactionRuleInfo->amount->currency = 'eum';
    $request->transactionRuleInfo->amount->value = 260628;
    $request->transactionRuleInfo->balancePlatformId = 'rem';
    $request->transactionRuleInfo->countries = [
        'impedit',
        'eos',
        'sapiente',
        'eum',
    ];
    $request->transactionRuleInfo->description = 'dicta';
    $request->transactionRuleInfo->endDate = 'minima';
    $request->transactionRuleInfo->entryModes = [
        TransactionRuleInfoEntryModesEnum::MANUAL,
    ];
    $request->transactionRuleInfo->interval = new TransactionRuleInterval();
    $request->transactionRuleInfo->interval->type = TransactionRuleIntervalTypeEnum::MONTHLY;
    $request->transactionRuleInfo->maxTransactions = 936469;
    $request->transactionRuleInfo->mccs = [
        'hic',
        'illum',
        'eaque',
    ];
    $request->transactionRuleInfo->paymentInstrumentGroupId = 'earum';
    $request->transactionRuleInfo->paymentInstrumentId = 'perspiciatis';
    $request->transactionRuleInfo->processingTypes = [
        TransactionRuleInfoProcessingTypesEnum::UNKNOWN,
        TransactionRuleInfoProcessingTypesEnum::MOTO,
        TransactionRuleInfoProcessingTypesEnum::TOKEN,
        TransactionRuleInfoProcessingTypesEnum::MOTO,
    ];
    $request->transactionRuleInfo->reference = 'dolorem';
    $request->transactionRuleInfo->startDate = 'fugit';
    $request->transactionRuleInfo->status = TransactionRuleInfoStatusEnum::INACTIVE;
    $request->transactionRuleInfo->type = TransactionRuleInfoTypeEnum::MAX_USAGE;
    $request->transactionRuleId = 'ratione';

    $requestSecurity = new PatchTransactionRulesTransactionRuleIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->transactionRules->patchTransactionRulesTransactionRuleId($request, $requestSecurity);

    if ($response->transactionRule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTransactionRules

Creates a [transaction rule](https://docs.adyen.com/issuing/transaction-rules). When your user makes a transaction with their Adyen-issued card, the transaction is allowed or declined based on the conditions and outcome defined in the transaction rule. You can apply the transaction rule to several cards, such as all the cards in your platform, or to a specific card. For use cases, see [examples](https://docs.adyen.com/issuing/transaction-rules/examples).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\TransactionRuleInfo;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Shared\TransactionRuleInfoEntryModesEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransactionRuleInterval;
use \OpenAPI\OpenAPI\Models\Shared\TransactionRuleIntervalTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransactionRuleInfoProcessingTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransactionRuleInfoStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransactionRuleInfoTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostTransactionRulesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransactionRuleInfo();
    $request->amount = new Amount();
    $request->amount->currency = 'animi';
    $request->amount->value = 898760;
    $request->balancePlatformId = 'nulla';
    $request->countries = [
        'quasi',
    ];
    $request->description = 'et';
    $request->endDate = 'ducimus';
    $request->entryModes = [
        TransactionRuleInfoEntryModesEnum::MANUAL,
        TransactionRuleInfoEntryModesEnum::CONTACTLESS,
        TransactionRuleInfoEntryModesEnum::COF,
    ];
    $request->interval = new TransactionRuleInterval();
    $request->interval->type = TransactionRuleIntervalTypeEnum::DAILY;
    $request->maxTransactions = 169025;
    $request->mccs = [
        'nulla',
        'necessitatibus',
        'ipsa',
        'tempora',
    ];
    $request->paymentInstrumentGroupId = 'nihil';
    $request->paymentInstrumentId = 'molestiae';
    $request->processingTypes = [
        TransactionRuleInfoProcessingTypesEnum::MOTO,
    ];
    $request->reference = 'esse';
    $request->startDate = 'praesentium';
    $request->status = TransactionRuleInfoStatusEnum::INACTIVE;
    $request->type = TransactionRuleInfoTypeEnum::VELOCITY;

    $requestSecurity = new PostTransactionRulesSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->transactionRules->postTransactionRules($request, $requestSecurity);

    if ($response->transactionRule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
