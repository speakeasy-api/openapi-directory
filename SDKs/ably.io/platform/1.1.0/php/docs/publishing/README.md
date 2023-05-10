# publishing

### Available Operations

* [publishMessagesToChannelForm](#publishmessagestochannelform) - Publish a message to a channel
* [publishMessagesToChannelJson](#publishmessagestochanneljson) - Publish a message to a channel
* [publishMessagesToChannelRaw](#publishmessagestochannelraw) - Publish a message to a channel

## publishMessagesToChannelForm

Publish a message to the specified channel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\PublishMessagesToChannelFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\MessageInput;
use \OpenAPI\OpenAPI\Models\Shared\Extras;
use \OpenAPI\OpenAPI\Models\Shared\Push;
use \OpenAPI\OpenAPI\Models\Shared\PushApns;
use \OpenAPI\OpenAPI\Models\Shared\Notification;
use \OpenAPI\OpenAPI\Models\Shared\PushFcm;
use \OpenAPI\OpenAPI\Models\Shared\PushWeb;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PublishMessagesToChannelFormRequest();
    $request->messageInput = new MessageInput();
    $request->messageInput->clientId = 'totam';
    $request->messageInput->connectionId = 'porro';
    $request->messageInput->data = 'dolorum';
    $request->messageInput->encoding = 'dicta';
    $request->messageInput->extras = new Extras();
    $request->messageInput->extras->push = new Push();
    $request->messageInput->extras->push->apns = new PushApns();
    $request->messageInput->extras->push->apns->notification = new Notification();
    $request->messageInput->extras->push->apns->notification->body = 'nam';
    $request->messageInput->extras->push->apns->notification->collapseKey = 'officia';
    $request->messageInput->extras->push->apns->notification->icon = 'occaecati';
    $request->messageInput->extras->push->apns->notification->sound = 'fugit';
    $request->messageInput->extras->push->apns->notification->title = 'Ms.';
    $request->messageInput->extras->push->data = 'hic';
    $request->messageInput->extras->push->fcm = new PushFcm();
    $request->messageInput->extras->push->fcm->notification = new Notification();
    $request->messageInput->extras->push->fcm->notification->body = 'optio';
    $request->messageInput->extras->push->fcm->notification->collapseKey = 'totam';
    $request->messageInput->extras->push->fcm->notification->icon = 'beatae';
    $request->messageInput->extras->push->fcm->notification->sound = 'commodi';
    $request->messageInput->extras->push->fcm->notification->title = 'Ms.';
    $request->messageInput->extras->push->notification = new Notification();
    $request->messageInput->extras->push->notification->body = 'modi';
    $request->messageInput->extras->push->notification->collapseKey = 'qui';
    $request->messageInput->extras->push->notification->icon = 'impedit';
    $request->messageInput->extras->push->notification->sound = 'cum';
    $request->messageInput->extras->push->notification->title = 'Ms.';
    $request->messageInput->extras->push->web = new PushWeb();
    $request->messageInput->extras->push->web->notification = new Notification();
    $request->messageInput->extras->push->web->notification->body = 'ipsum';
    $request->messageInput->extras->push->web->notification->collapseKey = 'excepturi';
    $request->messageInput->extras->push->web->notification->icon = 'aspernatur';
    $request->messageInput->extras->push->web->notification->sound = 'perferendis';
    $request->messageInput->extras->push->web->notification->title = 'Mrs.';
    $request->messageInput->name = 'Louis Moore';
    $request->xAblyVersion = 'laboriosam';
    $request->channelId = 'hic';
    $request->format = ResponseFormatEnum::HTML;

    $response = $sdk->publishing->publishMessagesToChannelForm($request);

    if ($response->publishMessagesToChannelForm2XXApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## publishMessagesToChannelJson

Publish a message to the specified channel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\PublishMessagesToChannelJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\MessageInput;
use \OpenAPI\OpenAPI\Models\Shared\Extras;
use \OpenAPI\OpenAPI\Models\Shared\Push;
use \OpenAPI\OpenAPI\Models\Shared\PushApns;
use \OpenAPI\OpenAPI\Models\Shared\Notification;
use \OpenAPI\OpenAPI\Models\Shared\PushFcm;
use \OpenAPI\OpenAPI\Models\Shared\PushWeb;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PublishMessagesToChannelJsonRequest();
    $request->messageInput = new MessageInput();
    $request->messageInput->clientId = 'fuga';
    $request->messageInput->connectionId = 'in';
    $request->messageInput->data = 'corporis';
    $request->messageInput->encoding = 'iste';
    $request->messageInput->extras = new Extras();
    $request->messageInput->extras->push = new Push();
    $request->messageInput->extras->push->apns = new PushApns();
    $request->messageInput->extras->push->apns->notification = new Notification();
    $request->messageInput->extras->push->apns->notification->body = 'iure';
    $request->messageInput->extras->push->apns->notification->collapseKey = 'saepe';
    $request->messageInput->extras->push->apns->notification->icon = 'quidem';
    $request->messageInput->extras->push->apns->notification->sound = 'architecto';
    $request->messageInput->extras->push->apns->notification->title = 'Mr.';
    $request->messageInput->extras->push->data = 'reiciendis';
    $request->messageInput->extras->push->fcm = new PushFcm();
    $request->messageInput->extras->push->fcm->notification = new Notification();
    $request->messageInput->extras->push->fcm->notification->body = 'est';
    $request->messageInput->extras->push->fcm->notification->collapseKey = 'mollitia';
    $request->messageInput->extras->push->fcm->notification->icon = 'laborum';
    $request->messageInput->extras->push->fcm->notification->sound = 'dolores';
    $request->messageInput->extras->push->fcm->notification->title = 'Mrs.';
    $request->messageInput->extras->push->notification = new Notification();
    $request->messageInput->extras->push->notification->body = 'corporis';
    $request->messageInput->extras->push->notification->collapseKey = 'explicabo';
    $request->messageInput->extras->push->notification->icon = 'nobis';
    $request->messageInput->extras->push->notification->sound = 'enim';
    $request->messageInput->extras->push->notification->title = 'Miss';
    $request->messageInput->extras->push->web = new PushWeb();
    $request->messageInput->extras->push->web->notification = new Notification();
    $request->messageInput->extras->push->web->notification->body = 'nemo';
    $request->messageInput->extras->push->web->notification->collapseKey = 'minima';
    $request->messageInput->extras->push->web->notification->icon = 'excepturi';
    $request->messageInput->extras->push->web->notification->sound = 'accusantium';
    $request->messageInput->extras->push->web->notification->title = 'Ms.';
    $request->messageInput->name = 'Miss Aubrey Williamson';
    $request->xAblyVersion = 'culpa';
    $request->channelId = 'consequuntur';
    $request->format = ResponseFormatEnum::HTML;

    $response = $sdk->publishing->publishMessagesToChannelJson($request);

    if ($response->publishMessagesToChannelJSON2XXApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## publishMessagesToChannelRaw

Publish a message to the specified channel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\PublishMessagesToChannelRawRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PublishMessagesToChannelRawRequest();
    $request->requestBody = 'mollitia';
    $request->xAblyVersion = 'occaecati';
    $request->channelId = 'numquam';
    $request->format = ResponseFormatEnum::JSONP;

    $response = $sdk->publishing->publishMessagesToChannelRaw($request);

    if ($response->publishMessagesToChannelRaw2XXApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
