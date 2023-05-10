# company

### Available Operations

* [companySearchRead](#companysearchread) - Return company search result

## companySearchRead

Return company search result

### Response Class (Status 200)

* __{company_name}__: Used as a key word to search companies,

For more details on how companies are listed [see here][ref].
[ref]: https://etmdb.com/en/company-list/-updated_date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CompanySearchReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompanySearchReadRequest();
    $request->companyName = 'aspernatur';

    $response = $sdk->company->companySearchRead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
