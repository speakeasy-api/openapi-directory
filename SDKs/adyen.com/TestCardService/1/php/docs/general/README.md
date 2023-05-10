# general

### Available Operations

* [postCreateTestCardRanges](#postcreatetestcardranges) - Creates one or more test card ranges.

## postCreateTestCardRanges

Creates one or more test card ranges.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateTestCardRangesRequest;
use \OpenAPI\OpenAPI\Models\Shared\TestCardRange;
use \OpenAPI\OpenAPI\Models\Shared\AvsAddress;
use \OpenAPI\OpenAPI\Models\Shared\TestCardRangeExpiryMonthEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestCardRangeThreeDDirectoryServerResponseEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostCreateTestCardRangesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTestCardRangesRequest();
    $request->accountCode = 'quibusdam';
    $request->accountTypeCode = 'unde';
    $request->testCardRanges = [
        new TestCardRange(),
        new TestCardRange(),
        new TestCardRange(),
        new TestCardRange(),
    ];

    $requestSecurity = new PostCreateTestCardRangesSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postCreateTestCardRanges($request, $requestSecurity);

    if ($response->createTestCardRangesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
