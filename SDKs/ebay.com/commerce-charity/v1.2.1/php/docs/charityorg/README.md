# charityOrg

### Available Operations

* [getCharityOrg](#getcharityorg) - This call is used to retrieve detailed information about supported charitable organizations. It allows users to retrieve the details for a specific charitable organization using its charity organization ID.
* [getCharityOrgs](#getcharityorgs) - This call is used to search for supported charitable organizations. It allows users to search for a specific charitable organization, or for multiple charitable organizations, from a particular charitable domain and/or geographical region, or by using search criteria.<br /><br />The call returns paginated search results containing the charitable organizations that match the specified criteria.

## getCharityOrg

This call is used to retrieve detailed information about supported charitable organizations. It allows users to retrieve the details for a specific charitable organization using its charity organization ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCharityOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCharityOrgSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCharityOrgRequest();
    $request->xEbayCMarketplaceId = 'distinctio';
    $request->charityOrgId = 'quibusdam';

    $requestSecurity = new GetCharityOrgSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->charityOrg->getCharityOrg($request, $requestSecurity);

    if ($response->charityOrg !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCharityOrgs

This call is used to search for supported charitable organizations. It allows users to search for a specific charitable organization, or for multiple charitable organizations, from a particular charitable domain and/or geographical region, or by using search criteria.<br /><br />The call returns paginated search results containing the charitable organizations that match the specified criteria.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCharityOrgsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCharityOrgsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCharityOrgsRequest();
    $request->xEbayCMarketplaceId = 'unde';
    $request->limit = 'nulla';
    $request->offset = 'corrupti';
    $request->q = 'illum';
    $request->registrationIds = 'vel';

    $requestSecurity = new GetCharityOrgsSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->charityOrg->getCharityOrgs($request, $requestSecurity);

    if ($response->charitySearchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
