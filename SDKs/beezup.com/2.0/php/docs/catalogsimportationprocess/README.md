# catalogsImportationProcess

### Available Operations

* [importationCancel](#importationcancel) - Cancel importation
* [importationCommit](#importationcommit) - Commit Importation
* [importationCommitColumns](#importationcommitcolumns) - Commit columns
* [importationConfigureRemainingCatalogColumns](#importationconfigureremainingcatalogcolumns) - Configure remaining catalog columns
* [importationGetImportationMonitoring](#importationgetimportationmonitoring) - Get the importation status
* [importationGetProductsReport](#importationgetproductsreport) - Importation Get Products Report
* [importationGetReport](#importationgetreport) - Importation Get Report
* [importationGetReportings](#importationgetreportings) - Get the latest catalog importation reporting
* [importationGetReportingsAllStores](#importationgetreportingsallstores) - Get the latest catalog importation reporting for all your stores
* [importationStartManualUpdate](#importationstartmanualupdate) - Start Manual Import
* [importationTechnicalProgression](#importationtechnicalprogression) - Get technical progression

## importationCancel

Cancel importation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImportationCancelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportationCancelRequest();
    $request->executionId = 'necessitatibus';
    $request->storeId = 'sint';

    $response = $sdk->catalogsImportationProcess->importationCancel($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importationCommit

Commit Importation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImportationCommitRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportationCommitRequest();
    $request->executionId = 'officia';
    $request->storeId = 'dolor';

    $response = $sdk->catalogsImportationProcess->importationCommit($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importationCommitColumns

Commit columns

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImportationCommitColumnsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportationCommitColumnsRequest();
    $request->executionId = 'debitis';
    $request->storeId = 'a';

    $response = $sdk->catalogsImportationProcess->importationCommitColumns($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importationConfigureRemainingCatalogColumns

This operation should be used after you have mapped the required BeezUP Columns

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImportationConfigureRemainingCatalogColumnsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportationConfigureRemainingCatalogColumnsRequest();
    $request->executionId = 'dolorum';
    $request->storeId = 'in';

    $response = $sdk->catalogsImportationProcess->importationConfigureRemainingCatalogColumns($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importationGetImportationMonitoring

Get the importation status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImportationGetImportationMonitoringRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportationGetImportationMonitoringRequest();
    $request->executionId = 'in';
    $request->storeId = 'illum';

    $response = $sdk->catalogsImportationProcess->importationGetImportationMonitoring($request);

    if ($response->importationMonitoring !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importationGetProductsReport

Importation Get Products Report

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImportationGetProductsReportRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetImportationProductsReportRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetImportationProductsReportRequestErrorCode;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportationGetProductsReportRequest();
    $request->executionId = 'maiores';
    $request->getImportationProductsReportRequest = new GetImportationProductsReportRequest();
    $request->getImportationProductsReportRequest->ean = 'rerum';
    $request->getImportationProductsReportRequest->errorCodes = [
        new GetImportationProductsReportRequestErrorCode(),
    ];
    $request->getImportationProductsReportRequest->mpn = 'magnam';
    $request->getImportationProductsReportRequest->pageNumber = 1;
    $request->getImportationProductsReportRequest->pageSize = 100;
    $request->getImportationProductsReportRequest->sku = 'cumque';
    $request->getImportationProductsReportRequest->title = 'Dr.';
    $request->storeId = 'ea';

    $response = $sdk->catalogsImportationProcess->importationGetProductsReport($request);

    if ($response->getImportationProductsReportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importationGetReport

Importation Get Report

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImportationGetReportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportationGetReportRequest();
    $request->executionId = 'aliquid';
    $request->storeId = 'laborum';

    $response = $sdk->catalogsImportationProcess->importationGetReport($request);

    if ($response->getImportationReportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importationGetReportings

Get the latest catalog importation reporting

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImportationGetReportingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportationGetReportingsRequest();
    $request->storeId = 'accusamus';

    $response = $sdk->catalogsImportationProcess->importationGetReportings($request);

    if ($response->importationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importationGetReportingsAllStores

Get the latest catalog importation reporting for all your stores

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->catalogsImportationProcess->importationGetReportingsAllStores();

    if ($response->importationsPerStoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importationStartManualUpdate

Start Manual Import

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImportationStartManualUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartManualImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\DuplicateProductValueConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CompareOptionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\DuplicateProductValueStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\InputConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InputFileConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InputFileFetchConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CompressionFormatStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\Credential;
use \OpenAPI\OpenAPI\Models\Shared\DownloadCatalogStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\InputFileReadConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InputFileReadCsvConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\FileFormatStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\InputFileReadXmlConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportationStartManualUpdateRequest();
    $request->startManualImportRequest = new StartManualImportRequest();
    $request->startManualImportRequest->duplicateProductSkuConfiguration = new DuplicateProductValueConfiguration();
    $request->startManualImportRequest->duplicateProductSkuConfiguration->compareOptions = CompareOptionsEnum::IGNORE_CASE;
    $request->startManualImportRequest->duplicateProductSkuConfiguration->strategy = DuplicateProductValueStrategyEnum::KEEP_FIRST_DUPLICATE_PRODUCT_ONLY;
    $request->startManualImportRequest->input = new InputConfiguration();
    $request->startManualImportRequest->input->files = [
        new InputFileConfiguration(),
    ];
    $request->startManualImportRequest->input->transformFileUrl = 'http://beezupblob.com/Mytransformation.xslt';
    $request->storeId = 'occaecati';

    $response = $sdk->catalogsImportationProcess->importationStartManualUpdate($request);

    if ($response->linksImportationGetImportationMonitoringLink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importationTechnicalProgression

Get technical progression

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImportationTechnicalProgressionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportationTechnicalProgressionRequest();
    $request->executionId = 'enim';
    $request->storeId = 'accusamus';

    $response = $sdk->catalogsImportationProcess->importationTechnicalProgression($request);

    if ($response->importationTechnicalProgression !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
