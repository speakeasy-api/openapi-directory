# companyInfo

### Available Operations

* [companyInfoOne](#companyinfoone) - Get company info

## companyInfoOne

Get company info

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CompanyInfoOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\CompanyInfoOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompanyInfoOneRequest();
    $request->fields = 'voluptatibus';
    $request->raw = false;
    $request->xApideckAppId = 'vero';
    $request->xApideckConsumerId = 'nihil';
    $request->xApideckServiceId = 'praesentium';

    $requestSecurity = new CompanyInfoOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->companyInfo->companyInfoOne($request, $requestSecurity);

    if ($response->getCompanyInfoResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
