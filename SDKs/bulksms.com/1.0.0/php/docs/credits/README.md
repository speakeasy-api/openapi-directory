# credits

### Available Operations

* [postCreditTransfer](#postcredittransfer) - Transfer credits to another account

## postCreditTransfer

Before you can use the transfer credits endpoint, the _credit-transfer facility_ must be activated for your account.  You can request activation from `support@bulksms.com`. 

The recipient must be an enabled account that uses the same currency as your account.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TransferEntry;
use \OpenAPI\OpenAPI\Models\Operations\PostCreditTransferSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferEntry();
    $request->commentOnFrom = 'Tranfer to Bobby';
    $request->commentOnTo = 'Tranfer from Danny';
    $request->credits = 2345;
    $request->toUserId = 2345;
    $request->toUsername = 'roboto';

    $requestSecurity = new PostCreditTransferSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->credits->postCreditTransfer($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
