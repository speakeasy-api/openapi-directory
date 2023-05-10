# messages

### Available Operations

* [messagesAdd](#messagesadd) - Create Message
* [messagesAll](#messagesall) - List Messages
* [messagesDelete](#messagesdelete) - Delete Message
* [messagesOne](#messagesone) - Get Message
* [messagesUpdate](#messagesupdate) - Update Message

## messagesAdd

Create Message

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MessagesAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\MessageInput;
use \OpenAPI\OpenAPI\Models\Shared\MessageMessageTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\MessagesAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MessagesAddRequest();
    $request->messageInput = new MessageInput();
    $request->messageInput->body = 'Hi! How are you doing?';
    $request->messageInput->from = '+15017122661';
    $request->messageInput->messagingServiceId = '123456';
    $request->messageInput->reference = 'CUST001';
    $request->messageInput->scheduledAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-09-30T07:43:32.000Z');
    $request->messageInput->subject = 'Picture';
    $request->messageInput->to = '+15017122662';
    $request->messageInput->type = MessageMessageTypeEnum::SMS;
    $request->messageInput->webhookUrl = 'https://unify.apideck.com/webhook/webhooks/eyz329dkffdl4949/x/sms';
    $request->raw = false;
    $request->xApideckAppId = 'quibusdam';
    $request->xApideckConsumerId = 'unde';
    $request->xApideckServiceId = 'nulla';

    $requestSecurity = new MessagesAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->messages->messagesAdd($request, $requestSecurity);

    if ($response->createMessageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## messagesAll

List Messages

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MessagesAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\MessagesAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MessagesAllRequest();
    $request->cursor = 'corrupti';
    $request->fields = 'illum';
    $request->limit = 423655;
    $request->raw = false;
    $request->xApideckAppId = 'error';
    $request->xApideckConsumerId = 'deserunt';
    $request->xApideckServiceId = 'suscipit';

    $requestSecurity = new MessagesAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->messages->messagesAll($request, $requestSecurity);

    if ($response->getMessagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## messagesDelete

Delete Message

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MessagesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\MessagesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MessagesDeleteRequest();
    $request->id = '74e0f467-cc87-496e-9151-a05dfc2ddf7c';
    $request->raw = false;
    $request->xApideckAppId = 'quod';
    $request->xApideckConsumerId = 'esse';
    $request->xApideckServiceId = 'totam';

    $requestSecurity = new MessagesDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->messages->messagesDelete($request, $requestSecurity);

    if ($response->deleteMessageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## messagesOne

Get Message

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MessagesOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\MessagesOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MessagesOneRequest();
    $request->fields = 'porro';
    $request->id = 'a1ba928f-c816-4742-8b73-9205929396fe';
    $request->raw = false;
    $request->xApideckAppId = 'fuga';
    $request->xApideckConsumerId = 'in';
    $request->xApideckServiceId = 'corporis';

    $requestSecurity = new MessagesOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->messages->messagesOne($request, $requestSecurity);

    if ($response->getMessageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## messagesUpdate

Update Message

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MessagesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\MessageInput;
use \OpenAPI\OpenAPI\Models\Shared\MessageMessageTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\MessagesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MessagesUpdateRequest();
    $request->messageInput = new MessageInput();
    $request->messageInput->body = 'Hi! How are you doing?';
    $request->messageInput->from = '+15017122661';
    $request->messageInput->messagingServiceId = '123456';
    $request->messageInput->reference = 'CUST001';
    $request->messageInput->scheduledAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-09-30T07:43:32.000Z');
    $request->messageInput->subject = 'Picture';
    $request->messageInput->to = '+15017122662';
    $request->messageInput->type = MessageMessageTypeEnum::SMS;
    $request->messageInput->webhookUrl = 'https://unify.apideck.com/webhook/webhooks/eyz329dkffdl4949/x/sms';
    $request->id = '96eb10fa-aa23-452c-9955-907aff1a3a2f';
    $request->raw = false;
    $request->xApideckAppId = 'mollitia';
    $request->xApideckConsumerId = 'occaecati';
    $request->xApideckServiceId = 'numquam';

    $requestSecurity = new MessagesUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->messages->messagesUpdate($request, $requestSecurity);

    if ($response->updateMessageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
