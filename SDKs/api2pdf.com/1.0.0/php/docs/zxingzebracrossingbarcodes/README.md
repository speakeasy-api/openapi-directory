# zxingZebraCrossingBarCodes

### Available Operations

* [zebraGET](#zebraget) - Generate bar codes and QR codes with ZXING.

## zebraGET

See full list of options and documentation [here](https://www.api2pdf.com/documentation/advanced-options-zxing-zebra-crossing-barcodes/)
### Authorize via Query String Parameter
**apikey=YOUR-API-KEY**
### Example
``` https://v2018.api2pdf.com/zebra?format={format}&apikey={YourApiKey}&value={YourText} ``` 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ZebraGETRequest;
use \OpenAPI\OpenAPI\Models\Operations\ZebraGETSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ZebraGETRequest();
    $request->format = 'corrupti';
    $request->height = 847252;
    $request->showlabel = false;
    $request->value = 'vel';
    $request->width = 623564;

    $requestSecurity = new ZebraGETSecurity();
    $requestSecurity->queryApiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->zxingZebraCrossingBarCodes->zebraGET($request, $requestSecurity);

    if ($response->zebraGET200ImagePngBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
