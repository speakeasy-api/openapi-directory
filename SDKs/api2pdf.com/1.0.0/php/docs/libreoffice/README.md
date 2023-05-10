# libreOffice

### Available Operations

* [libreConvertPost](#libreconvertpost) - Convert office document or image to PDF

## libreConvertPost

Convert an office document (Word, Excel, Powerpoint) or an image (jpg, gif, png) to a PDF using LibreOffice on AWS Lambda.
### Authorize via Header of Request
**Authorization: YOUR-API-KEY**

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\LibreOfficeConvertRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LibreOfficeConvertRequest();
    $request->fileName = 'test.pdf';
    $request->inlinePdf = true;
    $request->url = 'https://www.api2pdf.com/wp-content/themes/api2pdf/assets/samples/sample-word-doc.docx';

    $response = $sdk->libreOffice->libreConvertPost($request);

    if ($response->apiResponseSuccess !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
