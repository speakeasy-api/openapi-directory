# segmentQueryFilters

## Overview

Segment Query Filter Restv 2 Controller

### Available Operations

* [getSegmentQueryFiltersConfigUsingGET](#getsegmentqueryfiltersconfigusingget) - getSegmentQueryFiltersConfig
* [getSegmentQueryFiltersUsingGET](#getsegmentqueryfiltersusingget) - getSegmentQueryFilters
* [getSegmentQueryStandardFiltersUsingGET](#getsegmentquerystandardfiltersusingget) - getSegmentQueryStandardFilters
* [updateSegmentQueryFiltersConfigUsingPUT](#updatesegmentqueryfiltersconfigusingput) - updateSegmentQueryFiltersConfig

## getSegmentQueryFiltersConfigUsingGET

getSegmentQueryFiltersConfig

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETSegmentQueryFiltersConfigUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSegmentQueryFiltersConfigUsingGETRequest();
    $request->apiKey = 'illum';

    $response = $sdk->segmentQueryFilters->getSegmentQueryFiltersConfigUsingGET($request);

    if ($response->segmentQueryFilterConfigModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSegmentQueryFiltersUsingGET

getSegmentQueryFilters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETSegmentQueryFiltersUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSegmentQueryFiltersUsingGETRequest();
    $request->apiKey = 'pariatur';

    $response = $sdk->segmentQueryFilters->getSegmentQueryFiltersUsingGET($request);

    if ($response->segmentQueryFilterListModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSegmentQueryStandardFiltersUsingGET

getSegmentQueryStandardFilters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETSegmentQueryStandardFiltersUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSegmentQueryStandardFiltersUsingGETRequest();
    $request->apiKey = 'maxime';

    $response = $sdk->segmentQueryFilters->getSegmentQueryStandardFiltersUsingGET($request);

    if ($response->segmentQueryFilterListModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSegmentQueryFiltersConfigUsingPUT

updateSegmentQueryFiltersConfig

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSegmentQueryFiltersConfigUsingPUTRequest;
use \OpenAPI\OpenAPI\Models\Shared\SegmentQueryFilterConfigModel;
use \OpenAPI\OpenAPI\Models\Shared\SegmentQueryFilterModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSegmentQueryFiltersConfigUsingPUTRequest();
    $request->segmentQueryFilterConfigModel = new SegmentQueryFilterConfigModel();
    $request->segmentQueryFilterConfigModel->customFilters = [
        new SegmentQueryFilterModel(),
        new SegmentQueryFilterModel(),
    ];
    $request->segmentQueryFilterConfigModel->hiddenFilters = [
        'odit',
        'ea',
        'accusantium',
    ];
    $request->apiKey = 'ab';

    $response = $sdk->segmentQueryFilters->updateSegmentQueryFiltersConfigUsingPUT($request);

    if ($response->segmentQueryFilterConfigModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
