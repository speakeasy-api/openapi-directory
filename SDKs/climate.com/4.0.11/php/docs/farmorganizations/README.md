# farmOrganizations

## Overview

Farm organization data endpoints.

### Available Operations

* [fetchFarmOrganizationByTypeAndId](#fetchfarmorganizationbytypeandid) - Retrieve a specific farm organization by organization type and ID

## fetchFarmOrganizationByTypeAndId

Retrieve a given **farm organization** by organization type and ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchFarmOrganizationByTypeAndIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\FarmOrganizationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\FetchFarmOrganizationByTypeAndIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchFarmOrganizationByTypeAndIdRequest();
    $request->farmOrganizationId = 'ae395efb-9ba8-48f3-a669-97074ba4469b';
    $request->farmOrganizationType = FarmOrganizationTypeEnum::FARM;

    $requestSecurity = new FetchFarmOrganizationByTypeAndIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->farmOrganizations->fetchFarmOrganizationByTypeAndId($request, $requestSecurity);

    if ($response->farmOrganization !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
