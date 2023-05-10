# authors

### Available Operations

* [privateAuthorDetails](#privateauthordetails) - Author details
* [privateAuthorsSearch](#privateauthorssearch) - Search Authors

## privateAuthorDetails

View author details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateAuthorDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateAuthorDetailsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateAuthorDetailsRequest();
    $request->authorId = 764912;

    $requestSecurity = new PrivateAuthorDetailsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->authors->privateAuthorDetails($request, $requestSecurity);

    if ($response->authorComplete !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateAuthorsSearch

Search for authors

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\PrivateAuthorsSearch;
use \OpenAPI\OpenAPI\Models\Shared\PrivateAuthorsSearchOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\PrivateAuthorsSearchOrderDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivateAuthorsSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateAuthorsSearch();
    $request->groupId = 359978;
    $request->institutionId = 1;
    $request->isActive = false;
    $request->isPublic = false;
    $request->limit = 10;
    $request->offset = 944124;
    $request->orcid = 'libero';
    $request->order = PrivateAuthorsSearchOrderEnum::PUBLISHED_DATE;
    $request->orderDirection = PrivateAuthorsSearchOrderDirectionEnum::DESC;
    $request->page = 1;
    $request->pageSize = 10;
    $request->searchFor = 'figshare';

    $requestSecurity = new PrivateAuthorsSearchSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->authors->privateAuthorsSearch($request, $requestSecurity);

    if ($response->authors !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
