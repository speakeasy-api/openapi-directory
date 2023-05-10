# analyticsReports

### Available Operations

* [deleteReportFilter](#deletereportfilter) - Delete the report filter
* [getReportFilter](#getreportfilter) - Get the report filter description
* [getReportFilters](#getreportfilters) - Get report filter list for the given store
* [saveReportFilter](#savereportfilter) - Save the report filter

## deleteReportFilter

Delete the report filter

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReportFilterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteReportFilterRequest();
    $request->reportFilterId = 'porro';
    $request->storeId = 'dolorum';

    $response = $sdk->analyticsReports->deleteReportFilter($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReportFilter

Get the report filter description

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetReportFilterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReportFilterRequest();
    $request->reportFilterId = 'dicta';
    $request->storeId = 'nam';

    $response = $sdk->analyticsReports->getReportFilter($request);

    if ($response->reportFilter !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReportFilters

Get report filter list for the given store

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetReportFiltersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReportFiltersRequest();
    $request->storeId = 'officia';

    $response = $sdk->analyticsReports->getReportFilters($request);

    if ($response->reportFilterList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## saveReportFilter

Save the report filter

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SaveReportFilterRequest;
use \OpenAPI\OpenAPI\Models\Shared\SaveReportFilterRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReportFilterParameters;
use \OpenAPI\OpenAPI\Models\Shared\ReportAdvancedFilters;
use \OpenAPI\OpenAPI\Models\Shared\LinkClickToOrderTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MarginTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceIndicatorFormula;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceIndicatorFormulaParameterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceIndicatorFormulaOperatorNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\AnalyticsProductColumnFilters;
use \OpenAPI\OpenAPI\Models\Shared\AnalyticsProductColumnFilter;
use \OpenAPI\OpenAPI\Models\Shared\BeezUPCommonCatalogCategoryFilter;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceIndicatorFilter;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceIndicatorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportFilterPeriodTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProductStateFilterEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SaveReportFilterRequest();
    $request->reportFilterId = 'occaecati';
    $request->saveReportFilterRequest = new SaveReportFilterRequest();
    $request->saveReportFilterRequest->parameters = new ReportFilterParameters();
    $request->saveReportFilterRequest->parameters->advancedFilters = new ReportAdvancedFilters();
    $request->saveReportFilterRequest->parameters->advancedFilters->globalMarginPercent = 10;
    $request->saveReportFilterRequest->parameters->advancedFilters->linkClickToOrderMaxDay = 5;
    $request->saveReportFilterRequest->parameters->advancedFilters->linkClickToOrderType = LinkClickToOrderTypeEnum::ON_CLICK_DATE;
    $request->saveReportFilterRequest->parameters->advancedFilters->marginType = MarginTypeEnum::GLOBAL;
    $request->saveReportFilterRequest->parameters->advancedFilters->onlyDirectSales = true;
    $request->saveReportFilterRequest->parameters->advancedFilters->onlyPaymentValidatedOrders = true;
    $request->saveReportFilterRequest->parameters->advancedFilters->performanceIndicatorFormula = new PerformanceIndicatorFormula();
    $request->saveReportFilterRequest->parameters->advancedFilters->performanceIndicatorFormula->firstParameter = PerformanceIndicatorFormulaParameterTypeEnum::COST;
    $request->saveReportFilterRequest->parameters->advancedFilters->performanceIndicatorFormula->operatorName = PerformanceIndicatorFormulaOperatorNameEnum::MULTIPLY;
    $request->saveReportFilterRequest->parameters->advancedFilters->performanceIndicatorFormula->secondParameter = PerformanceIndicatorFormulaParameterTypeEnum::COST;
    $request->saveReportFilterRequest->parameters->advancedFilters->performanceIndicatorFormula->thirdParameter = 100;
    $request->saveReportFilterRequest->parameters->analyticsProductColumnFilters = new AnalyticsProductColumnFilters();
    $request->saveReportFilterRequest->parameters->analyticsProductColumnFilters->additionalAnalyticsProductColumnFilters = [
        'deleniti' => new AnalyticsProductColumnFilter(),
    ];
    $request->saveReportFilterRequest->parameters->analyticsProductColumnFilters->sku = 'M1234';
    $request->saveReportFilterRequest->parameters->analyticsProductColumnFilters->title = 'Refrigérateur';
    $request->saveReportFilterRequest->parameters->beginPeriodUtcDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2006-11-20T00:00:00Z');
    $request->saveReportFilterRequest->parameters->categoryFilter = new BeezUPCommonCatalogCategoryFilter();
    $request->saveReportFilterRequest->parameters->categoryFilter->categoryPath = [
        'optio',
        'totam',
        'beatae',
        'commodi',
    ];
    $request->saveReportFilterRequest->parameters->channelId = '2dc136a7-0d3d-4cc9-a825-a28a42c53e28';
    $request->saveReportFilterRequest->parameters->endPeriodUtcDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2006-12-20T00:00:00Z');
    $request->saveReportFilterRequest->parameters->performanceIndicatorFilters = [
        new PerformanceIndicatorFilter(),
        new PerformanceIndicatorFilter(),
    ];
    $request->saveReportFilterRequest->parameters->periodType = ReportFilterPeriodTypeEnum::LAST7_DAYS;
    $request->saveReportFilterRequest->parameters->productColumnsToDisplay = [
        'bea7c21e-948b-4ac3-9ffd-4396e62c4163',
    ];
    $request->saveReportFilterRequest->parameters->productState = ProductStateFilterEnum::ALL;
    $request->saveReportFilterRequest->parameters->reportType = ReportTypeEnum::BY_PRODUCT;
    $request->saveReportFilterRequest->reportFilterName = 'My report filter';
    $request->storeId = 'impedit';

    $response = $sdk->analyticsReports->saveReportFilter($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
