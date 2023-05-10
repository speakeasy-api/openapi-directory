# currency

### Available Operations

* [getConversionRate](#getconversionrate) - Get currencies exchange rate.

## getConversionRate

Return with the exchange value of given currencies.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConversionRateRequest;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConversionRateRequest();
    $request->from = CurrencyEnum::SEK;
    $request->to = CurrencyEnum::USD;

    $response = $sdk->currency->getConversionRate($request);

    if ($response->conversationRate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
