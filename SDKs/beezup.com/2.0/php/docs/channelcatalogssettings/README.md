# channelCatalogsSettings

### Available Operations

* [configureChannelCatalogCostSettings](#configurechannelcatalogcostsettings) - Configure channel catalog cost settings
* [configureChannelCatalogGeneralSettings](#configurechannelcataloggeneralsettings) - Configure channel catalog general settings
* [disableChannelCatalog](#disablechannelcatalog) - Disable a channel catalog
* [enableChannelCatalog](#enablechannelcatalog) - Enable a channel catalog

## configureChannelCatalogCostSettings

Configure channel catalog cost settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfigureChannelCatalogCostSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CostSettings;
use \OpenAPI\OpenAPI\Models\Shared\CostTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfigureChannelCatalogCostSettingsRequest();
    $request->channelCatalogId = 'dolor';
    $request->costSettings = new CostSettings();
    $request->costSettings->costType = CostTypeEnum::FIXED_GLOBAL;
    $request->costSettings->globalCostValue = 10.21;

    $response = $sdk->channelCatalogsSettings->configureChannelCatalogCostSettings($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## configureChannelCatalogGeneralSettings

Configure channel catalog general settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfigureChannelCatalogGeneralSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GeneralSettings;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfigureChannelCatalogGeneralSettingsRequest();
    $request->channelCatalogId = 'vero';
    $request->generalSettings = new GeneralSettings();
    $request->generalSettings->acceptToPublishInfo = true;
    $request->generalSettings->activeBeezUPTracking = true;
    $request->generalSettings->doNotExportOutOfStockProducts = true;

    $response = $sdk->channelCatalogsSettings->configureChannelCatalogGeneralSettings($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableChannelCatalog

Disable a channel catalog

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisableChannelCatalogRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableChannelCatalogRequest();
    $request->channelCatalogId = 'nostrum';

    $response = $sdk->channelCatalogsSettings->disableChannelCatalog($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableChannelCatalog

Enable a channel catalog

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnableChannelCatalogRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableChannelCatalogRequest();
    $request->channelCatalogId = 'hic';

    $response = $sdk->channelCatalogsSettings->enableChannelCatalog($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
