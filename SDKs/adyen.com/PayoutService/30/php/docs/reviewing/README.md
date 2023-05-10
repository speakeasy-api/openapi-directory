# reviewing

### Available Operations

* [postConfirmThirdParty](#postconfirmthirdparty) - Confirm a payout
* [postDeclineThirdParty](#postdeclinethirdparty) - Cancel a payout

## postConfirmThirdParty

Confirms a previously submitted payout.

To cancel a payout, use the `/declineThirdParty` endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ModifyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostConfirmThirdPartySecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifyRequest();
    $request->additionalData = [
        'quibusdam' => 'sed',
        'saepe' => 'pariatur',
        'accusantium' => 'consequuntur',
        'praesentium' => 'natus',
    ];
    $request->merchantAccount = 'magni';
    $request->originalReference = 'sunt';

    $requestSecurity = new PostConfirmThirdPartySecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->reviewing->postConfirmThirdParty($request, $requestSecurity);

    if ($response->modifyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeclineThirdParty

Cancels a previously submitted payout.

To confirm and send a payout, use the `/confirmThirdParty` endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ModifyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostDeclineThirdPartySecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifyRequest();
    $request->additionalData = [
        'illum' => 'pariatur',
        'maxime' => 'ea',
        'excepturi' => 'odit',
        'ea' => 'accusantium',
    ];
    $request->merchantAccount = 'ab';
    $request->originalReference = 'maiores';

    $requestSecurity = new PostDeclineThirdPartySecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->reviewing->postDeclineThirdParty($request, $requestSecurity);

    if ($response->modifyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
