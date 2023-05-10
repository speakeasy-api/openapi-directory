# companySettings

### Available Operations

* [companySettingsGet](#companysettingsget) - Returns a list of company settings. Supports OData querying protocol.
Filtering is forbidden.

## companySettingsGet

Returns a list of company settings. Supports OData querying protocol.
Filtering is forbidden.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->companySettings->companySettingsGet();

    if ($response->pageResultCompanySettingDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
