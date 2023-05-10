# blockedNumbers

### Available Operations

* [getBlockedNumbers](#getblockednumbers) - List blocked numbers
* [postBlockedNumbers](#postblockednumbers) - Create a blocked number

## getBlockedNumbers

List blocked numbers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBlockedNumbersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBlockedNumbersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBlockedNumbersRequest();
    $request->limit = 548814;
    $request->minId = 592845;

    $requestSecurity = new GetBlockedNumbersSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->blockedNumbers->getBlockedNumbers($request, $requestSecurity);

    if ($response->blockedNumber !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postBlockedNumbers

Blocked numbers are phone numbers to which your account is not permitted to send messages.
The numbers can be created via this API, by a recipient replying with a STOP message to one
of your previous SENT messages, or by a BulkSMS administrator.

Sending a message to a blocked number will result in the message being assigned a status of
`FAILED.BLOCKED`. Messages sent to blocked numbers are billed to your account.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostBlockedNumbersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        '44123456789',
        '44123456789',
        '44123456789',
    ]

    $requestSecurity = new PostBlockedNumbersSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->blockedNumbers->postBlockedNumbers($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
