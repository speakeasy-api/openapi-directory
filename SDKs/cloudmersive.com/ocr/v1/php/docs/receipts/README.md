# receipts

### Available Operations

* [~~receiptsPhotoToCSV~~](#receiptsphototocsv) - Convert a photo of a receipt into a CSV file containing structured information from the receipt :warning: **Deprecated**

## ~~receiptsPhotoToCSV~~

Leverage Deep Learning to automatically turn a photo of a receipt into a CSV file containing the structured information from the receipt.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReceiptsPhotoToCSVRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReceiptsPhotoToCSVRequestBodyImageFile;
use \OpenAPI\OpenAPI\Models\Operations\ReceiptsPhotoToCSVSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReceiptsPhotoToCSVRequestBody();
    $request->imageFile = new ReceiptsPhotoToCSVRequestBodyImageFile();
    $request->imageFile->content = 'aspernatur';
    $request->imageFile->imageFile = 'perferendis';

    $requestSecurity = new ReceiptsPhotoToCSVSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->receipts->receiptsPhotoToCSV($request, $requestSecurity);

    if ($response->receiptsPhotoToCSV200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
