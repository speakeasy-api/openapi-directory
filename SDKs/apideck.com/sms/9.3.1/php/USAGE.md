<!-- Start SDK Example Usage -->
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
    $request->xApideckAppId = 'corrupti';
    $request->xApideckConsumerId = 'provident';
    $request->xApideckServiceId = 'distinctio';

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
<!-- End SDK Example Usage -->