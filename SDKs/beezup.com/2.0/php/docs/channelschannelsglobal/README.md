# channelsChannelsGlobal

### Available Operations

* [getAvailableChannels](#getavailablechannels) - List all available channel for this store
* [getChannelCategories](#getchannelcategories) - Get channel categories
* [getChannelColumns](#getchannelcolumns) - Get channel columns
* [getChannelInfo](#getchannelinfo) - Get channel information

## getAvailableChannels

List all available channel for this store

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAvailableChannelsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAvailableChannelsRequest();
    $request->storeId = 'recusandae';

    $response = $sdk->channelsChannelsGlobal->getAvailableChannels($request);

    if ($response->channelHeaders !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChannelCategories

Get channel categories

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetChannelCategoriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChannelCategoriesRequest();
    $request->acceptEncoding = [
        'facilis',
        'perspiciatis',
        'voluptatem',
    ];
    $request->channelId = 'porro';

    $response = $sdk->channelsChannelsGlobal->getChannelCategories($request);

    if ($response->channelRootCategory !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChannelColumns

Get channel columns

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetChannelColumnsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChannelColumnsRequest();
    $request->acceptEncoding = [
        'blanditiis',
    ];
    $request->requestBody = [
        '8a76f06a-fefc-4c0d-bcfe-b210f1482977',
        '8a76f06a-fefc-4c0d-bcfe-b210f1482977',
        '8a76f06a-fefc-4c0d-bcfe-b210f1482977',
    ];
    $request->channelId = 'eaque';

    $response = $sdk->channelsChannelsGlobal->getChannelColumns($request);

    if ($response->channelColumns !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChannelInfo

Get channel information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetChannelInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChannelInfoRequest();
    $request->channelId = 'occaecati';

    $response = $sdk->channelsChannelsGlobal->getChannelInfo($request);

    if ($response->channelInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
