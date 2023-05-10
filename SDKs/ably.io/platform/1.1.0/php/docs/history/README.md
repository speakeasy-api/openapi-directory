# history

### Available Operations

* [getMessagesByChannel](#getmessagesbychannel) - Get message history for a channel
* [getPresenceHistoryOfChannel](#getpresencehistoryofchannel) - Get presence history of a channel

## getMessagesByChannel

Get message history for a channel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetMessagesByChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\FilterDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMessagesByChannelRequest();
    $request->xAblyVersion = 'deserunt';
    $request->channelId = 'perferendis';
    $request->direction = FilterDirectionEnum::FORWARDS;
    $request->end = 'repellendus';
    $request->format = ResponseFormatEnum::HTML;
    $request->limit = 778157;
    $request->start = 'odit';

    $response = $sdk->history->getMessagesByChannel($request);

    if ($response->messages !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPresenceHistoryOfChannel

Get presence on a channel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetPresenceHistoryOfChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\FilterDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPresenceHistoryOfChannelRequest();
    $request->xAblyVersion = 'at';
    $request->channelId = 'at';
    $request->direction = FilterDirectionEnum::BACKWARDS;
    $request->end = 'molestiae';
    $request->format = ResponseFormatEnum::HTML;
    $request->limit = 800911;
    $request->start = 'esse';

    $response = $sdk->history->getPresenceHistoryOfChannel($request);

    if ($response->presenceMessages !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
