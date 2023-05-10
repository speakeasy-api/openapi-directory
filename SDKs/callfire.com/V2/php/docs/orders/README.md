# orders

### Available Operations

* [findOrders](#findorders) - Find orders
* [getOrder](#getorder) - Find a specific order
* [orderKeywords](#orderkeywords) - Purchase keywords
* [orderNumbers](#ordernumbers) - Purchase numbers

## findOrders

Searches for account orders

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindOrdersRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindOrdersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindOrdersRequest();
    $request->fields = 'impedit';
    $request->intervalBegin = 13236;
    $request->intervalEnd = 974259;
    $request->limit = 347233;
    $request->offset = 862310;
    $request->status = [
        'porro',
    ];

    $requestSecurity = new FindOrdersSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->orders->findOrders($request, $requestSecurity);

    if ($response->pageNumberOrder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrder

Returns a single NumberOrder instance for a given order id. Order contains information about purchased keywords, local, toll-free numbers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrderRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrderRequest();
    $request->fields = 'maiores';
    $request->id = 985033;

    $requestSecurity = new GetOrderSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->orders->getOrder($request, $requestSecurity);

    if ($response->numberOrder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderKeywords

Purchase keywords. Send a list of available keywords into this API to purchase them using CallFire credits. Make sure the account has enough credits before trying to purchase the keywords. Keyword should only consist of uppercase and lowercase letters and numbers. Number of characters must be greater than 2, but less than 65.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderKeywordsRequest;
use \OpenAPI\OpenAPI\Models\Shared\KeywordPurchaseRequest;
use \OpenAPI\OpenAPI\Models\Operations\OrderKeywordsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderKeywordsRequest();
    $request->keywordPurchaseRequest = new KeywordPurchaseRequest();
    $request->keywordPurchaseRequest->keywords = [
        'eligendi',
        'ducimus',
    ];
    $request->fields = 'alias';

    $requestSecurity = new OrderKeywordsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->orders->orderKeywords($request, $requestSecurity);

    if ($response->resourceId !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderNumbers

Purchase numbers. There are many ways to purchase a number. Set either 'tollFreeCount' or 'localCount' along with some querying fields to purchase numbers by bulk query. Set the list of numbers to purchase by list. Available numbers will be purchased using CallFire credits owned by the user. Make sure the account has enough credits before trying to purchase

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderNumbersRequest;
use \OpenAPI\OpenAPI\Models\Shared\NumberPurchaseRequest;
use \OpenAPI\OpenAPI\Models\Operations\OrderNumbersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderNumbersRequest();
    $request->numberPurchaseRequest = new NumberPurchaseRequest();
    $request->numberPurchaseRequest->city = 'Gloverbury';
    $request->numberPurchaseRequest->localCount = 410492;
    $request->numberPurchaseRequest->numbers = [
        'vel',
    ];
    $request->numberPurchaseRequest->prefix = 'possimus';
    $request->numberPurchaseRequest->promo = 'magnam';
    $request->numberPurchaseRequest->state = 'ratione';
    $request->numberPurchaseRequest->tollFreeCount = 401132;
    $request->numberPurchaseRequest->zipcode = '12904-8593';
    $request->fields = 'sapiente';

    $requestSecurity = new OrderNumbersSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->orders->orderNumbers($request, $requestSecurity);

    if ($response->resourceId !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
