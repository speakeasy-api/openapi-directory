# analyticsOptimisations

### Available Operations

* [copyOptimisation](#copyoptimisation) - Copy product optimisations between 2 channels
* [optimise](#optimise) - Optimise products by page
* [optimiseAll](#optimiseall) - Optimise all products
* [optimiseByCategory](#optimisebycategory) - Optimise products by category
* [optimiseByChannel](#optimisebychannel) - Optimise products by channel
* [optimiseByProduct](#optimisebyproduct) - Optimise product

## copyOptimisation

Copy product optimisations between 2 channels

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CopyOptimisationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CopyOptimisationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CopyOptimisationRequest();
    $request->copyOptimisationRequest = new CopyOptimisationRequest();
    $request->copyOptimisationRequest->channelIdSource = '2dc136a7-0d3d-4cc9-a825-a28a42c53e28';
    $request->copyOptimisationRequest->channelIdTarget = '2dc136a7-0d3d-4cc9-a825-a28a42c53e28';
    $request->copyOptimisationRequest->keepExistingOptimisation = true;
    $request->storeId = 'provident';

    $response = $sdk->analyticsOptimisations->copyOptimisation($request);

    if ($response->copyOptimisationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## optimise

/!\ WARNING /!\ \
Apply the operation on every product related to this request. \
This operation is used at the bottom of the analytics page result.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OptimiseRequest;
use \OpenAPI\OpenAPI\Models\Shared\OptimisationActionNameGeneralParametersEnum;
use \OpenAPI\OpenAPI\Models\Shared\OptimiseRequest;
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
use \OpenAPI\OpenAPI\Models\Shared\ReportTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OptimiseRequest();
    $request->actionName = OptimisationActionNameGeneralParametersEnum::DISABLE;
    $request->optimiseRequest = new OptimiseRequest();
    $request->optimiseRequest->advancedFilters = new ReportAdvancedFilters();
    $request->optimiseRequest->advancedFilters->globalMarginPercent = 10;
    $request->optimiseRequest->advancedFilters->linkClickToOrderMaxDay = 5;
    $request->optimiseRequest->advancedFilters->linkClickToOrderType = LinkClickToOrderTypeEnum::ON_CLICK_DATE;
    $request->optimiseRequest->advancedFilters->marginType = MarginTypeEnum::GLOBAL;
    $request->optimiseRequest->advancedFilters->onlyDirectSales = true;
    $request->optimiseRequest->advancedFilters->onlyPaymentValidatedOrders = true;
    $request->optimiseRequest->advancedFilters->performanceIndicatorFormula = new PerformanceIndicatorFormula();
    $request->optimiseRequest->advancedFilters->performanceIndicatorFormula->firstParameter = PerformanceIndicatorFormulaParameterTypeEnum::COST;
    $request->optimiseRequest->advancedFilters->performanceIndicatorFormula->operatorName = PerformanceIndicatorFormulaOperatorNameEnum::MULTIPLY;
    $request->optimiseRequest->advancedFilters->performanceIndicatorFormula->secondParameter = PerformanceIndicatorFormulaParameterTypeEnum::COST;
    $request->optimiseRequest->advancedFilters->performanceIndicatorFormula->thirdParameter = 100;
    $request->optimiseRequest->analyticsProductColumnFilters = new AnalyticsProductColumnFilters();
    $request->optimiseRequest->analyticsProductColumnFilters->additionalAnalyticsProductColumnFilters = [
        'unde' => new AnalyticsProductColumnFilter(),
        'nulla' => new AnalyticsProductColumnFilter(),
        'corrupti' => new AnalyticsProductColumnFilter(),
        'illum' => new AnalyticsProductColumnFilter(),
    ];
    $request->optimiseRequest->analyticsProductColumnFilters->sku = 'M1234';
    $request->optimiseRequest->analyticsProductColumnFilters->title = 'Refrigérateur';
    $request->optimiseRequest->beginPeriodUtcDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2006-11-20T00:00:00Z');
    $request->optimiseRequest->categoryFilter = new BeezUPCommonCatalogCategoryFilter();
    $request->optimiseRequest->categoryFilter->categoryPath = [
        'error',
        'deserunt',
    ];
    $request->optimiseRequest->channelId = '2dc136a7-0d3d-4cc9-a825-a28a42c53e28';
    $request->optimiseRequest->endPeriodUtcDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2006-12-20T00:00:00Z');
    $request->optimiseRequest->orderBy = PerformanceIndicatorTypeEnum::COST;
    $request->optimiseRequest->orderByDirection = OrderByDirectionEnum::ASCENDING;
    $request->optimiseRequest->pageNumber = 1;
    $request->optimiseRequest->pageSize = 100;
    $request->optimiseRequest->performanceIndicatorFilters = [
        new PerformanceIndicatorFilter(),
        new PerformanceIndicatorFilter(),
    ];
    $request->optimiseRequest->periodType = ReportFilterPeriodTypeEnum::THIS_MONTH;
    $request->optimiseRequest->productColumnsToDisplay = [
        'bea7c21e-948b-4ac3-9ffd-4396e62c4163',
        'bea7c21e-948b-4ac3-9ffd-4396e62c4163',
    ];
    $request->optimiseRequest->productState = ProductStateFilterEnum::ALL;
    $request->optimiseRequest->reportType = ReportTypeEnum::BY_PRODUCT;
    $request->storeId = 'debitis';

    $response = $sdk->analyticsOptimisations->optimise($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## optimiseAll

/!\ WARNING /!\ \
Apply the operation on every product related to this request. \
This operation is used at the bottom of the analytics page result.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OptimiseAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\OptimisationActionNameGeneralParametersEnum;
use \OpenAPI\OpenAPI\Models\Shared\OptimiseAllRequest;
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
use \OpenAPI\OpenAPI\Models\Shared\ReportTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OptimiseAllRequest();
    $request->actionName = OptimisationActionNameGeneralParametersEnum::REENABLE;
    $request->optimiseAllRequest = new OptimiseAllRequest();
    $request->optimiseAllRequest->advancedFilters = new ReportAdvancedFilters();
    $request->optimiseAllRequest->advancedFilters->globalMarginPercent = 10;
    $request->optimiseAllRequest->advancedFilters->linkClickToOrderMaxDay = 5;
    $request->optimiseAllRequest->advancedFilters->linkClickToOrderType = LinkClickToOrderTypeEnum::ON_CLICK_DATE;
    $request->optimiseAllRequest->advancedFilters->marginType = MarginTypeEnum::GLOBAL;
    $request->optimiseAllRequest->advancedFilters->onlyDirectSales = true;
    $request->optimiseAllRequest->advancedFilters->onlyPaymentValidatedOrders = true;
    $request->optimiseAllRequest->advancedFilters->performanceIndicatorFormula = new PerformanceIndicatorFormula();
    $request->optimiseAllRequest->advancedFilters->performanceIndicatorFormula->firstParameter = PerformanceIndicatorFormulaParameterTypeEnum::COST;
    $request->optimiseAllRequest->advancedFilters->performanceIndicatorFormula->operatorName = PerformanceIndicatorFormulaOperatorNameEnum::MULTIPLY;
    $request->optimiseAllRequest->advancedFilters->performanceIndicatorFormula->secondParameter = PerformanceIndicatorFormulaParameterTypeEnum::COST;
    $request->optimiseAllRequest->advancedFilters->performanceIndicatorFormula->thirdParameter = 100;
    $request->optimiseAllRequest->analyticsProductColumnFilters = new AnalyticsProductColumnFilters();
    $request->optimiseAllRequest->analyticsProductColumnFilters->additionalAnalyticsProductColumnFilters = [
        'tempora' => new AnalyticsProductColumnFilter(),
        'suscipit' => new AnalyticsProductColumnFilter(),
        'molestiae' => new AnalyticsProductColumnFilter(),
        'minus' => new AnalyticsProductColumnFilter(),
    ];
    $request->optimiseAllRequest->analyticsProductColumnFilters->sku = 'M1234';
    $request->optimiseAllRequest->analyticsProductColumnFilters->title = 'Refrigérateur';
    $request->optimiseAllRequest->beginPeriodUtcDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2006-11-20T00:00:00Z');
    $request->optimiseAllRequest->categoryFilter = new BeezUPCommonCatalogCategoryFilter();
    $request->optimiseAllRequest->categoryFilter->categoryPath = [
        'voluptatum',
        'iusto',
        'excepturi',
        'nisi',
    ];
    $request->optimiseAllRequest->channelId = '2dc136a7-0d3d-4cc9-a825-a28a42c53e28';
    $request->optimiseAllRequest->endPeriodUtcDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2006-12-20T00:00:00Z');
    $request->optimiseAllRequest->orderBy = PerformanceIndicatorTypeEnum::COST;
    $request->optimiseAllRequest->orderByDirection = OrderByDirectionEnum::ASCENDING;
    $request->optimiseAllRequest->performanceIndicatorFilters = [
        new PerformanceIndicatorFilter(),
        new PerformanceIndicatorFilter(),
        new PerformanceIndicatorFilter(),
        new PerformanceIndicatorFilter(),
    ];
    $request->optimiseAllRequest->periodType = ReportFilterPeriodTypeEnum::LAST90_DAYS;
    $request->optimiseAllRequest->productColumnsToDisplay = [
        'bea7c21e-948b-4ac3-9ffd-4396e62c4163',
    ];
    $request->optimiseAllRequest->productState = ProductStateFilterEnum::ALL;
    $request->optimiseAllRequest->reportType = ReportTypeEnum::BY_PRODUCT;
    $request->storeId = 'quis';

    $response = $sdk->analyticsOptimisations->optimiseAll($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## optimiseByCategory

/!\ WARNING /!\ \
This operation will reenable or disable products's category for every channel indicated in the body.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OptimiseByCategoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\OptimisationActionNameGeneralParametersEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OptimiseByCategoryRequest();
    $request->requestBody = [
        'deserunt',
    ];
    $request->actionName = OptimisationActionNameGeneralParametersEnum::REENABLE;
    $request->catalogCategoryId = 'ipsam';
    $request->storeId = 'repellendus';

    $response = $sdk->analyticsOptimisations->optimiseByCategory($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## optimiseByChannel

/!\ WARNING /!\ \
Apply the operation on every product on this channel.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OptimiseByChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\OptimisationActionNameGeneralParametersEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OptimiseByChannelRequest();
    $request->actionName = OptimisationActionNameGeneralParametersEnum::DISABLE;
    $request->channelId = 'quo';
    $request->storeId = 'odit';

    $response = $sdk->analyticsOptimisations->optimiseByChannel($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## optimiseByProduct

/!\ WARNING /!\ \
This operation will reenable or disable this product for every channel indicated in the body.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OptimiseByProductRequest;
use \OpenAPI\OpenAPI\Models\Shared\OptimisationActionNameGeneralParametersEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OptimiseByProductRequest();
    $request->requestBody = [
        'at',
        'maiores',
        'molestiae',
        'quod',
    ];
    $request->actionName = OptimisationActionNameGeneralParametersEnum::DISABLE;
    $request->productId = 'esse';
    $request->storeId = 'totam';

    $response = $sdk->analyticsOptimisations->optimiseByProduct($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
