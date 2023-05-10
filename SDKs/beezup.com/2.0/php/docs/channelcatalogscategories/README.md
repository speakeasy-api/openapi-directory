# channelCatalogsCategories

### Available Operations

* [configureChannelCatalogCategory](#configurechannelcatalogcategory) - Configure channel catalog category
* [disableChannelCatalogCategoryMapping](#disablechannelcatalogcategorymapping) - Disable a channel catalog category mapping
* [getChannelCatalogCategories](#getchannelcatalogcategories) - Get channel catalog categories
* [reenableChannelCatalogCategoryMapping](#reenablechannelcatalogcategorymapping) - Reenable a channel catalog category mapping

## configureChannelCatalogCategory

Configure channel catalog category

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfigureChannelCatalogCategoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConfigureCategoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChannelCatalogCategoryConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfigureChannelCatalogCategoryRequest();
    $request->channelCatalogId = 'delectus';
    $request->configureCategoryRequest = new ConfigureCategoryRequest();
    $request->configureCategoryRequest->channelCatalogCategories = [
        new ChannelCatalogCategoryConfiguration(),
        new ChannelCatalogCategoryConfiguration(),
        new ChannelCatalogCategoryConfiguration(),
    ];
    $request->configureCategoryRequest->overrideSubCategoryMappings = true;

    $response = $sdk->channelCatalogsCategories->configureChannelCatalogCategory($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableChannelCatalogCategoryMapping

Disable a channel catalog category mapping

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisableChannelCatalogCategoryMappingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableChannelCatalogCategoryMappingRequest();
    $request->channelCatalogId = 'provident';

    $response = $sdk->channelCatalogsCategories->disableChannelCatalogCategoryMapping($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChannelCatalogCategories

Get channel catalog categories

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetChannelCatalogCategoriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChannelCatalogCategoriesRequest();
    $request->channelCatalogId = 'nam';

    $response = $sdk->channelCatalogsCategories->getChannelCatalogCategories($request);

    if ($response->channelCatalogCategoryConfigurationList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reenableChannelCatalogCategoryMapping

Reenable a channel catalog category mapping

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReenableChannelCatalogCategoryMappingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReenableChannelCatalogCategoryMappingRequest();
    $request->channelCatalogId = 'id';

    $response = $sdk->channelCatalogsCategories->reenableChannelCatalogCategoryMapping($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
