# companySetupConfig

### Available Operations

* [companySetupConfigGet](#companysetupconfigget) - Returns the company configuration settings.
* [companySetupConfigGetCompanyOptions](#companysetupconfiggetcompanyoptions) - Returns the company option setting.
* [companySetupConfigGetFinancialYear](#companysetupconfiggetfinancialyear) - Returns the financial year.

## companySetupConfigGet

Returns the company configuration settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->companySetupConfig->companySetupConfigGet();

    if ($response->companySetupConfigViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## companySetupConfigGetCompanyOptions

Returns the company option setting.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->companySetupConfig->companySetupConfigGetCompanyOptions();

    if ($response->companyOptionDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## companySetupConfigGetFinancialYear

Returns the financial year.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->companySetupConfig->companySetupConfigGetFinancialYear();

    if ($response->financialYearDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
