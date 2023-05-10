# marketplacesChannelCatalogsSettings

### Available Operations

* [getChannelCatalogMarketplaceProperties](#getchannelcatalogmarketplaceproperties) - Get the marketplace properties for a channel catalog
* [getChannelCatalogMarketplaceSettings](#getchannelcatalogmarketplacesettings) - Get the marketplace settings for a channel catalog
* [setChannelCatalogMarketplaceSettings](#setchannelcatalogmarketplacesettings) - Save new marketplace settings for a channel catalog

## getChannelCatalogMarketplaceProperties

Get the marketplace properties for a channel catalog

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetChannelCatalogMarketplacePropertiesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChannelCatalogMarketplacePropertiesRequest();
    $request->acceptLanguage = [
        'soluta',
    ];
    $request->channelCatalogId = 'dolorum';
    $request->redirectionPageUrl = 'http://jealous-polyester.name';

    $response = $sdk->marketplacesChannelCatalogsSettings->getChannelCatalogMarketplaceProperties($request);

    if ($response->channelCatalogMarketplaceProperties !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChannelCatalogMarketplaceSettings

Get the marketplace settings for a channel catalog

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetChannelCatalogMarketplaceSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChannelCatalogMarketplaceSettingsRequest();
    $request->channelCatalogId = 'omnis';

    $response = $sdk->marketplacesChannelCatalogsSettings->getChannelCatalogMarketplaceSettings($request);

    if ($response->channelCatalogMarketplaceSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setChannelCatalogMarketplaceSettings

Allow you to configure your marketplace settings.
Partial update accepted.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SetChannelCatalogMarketplaceSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SetChannelCatalogMarketplaceSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChannelCatalogMarketplaceSetting;
use \OpenAPI\OpenAPI\Models\Shared\ChannelCatalogMarketplaceSettingDiscriminatorTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetChannelCatalogMarketplaceSettingsRequest();
    $request->channelCatalogId = 'necessitatibus';
    $request->setChannelCatalogMarketplaceSettingsRequest = new SetChannelCatalogMarketplaceSettingsRequest();
    $request->setChannelCatalogMarketplaceSettingsRequest->settings = [
        new ChannelCatalogMarketplaceSetting(),
        new ChannelCatalogMarketplaceSetting(),
        new ChannelCatalogMarketplaceSetting(),
    ];

    $response = $sdk->marketplacesChannelCatalogsSettings->setChannelCatalogMarketplaceSettings($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
