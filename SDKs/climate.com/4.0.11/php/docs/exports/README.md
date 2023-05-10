# exports

## Overview

General data export endpoints.

### Available Operations

* [fetchExportContentsById](#fetchexportcontentsbyid) - Retrieve the binary contents of a processed export request.
* [fetchExportStatusById](#fetchexportstatusbyid) - Retrieve the status of an Export.
* [postExport](#postexport) - Initiate a new export request.

## fetchExportContentsById

Downloads larger than `5MiB` (`5242880 bytes`) in size must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB` (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchExportContentsByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchExportContentsByIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchExportContentsByIdRequest();
    $request->accept = 'accusamus';
    $request->range = 'commodi';
    $request->exportId = 'e13b99d4-88e1-4e91-a450-ad2abd442698';

    $requestSecurity = new FetchExportContentsByIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->exports->fetchExportContentsById($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchExportStatusById

Check the status of an **Export** by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchExportStatusByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchExportStatusByIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchExportStatusByIdRequest();
    $request->exportId = '02d502a9-4bb4-4f63-8969-e9a3efa77dfb';

    $requestSecurity = new FetchExportStatusByIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->exports->fetchExportStatusById($request, $requestSecurity);

    if ($response->exportStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postExport

Step one in requesting a data product. The method will return an **Export** ID which the caller will use in subsequent `GET` requests.
The following `contentTypes` may be requested:
  * __application/vnd.climate.acrsi.geojson__ (Beta)
     Exports the planting activities accessible by the authenticated user and optionally filtered by resource owner
     as a [GeoJSON Feature Collection](https://tools.ietf.org/html/rfc7946#page-12).

     The export request definition must contain the following properties:
       * plantingStartDate
       * plantingEndDate
       * resourceOwnerId

     Requires `exports:read` and `plantingActivitySummary:read` scope.
  
  * __application/vnd.climate.harvest.geojson__
     Exports the harvesting activities accessible by the authenticated user and optionally filtered by resource owner
     as a [GeoJSON Feature Collection](https://tools.ietf.org/html/rfc7946#page-12).

     The export request definition must contain the following properties:
       * harvestStartDate
       * harvestEndDate
       * resourceOwnerId

     Requires `exports:read` and `plantingActivitySummary:read` scope.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Export;
use \OpenAPI\OpenAPI\Models\Shared\ExportContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostExportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Export();
    $request->contentType = ExportContentTypeEnum::APPLICATION_VND_CLIMATE_ACRSI_GEOJSON;
    $request->definition = [
        'cumque' => 'facere',
        'ea' => 'aliquid',
    ];

    $requestSecurity = new PostExportSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->exports->postExport($request, $requestSecurity);

    if ($response->createdExport !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
