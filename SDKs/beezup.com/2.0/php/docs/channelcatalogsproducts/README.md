# channelCatalogsProducts

### Available Operations

* [exportChannelCatalogProductInfoList](#exportchannelcatalogproductinfolist) - Export channel catalog product information list
* [getChannelCatalogProductByChannelCatalog](#getchannelcatalogproductbychannelcatalog) - Get channel catalog products related to these channel catalogs
* [getChannelCatalogProductInfo](#getchannelcatalogproductinfo) - Get channel catalog product information
* [getChannelCatalogProductInfoList](#getchannelcatalogproductinfolist) - Get channel catalog product information list
* [getChannelCatalogProductsCounters](#getchannelcatalogproductscounters) - Get channel catalog products' counters

## exportChannelCatalogProductInfoList

Export channel catalog product information list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportChannelCatalogProductInfoListRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExportFormatInQueryGeneralParameterEnum;
use \OpenAPI\OpenAPI\Models\Shared\GetChannelCatalogProductInfoListRequest;
use \OpenAPI\OpenAPI\Models\Shared\BeezUPCommonCatalogCategoryFilter;
use \OpenAPI\OpenAPI\Models\Shared\BeezUPCommonChannelCategoryFilter;
use \OpenAPI\OpenAPI\Models\Shared\ProductSetVisibilityCriteria;
use \OpenAPI\OpenAPI\Models\Shared\ProductSetVisibilityCriteriaLogicTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChannelCatalogProductFilters;
use \OpenAPI\OpenAPI\Models\Shared\BeezUPCommonAdditionalProductFiltersValue;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportChannelCatalogProductInfoListRequest();
    $request->channelCatalogId = 'labore';
    $request->format = ExportFormatInQueryGeneralParameterEnum::XLSX;
    $request->getChannelCatalogProductInfoListRequest = new GetChannelCatalogProductInfoListRequest();
    $request->getChannelCatalogProductInfoListRequest->catalogCategoryFilter = new BeezUPCommonCatalogCategoryFilter();
    $request->getChannelCatalogProductInfoListRequest->catalogCategoryFilter->categoryPath = [
        'nobis',
        'eum',
        'vero',
    ];
    $request->getChannelCatalogProductInfoListRequest->channelCategoryFilter = new BeezUPCommonChannelCategoryFilter();
    $request->getChannelCatalogProductInfoListRequest->channelCategoryFilter->categoryPath = [
        'architecto',
    ];
    $request->getChannelCatalogProductInfoListRequest->criteria = new ProductSetVisibilityCriteria();
    $request->getChannelCatalogProductInfoListRequest->criteria->disabled = true;
    $request->getChannelCatalogProductInfoListRequest->criteria->excluded = true;
    $request->getChannelCatalogProductInfoListRequest->criteria->exist = true;
    $request->getChannelCatalogProductInfoListRequest->criteria->logic = ProductSetVisibilityCriteriaLogicTypeEnum::FUNNEL;
    $request->getChannelCatalogProductInfoListRequest->criteria->uncategorized = true;
    $request->getChannelCatalogProductInfoListRequest->overridden = true;
    $request->getChannelCatalogProductInfoListRequest->pageNumber = 1;
    $request->getChannelCatalogProductInfoListRequest->pageSize = 100;
    $request->getChannelCatalogProductInfoListRequest->productFilters = new ChannelCatalogProductFilters();
    $request->getChannelCatalogProductInfoListRequest->productFilters->additionalProductFilters = [
        'excepturi' => new BeezUPCommonAdditionalProductFiltersValue(),
    ];
    $request->getChannelCatalogProductInfoListRequest->productFilters->catalogEans = [
        'provident',
        'quos',
    ];
    $request->getChannelCatalogProductInfoListRequest->productFilters->catalogMpns = [
        'accusantium',
        'mollitia',
        'reiciendis',
    ];
    $request->getChannelCatalogProductInfoListRequest->productFilters->catalogSkus = [
        'ad',
        'eum',
        'dolor',
    ];
    $request->getChannelCatalogProductInfoListRequest->productFilters->channelEans = [
        'odit',
        'nemo',
        'quasi',
        'iure',
    ];
    $request->getChannelCatalogProductInfoListRequest->productFilters->channelMpns = [
        'debitis',
        'eius',
        'maxime',
        'deleniti',
    ];
    $request->getChannelCatalogProductInfoListRequest->productFilters->channelSkus = [
        'in',
        'architecto',
        'architecto',
    ];
    $request->getChannelCatalogProductInfoListRequest->productFilters->title = 'Refrigérateur';

    $response = $sdk->channelCatalogsProducts->exportChannelCatalogProductInfoList($request);

    if ($response->beezUPCommonLink3 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChannelCatalogProductByChannelCatalog

Get channel catalog products related to these channel catalogs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ChannelCatalogProductByChannelCatalogRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChannelCatalogProductByChannelCatalogRequest();
    $request->channelCatalogIds = [
        '6d6b04de-406b-4539-8e7e-bf3e8da5dfb0',
        '6d6b04de-406b-4539-8e7e-bf3e8da5dfb0',
        '6d6b04de-406b-4539-8e7e-bf3e8da5dfb0',
        '6d6b04de-406b-4539-8e7e-bf3e8da5dfb0',
    ];
    $request->productId = '578419df-1bbf-41a6-96fa-862e42182b67';
    $request->storeId = '64f43358-63a1-47f7-97ec-0301fc39956b';

    $response = $sdk->channelCatalogsProducts->getChannelCatalogProductByChannelCatalog($request);

    if ($response->channelCatalogProductByChannelCatalogResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChannelCatalogProductInfo

Get channel catalog product information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetChannelCatalogProductInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChannelCatalogProductInfoRequest();
    $request->channelCatalogId = 'ullam';
    $request->productId = 'expedita';

    $response = $sdk->channelCatalogsProducts->getChannelCatalogProductInfo($request);

    if ($response->channelCatalogProductInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChannelCatalogProductInfoList

Get channel catalog product information list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetChannelCatalogProductInfoListRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetChannelCatalogProductInfoListRequest;
use \OpenAPI\OpenAPI\Models\Shared\BeezUPCommonCatalogCategoryFilter;
use \OpenAPI\OpenAPI\Models\Shared\BeezUPCommonChannelCategoryFilter;
use \OpenAPI\OpenAPI\Models\Shared\ProductSetVisibilityCriteria;
use \OpenAPI\OpenAPI\Models\Shared\ProductSetVisibilityCriteriaLogicTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChannelCatalogProductFilters;
use \OpenAPI\OpenAPI\Models\Shared\BeezUPCommonAdditionalProductFiltersValue;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChannelCatalogProductInfoListRequest();
    $request->channelCatalogId = 'nihil';
    $request->getChannelCatalogProductInfoListRequest = new GetChannelCatalogProductInfoListRequest();
    $request->getChannelCatalogProductInfoListRequest->catalogCategoryFilter = new BeezUPCommonCatalogCategoryFilter();
    $request->getChannelCatalogProductInfoListRequest->catalogCategoryFilter->categoryPath = [
        'quibusdam',
        'sed',
        'saepe',
        'pariatur',
    ];
    $request->getChannelCatalogProductInfoListRequest->channelCategoryFilter = new BeezUPCommonChannelCategoryFilter();
    $request->getChannelCatalogProductInfoListRequest->channelCategoryFilter->categoryPath = [
        'consequuntur',
    ];
    $request->getChannelCatalogProductInfoListRequest->criteria = new ProductSetVisibilityCriteria();
    $request->getChannelCatalogProductInfoListRequest->criteria->disabled = true;
    $request->getChannelCatalogProductInfoListRequest->criteria->excluded = true;
    $request->getChannelCatalogProductInfoListRequest->criteria->exist = true;
    $request->getChannelCatalogProductInfoListRequest->criteria->logic = ProductSetVisibilityCriteriaLogicTypeEnum::CUMULATIVE;
    $request->getChannelCatalogProductInfoListRequest->criteria->uncategorized = true;
    $request->getChannelCatalogProductInfoListRequest->overridden = true;
    $request->getChannelCatalogProductInfoListRequest->pageNumber = 1;
    $request->getChannelCatalogProductInfoListRequest->pageSize = 100;
    $request->getChannelCatalogProductInfoListRequest->productFilters = new ChannelCatalogProductFilters();
    $request->getChannelCatalogProductInfoListRequest->productFilters->additionalProductFilters = [
        'magni' => new BeezUPCommonAdditionalProductFiltersValue(),
        'sunt' => new BeezUPCommonAdditionalProductFiltersValue(),
        'quo' => new BeezUPCommonAdditionalProductFiltersValue(),
    ];
    $request->getChannelCatalogProductInfoListRequest->productFilters->catalogEans = [
        'pariatur',
        'maxime',
        'ea',
        'excepturi',
    ];
    $request->getChannelCatalogProductInfoListRequest->productFilters->catalogMpns = [
        'ea',
    ];
    $request->getChannelCatalogProductInfoListRequest->productFilters->catalogSkus = [
        'ab',
    ];
    $request->getChannelCatalogProductInfoListRequest->productFilters->channelEans = [
        'quidem',
        'ipsam',
        'voluptate',
        'autem',
    ];
    $request->getChannelCatalogProductInfoListRequest->productFilters->channelMpns = [
        'eaque',
        'pariatur',
        'nemo',
    ];
    $request->getChannelCatalogProductInfoListRequest->productFilters->channelSkus = [
        'perferendis',
        'fugiat',
        'amet',
        'aut',
    ];
    $request->getChannelCatalogProductInfoListRequest->productFilters->title = 'Refrigérateur';

    $response = $sdk->channelCatalogsProducts->getChannelCatalogProductInfoList($request);

    if ($response->channelCatalogProductInfoList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChannelCatalogProductsCounters

Get channel catalog products' counters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetChannelCatalogProductsCountersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChannelCatalogProductsCountersRequest();
    $request->channelCatalogId = 'cumque';

    $response = $sdk->channelCatalogsProducts->getChannelCatalogProductsCounters($request);

    if ($response->channelCatalogProductsCounters !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
