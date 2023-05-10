# general

### Available Operations

* [postChangeStatus](#postchangestatus) - Changes the status of the payment method.
* [postCheckBalance](#postcheckbalance) - Checks the balance.
* [postIssue](#postissue) - Issues a new card.
* [postLoad](#postload) - Loads the payment method.
* [postMergeBalance](#postmergebalance) - Merge the balance of two cards.
* [postVoidTransaction](#postvoidtransaction) - Voids a transaction.

## postChangeStatus

Changes the status of the provided payment method to the specified status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\StoredValueStatusChangeRequest;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Shared\StoredValueStatusChangeRequestShopperInteractionEnum;
use \OpenAPI\OpenAPI\Models\Shared\StoredValueStatusChangeRequestStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostChangeStatusSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoredValueStatusChangeRequest();
    $request->amount = new Amount();
    $request->amount->currency = 'suscipit';
    $request->amount->value = 477665;
    $request->merchantAccount = 'minus';
    $request->paymentMethod = [
        'voluptatum' => 'iusto',
        'excepturi' => 'nisi',
        'recusandae' => 'temporibus',
        'ab' => 'quis',
    ];
    $request->recurringDetailReference = 'veritatis';
    $request->reference = 'deserunt';
    $request->shopperInteraction = StoredValueStatusChangeRequestShopperInteractionEnum::ECOMMERCE;
    $request->shopperReference = 'ipsam';
    $request->status = StoredValueStatusChangeRequestStatusEnum::INACTIVE;
    $request->store = 'sapiente';

    $requestSecurity = new PostChangeStatusSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postChangeStatus($request, $requestSecurity);

    if ($response->storedValueStatusChangeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCheckBalance

Checks the balance of the provided payment method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\StoredValueBalanceCheckRequest;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Shared\StoredValueBalanceCheckRequestShopperInteractionEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostCheckBalanceSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoredValueBalanceCheckRequest();
    $request->amount = new Amount();
    $request->amount->currency = 'quo';
    $request->amount->value = 140350;
    $request->merchantAccount = 'at';
    $request->paymentMethod = [
        'maiores' => 'molestiae',
        'quod' => 'quod',
        'esse' => 'totam',
        'porro' => 'dolorum',
    ];
    $request->recurringDetailReference = 'dicta';
    $request->reference = 'nam';
    $request->shopperInteraction = StoredValueBalanceCheckRequestShopperInteractionEnum::MOTO;
    $request->shopperReference = 'occaecati';
    $request->store = 'fugit';

    $requestSecurity = new PostCheckBalanceSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postCheckBalance($request, $requestSecurity);

    if ($response->storedValueBalanceCheckResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postIssue

Issues a new card of the given payment method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\StoredValueIssueRequest;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Shared\StoredValueIssueRequestShopperInteractionEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostIssueSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoredValueIssueRequest();
    $request->amount = new Amount();
    $request->amount->currency = 'deleniti';
    $request->amount->value = 944669;
    $request->merchantAccount = 'optio';
    $request->paymentMethod = [
        'beatae' => 'commodi',
        'molestiae' => 'modi',
        'qui' => 'impedit',
    ];
    $request->recurringDetailReference = 'cum';
    $request->reference = 'esse';
    $request->shopperInteraction = StoredValueIssueRequestShopperInteractionEnum::ECOMMERCE;
    $request->shopperReference = 'excepturi';
    $request->store = 'aspernatur';

    $requestSecurity = new PostIssueSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postIssue($request, $requestSecurity);

    if ($response->storedValueIssueResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postLoad

Loads the payment method with the specified funds.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\StoredValueLoadRequest;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Shared\StoredValueLoadRequestLoadTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StoredValueLoadRequestShopperInteractionEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostLoadSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoredValueLoadRequest();
    $request->amount = new Amount();
    $request->amount->currency = 'perferendis';
    $request->amount->value = 324141;
    $request->loadType = StoredValueLoadRequestLoadTypeEnum::LOAD;
    $request->merchantAccount = 'sed';
    $request->paymentMethod = [
        'dolor' => 'natus',
        'laboriosam' => 'hic',
        'saepe' => 'fuga',
    ];
    $request->recurringDetailReference = 'in';
    $request->reference = 'corporis';
    $request->shopperInteraction = StoredValueLoadRequestShopperInteractionEnum::MOTO;
    $request->shopperReference = 'iure';
    $request->store = 'saepe';

    $requestSecurity = new PostLoadSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postLoad($request, $requestSecurity);

    if ($response->storedValueLoadResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postMergeBalance

Increases the balance of the paymentmethod by the full amount left on the source paymentmethod

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\StoredValueBalanceMergeRequest;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Shared\StoredValueBalanceMergeRequestShopperInteractionEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostMergeBalanceSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoredValueBalanceMergeRequest();
    $request->amount = new Amount();
    $request->amount->currency = 'quidem';
    $request->amount->value = 99280;
    $request->merchantAccount = 'ipsa';
    $request->paymentMethod = [
        'est' => 'mollitia',
        'laborum' => 'dolores',
        'dolorem' => 'corporis',
        'explicabo' => 'nobis',
    ];
    $request->recurringDetailReference = 'enim';
    $request->reference = 'omnis';
    $request->shopperInteraction = StoredValueBalanceMergeRequestShopperInteractionEnum::CONT_AUTH;
    $request->shopperReference = 'minima';
    $request->sourcePaymentMethod = [
        'accusantium' => 'iure',
        'culpa' => 'doloribus',
        'sapiente' => 'architecto',
    ];
    $request->store = 'mollitia';

    $requestSecurity = new PostMergeBalanceSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postMergeBalance($request, $requestSecurity);

    if ($response->storedValueBalanceMergeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postVoidTransaction

Voids the referenced stored value transaction.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\StoredValueVoidRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostVoidTransactionSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoredValueVoidRequest();
    $request->merchantAccount = 'dolorem';
    $request->originalReference = 'culpa';
    $request->reference = 'consequuntur';
    $request->store = 'repellat';
    $request->tenderReference = 'mollitia';
    $request->uniqueTerminalId = 'occaecati';

    $requestSecurity = new PostVoidTransactionSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postVoidTransaction($request, $requestSecurity);

    if ($response->storedValueVoidResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
