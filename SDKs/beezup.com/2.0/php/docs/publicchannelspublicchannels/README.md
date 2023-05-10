# publicChannelsPublicChannels

### Available Operations

* [getChannels](#getchannels) - The channel list for one country
* [getChannelsIndex](#getchannelsindex) - Get public channel index

## getChannels

The channel list for one country

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetChannelsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChannelsRequest();
    $request->acceptEncoding = [
        'architecto',
    ];
    $request->ifNoneMatch = 'occaecati';
    $request->countryIsoCode = 'labore';

    $response = $sdk->publicChannelsPublicChannels->getChannels($request);

    if ($response->publicChannelInfoList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChannelsIndex

Use this operation to get the correct link to the channels and to the list of values

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetChannelsIndexRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChannelsIndexRequest();
    $request->ifNoneMatch = 'quidem';

    $response = $sdk->publicChannelsPublicChannels->getChannelsIndex($request);

    if ($response->publicChannelIndex !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
