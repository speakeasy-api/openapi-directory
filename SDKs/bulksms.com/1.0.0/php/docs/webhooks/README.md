# webhooks

### Available Operations

* [deleteWebhooksId](#deletewebhooksid) - Delete a webhook
* [getWebhooks](#getwebhooks) - List webhooks
* [getWebhooksId](#getwebhooksid) - Read a webhook
* [postWebhooks](#postwebhooks) - Create a webhook
* [postWebhooksId](#postwebhooksid) - Update a webhook

## deleteWebhooksId

Delete a webhook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWebhooksIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWebhooksIdRequest();
    $request->id = '6fea7596-eb10-4faa-a235-2c5955907aff';

    $response = $sdk->webhooks->deleteWebhooksId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWebhooks

Contains a list of your webhooks

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWebhooksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetWebhooksSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->webhooks->getWebhooks($requestSecurity);

    if ($response->webhooks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWebhooksId

Read a webhook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWebhooksIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWebhooksIdRequest();
    $request->id = '1a3a2fa9-4677-4392-91aa-52c3f5ad019d';

    $response = $sdk->webhooks->getWebhooksId($request);

    if ($response->webhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postWebhooks

A webhook is an URL that you can register when you want the BulkSMS system to notify you about your messages.
You can register multiple webhooks, and each one will be called.  (Note: you can also use our [Web App](https://www.bulksms.com/account/#!/advanced-settings/webhooks) to manage your webhooks interactively.)  
If you want to be notified of `SENT` messages and `RECEIVED` messages you need to create two webhooks.


### Implementing your webhook

Code samples of Webhook implementations:
* [PHP](samples/webhook-php.html)

When you implement your webhook, there are a few rules to be aware of:
- Your webhook must process `POST` requests that contains an array of messages in the post body.  This input given to your webhook has the same structure as the output produced when you call [Retrieve Messages](#tag/Message%2Fpaths%2F~1messages%2Fget).
- When you register or update your webhook, the URL will be tested by invoking it with an empty array (`[]`). 
- It is possible for your webhook to receive multiple updates for the same message and status. It happens from time to time that the mobile network duplicates status updates.
- The order by which the webhook is invoked can be unexpected.  For example, if sender A replies before sender B, your webhook might get the reply from B first.
- The webhook is expected to comply with good practices with regard to the status code it responds with.
  - A status code in the `1xx` and `2xx` range is taken as an acknowledgement that the invocation was received and that the webhook host is ready to receive another.
  - A status code in the `4xx` range is taken as a permanent problem and indicates that the webhook cannot process the message. The specific message that caused the error will be discarded, but your webhook will be invoked again when another message becomes available.
  - Any other status code will be taken as a temporary problem; and indicates that the BulkSMS system should retry. The specific message that caused the error will not be discarded and your webhook will be invoked again with this message (see the subsequent section for more details on retry processing).
- Your webhook has to respond within `30` seconds.  If no response is given in this time, the invocation will be retried.
- It is good idea to add a secret to your URL in order to make it more secure. Here is an example:
`https://www.example.com/hook.php?secret=pass763265word`
- You can use a non-standard port if necessary, for example: `https://www.example.com:8321/hook.php?secret=pass763265word`
- Your webhook can be called from a dynamic range of IP addresses, and you should be prepared to accept that the source IP can change in the future, without notice. This practice has become common with cloud-hosted solutions. If this is an insurmountable problem for your organisation, please contact support.

### Testing and troubleshooting        

Use `curl` to test your webhook.  The command below is a template that shows how the BulkSMS system invokes your code. It must return `200` for your URL before you can register it as a webhook. 

```
curl -i -X POST 'YOUR_URL_HERE' --header 'Content-Type: application/json' --header 'User-Agent: BulkSMS Invoker' --data-raw '[]'
```

When a `200` is returned for an empty array, modify the template to post multiple messages by adding JSON between the square brackets ('[]').

After your webhook is successfully registered, you can send a message to `1111111` for an end-to-end test.  The delivery to this test number will fail, but your webhook will be invoked (and there are no charges).  

### The retry process

The process the BulkSMS systems follow to handle retries is roughly the following:
- The first retry is scheduled for 90 seconds into the future.
- After the first retry, subsequent failures will have longer delays, following this sequence - 3 minutes, 6 minutes, 12 minutes thereafter the message will be retried every 15 minutes for a 2 day period.
- When all retries fail, the message will be discarded.

### Problem reports via email

Your are strongly advised to provide an email address when you register your webhook.
A notice will be sent to this email address to keep you in the loop whenever there are problems with your webhook.
In order to prevent your inbox from being flooded, the system sends a notice about an observed error no more than once in a 24 hour period.

The following emails can be expected
 - A __message retrying__ email is sent after an invocation has failed with a retry-able error.  This email is an early warning, allowing you to investigate your systems.
 - A __message discarded__ email is sent after failure email is send when a message is discarded as a consequence of a non-retry-able error.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\WebhookEntry;
use \OpenAPI\OpenAPI\Models\Shared\WebhookEntryInvokeOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\WebhookEntryTriggerScopeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostWebhooksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebhookEntry();
    $request->active = true;
    $request->contactEmailAddress = 'tech_team@example.com';
    $request->invokeOption = WebhookEntryInvokeOptionEnum::MANY;
    $request->name = 'My MT Webhook';
    $request->onWebApp = true;
    $request->triggerScope = WebhookEntryTriggerScopeEnum::SENT;
    $request->url = 'https://www.example.com';

    $requestSecurity = new PostWebhooksSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->webhooks->postWebhooks($request, $requestSecurity);

    if ($response->webhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postWebhooksId

Update a webhook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostWebhooksIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\WebhookEntry;
use \OpenAPI\OpenAPI\Models\Shared\WebhookEntryInvokeOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\WebhookEntryTriggerScopeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostWebhooksIdRequest();
    $request->webhookEntry = new WebhookEntry();
    $request->webhookEntry->active = true;
    $request->webhookEntry->contactEmailAddress = 'tech_team@example.com';
    $request->webhookEntry->invokeOption = WebhookEntryInvokeOptionEnum::MANY;
    $request->webhookEntry->name = 'My MT Webhook';
    $request->webhookEntry->onWebApp = true;
    $request->webhookEntry->triggerScope = WebhookEntryTriggerScopeEnum::SENT;
    $request->webhookEntry->url = 'https://www.example.com';
    $request->id = 'a1ffe78f-097b-4007-8f15-471b5e6e13b9';

    $response = $sdk->webhooks->postWebhooksId($request);

    if ($response->webhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
