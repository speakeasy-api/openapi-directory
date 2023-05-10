# analyticsStatistics

### Available Operations

* [getStoreReportByCategory](#getstorereportbycategory) - Get the report by category
* [getStoreReportByChannel](#getstorereportbychannel) - Get the report by channel
* [getStoreReportByDay](#getstorereportbyday) - Get the report by day for a StoreId
* [getStoreReportByDayPerStore](#getstorereportbydayperstore) - Get the report by day for a StoreId
* [getStoreReportByProduct](#getstorereportbyproduct) - Get the report by product

## getStoreReportByCategory

Get the report by category

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStoreReportByCategoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReportByCategoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReportAdvancedFilters;
use \OpenAPI\OpenAPI\Models\Shared\LinkClickToOrderTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MarginTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceIndicatorFormula;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceIndicatorFormulaParameterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceIndicatorFormulaOperatorNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\BeezUPCommonCatalogCategoryFilter;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceIndicatorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderByDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceIndicatorFilter;
use \OpenAPI\OpenAPI\Models\Shared\ReportFilterPeriodTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStoreReportByCategoryRequest();
    $request->reportByCategoryRequest = new ReportByCategoryRequest();
    $request->reportByCategoryRequest->advancedFilters = new ReportAdvancedFilters();
    $request->reportByCategoryRequest->advancedFilters->globalMarginPercent = 10;
    $request->reportByCategoryRequest->advancedFilters->linkClickToOrderMaxDay = 5;
    $request->reportByCategoryRequest->advancedFilters->linkClickToOrderType = LinkClickToOrderTypeEnum::ON_CLICK_DATE;
    $request->reportByCategoryRequest->advancedFilters->marginType = MarginTypeEnum::GLOBAL;
    $request->reportByCategoryRequest->advancedFilters->onlyDirectSales = true;
    $request->reportByCategoryRequest->advancedFilters->onlyPaymentValidatedOrders = true;
    $request->reportByCategoryRequest->advancedFilters->performanceIndicatorFormula = new PerformanceIndicatorFormula();
    $request->reportByCategoryRequest->advancedFilters->performanceIndicatorFormula->firstParameter = PerformanceIndicatorFormulaParameterTypeEnum::COST;
    $request->reportByCategoryRequest->advancedFilters->performanceIndicatorFormula->operatorName = PerformanceIndicatorFormulaOperatorNameEnum::MULTIPLY;
    $request->reportByCategoryRequest->advancedFilters->performanceIndicatorFormula->secondParameter = PerformanceIndicatorFormulaParameterTypeEnum::COST;
    $request->reportByCategoryRequest->advancedFilters->performanceIndicatorFormula->thirdParameter = 100;
    $request->reportByCategoryRequest->beginPeriodUtcDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2006-11-20T00:00:00Z');
    $request->reportByCategoryRequest->categoryFilter = new BeezUPCommonCatalogCategoryFilter();
    $request->reportByCategoryRequest->categoryFilter->categoryPath = [
        'ipsa',
    ];
    $request->reportByCategoryRequest->channelId = '2dc136a7-0d3d-4cc9-a825-a28a42c53e28';
    $request->reportByCategoryRequest->endPeriodUtcDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2006-12-20T00:00:00Z');
    $request->reportByCategoryRequest->orderBy = PerformanceIndicatorTypeEnum::COST;
    $request->reportByCategoryRequest->orderByDirection = OrderByDirectionEnum::ASCENDING;
    $request->reportByCategoryRequest->pageNumber = 1;
    $request->reportByCategoryRequest->pageSize = 100;
    $request->reportByCategoryRequest->performanceIndicatorFilters = [
        new PerformanceIndicatorFilter(),
        new PerformanceIndicatorFilter(),
        new PerformanceIndicatorFilter(),
        new PerformanceIndicatorFilter(),
    ];
    $request->reportByCategoryRequest->periodType = ReportFilterPeriodTypeEnum::LAST_MONTH;
    $request->storeId = 'mollitia';

    $response = $sdk->analyticsStatistics->getStoreReportByCategory($request);

    if ($response->reportByCategoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStoreReportByChannel

Get the report by channel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStoreReportByChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReportByChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReportAdvancedFilters;
use \OpenAPI\OpenAPI\Models\Shared\LinkClickToOrderTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MarginTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceIndicatorFormula;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceIndicatorFormulaParameterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceIndicatorFormulaOperatorNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\BeezUPCommonCatalogCategoryFilter;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceIndicatorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderByDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceIndicatorFilter;
use \OpenAPI\OpenAPI\Models\Shared\ReportFilterPeriodTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStoreReportByChannelRequest();
    $request->reportByChannelRequest = new ReportByChannelRequest();
    $request->reportByChannelRequest->advancedFilters = new ReportAdvancedFilters();
    $request->reportByChannelRequest->advancedFilters->globalMarginPercent = 10;
    $request->reportByChannelRequest->advancedFilters->linkClickToOrderMaxDay = 5;
    $request->reportByChannelRequest->advancedFilters->linkClickToOrderType = LinkClickToOrderTypeEnum::ON_CLICK_DATE;
    $request->reportByChannelRequest->advancedFilters->marginType = MarginTypeEnum::GLOBAL;
    $request->reportByChannelRequest->advancedFilters->onlyDirectSales = true;
    $request->reportByChannelRequest->advancedFilters->onlyPaymentValidatedOrders = true;
    $request->reportByChannelRequest->advancedFilters->performanceIndicatorFormula = new PerformanceIndicatorFormula();
    $request->reportByChannelRequest->advancedFilters->performanceIndicatorFormula->firstParameter = PerformanceIndicatorFormulaParameterTypeEnum::COST;
    $request->reportByChannelRequest->advancedFilters->performanceIndicatorFormula->operatorName = PerformanceIndicatorFormulaOperatorNameEnum::MULTIPLY;
    $request->reportByChannelRequest->advancedFilters->performanceIndicatorFormula->secondParameter = PerformanceIndicatorFormulaParameterTypeEnum::COST;
    $request->reportByChannelRequest->advancedFilters->performanceIndicatorFormula->thirdParameter = 100;
    $request->reportByChannelRequest->beginPeriodUtcDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2006-11-20T00:00:00Z');
    $request->reportByChannelRequest->categoryFilter = new BeezUPCommonCatalogCategoryFilter();
    $request->reportByChannelRequest->categoryFilter->categoryPath = [
        'dolores',
        'dolorem',
        'corporis',
    ];
    $request->reportByChannelRequest->channelId = '2dc136a7-0d3d-4cc9-a825-a28a42c53e28';
    $request->reportByChannelRequest->endPeriodUtcDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2006-12-20T00:00:00Z');
    $request->reportByChannelRequest->orderBy = PerformanceIndicatorTypeEnum::COST;
    $request->reportByChannelRequest->orderByDirection = OrderByDirectionEnum::ASCENDING;
    $request->reportByChannelRequest->pageNumber = 1;
    $request->reportByChannelRequest->pageSize = 100;
    $request->reportByChannelRequest->performanceIndicatorFilters = [
        new PerformanceIndicatorFilter(),
    ];
    $request->reportByChannelRequest->periodType = ReportFilterPeriodTypeEnum::LAST60_DAYS;
    $request->storeId = 'enim';

    $response = $sdk->analyticsStatistics->getStoreReportByChannel($request);

    if ($response->reportByChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStoreReportByDay

Get the report by day for a StoreId

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStoreReportByDayRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReportByDayRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReportAdvancedFilters;
use \OpenAPI\OpenAPI\Models\Shared\LinkClickToOrderTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MarginTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceIndicatorFormula;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceIndicatorFormulaParameterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceIndicatorFormulaOperatorNameEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStoreReportByDayRequest();
    $request->reportByDayRequest = new ReportByDayRequest();
    $request->reportByDayRequest->advancedFilters = new ReportAdvancedFilters();
    $request->reportByDayRequest->advancedFilters->globalMarginPercent = 10;
    $request->reportByDayRequest->advancedFilters->linkClickToOrderMaxDay = 5;
    $request->reportByDayRequest->advancedFilters->linkClickToOrderType = LinkClickToOrderTypeEnum::ON_CLICK_DATE;
    $request->reportByDayRequest->advancedFilters->marginType = MarginTypeEnum::GLOBAL;
    $request->reportByDayRequest->advancedFilters->onlyDirectSales = true;
    $request->reportByDayRequest->advancedFilters->onlyPaymentValidatedOrders = true;
    $request->reportByDayRequest->advancedFilters->performanceIndicatorFormula = new PerformanceIndicatorFormula();
    $request->reportByDayRequest->advancedFilters->performanceIndicatorFormula->firstParameter = PerformanceIndicatorFormulaParameterTypeEnum::COST;
    $request->reportByDayRequest->advancedFilters->performanceIndicatorFormula->operatorName = PerformanceIndicatorFormulaOperatorNameEnum::MULTIPLY;
    $request->reportByDayRequest->advancedFilters->performanceIndicatorFormula->secondParameter = PerformanceIndicatorFormulaParameterTypeEnum::COST;
    $request->reportByDayRequest->advancedFilters->performanceIndicatorFormula->thirdParameter = 100;
    $request->reportByDayRequest->beginPeriodUtcDate = DateTime::createFromFormat('Y-m-d', '2006-11-20T00:00:00Z');
    $request->reportByDayRequest->catalogCategoryId = '81a058a6-0451-4b79-84ef-94c58d0ed4ac';
    $request->reportByDayRequest->channelIds = [
        '2dc136a7-0d3d-4cc9-a825-a28a42c53e28',
        '2dc136a7-0d3d-4cc9-a825-a28a42c53e28',
        '2dc136a7-0d3d-4cc9-a825-a28a42c53e28',
    ];
    $request->reportByDayRequest->endPeriodUtcDate = DateTime::createFromFormat('Y-m-d', '2006-12-20T00:00:00Z');
    $request->reportByDayRequest->productId = '578419df-1bbf-41a6-96fa-862e42182b67';
    $request->storeId = 'nemo';

    $response = $sdk->analyticsStatistics->getStoreReportByDay($request);

    if ($response->reportByDayResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStoreReportByDayPerStore

Get the report by day for a StoreId

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ReportByDayRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReportAdvancedFilters;
use \OpenAPI\OpenAPI\Models\Shared\LinkClickToOrderTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MarginTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceIndicatorFormula;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceIndicatorFormulaParameterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceIndicatorFormulaOperatorNameEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReportByDayRequest();
    $request->advancedFilters = new ReportAdvancedFilters();
    $request->advancedFilters->globalMarginPercent = 10;
    $request->advancedFilters->linkClickToOrderMaxDay = 5;
    $request->advancedFilters->linkClickToOrderType = LinkClickToOrderTypeEnum::ON_CLICK_DATE;
    $request->advancedFilters->marginType = MarginTypeEnum::GLOBAL;
    $request->advancedFilters->onlyDirectSales = true;
    $request->advancedFilters->onlyPaymentValidatedOrders = true;
    $request->advancedFilters->performanceIndicatorFormula = new PerformanceIndicatorFormula();
    $request->advancedFilters->performanceIndicatorFormula->firstParameter = PerformanceIndicatorFormulaParameterTypeEnum::COST;
    $request->advancedFilters->performanceIndicatorFormula->operatorName = PerformanceIndicatorFormulaOperatorNameEnum::MULTIPLY;
    $request->advancedFilters->performanceIndicatorFormula->secondParameter = PerformanceIndicatorFormulaParameterTypeEnum::COST;
    $request->advancedFilters->performanceIndicatorFormula->thirdParameter = 100;
    $request->beginPeriodUtcDate = DateTime::createFromFormat('Y-m-d', '2006-11-20T00:00:00Z');
    $request->catalogCategoryId = '81a058a6-0451-4b79-84ef-94c58d0ed4ac';
    $request->channelIds = [
        '2dc136a7-0d3d-4cc9-a825-a28a42c53e28',
        '2dc136a7-0d3d-4cc9-a825-a28a42c53e28',
    ];
    $request->endPeriodUtcDate = DateTime::createFromFormat('Y-m-d', '2006-12-20T00:00:00Z');
    $request->productId = '578419df-1bbf-41a6-96fa-862e42182b67';

    $response = $sdk->analyticsStatistics->getStoreReportByDayPerStore($request);

    if ($response->reportByDayPerStoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStoreReportByProduct

Get the report by product

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStoreReportByProductRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReportByProductRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReportAdvancedFilters;
use \OpenAPI\OpenAPI\Models\Shared\LinkClickToOrderTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MarginTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceIndicatorFormula;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceIndicatorFormulaParameterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceIndicatorFormulaOperatorNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\AnalyticsProductColumnFilters;
use \OpenAPI\OpenAPI\Models\Shared\AnalyticsProductColumnFilter;
use \OpenAPI\OpenAPI\Models\Shared\BeezUPCommonCatalogCategoryFilter;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceIndicatorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderByDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceIndicatorFilter;
use \OpenAPI\OpenAPI\Models\Shared\ReportFilterPeriodTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProductStateFilterEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStoreReportByProductRequest();
    $request->reportByProductRequest = new ReportByProductRequest();
    $request->reportByProductRequest->advancedFilters = new ReportAdvancedFilters();
    $request->reportByProductRequest->advancedFilters->globalMarginPercent = 10;
    $request->reportByProductRequest->advancedFilters->linkClickToOrderMaxDay = 5;
    $request->reportByProductRequest->advancedFilters->linkClickToOrderType = LinkClickToOrderTypeEnum::ON_CLICK_DATE;
    $request->reportByProductRequest->advancedFilters->marginType = MarginTypeEnum::GLOBAL;
    $request->reportByProductRequest->advancedFilters->onlyDirectSales = true;
    $request->reportByProductRequest->advancedFilters->onlyPaymentValidatedOrders = true;
    $request->reportByProductRequest->advancedFilters->performanceIndicatorFormula = new PerformanceIndicatorFormula();
    $request->reportByProductRequest->advancedFilters->performanceIndicatorFormula->firstParameter = PerformanceIndicatorFormulaParameterTypeEnum::COST;
    $request->reportByProductRequest->advancedFilters->performanceIndicatorFormula->operatorName = PerformanceIndicatorFormulaOperatorNameEnum::MULTIPLY;
    $request->reportByProductRequest->advancedFilters->performanceIndicatorFormula->secondParameter = PerformanceIndicatorFormulaParameterTypeEnum::COST;
    $request->reportByProductRequest->advancedFilters->performanceIndicatorFormula->thirdParameter = 100;
    $request->reportByProductRequest->analyticsProductColumnFilters = new AnalyticsProductColumnFilters();
    $request->reportByProductRequest->analyticsProductColumnFilters->additionalAnalyticsProductColumnFilters = [
        'accusantium' => new AnalyticsProductColumnFilter(),
        'iure' => new AnalyticsProductColumnFilter(),
        'culpa' => new AnalyticsProductColumnFilter(),
    ];
    $request->reportByProductRequest->analyticsProductColumnFilters->sku = 'M1234';
    $request->reportByProductRequest->analyticsProductColumnFilters->title = 'Refrigérateur';
    $request->reportByProductRequest->beginPeriodUtcDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2006-11-20T00:00:00Z');
    $request->reportByProductRequest->categoryFilter = new BeezUPCommonCatalogCategoryFilter();
    $request->reportByProductRequest->categoryFilter->categoryPath = [
        'sapiente',
        'architecto',
        'mollitia',
        'dolorem',
    ];
    $request->reportByProductRequest->channelId = '2dc136a7-0d3d-4cc9-a825-a28a42c53e28';
    $request->reportByProductRequest->endPeriodUtcDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2006-12-20T00:00:00Z');
    $request->reportByProductRequest->orderBy = PerformanceIndicatorTypeEnum::COST;
    $request->reportByProductRequest->orderByDirection = OrderByDirectionEnum::ASCENDING;
    $request->reportByProductRequest->pageNumber = 1;
    $request->reportByProductRequest->pageSize = 100;
    $request->reportByProductRequest->performanceIndicatorFilters = [
        new PerformanceIndicatorFilter(),
        new PerformanceIndicatorFilter(),
        new PerformanceIndicatorFilter(),
    ];
    $request->reportByProductRequest->periodType = ReportFilterPeriodTypeEnum::YESTERDAY;
    $request->reportByProductRequest->productColumnsToDisplay = [
        'bea7c21e-948b-4ac3-9ffd-4396e62c4163',
        'bea7c21e-948b-4ac3-9ffd-4396e62c4163',
        'bea7c21e-948b-4ac3-9ffd-4396e62c4163',
        'bea7c21e-948b-4ac3-9ffd-4396e62c4163',
    ];
    $request->reportByProductRequest->productState = ProductStateFilterEnum::ALL;
    $request->storeId = 'mollitia';

    $response = $sdk->analyticsStatistics->getStoreReportByProduct($request);

    if ($response->reportByProductResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
