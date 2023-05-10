# configuration

## Overview

Companies sync configuration.

### Available Operations

* [getCompanyConfiguration](#getcompanyconfiguration) - Get company configuration
* [saveCompanyConfiguration](#savecompanyconfiguration) - Set company configuration

## getCompanyConfiguration

Gets a companies expense sync configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCompanyConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompanyConfigurationRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';

    $response = $sdk->configuration->getCompanyConfiguration($request);

    if ($response->companyConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## saveCompanyConfiguration

Sets a companies expense sync configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SaveCompanyConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CompanyConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\BankAccount;
use \OpenAPI\OpenAPI\Models\Shared\Customer;
use \OpenAPI\OpenAPI\Models\Shared\Supplier;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SaveCompanyConfigurationRequest();
    $request->companyConfiguration = new CompanyConfiguration();
    $request->companyConfiguration->bankAccount = new BankAccount();
    $request->companyConfiguration->bankAccount->id = '32';
    $request->companyConfiguration->customer = new Customer();
    $request->companyConfiguration->customer->id = '142';
    $request->companyConfiguration->supplier = new Supplier();
    $request->companyConfiguration->supplier->id = '124';
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';

    $response = $sdk->configuration->saveCompanyConfiguration($request);

    if ($response->companyConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
