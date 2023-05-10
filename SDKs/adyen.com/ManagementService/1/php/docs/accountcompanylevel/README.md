# accountCompanyLevel

### Available Operations

* [getCompanies](#getcompanies) - Get a list of company accounts
* [getCompaniesCompanyId](#getcompaniescompanyid) - Get a company account
* [getCompaniesCompanyIdMerchants](#getcompaniescompanyidmerchants) - Get a list of merchant accounts

## getCompanies

Returns the list of company accounts that your API credential has access to. The list is grouped into pages as defined by the query parameters.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Account read

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompaniesRequest();
    $request->pageNumber = 456150;
    $request->pageSize = 216550;

    $requestSecurity = new GetCompaniesSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->accountCompanyLevel->getCompanies($request, $requestSecurity);

    if ($response->listCompanyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCompaniesCompanyId

Returns the company account specified in the path. Your API credential must have access to the company account. 

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Account read

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompaniesCompanyIdRequest();
    $request->companyId = 'excepturi';

    $requestSecurity = new GetCompaniesCompanyIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->accountCompanyLevel->getCompaniesCompanyId($request, $requestSecurity);

    if ($response->company !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCompaniesCompanyIdMerchants

Returns the list of merchant accounts under the company account specified in the path. The list only includes merchant accounts that your API credential has access to. The list is grouped into pages as defined by the query parameters. 

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Account read

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdMerchantsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdMerchantsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompaniesCompanyIdMerchantsRequest();
    $request->companyId = 'aspernatur';
    $request->pageNumber = 18789;
    $request->pageSize = 324141;

    $requestSecurity = new GetCompaniesCompanyIdMerchantsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->accountCompanyLevel->getCompaniesCompanyIdMerchants($request, $requestSecurity);

    if ($response->listMerchantResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
