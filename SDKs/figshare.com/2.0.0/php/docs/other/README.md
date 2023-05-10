# other

### Available Operations

* [categoriesList](#categorieslist) - Public Categories
* [fileDownload](#filedownload) - Public File Download
* [itemTypesList](#itemtypeslist) - Item Types
* [licensesList](#licenseslist) - Public Licenses
* [privateAccount](#privateaccount) - Private Account information
* [privateFundingSearch](#privatefundingsearch) - Search Funding
* [privateLicensesList](#privatelicenseslist) - Private Account Licenses

## categoriesList

Returns a list of public categories

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->other->categoriesList();

    if ($response->categories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fileDownload

Starts the download of a file

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FileDownloadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FileDownloadRequest();
    $request->fileId = 681359;

    $response = $sdk->other->fileDownload($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## itemTypesList

Returns the list of Item Types of the requested group. If no user is authenticated, returns the item types available for Figshare.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ItemTypesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\ItemTypesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ItemTypesListRequest();
    $request->groupId = 259422;

    $requestSecurity = new ItemTypesListSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->other->itemTypesList($request, $requestSecurity);

    if ($response->itemTypes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## licensesList

Returns a list of public licenses

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->other->licensesList();

    if ($response->licenses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateAccount

Account information for token/personal token

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateAccountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new PrivateAccountSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->other->privateAccount($requestSecurity);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateFundingSearch

Search for fundings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\FundingSearch;
use \OpenAPI\OpenAPI\Models\Operations\PrivateFundingSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FundingSearch();
    $request->searchFor = 'eos';

    $requestSecurity = new PrivateFundingSearchSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->other->privateFundingSearch($request, $requestSecurity);

    if ($response->fundingInformations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateLicensesList

This is a private endpoint that requires OAuth. It will return a list with figshare public licenses AND licenses defined for account's institution.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateLicensesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new PrivateLicensesListSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->other->privateLicensesList($requestSecurity);

    if ($response->licenses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
