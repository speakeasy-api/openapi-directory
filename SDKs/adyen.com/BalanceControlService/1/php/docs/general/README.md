# general

### Available Operations

* [postBalanceTransfer](#postbalancetransfer) - Start a balance transfer

## postBalanceTransfer

Starts a balance transfer request between merchant accounts. The following conditions must be met before you can successfully transfer balances:

* The source and destination merchant accounts must be under the same company account and legal entity.

* The source merchant account must have sufficient funds.

* The source and destination merchant accounts must have at least one common processing currency.

When sending multiple API requests with the same source and destination merchant accounts, send the requests sequentially and *not* in parallel. Some requests may not be processed if the requests are sent in parallel.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BalanceTransferRequest;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Shared\BalanceTransferRequestTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostBalanceTransferSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BalanceTransferRequest();
    $request->amount = new Amount();
    $request->amount->currency = 'illum';
    $request->amount->value = 423655;
    $request->description = 'error';
    $request->fromMerchant = 'deserunt';
    $request->reference = 'suscipit';
    $request->toMerchant = 'iure';
    $request->type = BalanceTransferRequestTypeEnum::FEE;

    $requestSecurity = new PostBalanceTransferSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postBalanceTransfer($request, $requestSecurity);

    if ($response->balanceTransferResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
