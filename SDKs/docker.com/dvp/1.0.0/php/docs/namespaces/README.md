# namespaces

### Available Operations

* [getNamespaceDataByTimespan](#getnamespacedatabytimespan) - Get namespace data for timespan
* [getNamespaceTimespanMetadata](#getnamespacetimespanmetadata) - Get namespace metadata for timespan
* [getNamespaceTimespans](#getnamespacetimespans) - Get timespans with data
* [getNamespaceYears](#getnamespaceyears) - Get years with data

## getNamespaceDataByTimespan

Gets a list of URLs that can be used to download the pull data for the given namespace and timespan

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNamespaceDataByTimespanRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataviewTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimespanTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNamespaceDataByTimespanRequest();
    $request->dataview = DataviewTypeEnum::SUMMARY;
    $request->namespace = 'distinctio';
    $request->timespan = 844266;
    $request->timespantype = TimespanTypeEnum::WEEKS;
    $request->year = 857946;

    $response = $sdk->namespaces->getNamespaceDataByTimespan($request);

    if ($response->responseData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNamespaceTimespanMetadata

Gets info about data for the given namespace and timespan

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNamespaceTimespanMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\TimespanTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNamespaceTimespanMetadataRequest();
    $request->namespace = 'corrupti';
    $request->timespan = 847252;
    $request->timespantype = TimespanTypeEnum::MONTHS;
    $request->year = 623564;

    $response = $sdk->namespaces->getNamespaceTimespanMetadata($request);

    if ($response->timespanModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNamespaceTimespans

Gets a list of timespans of the given type that have data for the given namespace and year

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNamespaceTimespansRequest;
use \OpenAPI\OpenAPI\Models\Shared\TimespanTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNamespaceTimespansRequest();
    $request->namespace = 'deserunt';
    $request->timespantype = TimespanTypeEnum::MONTHS;
    $request->year = 437587;

    $response = $sdk->namespaces->getNamespaceTimespans($request);

    if ($response->timespanData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNamespaceYears

Gets a list of years that have data for the given namespace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNamespaceYearsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNamespaceYearsRequest();
    $request->namespace = 'magnam';

    $response = $sdk->namespaces->getNamespaceYears($request);

    if ($response->yearData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
