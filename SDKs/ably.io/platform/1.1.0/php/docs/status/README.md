# status

### Available Operations

* [getMetadataOfAllChannels](#getmetadataofallchannels) - Enumerate all active channels of the application
* [getMetadataOfChannel](#getmetadataofchannel) - Get metadata of a channel
* [getPresenceOfChannel](#getpresenceofchannel) - Get presence of a channel

## getMetadataOfAllChannels

Enumerate all active channels of the application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetMetadataOfAllChannelsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMetadataOfAllChannelsByEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMetadataOfAllChannelsRequest();
    $request->xAblyVersion = 'dicta';
    $request->by = GetMetadataOfAllChannelsByEnum::ID;
    $request->format = ResponseFormatEnum::MSGPACK;
    $request->limit = 276894;
    $request->prefix = 'aspernatur';

    $response = $sdk->status->getMetadataOfAllChannels($request);

    if ($response->getMetadataOfAllChannels2XXApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMetadataOfChannel

Get metadata of a channel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetMetadataOfChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMetadataOfChannelRequest();
    $request->xAblyVersion = 'dolores';
    $request->channelId = 'distinctio';
    $request->format = ResponseFormatEnum::MSGPACK;

    $response = $sdk->status->getMetadataOfChannel($request);

    if ($response->channelDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPresenceOfChannel

Get presence on a channel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetPresenceOfChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPresenceOfChannelRequest();
    $request->xAblyVersion = 'aliquid';
    $request->channelId = 'quam';
    $request->clientId = 'molestias';
    $request->connectionId = 'temporibus';
    $request->format = ResponseFormatEnum::JSON;
    $request->limit = 204865;

    $response = $sdk->status->getPresenceOfChannel($request);

    if ($response->presenceMessages !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
