# channelCatalogsProductsOverrides

### Available Operations

* [configureChannelCatalogProductValueOverrideCopy](#configurechannelcatalogproductvalueoverridecopy) - Copy channel catalog product value override
* [deleteChannelCatalogProductValueOverride](#deletechannelcatalogproductvalueoverride) - Delete a specific channel catalog product value override
* [getChannelCatalogProductValueOverrideCopy](#getchannelcatalogproductvalueoverridecopy) - Get channel catalog product value override compatibilities status
* [overrideChannelCatalogProductValues](#overridechannelcatalogproductvalues) - Override channel catalog product values

## configureChannelCatalogProductValueOverrideCopy

Copy channel catalog product value override

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfigureChannelCatalogProductValueOverrideCopyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfigureChannelCatalogProductValueOverrideCopyRequest();
    $request->channelCatalogId = 'dolores';
    $request->productId = 'quis';

    $response = $sdk->channelCatalogsProductsOverrides->configureChannelCatalogProductValueOverrideCopy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteChannelCatalogProductValueOverride

Delete a specific channel catalog product value override

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteChannelCatalogProductValueOverrideRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteChannelCatalogProductValueOverrideRequest();
    $request->channelCatalogId = 'totam';
    $request->channelColumnId = 'dignissimos';
    $request->productId = 'eaque';

    $response = $sdk->channelCatalogsProductsOverrides->deleteChannelCatalogProductValueOverride($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChannelCatalogProductValueOverrideCopy

Get channel catalog product value override compatibilities status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetChannelCatalogProductValueOverrideCopyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChannelCatalogProductValueOverrideCopyRequest();
    $request->channelCatalogId = 'quis';
    $request->productId = 'nesciunt';

    $response = $sdk->channelCatalogsProductsOverrides->getChannelCatalogProductValueOverrideCopy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## overrideChannelCatalogProductValues

Override channel catalog product values

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OverrideChannelCatalogProductValuesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OverrideChannelCatalogProductValuesRequest();
    $request->requestBody = [
        'perferendis' => 'dolores',
    ];
    $request->channelCatalogId = 'minus';
    $request->productId = 'quam';

    $response = $sdk->channelCatalogsProductsOverrides->overrideChannelCatalogProductValues($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
