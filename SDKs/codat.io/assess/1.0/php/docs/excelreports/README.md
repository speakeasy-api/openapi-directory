# excelReports

## Overview

Downloadable reports

### Available Operations

* [~~downloadExcelReport~~](#downloadexcelreport) - Download generated excel report :warning: **Deprecated**
* [generateExcelReport](#generateexcelreport) - Generate an Excel report
* [getAccountingMarketingMetrics](#getaccountingmarketingmetrics) - Get the marketing metrics from an accounting source for a given company.
* [getExcelReport](#getexcelreport) - Download generated excel report
* [getExcelReportGenerationStatus](#getexcelreportgenerationstatus) - Get status of Excel report

## ~~downloadExcelReport~~

Download the previously generated Excel report to a local drive.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DownloadExcelReportRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExcelReportTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DownloadExcelReportRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->reportType = ExcelReportTypeEnum::ENHANCED_FINANCIALS;

    $response = $sdk->excelReports->downloadExcelReport($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## generateExcelReport

Generate an Excel report which can subsequently be downloaded.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GenerateExcelReportRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExcelReportTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenerateExcelReportRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->reportType = ExcelReportTypeEnum::AUDIT;

    $response = $sdk->excelReports->generateExcelReport($request);

    if ($response->excelStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountingMarketingMetrics

Request an Excel report for download.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountingMarketingMetricsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PeriodUnitEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountingMarketingMetricsRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->connectionId = '2e9d2c44-f675-40ba-8049-353bfcb5e171';
    $request->includeDisplayNames = false;
    $request->numberOfPeriods = 437587;
    $request->periodLength = 297534;
    $request->periodUnit = PeriodUnitEnum::YEAR;
    $request->reportDate = '29-09-2020';
    $request->showInputValues = false;

    $response = $sdk->excelReports->getAccountingMarketingMetrics($request);

    if ($response->report !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExcelReport

Download the previously generated Excel report to a local drive.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetExcelReportRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExcelReportTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetExcelReportRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->reportType = ExcelReportTypeEnum::AUDIT;

    $response = $sdk->excelReports->getExcelReport($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExcelReportGenerationStatus

Returns the status of the latest report requested.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetExcelReportGenerationStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExcelReportTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetExcelReportGenerationStatusRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->reportType = ExcelReportTypeEnum::ENHANCED_FINANCIALS;

    $response = $sdk->excelReports->getExcelReportGenerationStatus($request);

    if ($response->excelStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
